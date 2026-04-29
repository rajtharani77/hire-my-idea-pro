import React, { useState, useEffect } from 'react';
import { Heart, Share, Star, ShieldCheck, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const listings = [
  {
    id: 1,
    title: "The Oakwood Villa",
    brand: "Haven Luxe Listings",
    score: "98/100",
    status: "Exceptional",
    statusColor: "text-emerald-600",
    statusBg: "bg-emerald-500",
    description: "This stunning property scores incredibly high due to its modern open-concept layout and premium location. Perfect for families looking for quiet, tree-lined streets without sacrificing proximity to top-rated schools.",
    breakdown: "Smart Home Tech",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Skyline Penthouse",
    brand: "Downtown Real Estate Group",
    score: "95/100",
    status: "Excellent",
    statusColor: "text-emerald-600",
    statusBg: "bg-emerald-500",
    description: "An incredible high-rise offering panoramic city views. The high score reflects the pristine interior finishes and the exclusive rooftop terrace. A great choice for urban professionals.",
    breakdown: "Floor-to-ceiling windows",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Coastal Estate",
    brand: "Pacific Coast Properties",
    score: "100/100",
    status: "Perfect",
    statusColor: "text-emerald-600",
    statusBg: "bg-emerald-500",
    description: "A rare flawless rating! This beachfront estate features sustainable materials, private beach access, and an award-winning architectural design that seamlessly blends indoor and outdoor living.",
    breakdown: "Ocean Frontage",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Urban Loft",
    brand: "City Center Associates",
    score: "88/100",
    status: "Great",
    statusColor: "text-green-600",
    statusBg: "bg-green-500",
    description: "This loft offers a spacious, industrial-chic vibe. While it lacks private outdoor space, it makes up for it with high ceilings, exposed brick walls, and vibrant neighborhood amenities.",
    breakdown: "Historic Building",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800",
  }
];

export default function CarouselShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % listings.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const activeListing = listings[activeIndex];

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-12 mb-20 flex flex-col items-center justify-center overflow-hidden min-h-[850px] pointer-events-none">
      
      {/* Section Heading & Subtitle */}
      <div className="text-center z-10 mb-12 pointer-events-auto relative">
        <h2 className="text-[32px] md:text-[40px] leading-tight font-display font-bold text-gray-900 mb-4 max-w-2xl mx-auto">
          Expert-Backed Property Insights
        </h2>
      </div>

      <div className="relative flex justify-center items-start w-full max-w-4xl h-[700px]">
        
        {/* The Image Track (Behind the phone border) */}
        <div className="absolute top-[80px] left-0 right-0 h-[200px] flex justify-center items-center z-10">
          {listings.map((item, index) => {
            let offset = index - activeIndex;
            const total = listings.length;
            if (offset < -total / 2) offset += total;
            if (offset > total / 2) offset -= total;

            const isCenter = offset === 0;
            let transform = 'translateX(0) scale(1)';
            let opacity = 1;
            let zIndex = 30;

            if (offset === -2 || offset === 2) { 
              transform = `translateX(${offset > 0 ? 340 : -340}px) scale(0.6)`; 
              opacity = 0.3; 
              zIndex = 10; 
            } else if (offset === -1 || offset === 1) { 
              transform = `translateX(${offset > 0 ? 180 : -180}px) scale(0.8)`; 
              opacity = 0.5; 
              zIndex = 20; 
            }

            return (
              <div 
                key={item.id}
                className="absolute transition-all duration-[700ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ transform, zIndex, opacity }}
              >
                <div className={`w-[160px] h-[160px] rounded-[32px] overflow-hidden shadow-md transition-all duration-[700ms] ${isCenter ? 'ring-4 ring-white shadow-xl' : ''}`}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  {!isCenter && <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>}
                </div>
              </div>
            );
          })}
        </div>

        {/* The Phone Mockup */}
        <div className="relative w-[340px] h-[680px] bg-gray-50 border-[10px] border-surface-dark rounded-[56px] shadow-2xl z-20 overflow-hidden flex flex-col pointer-events-auto bg-transparent">
          
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-surface-dark rounded-b-3xl z-40"></div>

          {/* Top spacer (transparent to let center image show through) */}
          <div className="h-[240px] w-full shrink-0 relative z-10 bg-transparent"></div>

          {/* The viewport container is now entirely transparent, clipping the animated cards inside */}
          <div className="flex-1 w-full relative z-30 overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0 pt-12 px-6 flex flex-col w-full h-full bg-white rounded-t-[40px] shadow-[0_-20px_40px_rgba(0,0,0,0.06)] z-20"
              >
                {/* Title and Brand */}
                <div className="mb-6 text-center">
                  <h3 className="text-[22px] font-bold text-gray-900 leading-snug mb-1">{activeListing.title}</h3>
                  <p className="text-[14px] text-gray-500 font-medium">{activeListing.brand}</p>
                </div>

                {/* Score & Actions Row */}
                <div className="flex items-center justify-between mb-8 px-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 rounded-full ${activeListing.statusBg}`}></div>
                    <div>
                      <div className="text-[15px] font-bold text-gray-900 leading-none mb-0.5">{activeListing.score}</div>
                      <div className="text-[12px] text-gray-500 leading-none">{activeListing.status}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-gray-400">
                    <button className="hover:text-gray-600 transition-colors"><Heart className="w-5 h-5" /></button>
                    <button className="hover:text-gray-600 transition-colors"><Share className="w-5 h-5" /></button>
                  </div>
                </div>

                {/* Overlay Description Card */}
                <div className="bg-surface-light border border-gray-100 rounded-[24px] p-5 shadow-sm relative">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[13px] font-bold text-gray-900">Agent Says:</span>
                  </div>
                  <p className="text-[13px] leading-relaxed text-gray-600 font-medium">
                    "{activeListing.description}"
                  </p>
                </div>

                {/* Breakdown section at the bottom */}
                <div className="mt-6 flex-1 flex flex-col justify-end pb-6">
                   <h4 className="text-[14px] font-bold text-gray-900 mb-4 px-2">Key Feature</h4>
                   <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between border border-gray-100">
                     <div className="flex items-center gap-3">
                       <Home className="w-5 h-5 text-gray-400" />
                       <span className="text-[14px] font-semibold text-gray-700">{activeListing.breakdown}</span>
                     </div>
                     <div className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-[11px] font-bold">Verified</div>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
