import React from 'react';
import Navbar from './components/Navbar';
import TrustRow from './components/TrustRow';
import HeroContent from './components/HeroContent';
import CarouselShowcase from './components/CarouselShowcase';
import HowItWorksSection from './components/HowItWorksSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ComparisonSection from './components/ComparisonSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import HeroCarouselSection from './components/HeroCarouselSection';
import CTAImageBanner from './components/CTAImageBanner';
import Footer from './components/Footer';
function App() {
  return (
    <div className="min-h-screen bg-surface font-sans overflow-x-hidden">
      <Navbar />

      <main className="flex flex-col items-center pt-24 md:pt-32 w-full text-center relative z-10">
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
          <TrustRow />

          <div className="mt-8 mb-10 w-full max-w-4xl mx-auto">
            <HeroContent />
          </div>

          <CarouselShowcase />
          <HowItWorksSection />
        </div>
        <BenefitsSection />
        <TestimonialsSection />
        <ComparisonSection />
        <PricingSection />
        <HeroCarouselSection />
        <FaqSection />
        <CTAImageBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
