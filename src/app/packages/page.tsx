import React from 'react';
import Link from 'next/link';
import { packagesData } from '@/lib/constants';
import PackageCard from '@/components/home/PackageCard';
import { Metadata } from 'next'; // or standard next

export const metadata: Metadata = {
  // SEO:
  // Title and description for packages listing page.
  title: 'Pilgrimage Tour Packages | Mathura Vrindavan Trip',
  description: 'Explore our complete list of Mathura, Vrindavan, Gokul, Govardhan and Agra tour packages with private AC vehicles and expert guides.',
  alternates: {
    canonical: '/packages',
  },
};

export default function PackagesPage() {
  return (
    <div className="py-12 bg-lightBlue/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-primaryNavy uppercase tracking-widest block mb-2">
            All Itineraries
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-textDark mb-3">
            Our Pilgrimage Tour Packages
          </h1>
          <p className="text-mutedText">
            Handcrafted spiritual journeys designed for comfort, devotion, and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packagesData.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
}
