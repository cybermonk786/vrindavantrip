import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-darkNavy text-white overflow-hidden min-h-150 lg:min-h-170 flex items-center">
      {/* Background Image with optimized loading & LCP optimization */}
      <div className="absolute inset-0 z-0 opacity-40">
        {/* Performance:
            next/image automatically optimizes image delivery and helps
            reduce unnecessary image payloads, improving page loading
            performance and Core Web Vitals (LCP). */}
 <Image
  src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1920"
  alt="Prem Mandir in Vrindavan illuminated at sunset"
  fill
  priority
  sizes="100vw"
  className="object-cover object-center"
/>
        <div className="absolute inset-0 bg-linear-to-r from-darkNavy via-darkNavy/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">

<div>
  test
</div>

        <div className="max-w-2xl">
          <span className="inline-block text-goldenYellow text-sm font-semibold tracking-wider uppercase mb-3 bg-white/10 px-3 py-1 rounded-full border border-goldenYellow/30">
            Welcome to Vrindavan Trip
          </span>
                  

          
          {/* H1 Heading for optimal SEO structure */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-white">
            Divine Journeys <br />
            To Mathura, Vrindavan <br />
            <span className="text-goldenYellow">& Beyond</span>
          </h1>

          <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-xl">
            Explore the holy land of Lord Krishna with our comfortable and well-planned tour packages.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 bg-goldenYellow text-darkNavy px-7 py-3.5 rounded-full font-bold text-base hover:bg-amber-400 transition-all shadow-lg hover:-translate-y-0.5"
            >
              <span>View Tour Packages</span>
              <ArrowRight className="w-5 h-5" />










            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
