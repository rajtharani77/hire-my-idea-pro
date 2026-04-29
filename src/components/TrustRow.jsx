import React from 'react';

const Avatar = ({ initials, bgClass, zIndex }) => (
  <div 
    className={`w-8 h-8 rounded-full border-2 border-surface flex items-center justify-center text-[10px] font-bold text-white ${bgClass} ${zIndex}`}
  >
    {initials}
  </div>
);

export default function TrustRow() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-3 animate-fade-in-up mb-2 md:mb-0">
      <div className="flex -space-x-3">
        <Avatar initials="JD" bgClass="bg-blue-500" zIndex="z-40" />
        <Avatar initials="AM" bgClass="bg-brand-500" zIndex="z-30" />
        <Avatar initials="RJ" bgClass="bg-orange-400" zIndex="z-20" />
        <Avatar initials="KL" bgClass="bg-purple-500" zIndex="z-10" />
      </div>
      <span className="text-[13px] font-medium text-gray-500 tracking-wide text-center">
        Trusted by over 10,000 homebuyers
      </span>
    </div>
  );
}
