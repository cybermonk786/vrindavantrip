"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Spiritual Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-105 sm:h-120 w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
                alt="Lord Krishna spiritual depiction in Vrindavan"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-semibold text-primaryNavy uppercase tracking-widest block mb-2">
                — About Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-textDark leading-tight">
                Your Trusted Travel Partner for Divine Journeys
              </h2>
            </div>

            <p className="text-mutedText leading-relaxed">
              {siteConfig.name} is a dedicated travel company offering well-planned tour packages to Mathura, Vrindavan, Gokul, Govardhan, Barsana, Nandgaon and Agra. Our aim is to provide you with a safe, comfortable and spiritual travel experience.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-lightBlue/40 p-4 rounded-xl border border-borderLight">
                <h3 className="font-bold text-textDark text-sm mb-1">Safe Travel</h3>
                <p className="text-xs text-mutedText">Verified drivers & AC cabs</p>
              </div>
              <div className="bg-lightBlue/40 p-4 rounded-xl border border-borderLight">
                <h3 className="font-bold text-textDark text-sm mb-1">Spiritual Experience</h3>
                <p className="text-xs text-mutedText">Well-curated temple darshans</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-goldenYellow text-darkNavy px-7 py-3.5 rounded-full font-bold text-base hover:bg-amber-400 transition-all shadow-md"
              >
                <span>Read More</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}