import React from 'react';
import { motion } from 'framer-motion';

const CheckIcon = ({ className = "w-6 h-6 text-brand-900" }) => (
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
      <div className="bg-brand-900 w-full pt-20 md:pt-28 pb-16 md:pb-24 lg:pb-28 px-6">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center text-left">
           <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-white">
             Benefits of Using<br/>Haven Real Estate
           </h2>
           <div className="flex flex-col items-start justify-center gap-6">
             <p className="text-white/90 text-base md:text-[17px] leading-relaxed max-w-[400px]">
               Haven proactively flags hidden property issues and offers personalized neighborhood insights, empowering you to make the best choices for your family's future.
             </p>
             <button className="bg-white text-brand-900 px-5 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-sm flex items-center gap-2 text-sm">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
               Download App
             </button>
           </div>
        </div>
      </div>

      <div className="bg-brand-50 w-full pb-32 flex flex-col pt-px">
        <div className="max-w-[1000px] mx-auto w-full px-6 flex flex-col gap-10 -mt-8 md:-mt-12 lg:-mt-16 relative z-10">
          <div className="bg-white max-w-5xl w-full mx-auto rounded-[2rem] grid grid-cols-1 lg:grid-cols-2 p-4 md:p-5 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
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
            <div className="bg-gradient-to-br from-[#F0F7FF] via-[#E6F0FA] to-[#DCE8F5] rounded-[2rem] w-full h-[380px] md:h-[450px] flex flex-col items-center pt-8 overflow-hidden relative border border-[#C5D9ED] shadow-[inset_0_0_20px_rgba(255,255,255,0.5)]">
               <div className="relative flex items-center justify-center w-full h-[160px] z-10 pointer-events-none mt-2">
                  <motion.img 
                    initial={{ x: 0, y: 50, rotate: 0, scale: 0.8, opacity: 0 }}
                    whileInView={{ x: -85, y: 0, rotate: -12, scale: 0.9, opacity: 1 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=250" 
                    className="absolute w-[110px] h-[140px] rounded-2xl border-[4px] border-white object-cover shadow-lg" 
                    alt="Property Left"
                  />
                  <motion.img 
                    initial={{ x: 0, y: 50, rotate: 0, scale: 0.8, opacity: 0 }}
                    whileInView={{ x: 85, y: 0, rotate: 12, scale: 0.9, opacity: 1 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=250" 
                    className="absolute w-[110px] h-[140px] rounded-2xl border-[4px] border-white object-cover shadow-lg" 
                    alt="Property Right"
                  />
                  <motion.img 
                    initial={{ y: 80, scale: 0.9, opacity: 0 }}
                    whileInView={{ y: 0, scale: 1, opacity: 1 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.5, delay: 0.1 }}
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=350" 
                    className="relative w-[130px] h-[160px] rounded-2xl border-[4px] border-white object-cover z-20 shadow-2xl" 
                    alt="Property Center"
                  />
               </div>

               <div className="bg-white/90 backdrop-blur-xl rounded-[1.25rem] w-[85%] p-3.5 mt-5 flex gap-4 shadow-xl border border-white z-30 relative mx-auto transform transition-transform hover:scale-[1.02]">
                  <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=150" className="w-14 h-14 rounded-[0.85rem] object-cover shrink-0 shadow-sm" alt="Thumbnail" />
                  <div className="flex flex-col justify-center gap-0.5">
                    <span className="font-semibold text-[17px] text-brand-900 leading-none">Luxury Modern Villa</span>
                    <div className="flex items-center gap-2 mt-1.5">
                       <div className="font-semibold text-lg text-brand-900 flex items-center tabular-nums leading-none">
                         <div className="flex items-center">
                           <RollingDigit digit={9} delay={0.2} />
                           <RollingDigit digit={8} delay={0.6} />
                         </div>
                         <span className="text-brand-900/60 font-medium ml-0.5 text-sm">/100</span>
                       </div>
                       <span className="font-semibold text-[13px] text-brand-900/60">Excellent</span>
                    </div>
                  </div>
               </div>

               <div className="flex w-full gap-4 px-5 mt-4 pb-5 flex-1 z-20 relative">
                  <div className="flex-1 bg-white/80 backdrop-blur-md rounded-2xl p-3 flex flex-col gap-2 border border-white shadow-lg overflow-hidden relative">
                     <div className="flex items-center justify-center gap-1.5 text-brand-900 font-semibold text-[13px]">
                       <CheckIcon className="w-4 h-4 text-brand-700" /> Positives
                     </div>
                     <div className="grid grid-cols-12 grid-flow-row-dense w-full gap-1.5 p-1 mt-0.5">
                        <div className="col-span-5 h-[1.1rem] rounded-md bg-brand-50 border border-brand-100/50"></div>
                        <div className="col-span-5 h-[1.1rem] rounded-md bg-brand-50 border border-brand-100/50"></div>
                        <div className="col-span-2 h-[1.1rem] rounded-md bg-brand-50 border border-brand-100/50"></div>
                        <div className="col-span-8 h-[1.1rem] rounded-md bg-brand-50 border border-brand-100/50"></div>
                        <div className="col-span-4 h-[1.1rem] rounded-md bg-brand-50 border border-brand-100/50"></div>
                     </div>
                  </div>
                  
                  <div className="flex-1 bg-white/80 backdrop-blur-md rounded-2xl p-3 flex flex-col gap-2 border border-white shadow-lg overflow-hidden relative">
                     <div className="flex items-center justify-center gap-1.5 text-[#A05E5E] font-semibold text-[13px]">
                       <CrossIcon className="w-4 h-4 text-[#A05E5E]" /> Negatives
                     </div>
                     <div className="grid grid-cols-12 grid-flow-row-dense w-full gap-1.5 p-1 mt-0.5">
                        <div className="col-span-6 h-[1.1rem] rounded-md bg-red-50 border border-red-100/50"></div>
                        <div className="col-span-6 h-[1.1rem] rounded-md bg-red-50 border border-red-100/50"></div>
                        <div className="col-span-4 h-[1.1rem] rounded-md bg-red-50 border border-red-100/50"></div>
                        <div className="col-span-8 h-[1.1rem] rounded-md bg-red-50 border border-red-100/50"></div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
          <div className="bg-white max-w-5xl w-full mx-auto rounded-[2rem] grid grid-cols-1 lg:grid-cols-2 p-4 md:p-5 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
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
            <div className="bg-gradient-to-br from-[#FFFBF7] via-[#FDF5ED] to-[#F5E6D8] overflow-hidden rounded-[2rem] w-full h-[380px] md:h-[450px] relative border border-[#EBE0D3] shadow-[inset_0_0_20px_rgba(255,255,255,0.5)]">
               <div className="w-[150%] h-full mt-[3rem] md:mt-[6rem] ml-[-25%] -rotate-[15deg]">
                  <div className="flex flex-col gap-6 w-full overflow-hidden py-4">
                     <div className="relative w-full h-[45px] flex items-center overflow-hidden">
                        <motion.div 
                           className="flex items-center gap-5 w-max"
                           animate={{ x: ["0%", "-50%"] }}
                           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        >
                           {[...positivePills, ...positivePills].map((pill, i) => (
                              <div key={i} className="shrink-0">
                                 <div className="flex items-center bg-white/90 backdrop-blur-sm shadow-md border border-white p-3.5 rounded-full gap-2.5 whitespace-nowrap text-brand-900 font-medium text-[15px]">
                                    <CheckIcon className="w-5 h-5 text-brand-600" />
                                    {pill}
                                 </div>
                              </div>
                           ))}
                        </motion.div>
                     </div>
                     <div className="relative w-full h-[45px] flex items-center overflow-hidden">
                        <motion.div 
                           className="flex items-center gap-5 w-max"
                           animate={{ x: ["-50%", "0%"] }}
                           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        >
                           {[...negativePills, ...negativePills].map((pill, i) => (
                              <div key={i} className="shrink-0">
                                 <div className="flex items-center bg-white/90 backdrop-blur-sm shadow-md border border-white p-3.5 rounded-full gap-2.5 whitespace-nowrap text-[#A05E5E] font-medium text-[15px]">
                                    <CrossIcon className="w-5 h-5 text-[#A05E5E]" />
                                    {pill}
                                 </div>
                              </div>
                           ))}
                        </motion.div>
                     </div>
                     <div className="relative w-full h-[45px] flex items-center overflow-hidden">
                        <motion.div 
                           className="flex items-center gap-5 w-max"
                           animate={{ x: ["-25%", "-75%"] }}
                           transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                        >
                           {[...positivePills, ...positivePills].map((pill, i) => (
                              <div key={i} className="shrink-0">
                                 <div className="flex items-center bg-white/90 backdrop-blur-sm shadow-md border border-white p-3.5 rounded-full gap-2.5 whitespace-nowrap text-brand-900 font-medium text-[15px]">
                                    <CheckIcon className="w-5 h-5 text-brand-600" />
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
          <div className="bg-white max-w-5xl w-full mx-auto rounded-[2rem] grid grid-cols-1 lg:grid-cols-2 p-4 md:p-5 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
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
            <div className="flex items-center justify-center p-3 md:p-4 bg-gradient-to-br from-[#F8FAFC] to-[#EDF2F7] rounded-[2rem] w-full h-[350px] md:h-[450px] border border-[#E2E8F0] shadow-[inset_0_0_20px_rgba(255,255,255,0.5)]">
               <div 
                  className="w-full h-full rounded-2xl bg-cover bg-center shadow-md relative overflow-hidden"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800')" }}
               >
                  <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply"></div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
