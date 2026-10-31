import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { packagesData } from '@/lib/constants';
import PackageCard from './PackageCard';

export default function PopularPackages() {
  return (
    <section className="py-16 bg-lightBlue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold text-primaryNavy uppercase tracking-widest block mb-2">
              Featured Itineraries
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-textDark">
              Popular Tour Packages
            </h2>
            <p className="text-mutedText mt-2">
              Choose from our most loved pilgrimage tour packages
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 bg-white border border-borderLight text-primaryNavy px-5 py-2.5 rounded-full text-sm font-bold hover:bg-primaryNavy hover:text-white transition-all shadow-sm"
            >
              <span>View All Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packagesData.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
