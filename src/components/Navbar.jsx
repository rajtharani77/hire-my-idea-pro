import React, { useState } from 'react';
import { 
  ChevronDown, Home, Sparkles, DoorOpen, Gem, Building, Map, Calculator, BookOpen,
  Heart, Clock, Wallet, FileText, Tag, BarChart, LineChart, Zap, Camera, Layout, 
  Users, CheckSquare, Search, Star, User, RefreshCw, MapPin, Calendar, UserPlus, 
  Library, Book, Key, TrendingUp, DollarSign, Scale, HelpCircle, ArrowRight
} from 'lucide-react';

const buyItems = [
  { icon: Home, title: 'Explore Homes', desc: 'Browse all available properties' },
  { icon: Sparkles, title: 'New Listings', desc: 'Fresh on the market today' },
  { icon: DoorOpen, title: 'Open Houses', desc: 'Tour homes this weekend' },
  { icon: Gem, title: 'Luxury Homes', desc: 'Premium & exclusive estates' },
  { icon: Building, title: 'Apartments', desc: 'Condos and city living' },
  { icon: Map, title: 'Neighborhood Guide', desc: 'Find your perfect area' },
  { icon: Calculator, title: 'Mortgage Calculator', desc: 'Estimate your payments' },
  { icon: BookOpen, title: 'First-Time Buyer', desc: 'Step-by-step instructions' },
];

const rentItems = [
  { icon: Building, title: 'Apartments for Rent', desc: 'Find your next city apartment' },
  { icon: Home, title: 'Houses for Rent', desc: 'Spacious homes for lease' },
  { icon: Heart, title: 'Pet-Friendly Homes', desc: 'Welcoming your furry friends' },
  { icon: Clock, title: 'Short-Term Rentals', desc: 'Flexible lease durations' },
  { icon: Book, title: 'Student Housing', desc: 'Near campuses and schools' },
  { icon: Wallet, title: 'Affordable Rentals', desc: 'Budget-friendly options' },
  { icon: FileText, title: 'Rental Agreements', desc: 'Understand your lease' },
  { icon: Calculator, title: 'Rent Calculator', desc: 'What can you afford?' },
];

const sellItems = [
  { icon: Tag, title: 'List Your Property', desc: 'Start selling with Haven' },
  { icon: BarChart, title: 'Property Valuation', desc: 'Get an instant estimate' },
  { icon: LineChart, title: 'Market Analysis', desc: 'Local trends and data' },
  { icon: Zap, title: 'Sell Faster Tips', desc: 'Expert advice for quick sales' },
  { icon: Camera, title: 'Professional Photos', desc: 'Make your listing stand out' },
  { icon: Layout, title: 'Home Staging', desc: 'Prepare your home for tours' },
  { icon: Users, title: 'Agent Matching', desc: 'Find the right seller agent' },
  { icon: CheckSquare, title: 'Seller Checklist', desc: 'Step-by-step to closing' },
];

const agentItems = [
  { icon: Search, title: 'Find an Agent', desc: 'Search our directory' },
  { icon: Star, title: 'Top Rated Agents', desc: 'Highest client satisfaction' },
  { icon: User, title: 'Agent Profiles', desc: 'Learn about our team' },
  { icon: RefreshCw, title: 'Compare Agents', desc: 'Find your perfect match' },
  { icon: MapPin, title: 'Local Experts', desc: 'Specialists in your area' },
  { icon: Calendar, title: 'Schedule Consult', desc: 'Book a free meeting' },
  { icon: UserPlus, title: 'Become an Agent', desc: 'Join the Haven team' },
  { icon: Library, title: 'Agent Resources', desc: 'Tools for professionals' },
];

const resourceItems = [
  { icon: Book, title: 'Buying Guide', desc: 'Everything you need to know' },
  { icon: BookOpen, title: 'Selling Guide', desc: 'Maximize your property value' },
  { icon: FileText, title: 'Rental Guide', desc: 'Tips for a smooth lease' },
  { icon: TrendingUp, title: 'Market Trends', desc: 'Monthly housing reports' },
  { icon: DollarSign, title: 'Home Loan Tips', desc: 'Navigate financing easily' },
  { icon: Scale, title: 'Legal & Paperwork', desc: 'Contracts made simple' },
  { icon: HelpCircle, title: 'FAQ', desc: 'Common questions answered' },
  { icon: FileText, title: 'Blog', desc: 'Stories and inspiration' },
];

