"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, Feather } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-borderLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-lightBlue flex items-center justify-center text-primaryNavy border border-goldenYellow shadow-sm">
              <Feather className="w-5 h-5 text-goldenYellow fill-goldenYellow" />
            </div>
            <div>
              <span className="text-xl font-bold text-primaryNavy tracking-tight block">
                {siteConfig.name}
              </span>
              <span className="text-xs text-mutedText font-medium tracking-wide block">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          {/* Navigation - SEO + Accessibility:
              Using semantic <nav> and normal Next.js <Link> elements makes
              important pages easy for both search engines and keyboard users
              to discover and navigate. */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold text-textDark hover:text-primaryNavy transition-colors">
              Home
            </Link>
            <Link href="/packages" className="text-sm font-semibold text-textDark hover:text-primaryNavy transition-colors">
              Packages
            </Link>
            <Link href="/about" className="text-sm font-semibold text-textDark hover:text-primaryNavy transition-colors">
              About Us
            </Link>
            <Link href="/gallery" className="text-sm font-semibold text-textDark hover:text-primaryNavy transition-colors">
              Gallery
            </Link>
            <Link href="/blog" className="text-sm font-semibold text-textDark hover:text-primaryNavy transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-textDark hover:text-primaryNavy transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Side: Call Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-2 bg-primaryNavy text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-darkNavy transition-all shadow-md"
              aria-label={`Call us at ${siteConfig.phone}`}
            >
              <Phone className="w-4 h-4 text-goldenYellow" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-textDark hover:bg-lightBlue focus:outline-none focus:ring-2 focus:ring-primaryNavy"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-borderLight px-4 pt-2 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-textDark hover:bg-lightBlue"
          >
            Home
          </Link>
          <Link
            href="/packages"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-textDark hover:bg-lightBlue"
          >
            Packages
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-textDark hover:bg-lightBlue"
          >
            About Us
          </Link>
          <Link
            href="/gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-textDark hover:bg-lightBlue"
          >
            Gallery
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-textDark hover:bg-lightBlue"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-textDark hover:bg-lightBlue"
          >
            Contact
          </Link>
          <div className="pt-2">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 bg-primaryNavy text-white px-4 py-3 rounded-xl text-sm font-medium"
            >
              <Phone className="w-4 h-4 text-goldenYellow" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
