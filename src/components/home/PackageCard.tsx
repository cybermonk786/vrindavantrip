import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Car, ArrowRight } from 'lucide-react';
import { TourPackage } from '@/lib/constants';

interface PackageCardProps {
  pkg: TourPackage;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-borderLight overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
      {/* Image Container */}
      <div className="relative h-52 w-full overflow-hidden bg-gray-100">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-primaryNavy text-white text-xs font-semibold px-3 py-1 rounded-full">
          {pkg.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        {/* SEO:x`
            Using a real anchor/link for each package gives search engines
            a crawlable path to the package detail page and creates a clear
            internal linking structure. */}
        <Link href={`/packages/${pkg.slug}`}>
          <h3 className="text-lg font-bold text-textDark hover:text-primaryNavy transition-colors line-clamp-2 mb-3">
            {pkg.title}
          </h3>
        </Link>

        <div className="space-y-2 mb-6 text-sm text-mutedText">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-goldenYellow shrink-0" />
            <span>{pkg.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Car className="w-4 h-4 text-goldenYellow shrink-0" />
            <span>{pkg.vehicle}</span>
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-borderLight flex items-center justify-between">
          <div>
            <span className="text-xs text-mutedText block">Starting from</span>
            <span className="text-lg font-extrabold text-primaryNavy">{pkg.price}</span>
          </div>
          
          <Link
            href={`/packages/${pkg.slug}`}
            className="inline-flex items-center gap-1.5 bg-goldenYellow text-darkNavy px-4 py-2 rounded-xl text-sm font-bold hover:bg-amber-400 transition-colors"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
