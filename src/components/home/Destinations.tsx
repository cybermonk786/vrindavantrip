import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { destinationsData } from '@/lib/constants';

export default function Destinations() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs font-semibold text-primaryNavy uppercase tracking-widest block mb-2">
            — Top Destinations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-textDark">
            Top Destinations
          </h2>
          <p className="text-mutedText mt-2">
            Explore the most spiritual and beautiful places
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {destinationsData.map((dest) => (
            <Link
              key={dest.id}
              href={`/destinations/${dest.slug}`}
              className="group bg-white rounded-2xl border border-borderLight overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative h-36 w-full overflow-hidden bg-gray-100">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center grow flex items-center justify-center">
                <h3 className="text-sm font-bold text-textDark group-hover:text-primaryNavy transition-colors">
                  {dest.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
