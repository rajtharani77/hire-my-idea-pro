import React, { useState, useRef, useEffect } from 'react';

const faqData = [
  {
    question: "What is the Haven App and how does it work?",
    answer: "Haven is a comprehensive real estate tool designed to help you make informed property choices. By analyzing listings, it quickly identifies hidden issues and suggests safer investments, ensuring you always stay on top of your homebuying journey."
  },
  {
    question: "How does Haven ensure the accuracy of its property insights?",
    answer: "Haven leverages an extensive, up-to-date property database and expert real estate guidelines to offer precise feedback. The app cross-references real-world data with independent analyses to deliver reliable, actionable insights tailored to your needs."
  },
  {
    question: "Which properties can I scan with the Haven App?",
    answer: "Haven is versatile, allowing you to analyze a wide range of residential properties. Our technology is designed to pinpoint neighborhood details and detect potential property risks, making it easier than ever to find a safe home."
  },
  {
    question: "Can the Haven App be customized to my family's needs?",
    answer: "Absolutely. With Haven's fully customizable filters, the app lets you set location preferences, budget, and school ratings. This personalization ensures that every recommendation aligns perfectly with your family's unique requirements."
  },
  {
    question: "Is my data secure when I use Haven?",
    answer: "Yes, your privacy is our top priority. Haven employs robust security protocols to safeguard your personal information while delivering transparent and accurate property insights, allowing you to search with peace of mind."
  },
  {
    question: "When will the Android version of the Haven App be available?",
    answer: "Haven is currently available on iOS, with plans to launch the Android version soon. We understand how crucial it is for every homebuyer to access reliable data, and the app is constantly evolving to meet that need."
  }
];

// Single FAQ Item Component
const FaqItem = ({ item, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-[#386641]/10 last:border-b-0">
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left focus:outline-none"
      >
        <h3 className="text-sm md:text-base font-medium text-[#1F3824] pr-4">{item.question}</h3>
        <span className="ml-4 shrink-0 flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            fill="none" 
            viewBox="0 0 24 24" 
            className={`w-5 h-5 text-[#386641] transition-transform duration-[250ms] ease-in-out ${isOpen ? 'rotate-180' : ''}`}
          >
            <circle cx="12" cy="12" r="10" fill="#1F3824" className="opacity-10"/>
            <path stroke="#1F3824" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 10l-4 4-4-4"/>
          </svg>
        </span>
      </button>
      
      <div 
        className="overflow-hidden transition-[height] duration-[250ms] ease-in-out"
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef} className="pb-6 pt-1">
          <p className="text-[#1F3824]/70 text-[13px] md:text-sm leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col items-center pt-16 pb-24 px-4 bg-white">
      
      {/* Top statement (outside card) */}
      <div className="max-w-4xl mx-auto w-full mb-16 md:mb-24 flex flex-col xl:flex-row items-center xl:items-start justify-between gap-6 px-4 md:px-8">
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left">
          <h2 className="text-[#FF9DB4] font-bold text-4xl md:text-[5rem] lg:text-[7rem] leading-none tracking-tight">
            100% Independent.
          </h2>
          <div className="flex flex-col md:flex-row items-center xl:items-baseline gap-4 md:gap-8 w-full mt-2">
            <h2 className="text-[#FF9DB4] font-bold text-4xl md:text-[5rem] lg:text-[7rem] leading-none tracking-tight">
              Always.
            </h2>
            <p className="text-[#386641] text-base md:text-xl font-bold max-w-[400px] text-center md:text-left leading-snug">
              We <span className="text-[#AEB93E]">never monetize</span> through hidden fees, biased agent placements, or ads — so <span className="text-[#AEB93E]">you can trust</span> our recommendations are always aligned with our homebuyers.
            </p>
          </div>
        </div>
      </div>

      {/* Centered FAQ card */}
      <div className="w-full max-w-5xl mx-auto px-4">
        <section className="w-full bg-[#FFF9EB] rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-16 lg:p-20 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            
            {/* Title & Icon */}
            <div className="flex flex-col items-center justify-center mb-8 relative">
              <div className="flex items-center justify-center relative">
                <h2 className="text-[#1F3824] max-w-lg font-medium text-2xl md:text-4xl text-center leading-tight">
                  Frequently Asked Questions
                </h2>
              </div>
            </div>

            {/* CTA button */}
            <div className="flex justify-center mb-16">
              <a 
                href="#" 
                className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all px-6 md:px-8 py-3.5 md:py-4 text-sm md:text-base bg-[#1F3824] text-white hover:bg-[#1F3824]/90 shadow-md outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                Download App
              </a>
            </div>

            {/* List of FAQ rows */}
            <div className="w-full flex flex-col">
              {faqData.map((item, index) => (
                <FaqItem 
                  key={index} 
                  item={item} 
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>

          </div>
        </section>
      </div>
      
    </div>
  );
}
