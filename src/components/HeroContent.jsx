import React from 'react';
import { Home } from 'lucide-react';

export default function HeroContent() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl md:text-[80px] leading-[1.05] font-display font-bold text-[#2C3B32] tracking-tight max-w-[800px] mb-6">
        The Smartest Way to Find Your Home
      </h1>
      
      <p className="text-[17px] md:text-[20px] leading-relaxed text-gray-500 max-w-[580px] mb-10 font-medium">
        Use the Haven platform to instantly discover premium listings, 
        match with top local agents, and navigate the housing market 
        with absolute confidence.
      </p>

      <button className="bg-brand-900 hover:bg-brand-800 text-white px-8 py-4 rounded-full text-[17px] font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-3">
        <Home className="w-5 h-5" />
        Explore Listings
      </button>
    </div>
  );
}
