import React from 'react';

export default function CTAImageBanner() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 my-16 md:my-24">
      <div className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-gray-900 shadow-2xl">
        
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000" 
            alt="Family in new home" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute -left-10 -top-10 w-64 h-64 opacity-30 text-white" viewBox="0 0 200 200" fill="none">
            <path d="M0,100 C50,100 100,50 100,0" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M-20,120 C60,120 120,60 120,-20" stroke="currentColor" strokeWidth="1" />
          </svg>
        
          <svg className="absolute right-0 bottom-0 w-80 h-80 opacity-40 text-white translate-x-10 translate-y-10" viewBox="0 0 200 200" fill="none">
            <path d="M100,20 L180,90 L180,180 L20,180 L20,90 Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M140,90 L140,180 M60,90 L60,180" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="relative z-10 w-full h-full p-10 md:p-16 lg:p-24 flex flex-col justify-center">
          <div className="max-w-xl text-left flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Explore homes with confidence
            </h2>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-white/90 text-lg">
                <svg className="w-6 h-6 mr-3 text-white shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verified property insights
              </li>
              <li className="flex items-center text-white/90 text-lg">
                <svg className="w-6 h-6 mr-3 text-white shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Neighborhood clarity
              </li>
              <li className="flex items-center text-white/90 text-lg">
                <svg className="w-6 h-6 mr-3 text-white shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Trusted agent support
              </li>
            </ul>

            <a 
              href="#" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1F3824] rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Browse Listings
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
