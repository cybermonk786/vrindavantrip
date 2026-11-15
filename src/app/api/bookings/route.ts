// src/app/api/bookings/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiter (resets on server restart; use Upstash Redis for multi-instance prod)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 3;

  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }
  if (entry.count >= maxRequests) return true;
  entry.count += 1;
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    // 1. Rate Limit Check
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a few minutes before trying again.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { packageTitle, duration, price, fullName, phone, travelDate, website } = body;

    // 2. Honeypot Check (if hidden 'website' field is filled, it's a bot)
    if (website) {
      return NextResponse.json({ success: true }, { status: 200 }); // Silently drop bot request
    }

    const trimmedName = typeof fullName === 'string' ? fullName.trim() : '';
    const cleanPhone = typeof phone === 'string' ? phone.trim() : '';

    // 3. Strict Validation (including date format & future-date check)
    const today = new Date().toLocaleDateString('en-CA');
    const isValidDate = typeof travelDate === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(travelDate) && travelDate >= today;

    if (
      !trimmedName ||
      !/^[A-Za-z ]{4,15}$/.test(trimmedName) ||
      !cleanPhone ||
      !/^[6-9][0-9]{9}$/.test(cleanPhone) ||
      !isValidDate
    ) {
      return NextResponse.json(
        { error: 'Please provide a valid name, 10-digit mobile number, and valid future travel date.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Vrindavan Trip Bookings" <${process.env.SMTP_USER}>`,
      to: process.env.BOOKING_RECEIVER_EMAIL || 'vrindavantrip0101@gmail.com',
      subject: `New Booking: ${packageTitle} — ${travelDate}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 540px; border: 1px solid #e5e5e5; border-radius: 12px; padding: 24px;">
          <h2 style="margin: 0 0 16px 0; color: #171717;">New Package Booking Request</h2>
          <p><strong>Package:</strong> ${escapeHtml(String(packageTitle))} (${escapeHtml(String(duration))})</p>
          <p><strong>Price:</strong> ${escapeHtml(String(price))}</p>
          <p><strong>Customer Name:</strong> ${escapeHtml(trimmedName)}</p>
          <p><strong>Phone:</strong> +91 ${escapeHtml(cleanPhone)}</p>
          <p><strong>Travel Date:</strong> ${escapeHtml(travelDate)}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Booking API Error:', error);
    return NextResponse.json({ error: 'Unable to submit booking right now.' }, { status: 500 });
  }
}