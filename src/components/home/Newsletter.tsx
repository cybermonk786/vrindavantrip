"use client";
import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-darkNavy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primaryNavy/60 rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white">
              Stay Updated
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Get the latest tour packages, offers and travel tips directly in your inbox.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {submitted ? (
              <div className="bg-goldenYellow text-darkNavy px-6 py-3.5 rounded-xl font-bold text-sm text-center">
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="newsletter-email" className="sr-only">Enter your email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="bg-white text-textDark px-5 py-3.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-goldenYellow w-full sm:w-80"
                />
                <button
                  type="submit"
                  className="bg-goldenYellow text-darkNavy px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-amber-400 transition-colors shrink-0 shadow-md"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
