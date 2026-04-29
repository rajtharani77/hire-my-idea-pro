import React from 'react';

export default function PropertyMockup() {
  return (
    <div className="relative w-full max-w-[320px] md:max-w-[400px] mt-8 mx-auto translate-y-12 transition-transform hover:translate-y-8 duration-700 ease-out z-20">
      {/* Phone Frame */}
      <div className="bg-white p-3 rounded-[48px] shadow-2xl border-[8px] border-surface-dark relative overflow-hidden h-[500px]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-surface-dark rounded-b-3xl z-30"></div>
        
        {/* Inner Content / Screen */}
        <div className="w-full h-full bg-gray-50 rounded-[32px] overflow-hidden relative">
          <img 
            src="/home-listing.png" 
            alt="Real Estate App Interface" 
            className="w-full h-full object-cover object-top"
          />
          {/* Fallback styling just in case the image doesn't load or looks slightly off */}
          <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-left">
            <h3 className="text-white text-2xl font-bold mb-1">$1,250,000</h3>
            <p className="text-gray-200 text-sm font-medium">123 Horizon Ave, Beverly Hills</p>
            <div className="flex items-center gap-4 mt-3 text-white text-sm font-semibold">
              <span>4 Beds</span>
              <span>•</span>
              <span>3 Baths</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
