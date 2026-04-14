import React from 'react';
import BeerAnimation from './Beeranimation';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/banner.jpeg" 
          alt="Hero Background" 
          className="w-full h-full object-cover object-center lg:object-[center_30%] scale-110 lg:scale-105" 
        />
      </div>
      
      {/* Dynamic Atmospheric Overlays */}
      <div className="absolute inset-0 z-[1] bg-slate-950/70 md:bg-slate-950/60 backdrop-blur-[1px]"></div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950"></div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20 lg:py-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Left Side: Impact Text - Now order-1 on mobile */}
          <div className="animate-reveal text-center lg:text-left order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2257a3]/20 border border-[#2257a3]/30 text-[#0ea5e9] text-[9px] font-black uppercase tracking-[0.3em] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0ea5e9] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0ea5e9]"></span>
              </span>
              Industrial Hardware
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
              Precision In <br />
              <span className="text-[#0ea5e9]">Every Pour.</span>
            </h1>
            
            <p className="text-sm md:text-lg text-slate-400 mb-8 max-w-sm mx-auto lg:mx-0 leading-relaxed font-medium">
              Premium dispensing systems engineered for reliability, durability, and the perfect beverage experience.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href="#services" 
                className="px-8 py-4 bg-[#2257a3] hover:bg-[#1d4b8f] text-white font-black rounded-xl transition-all shadow-xl shadow-[#2257a3]/40 text-[10px] uppercase tracking-widest active:scale-95"
              >
                Our Systems
              </a>
              <a 
                href="#gallery"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-black rounded-xl border border-white/10 transition-all text-[10px] uppercase tracking-widest backdrop-blur-md active:scale-95"
              >
                Catalog
              </a>
            </div>
          </div>

          {/* Right Side: Beer Animation - Now order-2 on mobile */}
          <div className="flex justify-center lg:justify-end animate-float order-2">
            <div className="transform scale-[0.65] sm:scale-90 lg:scale-100 transition-transform duration-500">
              <BeerAnimation />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-50">
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


