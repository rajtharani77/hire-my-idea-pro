import React from 'react';
import { motion } from 'framer-motion';

const CheckIcon = ({ className = "w-6 h-6 text-[#2A4B3A]" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path>
  </svg>
);

const CrossIcon = ({ className = "w-6 h-6 text-[#7A4343]" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"></path>
  </svg>
);

const RollingDigit = ({ digit, delay = 0 }) => {
  return (
    <div className="relative h-[1em] overflow-hidden leading-none tabular-nums inline-block align-bottom">
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: `-${digit}em` }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 2.5, delay: delay, type: "spring", stiffness: 45, damping: 20 }}
        className="flex flex-col"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span key={n} className="h-[1em] flex items-center justify-center">
            {n}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default function BenefitsSection() {
  const positivePills = [
    "Top Rated Schools",
    "High ROI Potential",
    "Low Crime Rate",
    "Recently Renovated",
    "Energy Efficient",
    "Quiet Neighborhood",
    "Walkable Area"
  ];
  
  const negativePills = [
    "High HOA Fees",
    "Flood Zone",
    "Foundation Issues",
    "Busy Street",
    "Old Roof",
    "Unpermitted Additions",
    "Deferred Maintenance"
  ];

  return (
    <section className="w-full relative mt-24">
      {/* Dark Green Header Block - Full Width */}
      <div className="bg-[#2A4B3A] w-full pt-20 md:pt-28 pb-56 lg:pb-64 px-6">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center text-left">
           <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-white">
             Benefits of Using<br/>Haven Real Estate
           </h2>
           <div className="flex flex-col items-start justify-center gap-6">
             <p className="text-white/90 text-base md:text-[17px] leading-relaxed max-w-[400px]">
               Haven proactively flags hidden property issues and offers personalized neighborhood insights, empowering you to make the best choices for your family's future.
             </p>
             <button className="bg-white text-[#2A4B3A] px-5 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-sm flex items-center gap-2 text-sm">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
               Download App
             </button>
           </div>
        </div>
      </div>

      <div className="bg-[#F6F9F7] w-full pb-32">
        <div className="max-w-[1000px] mx-auto px-6 flex flex-col gap-8 -mt-32 md:-mt-[180px] lg:-mt-[220px] relative z-10">

          <div className="bg-white max-w-5xl w-full mx-auto rounded-[24px] grid grid-cols-1 lg:grid-cols-2 p-4 border border-black/5 shadow-md">
            <div className="flex flex-col gap-6 justify-between p-4 md:p-6 lg:p-8">
              <div className="flex relative text-brand-900 items-center justify-start">
                <h3 className="max-w-xl font-medium text-xl md:text-3xl tracking-tight text-brand-900">
                  Achieve Property Clarity
                </h3>
              </div>
              <ul className="flex flex-col gap-4 max-w-sm self-start">
                <li className="flex items-start gap-4 text-brand-900">
                  <div className="w-6 shrink-0 mt-0.5"><CheckIcon /></div>
                  <div className="md:text-[17px] text-sm text-gray-700 leading-snug">Haven breaks down every property's history, HOA records, and hidden costs into clear, actionable data.</div>
                </li>
                <li className="flex items-start gap-4 text-brand-900">
                  <div className="w-6 shrink-0 mt-0.5"><CheckIcon /></div>
                  <div className="md:text-[17px] text-sm text-gray-700 leading-snug">Haven scores properties out of 100 based on location, amenities, condition, and market value fairness.</div>
                </li>
                <li className="flex items-start gap-4 text-brand-900">
                  <div className="w-6 shrink-0 mt-0.5"><CheckIcon /></div>
                  <div className="md:text-[17px] text-sm text-gray-700 leading-snug">Our ranking system is designed by top-tier local real estate experts, ensuring fully informed decisions.</div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-[#EFF6F0] to-[#9DC8A3] rounded-2xl w-full h-[380px] md:h-[450px] flex flex-col items-center pt-6 overflow-hidden relative shadow-inner">
               <div className="relative flex items-center justify-center w-full h-[160px] z-10 pointer-events-none mt-2">
                  <motion.img 
                    initial={{ x: 0, y: 50, rotate: 0, scale: 0.8, opacity: 0 }}
                    whileInView={{ x: -80, y: 0, rotate: -12, scale: 0.9, opacity: 1 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=250" 
                    className="absolute w-[100px] h-[130px] rounded-[20px] border-[3px] border-white object-cover shadow-md" 
                    alt="Property Left"
                  />
                  <motion.img 
                    initial={{ x: 0, y: 50, rotate: 0, scale: 0.8, opacity: 0 }}
                    whileInView={{ x: 80, y: 0, rotate: 12, scale: 0.9, opacity: 1 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=250" 
                    className="absolute w-[100px] h-[130px] rounded-[20px] border-[3px] border-white object-cover shadow-md" 
                    alt="Property Right"
                  />
                  <motion.img 
                    initial={{ y: 80, scale: 0.9, opacity: 0 }}
                    whileInView={{ y: 0, scale: 1, opacity: 1 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.5, delay: 0.1 }}
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=350" 
                    className="relative w-[120px] h-[150px] rounded-[20px] border-[3px] border-white object-cover z-20 shadow-xl" 
                    alt="Property Center"
                  />
               </div>

               <div className="bg-white/60 backdrop-blur-md rounded-2xl w-[90%] p-3 mt-4 flex gap-3 shadow-sm border border-white/60 z-30 relative mx-auto">
                  <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=150" className="w-14 h-14 rounded-xl object-cover shrink-0 shadow-sm" alt="Thumbnail" />
                  <div className="flex flex-col justify-center gap-0.5">
                    <span className="font-semibold text-[17px] text-brand-900 leading-none">Luxury Modern Villa</span>
                    <div className="flex items-center gap-2 mt-1">
                       <div className="font-semibold text-lg text-[#2A4B3A] flex items-center tabular-nums leading-none">
                         <div className="flex items-center">
                           <RollingDigit digit={9} delay={0.2} />
                           <RollingDigit digit={8} delay={0.6} />
                         </div>
                         <span className="text-[#2A4B3A]/60 font-medium ml-0.5 text-sm">/100</span>
                       </div>
                       <span className="font-semibold text-[13px] text-[#2A4B3A]/60">Excellent</span>
                    </div>
                  </div>
               </div>

               <div className="flex w-full gap-3 px-4 mt-3 pb-4 flex-1 z-20 relative">
                  <div className="flex-1 bg-white/50 backdrop-blur-sm rounded-xl p-2.5 flex flex-col gap-1.5 border border-white/50 shadow-sm">
                     <div className="flex items-center justify-center gap-1.5 text-[#2A4B3A] font-semibold text-[13px]">
                       <CheckIcon className="w-4 h-4 text-[#2A4B3A]" /> Positives
                     </div>
                     <div className="grid grid-cols-12 grid-flow-row-dense w-full gap-1 p-1 mt-0.5">
                        <div className="col-span-5 h-[1.2rem] rounded-md bg-white/70"></div>
                        <div className="col-span-5 h-[1.2rem] rounded-md bg-white/70"></div>
                        <div className="col-span-2 h-[1.2rem] rounded-md bg-white/70"></div>
                        <div className="col-span-8 h-[1.2rem] rounded-md bg-white/70"></div>
                        <div className="col-span-4 h-[1.2rem] rounded-md bg-white/70"></div>
                        <div className="col-span-6 h-[1.2rem] rounded-md bg-white/70"></div>
                        <div className="col-span-6 h-[1.2rem] rounded-md bg-white/70"></div>
                     </div>
                  </div>
                  
                  <div className="flex-1 bg-white/50 backdrop-blur-sm rounded-xl p-2.5 flex flex-col gap-1.5 border border-white/50 shadow-sm">
                     <div className="flex items-center justify-center gap-1.5 text-[#7A4343] font-semibold text-[13px]">
                       <CrossIcon className="w-4 h-4 text-[#7A4343]" /> Negatives
                     </div>
                     <div className="grid grid-cols-12 grid-flow-row-dense w-full gap-1 p-1 mt-0.5">
                        <div className="col-span-6 h-[1.2rem] rounded-md bg-white/70"></div>
                        <div className="col-span-6 h-[1.2rem] rounded-md bg-white/70"></div>
                        <div className="col-span-4 h-[1.2rem] rounded-md bg-white/70"></div>
                        <div className="col-span-8 h-[1.2rem] rounded-md bg-white/70"></div>
                        <div className="col-span-12 h-[1.2rem] rounded-md bg-white/70"></div>
                        <div className="col-span-5 h-[1.2rem] rounded-md bg-white/70"></div>
                        <div className="col-span-7 h-[1.2rem] rounded-md bg-white/70"></div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
          <div className="bg-white max-w-5xl mx-auto rounded-[24px] grid grid-cols-1 lg:grid-cols-2 p-4 border border-black/5 shadow-sm">
            <div className="flex flex-col gap-6 justify-between p-4 md:p-6 lg:p-8">
              <div className="flex relative text-brand-900 items-center justify-start">
                <h3 className="max-w-xl font-medium text-xl md:text-3xl tracking-tight text-brand-900">
                  Proactive Neighborhood Filtering
                </h3>
              </div>
              <ul className="flex flex-col gap-4 max-w-sm self-start">
                <li className="flex items-start gap-4 text-brand-900">
                  <div className="w-6 shrink-0 mt-0.5"><CheckIcon /></div>
                  <div className="md:text-[17px] text-sm text-gray-700 leading-snug">Haven flags hidden neighborhood issues and zoning changes before they become a problem.</div>
                </li>
                <li className="flex items-start gap-4 text-brand-900">
                  <div className="w-6 shrink-0 mt-0.5"><CheckIcon /></div>
                  <div className="md:text-[17px] text-sm text-gray-700 leading-snug">Keeps you ahead of potential real estate market fluctuations and flood risks.</div>
                </li>
                <li className="flex items-start gap-4 text-brand-900">
                  <div className="w-6 shrink-0 mt-0.5"><CheckIcon /></div>
                  <div className="md:text-[17px] text-sm text-gray-700 leading-snug">Gives home buyers the confidence to make the right investment every time.</div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-b overflow-hidden from-[#FFF0F0] to-[#FFC2D0] rounded-2xl w-full h-[380px] md:h-[450px] relative shadow-inner">
               <div className="w-[150%] h-full mt-[3rem] md:mt-[6rem] ml-[-25%] -rotate-[15deg]">
                  <div className="flex flex-col gap-5 w-full overflow-hidden py-4">
      
                     <div className="relative w-full h-[45px] flex items-center overflow-hidden">
                        <motion.div 
                           className="flex items-center gap-4 w-max"
                           animate={{ x: ["0%", "-50%"] }}
                           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        >
                           {[...positivePills, ...positivePills].map((pill, i) => (
                              <div key={i} className="shrink-0">
                                 <div className="flex items-center bg-black/5 p-3 rounded-full gap-2 whitespace-nowrap text-brand-900 font-medium text-[15px]">
                                    <CheckIcon className="w-5 h-5 text-brand-900" />
                                    {pill}
                                 </div>
                              </div>
                           ))}
                        </motion.div>
                     </div>
                     
                     <div className="relative w-full h-[45px] flex items-center overflow-hidden">
                        <motion.div 
                           className="flex items-center gap-4 w-max"
                           animate={{ x: ["-50%", "0%"] }}
                           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        >
                           {[...negativePills, ...negativePills].map((pill, i) => (
                              <div key={i} className="shrink-0">
                                 <div className="flex items-center bg-black/5 p-3 rounded-full gap-2 whitespace-nowrap text-[#7A4343] font-medium text-[15px]">
                                    <CrossIcon className="w-5 h-5 text-[#7A4343]" />
                                    {pill}
                                 </div>
                              </div>
                           ))}
                        </motion.div>
                     </div>
                     
                     <div className="relative w-full h-[45px] flex items-center overflow-hidden">
                        <motion.div 
                           className="flex items-center gap-4 w-max"
                           animate={{ x: ["-25%", "-75%"] }}
                           transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                        >
                           {[...positivePills, ...positivePills].map((pill, i) => (
                              <div key={i} className="shrink-0">
                                 <div className="flex items-center bg-black/5 p-3 rounded-full gap-2 whitespace-nowrap text-brand-900 font-medium text-[15px]">
                                    <CheckIcon className="w-5 h-5 text-brand-900" />
                                    {pill}
                                 </div>
                              </div>
                           ))}
                        </motion.div>
                     </div>

                  </div>
               </div>
            </div>
          </div>

          <div className="bg-white max-w-5xl mx-auto rounded-[24px] grid grid-cols-1 lg:grid-cols-2 p-4 border border-black/5 shadow-sm">
            <div className="flex flex-col gap-6 justify-between p-4 md:p-6 lg:p-8">
              <div className="flex relative text-brand-900 items-center justify-start">
                <h3 className="max-w-xl font-medium text-xl md:text-3xl tracking-tight text-brand-900">
                  Real Financial Outcomes for Your Family
                </h3>
              </div>
              <ul className="flex flex-col gap-4 max-w-sm self-start">
                <li className="flex items-start gap-4 text-brand-900">
                  <div className="w-6 shrink-0 mt-0.5"><CheckIcon /></div>
                  <div className="md:text-[17px] text-sm text-gray-700 leading-snug">Empowers homebuyers to feel more in control of their real estate investments.</div>
                </li>
                <li className="flex items-start gap-4 text-brand-900">
                  <div className="w-6 shrink-0 mt-0.5"><CheckIcon /></div>
                  <div className="md:text-[17px] text-sm text-gray-700 leading-snug">Delivers personalized property suggestions for smarter financial choices.</div>
                </li>
                <li className="flex items-start gap-4 text-brand-900">
                  <div className="w-6 shrink-0 mt-0.5"><CheckIcon /></div>
                  <div className="md:text-[17px] text-sm text-gray-700 leading-snug">Promotes long-term wealth building through informed, balanced decisions.</div>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center justify-center p-0 md:p-2">
               <div className="bg-gray-100 rounded-2xl w-full h-[350px] md:h-[450px] shadow-inner overflow-hidden">
                  <div 
                     className="w-full h-full mix-blend-darken rounded-2xl bg-cover bg-center grayscale-[15%]"
                     style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800')" }}
                  ></div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
