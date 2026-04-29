import React from 'react';

const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
);

const DesktopCard = ({ name, text, avatar, className, reverse = false }) => (
  <div className={`absolute z-20 ${className} hidden md:block`}>
    <div className={`relative flex items-end gap-2 ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className="bg-white rounded-2xl p-6 shadow-xl w-[350px] lg:w-[420px]">
        <p className="text-[#1F3824] text-[13px] lg:text-sm mb-4 font-[400] leading-relaxed text-left">
          {text}
        </p>
        <div className="flex items-start flex-col">
          <h6 className="text-[#1F3824] text-[13px] lg:text-sm font-semibold">{name}</h6>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-2 shrink-0">
        <img alt={name} src={avatar} className="w-10 h-10 rounded-full object-cover" />
      </div>
    </div>
  </div>
);

export default function TestimonialsSection() {
  return (
    <section className="py-12 md:py-48 bg-white relative overflow-hidden w-full">
      
      <div className="max-w-6xl mx-auto px-4 relative">
        
        {/* MOBILE LAYOUT */}
        <div className="md:hidden flex flex-col items-center relative z-10">
          <div className="text-center mb-8">
            <h2 className="font-semibold text-3xl text-[#1F3824] mb-4 tracking-tight">Real Families<br/>Real Results</h2>
            <p className="text-[#1F3824]/60 text-sm px-4">Join thousands of satisfied homeowners who trust Haven to help them make smarter real estate choices.</p>
          </div>
          
          <div className="relative w-full h-[300px] mb-8 bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <img 
              alt="Testimonials Hero" 
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80&w=800" 
            />
          </div>
          
          <div className="flex flex-col gap-4 w-full">
            <div className="bg-white rounded-2xl p-6 shadow-lg w-full">
              <div className="flex items-center gap-3 mb-4">
                <img alt="Megan L." src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h6 className="text-[#1F3824] text-sm font-semibold">Megan L.</h6>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                  </div>
                </div>
              </div>
              <p className="text-[#1F3824] text-sm font-[400]">Haven has completely changed the way I shop for homes. I feel confident knowing exactly what the neighborhood is like before we ever make an offer.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg w-full">
              <div className="flex items-center gap-3 mb-4">
                <img alt="Tina B." src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h6 className="text-[#1F3824] text-sm font-semibold">Tina B.</h6>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                  </div>
                </div>
              </div>
              <p className="text-[#1F3824] text-sm font-[400]">House hunting used to be stressful. Now I check the Haven score, get instant recommendations, and feel great about where we are moving.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg w-full">
              <div className="flex items-center gap-3 mb-4">
                <img alt="Lila M." src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h6 className="text-[#1F3824] text-sm font-semibold">Lila M.</h6>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                  </div>
                </div>
              </div>
              <p className="text-[#1F3824] text-sm font-[400]">After just a week of using Haven, I feel more in control of my family's future than ever before. It's empowering to make informed choices.</p>
            </div>
          </div>
          
          <button className="text-[#386641] font-medium flex items-center gap-2 justify-center mt-8">
            read all 3,147+ reviews
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l14 0"></path><path d="M13 18l6 -6"></path><path d="M13 6l6 6"></path></svg>
          </button>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:grid grid-cols-2 gap-4 z-10">
          <div className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] relative">
            <div className="bg-gray-200 z-10 absolute p-8 w-full h-full rounded-2xl overflow-hidden">
              <img 
                alt="Testimonials Hero" 
                className="object-cover rounded-2xl absolute inset-0 w-full h-full"
                src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80&w=800" 
              />
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="flex flex-col flex-start mt-20 items-start pl-8">
              <h2 className="font-semibold text-5xl lg:text-[3.2rem] text-[#1F3824] text-left mb-6 leading-[1.1] tracking-tight">
                Real Families<br/>Real Results
              </h2>
              <button className="text-[#386641] font-medium flex items-center gap-2 hover:opacity-70 transition-opacity">
                read all 3,147+ reviews
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l14 0"></path><path d="M13 18l6 -6"></path><path d="M13 6l6 6"></path></svg>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* FLOATING CARDS - Positioned absolute relative to the Section */}
      <DesktopCard 
        name="Megan L."
        avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        text="Haven has completely changed the way I shop for homes. I feel confident knowing exactly what the neighborhood is like before we ever make an offer."
        className="top-20 right-1/4"
      />
      
      <DesktopCard 
        name="Tina B."
        avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
        text="House hunting used to be stressful. Now I check the Haven score, get instant recommendations, and feel great about where we are moving."
        className="top-1/2 right-[15%]"
        reverse={true}
      />
      
      <DesktopCard 
        name="Lila M."
        avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
        text="After just a week of using Haven, I feel more in control of my family's future than ever before. It's empowering to make informed choices so quickly."
        className="bottom-20 left-[25%]"
      />

      {/* Decorative Background Flower SVG */}
      <svg width="484" height="813" viewBox="0 0 484 813" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute hidden md:block w-[600px] h-[600px] -left-[5rem] z-0 top-1/4 text-[#EBF5ED]">
        <path d="M77.3736 0.964844C21.3156 0.964844 -24.1293 46.4097 -24.1293 102.468V160.487L-64.5964 120.015C-104.235 80.3766 -168.503 80.3766 -208.142 120.015C-247.781 159.654 -247.781 223.926 -208.142 263.565L-166.233 305.473H-227.135C-283.193 305.473 -328.638 350.918 -328.638 406.976C-328.638 463.034 -283.193 508.479 -227.135 508.479H-170.293L-209.855 548.041C-249.494 587.68 -249.494 651.947 -209.855 691.586C-170.216 731.225 -105.945 731.225 -66.3057 691.586L-24.1293 649.409V711.484C-24.1293 767.542 21.3156 812.987 77.3736 812.987C133.432 812.987 178.876 767.542 178.876 711.484V650.583L222.498 694.205C262.137 733.844 326.405 733.844 366.043 694.205C405.682 654.566 405.682 590.294 366.043 550.655L323.867 508.479H381.882C437.94 508.479 483.385 463.034 483.385 406.976C483.385 350.918 437.94 305.473 381.882 305.473H319.807L364.334 260.946C403.973 221.307 403.973 157.04 364.334 117.401C324.695 77.7619 260.424 77.7619 220.785 117.401L178.876 159.309V102.468C178.876 46.4097 133.432 0.964844 77.3736 0.964844Z" fill="currentColor"></path>
      </svg>
    </section>
  );
}
