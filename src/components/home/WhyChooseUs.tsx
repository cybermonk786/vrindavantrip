import React from 'react';
import { ShieldCheck, Car, UserCheck, Sliders } from 'lucide-react';
import { whyChooseUsData } from '@/lib/constants';

export default function WhyChooseUs() {
  const getIcon = (iconStr: string) => {
    switch (iconStr) {
      case 'ShieldCheck': return <ShieldCheck className="w-7 h-7 text-primaryNavy" />;
      case 'Car': return <Car className="w-7 h-7 text-primaryNavy" />;
      case 'UserCheck': return <UserCheck className="w-7 h-7 text-primaryNavy" />;
      case 'Sliders': return <Sliders className="w-7 h-7 text-primaryNavy" />;
      default: return <ShieldCheck className="w-7 h-7 text-primaryNavy" />;
    }
  };

  return (
    <section className="py-16 bg-lightBlue/60 border-y border-borderLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-textDark mb-3">
            Why Choose Vrindavan Trip?
          </h2>
          <p className="text-mutedText">
            Your trusted travel partner for a memorable pilgrimage experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUsData.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-borderLight shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-lightBlue flex items-center justify-center mb-5 border border-goldenYellow/40">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-lg font-bold text-textDark mb-2">{item.title}</h3>
              <p className="text-sm text-mutedText leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
