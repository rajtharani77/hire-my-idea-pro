import React from 'react';

const BulletIcon = ({ inverted }) => (
  <div className={`flex shrink-0 items-center justify-center w-5 h-5 rounded-full ${inverted ? 'bg-white' : 'bg-[#A3D977]'}`}>
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={inverted ? '#365741' : '#1F3824'} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
);

export default function PricingSection() {
  return (
    <section className="py-20 md:py-32 bg-white relative w-full overflow-hidden flex flex-col items-center">

      <div className="absolute hidden md:block -bottom-12 -right-24 pointer-events-none z-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="600" height="650" viewBox="0 0 600 650" fill="none">
          <path fill="#EBF5ED" d="M221.489 89.862C209.906 48.662 225.623.594 275.544.594c49.927 0 65.644 48.067 54.061 89.268-8.556 30.426-31.848 102.041-43.448 137.418-1.326 4.049 1.294 8.301 5.225 9.938 3.93 1.637 8.666.418 10.588-3.378 16.816-33.219 50.985-100.338 66.452-127.899 20.943-37.325 66.045-60.2 101.345-24.899 35.304 35.304 12.429 80.405-24.896 101.349-27.563 15.464-94.679 49.636-127.895 66.451-3.799 1.923-5.019 6.658-3.382 10.589 1.637 3.93 5.889 6.551 9.935 5.224 35.381-11.599 106.996-34.894 137.421-43.448 41.201-11.582 89.269 4.134 89.269 54.056 0 49.927-48.068 65.644-89.269 54.061-30.425-8.556-102.04-31.848-137.421-43.448-4.046-1.326-8.298 1.294-9.935 5.224-1.637 3.931-.417 8.666 3.382 10.589 33.216 16.815 100.332 50.987 127.895 66.451 37.325 20.944 60.2 66.045 24.899 101.349-35.303 35.301-80.407 12.426-101.348-24.899-15.464-27.564-49.636-94.68-66.452-127.896-1.922-3.798-6.658-5.018-10.588-3.381-3.931 1.637-6.551 5.889-5.225 9.935 11.6 35.381 34.895 106.996 43.448 137.421 11.583 41.201-4.134 89.269-54.058 89.269-49.925 0-65.641-48.068-54.058-89.269 8.553-30.425 31.848-102.04 43.447-137.421 1.327-4.046-1.291-8.298-5.224-9.935-3.928-1.637-8.666-.417-10.589 3.381-16.815 33.216-50.984 100.332-66.451 127.896-20.941 37.325-66.045 60.2-101.346 24.899-35.303-35.304-12.428-80.405 24.897-101.349 27.563-15.464 94.679-49.636 127.895-66.451 3.799-1.923 5.018-6.658 3.379-10.589-1.635-3.93-5.887-6.55-9.933-5.224-35.377 11.6-106.995 34.895-137.42 43.448C48.942 340.907.874 325.19.874 275.266c0-49.925 48.068-65.641 89.268-54.059 30.426 8.554 102.041 31.849 137.419 43.448 4.048 1.327 8.3-1.291 9.937-5.224 1.637-3.928.421-8.666-3.378-10.589-33.219-16.815-100.338-50.987-127.898-66.451-37.326-20.944-60.2-66.045-24.9-101.349 35.304-35.3 80.408-12.426 101.349 24.899 15.464 27.564 49.636 94.68 66.451 127.896 1.923 3.799 6.658 5.018 10.589 3.378 3.931-1.634 6.551-5.886 5.224-9.932-11.599-35.38-34.894-106.995-43.447-137.42Z"></path>
        </svg>
      </div>

      <div className="max-w-4xl w-full mx-auto px-4 relative z-10 flex flex-col items-center">

        <div className="text-center mb-16">
          <h2 className="text-[#1F3824] text-4xl md:text-[3.2rem] font-medium tracking-tight leading-tight">
            Smarter Choices<br />Honest Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">

          <div className="relative bg-[#F4F8F5] rounded-[32px] p-8 md:p-10 flex flex-col justify-between shadow-sm">

            <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#A3D977] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1F3824" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>

            <div>
              <h4 className="text-[#1F3824] text-lg font-medium mb-2">Monthly</h4>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-[#1F3824] text-[2.75rem] font-semibold leading-none tracking-tight">$14.99</span>
                <span className="text-[#1F3824]/60 text-sm font-medium">/monthly</span>
              </div>

              <ul className="flex flex-col gap-4 mb-10">
                <li className="flex items-center gap-3">
                  <BulletIcon inverted={false} />
                  <span className="text-[#1F3824] text-[15px] font-medium">Unlimited Searches</span>
                </li>
                <li className="flex items-center gap-3">
                  <BulletIcon inverted={false} />
                  <span className="text-[#1F3824] text-[15px] font-medium">Unlimited Neighborhood Scans</span>
                </li>
                <li className="flex items-center gap-3">
                  <BulletIcon inverted={false} />
                  <span className="text-[#1F3824] text-[15px] font-medium">Comprehensive HOA & Cost Data</span>
                </li>
              </ul>
            </div>

            <button className="w-full bg-[#1F3824] text-white py-3.5 rounded-full font-semibold hover:bg-[#2A4B3A] transition-colors shadow-sm">
              Subscribe
            </button>
          </div>

          <div className="bg-[#365741] rounded-[32px] p-8 md:p-10 flex flex-col justify-between shadow-xl">
            <div>
              <h4 className="text-white text-lg font-medium mb-2">Yearly</h4>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-white text-[2.75rem] font-semibold leading-none tracking-tight">$69.99</span>
                <div className="flex flex-col">
                  <span className="text-white/60 text-xs line-through font-medium">$179.88</span>
                  <span className="text-white/80 text-sm font-medium">/yearly</span>
                </div>
              </div>

              <ul className="flex flex-col gap-4 mb-10">
                <li className="flex items-center gap-3">
                  <BulletIcon inverted={true} />
                  <span className="text-white text-[15px] font-medium">Everything in monthly plan</span>
                </li>
                <li className="flex items-center gap-3">
                  <BulletIcon inverted={true} />
                  <span className="text-white text-[15px] font-medium">Get 7 months free</span>
                </li>
                <li className="flex items-center gap-3">
                  <BulletIcon inverted={true} />
                  <span className="text-white text-[15px] font-medium">60% Savings</span>
                </li>
              </ul>
            </div>

            <button className="w-full bg-white text-[#365741] py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-sm">
              Subscribe
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
