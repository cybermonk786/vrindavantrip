import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/lib/site-config';

export const metadata = {
  title: 'About Us | Vrindavan Trip',
  description: 'Learn more about Vrindavan Trip, your dedicated pilgrimage tour partner in Mathura and Vrindavan.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-primaryNavy uppercase tracking-widest block mb-2">
            About Our Company
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-textDark mb-4">
            Your Trusted Travel Partner for Divine Journeys
          </h1>
          <p className="text-mutedText">
            Har Safar bharose par — Our motto and commitment to every pilgrim.
          </p>
        </div>

        <div className="prose max-w-none text-mutedText space-y-6 leading-relaxed">
          <p>
            <strong>{siteConfig.name}</strong> is a premier travel and pilgrimage service provider based in Uttar Pradesh, specializing in tours across Mathura, Vrindavan, Gokul, Govardhan, Barsana, Nandgaon, and Agra.
          </p>
          <p>
            We understand that a journey to Braj Bhoomi is not merely a vacation, but a sacred pilgrimage of the soul. Our mission is to remove all logistical friction so you can focus entirely on your devotion and spiritual connection.
          </p>
          <h2 className="text-2xl font-bold text-textDark pt-4">Why Pilgrims Trust Us</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Private air-conditioned vehicles with experienced, polite local drivers.</li>
            <li>Well-planned itineraries ensuring unhurried darshans at Banke Bihari, Prem Mandir, and ISKCON.</li>
            <li>Transparent pricing with zero hidden charges.</li>
            <li>24/7 customer assistance throughout your yatra.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
