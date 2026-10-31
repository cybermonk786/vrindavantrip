import React from 'react';
import { Feather, Users, Package, Award } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export default function BrandQuote() {
  return (
    <section className="py-16 bg-lightBlue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Quote Card */}
          <div className="lg:col-span-6 bg-white p-10 rounded-3xl border border-borderLight shadow-sm relative overflow-hidden">
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-lightBlue flex items-center justify-center">
              <Feather className="w-6 h-6 text-goldenYellow fill-goldenYellow" />
            </div>
            <blockquote className="text-3xl sm:text-4xl font-serif font-bold text-primaryNavy italic mb-4">
              &ldquo;Har Safar <br />
              bharose par&rdquo;
            </blockquote>
            <p className="text-sm text-mutedText font-medium">
              — {siteConfig.name} Commitment
            </p>
          </div>

          {/* Brand Statistics */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-borderLight shadow-sm text-center">
              <div className="w-10 h-10 rounded-full bg-lightBlue mx-auto flex items-center justify-center mb-3 text-primaryNavy">
                <Users className="w-5 h-5 text-goldenYellow" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-primaryNavy block mb-1">10K+</span>
              <span className="text-xs text-mutedText font-medium">Happy Travelers</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-borderLight shadow-sm text-center">
              <div className="w-10 h-10 rounded-full bg-lightBlue mx-auto flex items-center justify-center mb-3 text-primaryNavy">
                <Package className="w-5 h-5 text-goldenYellow" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-primaryNavy block mb-1">50+</span>
              <span className="text-xs text-mutedText font-medium">Tour Packages</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-borderLight shadow-sm text-center">
              <div className="w-10 h-10 rounded-full bg-lightBlue mx-auto flex items-center justify-center mb-3 text-primaryNavy">
                <Award className="w-5 h-5 text-goldenYellow" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-primaryNavy block mb-1">100%</span>
              <span className="text-xs text-mutedText font-medium">Customer Satisfaction</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
