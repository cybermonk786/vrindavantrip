"use client";
import React from 'react';
import Hero from '@/components/home/Hero';
import BenefitsBar from '@/components/home/BenefitsBar';
import PopularPackages from '@/components/home/PopularPackages';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import AboutPreview from '@/components/home/AboutPreview';
import BrandQuote from '@/components/home/BrandQuote';
import Destinations from '@/components/home/Destinations';
import Newsletter from '@/components/home/Newsletter';

export default function HomePage() {
  return (
  
    <div className="flex flex-col">
      <Hero />
      <BenefitsBar />
      <PopularPackages />
      <WhyChooseUs />
      <AboutPreview />
      <BrandQuote />
      <Destinations />
      <Newsletter />
    </div>
  );
}
