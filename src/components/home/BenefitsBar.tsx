import React from 'react';
import { Shield, Car, Calendar, Headphones } from 'lucide-react';
import { benefitsData } from '@/lib/constants';

export default function BenefitsBar() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Shield':
        return <Shield className="w-6 h-6 text-goldenYellow" />;
      case 'Car':
        return <Car className="w-6 h-6 text-goldenYellow" />;
      case 'Map':
        return <Calendar className="w-6 h-6 text-goldenYellow" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-goldenYellow" />;
      default:
        return <Shield className="w-6 h-6 text-goldenYellow" />;
    }
  };

  return (
  <section className="bg-[#f3f3ee] border-b border-white shadow-sm relative z-20">
  {/* <section className="bg-white border-b border-white shadow-sm relative z-20 "> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-lightBlue/50 border border-borderLight/60">
              <div className="w-12 h-12 rounded-full bg-primaryNavy flex items-center justify-center shrink-0">
                {getIcon(item.iconName)}
              </div>
              <div>
                <h3 className="text-sm font-bold text-textDark">{item.title}</h3>
                <p className="text-xs text-mutedText mt-0.5">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
