import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export const metadata = {
  title: 'Contact Us | Vrindavan Trip',
  description: 'Get in touch with Vrindavan Trip for custom tour packages and bookings.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="py-16 bg-lightBlue/30 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-primaryNavy uppercase tracking-widest block mb-2">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-textDark mb-3">
            Contact Vrindavan Trip
          </h1>
          <p className="text-mutedText">
            We are here to assist you with bookings, customized itineraries, and inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-borderLight text-center">
            <div className="w-12 h-12 rounded-full bg-lightBlue mx-auto flex items-center justify-center text-primaryNavy mb-4">
              <Phone className="w-5 h-5 text-goldenYellow" />
            </div>
            <h3 className="font-bold text-textDark mb-1">Phone Number</h3>
            <a href={`tel:${siteConfig.phoneRaw}`} className="text-sm text-primaryNavy hover:underline">
              {siteConfig.phone}
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-borderLight text-center">
            <div className="w-12 h-12 rounded-full bg-lightBlue mx-auto flex items-center justify-center text-primaryNavy mb-4">
              <Mail className="w-5 h-5 text-goldenYellow" />
            </div>
            <h3 className="font-bold text-textDark mb-1">Email Address</h3>
            <a href={`mailto:${siteConfig.email}`} className="text-sm text-primaryNavy hover:underline">
              {siteConfig.email}
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-borderLight text-center">
            <div className="w-12 h-12 rounded-full bg-lightBlue mx-auto flex items-center justify-center text-primaryNavy mb-4">
              <MapPin className="w-5 h-5 text-goldenYellow" />
            </div>
            <h3 className="font-bold text-textDark mb-1">Office Location</h3>
            <p className="text-sm text-mutedText">
              {siteConfig.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
