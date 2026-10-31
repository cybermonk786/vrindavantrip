import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Travel Blog & Guides | Vrindavan Trip',
  description: 'Read expert guides, temple timings, and travel tips for your Mathura Vrindavan pilgrimage.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-primaryNavy uppercase tracking-widest block mb-2">
            Travel Articles
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-textDark mb-3">
            Pilgrimage Blog & Guides
          </h1>
          <p className="text-mutedText">
            Everything you need to know before visiting Mathura and Vrindavan.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-lightBlue/30 p-6 sm:p-8 rounded-2xl border border-borderLight">
            <span className="text-xs font-semibold text-primaryNavy block mb-2">Temple Guide • October 2026</span>
            <h2 className="text-xl font-bold text-textDark mb-3">
              Top 5 Temples You Must Visit in Vrindavan During Your First Trip
            </h2>
            <p className="text-mutedText text-sm mb-4">
              Plan your darshan efficiently with our guide covering Banke Bihari, Prem Mandir, ISKCON, and more.
            </p>
            <span className="text-primaryNavy font-bold text-sm hover:underline cursor-pointer">Read Full Article →</span>
          </div>

          <div className="bg-lightBlue/30 p-6 sm:p-8 rounded-2xl border border-borderLight">
            <span className="text-xs font-semibold text-primaryNavy block mb-2">Travel Tips • September 2026</span>
            <h2 className="text-xl font-bold text-textDark mb-3">
              Best Time to Visit Mathura & Vrindavan for Festivals like Holi & Janmashtami
            </h2>
            <p className="text-mutedText text-sm mb-4">
              Discover weather patterns, peak festival seasons, and how to book comfortable transport in advance.
            </p>
            <span className="text-primaryNavy font-bold text-sm hover:underline cursor-pointer">Read Full Article →</span>
          </div>
        </div>
      </div>
    </div>
  );
}
