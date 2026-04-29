import React from 'react';

const CheckIcon = () => (
  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#A3D977] mx-auto">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1F3824" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
);

const CrossIcon = () => (
  <div className="flex items-center justify-center w-6 h-6 mx-auto">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </div>
);

export default function ComparisonSection() {
  const features = [
    { name: 'Detailed Property Breakdown', haven: true, comp1: true, comp2: true },
    { name: 'Comprehensive HOA Data', haven: true, comp1: false, comp2: false },
    { name: 'Hidden Issue Flagging', haven: true, comp1: false, comp2: false },
    { name: 'True Cost of Ownership', haven: true, comp1: false, comp2: true },
    { name: 'Certified ROI Projections', haven: true, comp1: false, comp2: false },
  ];

  return (
    <section className="w-full bg-white py-20 relative flex justify-center px-4 md:px-8">
      
      <div className="w-full max-w-4xl bg-[#365741] rounded-[32px] p-8 md:p-16 shadow-2xl flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-white text-3xl md:text-[2.75rem] font-medium mb-6 tracking-tight leading-tight">
            Haven Real Estate App<br/>vs. The Rest
          </h2>
          <button className="bg-white text-[#365741] px-5 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-sm inline-flex items-center gap-2 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            Download App
          </button>
        </div>

        {/* Table Container */}
        <div className="w-full mt-8 text-left">
          
          {/* Header Row */}
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] md:grid-cols-[3fr_1fr_1fr_1fr] items-end pb-6 border-b border-white/20">
            <div></div> {/* Empty top-left cell */}
            
            {/* Haven Logo */}
            <div className="flex justify-center">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#A3D977] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.15)] border-[3px] border-white transform -translate-y-2 transition-transform hover:scale-105">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1F3824" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
            </div>

            {/* Competitor 1 Logo (Search) */}
            <div className="flex justify-center">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#486D51] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.15)] border-[3px] border-white transform -translate-y-2 transition-transform hover:scale-105">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>

            {/* Competitor 2 Logo (Location) */}
            <div className="flex justify-center">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#486D51] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.15)] border-[3px] border-white transform -translate-y-2 transition-transform hover:scale-105">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
            </div>
          </div>

          {/* Data Rows */}
          <div className="flex flex-col">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-[2fr_1fr_1fr_1fr] md:grid-cols-[3fr_1fr_1fr_1fr] items-center py-6 ${
                  index !== features.length - 1 ? 'border-b border-white/10' : ''
                }`}
              >
                {/* Feature Name */}
                <div className="text-white text-sm md:text-[15px] font-medium pr-4">
                  {feature.name}
                </div>
                
                {/* Haven */}
                <div className="text-center">
                  {feature.haven ? <CheckIcon /> : <CrossIcon />}
                </div>
                
                {/* Competitor 1 */}
                <div className="text-center">
                  {feature.comp1 ? <CheckIcon /> : <CrossIcon />}
                </div>
                
                {/* Competitor 2 */}
                <div className="text-center">
                  {feature.comp2 ? <CheckIcon /> : <CrossIcon />}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