const featureCards = {
  buy: {
    title: 'Modern-Day Marvel in Hollywood Hills',
    cta: 'View Property',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop'
  },
  rent: {
    title: 'Discover Luxury City Apartments',
    cta: 'Browse Rentals',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600&auto=format&fit=crop'
  },
  sell: {
    title: 'Get Top Dollar for Your Home',
    cta: 'Free Valuation',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop'
  },
  agents: {
    title: 'Meet Sarah, Top Agent 2026',
    cta: 'View Profile',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop'
  },
  resources: {
    title: '2026 Housing Market Trends',
    cta: 'Read Report',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop'
  }
};

const MegaMenuDropdown = ({ title, items, feature }) => {
  return (
    <div className="relative group/navlink h-full flex items-center">
      <button className="flex items-center gap-1.5 text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors py-6">
        {title}
        <ChevronDown className="w-4 h-4 text-gray-400 group-hover/navlink:rotate-180 transition-transform duration-200" />
      </button>

      {/* Floating Panel */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover/navlink:opacity-100 group-hover/navlink:visible transition-all duration-300 z-50">
        <div className="bg-white/95 backdrop-blur-xl rounded-[28px] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-gray-100/50 p-6 flex gap-8 w-max max-w-[900px] overflow-hidden relative">
          
          {/* Menu Items Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 max-w-[540px]">
            {items.map((item, i) => (
              <a key={i} href="#" className="flex items-start gap-3.5 p-3 -m-3 rounded-2xl hover:bg-gray-50/80 transition-colors group/item">
                <div className="text-brand-600 mt-0.5 bg-brand-50 p-2 rounded-xl group-hover/item:bg-white group-hover/item:shadow-sm transition-all">
                  <item.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900 group-hover/item:text-brand-700 transition-colors">
                    {item.title}
                  </div>
                  <div className="text-[13px] text-gray-500 mt-0.5 leading-relaxed pr-2">
                    {item.desc}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Featured Card */}
          <div className="w-[280px] flex-shrink-0 rounded-[20px] overflow-hidden relative group/card cursor-pointer shadow-sm">
            <img 
              src={feature.image} 
              alt={feature.title} 
              className="w-full h-full absolute inset-0 object-cover group-hover/card:scale-105 transition-transform duration-700" 
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5"></div>
            
            {/* Card Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-white text-base font-bold leading-snug pr-4">
                {feature.title}
              </div>
              <div className="text-white/90 text-sm mt-2 flex items-center gap-1.5 font-medium group-hover/card:text-white transition-colors">
                {feature.cta} <ArrowRight className="w-4 h-4 group-hover/card:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default function Navbar() {
  return (
    <nav className="w-full px-6 md:px-12 flex items-center justify-between border-b border-gray-100/50 bg-surface/80 backdrop-blur-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer py-6">
        <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center text-white shadow-sm">
          <Home className="w-6 h-6" />
        </div>
        <span className="text-2xl font-display font-bold tracking-tight text-gray-900">
          Haven
        </span>
      </div>

      {/* Center Links (Desktop) */}
      <div className="hidden lg:flex items-center gap-8 h-full">
        <MegaMenuDropdown title="Buy" items={buyItems} feature={featureCards.buy} />
        <MegaMenuDropdown title="Rent" items={rentItems} feature={featureCards.rent} />
        <MegaMenuDropdown title="Sell" items={sellItems} feature={featureCards.sell} />
        <MegaMenuDropdown title="Agents" items={agentItems} feature={featureCards.agents} />
        <MegaMenuDropdown title="Resources" items={resourceItems} feature={featureCards.resources} />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6 py-6">
        <button className="hidden md:block text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors">
          Sign in
        </button>
        <button className="bg-brand-900 hover:bg-brand-800 text-white px-6 py-2.5 rounded-full text-[15px] font-semibold transition-all shadow-sm flex items-center gap-2">
          Get Haven
          <span className="text-xl leading-none -mt-0.5">&rarr;</span>
        </button>
      </div>
    </nav>
  );
}
