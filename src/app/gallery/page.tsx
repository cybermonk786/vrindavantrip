import React from 'react';
import Image from 'next/image';
import { destinationsData } from '@/lib/constants';

export const metadata = {
  title: 'Photo Gallery | Vrindavan Trip',
  description: 'Explore breathtaking photos of temples, Ghats, and sacred shrines in Mathura and Vrindavan.',
  alternates: {
    canonical: '/gallery',
  },
};

export default function GalleryPage() {
  return (
    <div className="py-16 bg-lightBlue/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-primaryNavy uppercase tracking-widest block mb-2">
            Visual Memories
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-textDark mb-3">
            Spiritual Gallery
          </h1>
          <p className="text-mutedText">
            Glimpses of divine beauty across Braj Bhoomi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsData.map((dest) => (
            <div key={dest.id} className="bg-white rounded-2xl overflow-hidden border border-borderLight shadow-sm">
              <div className="relative h-64 w-full">
                <Image src={dest.image} alt={dest.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-textDark text-lg">{dest.name}</h3>
                <p className="text-sm text-mutedText mt-1">{dest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
