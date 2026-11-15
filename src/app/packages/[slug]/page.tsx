'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const packagesData: Record<string, { 
  title: string; 
  duration: string; 
  price: string; 
  desc: string; 
  image: string;
  inclusions: string[];
}> = {
  'same-day-gokul-mathura-vrindavan': {
    title: 'Same Day Gokul, Mathura & Vrindavan Tour Package',
    duration: '1 DAY / 1 NIGHT',
    price: '₹1,499',
    desc: 'Experience the divine essence of Lord Krishna\'s childhood abodes with our same-day private tour covering Gokul, Mathura birthplace, and Vrindavan temples.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1200',
    inclusions: [
      'Private AC Car (Sedan/SUV)',
      'Experienced Spiritual Driver',
      'All Tolls & Parking',
      'Sightseeing Guidance'
    ]
  },
  'mathura-vrindavan-tour': {
    title: 'Mathura & Vrindavan Heritage Tour Package',
    duration: '1 DAY / 1 NIGHT',
    price: '₹1,299',
    desc: 'Discover the sacred temples, rich history, and vibrant culture of Mathura and Vrindavan with comfortable private transit.',
    image: 'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&q=80&w=1200',
    inclusions: [
      'Private AC Car (Sedan/SUV)',
      'Experienced Spiritual Driver',
      'All Tolls & Parking',
      'Sightseeing Guidance'
    ]
  }
};

export default function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  
  const pkg = packagesData[slug] || {
    title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    duration: '1 DAY / 1 NIGHT',
    price: '₹1,499',
    desc: 'Experience an unforgettable spiritual journey through the sacred Braj region with expert guides and comfortable private transit.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1200',
    inclusions: [
      'Private AC Car (Sedan/SUV)',
      'Experienced Spiritual Driver',
      'All Tolls & Parking',
      'Sightseeing Guidance'
    ]
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packageTitle: pkg.title,
          duration: pkg.duration,
          price: pkg.price,
          fullName: fullName.trim(),
          phone,
          travelDate,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send booking request.');
      }

      setFeedback({
        type: 'success',
        text: 'Booking request submitted successfully! Our team will call you shortly.',
      });
      setFullName('');
      setPhone('');
      setTravelDate('');
    } catch (err) {
      setFeedback({
        type: 'error',
        text: err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-50 px-4 sm:px-6 py-8">
      <div className="max-w-6xl mx-auto">
        
        <Link 
          href="/packages" 
          className="text-xs sm:text-sm text-neutral-600 hover:text-neutral-900 inline-flex items-center gap-1 mb-6 font-medium transition-colors"
        >
          ← Back to Packages
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 overflow-hidden p-3 sm:p-4">
              <div className="relative h-64 sm:h-96 w-full rounded-xl overflow-hidden bg-neutral-100">
                <Image 
                  src={pkg.image} 
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-neutral-900 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm">
                  {pkg.title}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 p-6 sm:p-8 space-y-4">
              <div>
                <span className="inline-block bg-sky-100 text-sky-800 text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider mb-3">
                  {pkg.duration}
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                  {pkg.title}
                </h1>
                <div className="mt-2 text-xl sm:text-2xl font-bold text-amber-600">
                  {pkg.price} <span className="text-xs font-normal text-neutral-500">/ per package</span>
                </div>
              </div>

              <div>
                <h2 className="text-base font-bold text-neutral-900 mb-1">Overview</h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  {pkg.desc}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 p-6 sm:p-8 space-y-4">
              <h2 className="text-base font-bold text-neutral-900">Package Inclusions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.inclusions.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 bg-neutral-50 border border-neutral-100 p-3.5 rounded-xl text-neutral-700 text-sm font-medium"
                  >
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Booking Card */}
          <div className="lg:col-span-1 lg:sticky lg:top-6">
            <div className="bg-white rounded-2xl shadow-lg border border-neutral-200/80 p-6 space-y-5">
              
              <h2 className="text-lg font-bold text-neutral-900 tracking-tight">
                Book This Package
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider">
                    Your Full Name
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Enter name" 
                      required
                      minLength={4}
                      maxLength={15}
                      pattern="[A-Za-z ]{4,15}"
                      title="Only alphabets are allowed (4 to 15 characters)."
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value.replace(/[^A-Za-z ]/g, ''))}
                      className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-neutral-500 select-none">
                      +91
                    </span>
                    <input 
                      type="tel" 
                      placeholder="9876543210" 
                      required
                      minLength={10}
                      maxLength={10}
                      pattern="[6-9][0-9]{9}"
                      title="Please enter a valid 10-digit mobile number."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                      className="w-full bg-white border border-neutral-300 rounded-xl pl-12 pr-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider">
                    Travel Date
                  </label>
                  <div className="relative">
                    <input 
                      type="date" 
                      required
                      min={new Date().toLocaleDateString('en-CA')}
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      onKeyDown={(e) => e.preventDefault()}
                      onClick={(e) => e.currentTarget.showPicker?.()}
                      className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-2.5 text-sm text-neutral-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-400 hover:bg-amber-500 disabled:opacity-60 active:scale-[0.99] text-neutral-900 font-bold py-3 px-4 rounded-xl shadow-sm transition-all text-sm tracking-wide mt-2 cursor-pointer"
                >
                  {isSubmitting ? 'Sending Request...' : 'Confirm Booking Request'}
                </button>

                {feedback && (
                  <div
                    className={`text-xs rounded-xl px-3.5 py-2.5 font-medium border ${
                      feedback.type === 'success'
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : 'bg-red-50 text-red-800 border-red-200'
                    }`}
                  >
                    {feedback.text}
                  </div>
                )}

              </form>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}