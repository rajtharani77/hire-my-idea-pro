import React from 'react';

const FooterLink = ({ href, children }) => (
  <li>
    <a 
      href={href} 
      className="text-white/70 hover:text-white transition-colors text-sm font-medium"
    >
      {children}
    </a>
  </li>
);

export default function Footer() {
  return (
    <footer className="w-full max-w-6xl mx-auto px-4 md:px-8 mb-8">
      <div className="bg-brand-900 rounded-[2rem] md:rounded-[3rem] px-8 py-12 md:px-16 md:py-16 w-full flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-white font-bold text-sm mb-6 tracking-wide">Explore More</h3>
            <ul className="space-y-4">
              <FooterLink href="#">Buy Homes</FooterLink>
              <FooterLink href="#">Rent Homes</FooterLink>
              <FooterLink href="#">New Listings</FooterLink>
              <FooterLink href="#">Neighborhood Guide</FooterLink>
              <FooterLink href="#">Mortgage Help</FooterLink>
            </ul>
          </div>
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-white font-bold text-sm mb-6 tracking-wide">About</h3>
            <ul className="space-y-4">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </ul>
          </div>
          <div className="lg:col-span-6 flex flex-col lg:items-start lg:pl-12 xl:pl-24">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl relative top-0.5">🏡</span>
              <span className="text-2xl font-bold tracking-tight text-brand-300 font-display">Haven</span>
            </div>
            <p className="text-white/80 text-sm mb-8 leading-relaxed max-w-sm">
              Get the latest listings and neighborhood insights sent directly to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter Email address" 
                className="flex-1 bg-white/10 border border-white/10 text-white placeholder-white/50 rounded-full px-6 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#A3D977] transition-all"
                required
              />
              <button 
                type="submit" 
                className="bg-white text-brand-900 font-semibold rounded-full px-8 py-3.5 text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
          
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/50 hover:text-white transition-colors text-xs">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors text-xs">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors text-xs">Accessibility</a>
          </div>
          <p className="text-white/50 text-xs">
            © 2026 Haven Real Estate. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
