import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScanAnimation = ({ image }) => (
  <div className="relative w-full h-[200px] flex items-center justify-center">
    {/* Scan frame corners (wide) */}
    <div className="absolute top-2 left-6 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-gray-400/50 rounded-tl-lg"></div>
    <div className="absolute top-2 right-6 w-6 h-6 border-t-[1.5px] border-r-[1.5px] border-gray-400/50 rounded-tr-lg"></div>
    <div className="absolute bottom-2 left-6 w-6 h-6 border-b-[1.5px] border-l-[1.5px] border-gray-400/50 rounded-bl-lg"></div>
    <div className="absolute bottom-2 right-6 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-gray-400/50 rounded-br-lg"></div>

    {/* Floating Particles / Sparkles */}
    <motion.div animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 2, repeat: Infinity }} className="absolute top-6 left-12 w-2 h-2 text-brand-400">✦</motion.div>
    <motion.div animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.9, 1.1, 0.9] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} className="absolute bottom-8 right-10 w-3 h-3 text-brand-300">✦</motion.div>
    <motion.div animate={{ opacity: [0.1, 0.6, 0.1] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} className="absolute top-10 right-14 w-1.5 h-1.5 rounded-full bg-brand-400"></motion.div>

    {/* Main Floating Object */}
    <motion.div 
      animate={{ 
        y: [-6, 6, -6],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-[140px] h-[140px] rounded-full overflow-hidden shadow-xl ring-4 ring-white z-10 bg-white"
    >
      <motion.div
        animate={{ filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full"
      >
        <img src={image} alt="Property" className="w-full h-full object-cover" />
      </motion.div>
    </motion.div>
    
    {/* Horizontal Scan Line */}
    <motion.div
      animate={{ y: [-70, 70, -70] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 left-4 right-4 h-[2px] bg-brand-600 shadow-[0_0_12px_3px_rgba(16,185,129,0.5)] z-20 flex items-center justify-center"
    >
      {/* Scan line central node */}
      <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_5px_rgba(255,255,255,1)]"></div>
    </motion.div>
  </div>
);

const ThumbnailLoop = ({ image }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbs = [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=150",
    image,
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=150"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1); 
    }, 2500); 
    return () => clearInterval(interval);
  }, []);
  
  // Mathematical infinite sliding window loop
  const itemWidth = 64; 
  const gap = 12; 
  const stepSize = itemWidth + gap;
  const offset = -(activeIndex * stepSize);

  const visibleIndices = [];
  // Render a window of 7 items (3 left, 1 center, 3 right)
  for (let i = activeIndex - 3; i <= activeIndex + 3; i++) {
    visibleIndices.push(i);
  }

  return (
    <div className="relative w-full h-[200px] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Vertical Glow Ray onto center item */}
      <div className="absolute top-0 bottom-1/4 left-1/2 -translate-x-1/2 w-16 bg-gradient-to-b from-transparent via-brand-200/40 to-brand-400/20 blur-xl z-0 pointer-events-none"></div>

      <div className="flex items-center w-full h-[120px] relative z-10">
        {/* Moving Infinite Track */}
        <motion.div 
          className="absolute left-1/2 top-1/2 -translate-y-1/2"
          animate={{ x: offset }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {visibleIndices.map((i) => {
            // Map the infinite index `i` back to a valid array index
            const logicalIndex = ((i % thumbs.length) + thumbs.length) % thumbs.length;
            const src = thumbs[logicalIndex];
            const isCenter = i === activeIndex;
            const dist = Math.abs(i - activeIndex);
            
            return (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: isCenter ? 1.15 : 0.8,
                  // Smoothly fade out edges so unmounting is invisible
                  opacity: isCenter ? 1 : Math.max(0, 0.45 - dist * 0.15),
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`absolute w-[64px] h-[64px] rounded-[16px] overflow-hidden bg-white border border-gray-100 ${isCenter ? 'z-20 shadow-xl ring-2 ring-white' : 'z-10'}`}
                style={{ 
                  left: i * stepSize - (itemWidth / 2),
                  top: - (itemWidth / 2) // center vertically around track axis
                }}
              >
                <img src={src} alt="Thumbnail" className="w-full h-full object-cover" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
      
      {/* Validation Status Pill */}
      <div className="mt-6 bg-[#f0fdf4] text-brand-700 px-4 py-1.5 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-sm border border-brand-100 z-20">
        <div className="w-3 h-3 rounded-full bg-brand-100 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-brand-500 rounded-full"></div>
        </div>
        Verified Match
      </div>
    </div>
  );
};

const StackReveal = ({ image }) => {
  const textItems = [
    "Spacious Modern Loft",
    "Luxury Family Villa",
    "Downtown Penthouse",
    "Suburban Retreat",
    "Seaside Cottage",
    "Urban Studio Apartment"
  ];

  // Duplicate for seamless marquee
  const marqueeItems = [...textItems, ...textItems];

  return (
    <div className="relative w-full h-[200px] flex items-center justify-center overflow-hidden">
      
      {/* Background Vertical Marquee (Scrolling text pills) */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <motion.div 
          className="flex flex-col gap-3 w-[70%]"
          animate={{ y: ["0%", "-50%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {marqueeItems.map((text, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center w-full rounded-lg py-2.5 px-4 text-center shrink-0 bg-brand-50 border border-brand-100/50 shadow-sm"
            >
              <p className="text-[11px] font-medium text-brand-700">
                {text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Soft edge gradients to mask the scrolling list */}
      <div className="absolute top-0 left-0 right-0 h-[40px] bg-gradient-to-b from-[#fcfdfc] to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-[#fcfdfc] to-transparent pointer-events-none z-10"></div>

      {/* Foreground Static 3-Image Fanned Stack */}
      <div className="relative w-full h-full flex items-center justify-center z-20 pointer-events-none">
        <div className="relative flex items-center justify-center mt-2">
          {/* Left Image */}
          <div className="absolute w-[70px] h-[90px] rounded-2xl border-[3px] border-white overflow-hidden shadow-lg transform -translate-x-12 -rotate-12 bg-white">
             <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" />
          </div>
          
          {/* Right Image */}
          <div className="absolute w-[70px] h-[90px] rounded-2xl border-[3px] border-white overflow-hidden shadow-lg transform translate-x-12 rotate-12 bg-white">
             <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" />
          </div>
          
          {/* Center Main Image */}
          <div className="relative w-[85px] h-[110px] rounded-2xl border-[3px] border-white overflow-hidden shadow-2xl z-30 bg-white">
             <img src={image} className="w-full h-full object-cover" />
             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-2">
                <span className="text-[9px] font-bold text-white tracking-wide">Top Match</span>
             </div>
          </div>
        </div>
      </div>

    </div>
  );
};

const steps = [
  {
    id: 1,
    title: 'Discover Listings',
    description: 'Browse our curated collection of premium properties. Our intuitive platform makes it easy to find homes that match your exact lifestyle needs.',
    AnimationComponent: ScanAnimation,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 2,
    title: 'Compare Properties',
    description: 'Analyze neighborhoods, view detailed market data, and compare features side-by-side to make an informed, confident decision.',
    AnimationComponent: ThumbnailLoop,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    title: 'Connect with Agents',
    description: 'Get paired with a top-tier local expert who will guide you through negotiations, tours, and closing with absolute transparency.',
    AnimationComponent: StackReveal,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400',
  }
];

const SectionHeader = () => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
    className="flex items-center justify-center gap-4 mb-20"
  >
    <h2 className="text-[34px] md:text-[44px] leading-[1.15] font-display font-medium text-gray-900 text-center">
      How Haven Real Estate<br />Platform Works
    </h2>
    <span className="text-4xl hidden md:inline-block relative -top-4 -left-2 transform rotate-12">
      🏡
    </span>
  </motion.div>
);

const StepCard = ({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 1, 0.5, 1] }}
      className="bg-[#fcfdfc] hover:bg-white transition-all duration-500 rounded-[32px] p-8 md:p-10 flex flex-col items-center text-center h-full border border-gray-50 hover:border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] group min-h-[460px]"
    >
      <h3 className="text-[17px] font-bold text-gray-900 mb-6">{step.title}</h3>
      
      <div className="w-full flex-1 flex items-center justify-center mb-6">
        <step.AnimationComponent image={step.image} />
      </div>

      <p className="text-[13px] leading-relaxed text-gray-500 font-medium max-w-[260px]">
        {step.description}
      </p>
    </motion.div>
  );
};

export default function HowItWorksSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 md:py-32 bg-white">
      <SectionHeader />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {steps.map((step, index) => (
          <StepCard key={step.id} step={step} index={index} />
        ))}
      </div>
    </section>
  );
}
