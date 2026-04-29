import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop"
];

export default function HeroCarouselSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full md:my-24 my-8 max-w-4xl mx-auto px-4 md:px-8">
      <div className="relative w-full bg-[#386641] rounded-[1rem] md:rounded-t-[3.5rem] md:rounded-b-[3.5rem] overflow-hidden shadow-2xl">
        <div className="relative w-full bg-[#386641] rounded-[1rem] md:rounded-b-[50rem] overflow-hidden">

          <div className="h-[300px] md:h-[800px]">
            <div className="relative w-full h-full bg-[#2C3B32] overflow-hidden">
              <AnimatePresence initial={false}>
                <motion.img
                  key={activeSlide}
                  src={slides[activeSlide]}
                  alt={`Slide ${activeSlide + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1, y: 15 }}
                  animate={{ opacity: 1, scale: 1.05, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -10 }}
                  transition={{
                    opacity: { duration: 1.2, ease: "easeInOut" },
                    scale: { duration: 6, ease: [0.25, 1, 0.5, 1] },
                    y: { duration: 1.2, ease: [0.25, 1, 0.5, 1] }
                  }}
                />
              </AnimatePresence>

              {/* Navigation Dots Container */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${i === activeSlide
                        ? 'bg-white w-8 opacity-100'
                        : 'bg-white/40 w-2 hover:bg-white/60 hover:scale-110'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Static Overlay - Kept outside animation to prevent flickering */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none z-10"></div>
          <div className="absolute -bottom-24 left-0 right-0 h-24 md:h-48 z-10 pointer-events-none bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        <div className="relative py-24 inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white drop-shadow-sm">
              Discover Your Perfect <br /> Haven Today
            </h1>
            <a
              className="inline-flex items-center cursor-pointer font-sans justify-center gap-2 whitespace-nowrap rounded-full transition-all shadow-xl px-4 md:px-8 py-5 md:py-4 text-base md:text-lg bg-white text-[#386641] hover:bg-gray-100 hover:scale-105 active:scale-95 font-semibold"
              href="#"
            >
              Sign up today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
