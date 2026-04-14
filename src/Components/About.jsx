import React from 'react';

const About = () => {
  return (
    <section id="aboutus" className="py-12 bg-slate-900 overflow-hidden relative">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#2257a3]/5 blur-[80px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Visual Element */}
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#2257a3] to-[#0ea5e9] opacity-10 blur-xl"></div>
            <div className="relative bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="space-y-3">
                <div className="w-8 h-1 bg-[#2257a3] mb-4"></div>
                <h4 className="text-white text-lg font-bold leading-tight">
                  "Quality hardware is the silent partner of every great brewer."
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We provide the foundation for your business. From micro-brewery blueprints to customized tower installations, TapLink is your partner in beverage hardware innovation.
                </p>
                <div className="flex items-center gap-3 pt-1">
                  <div className="w-6 h-6 rounded-full border border-[#0ea5e9]/50 flex items-center justify-center text-[#0ea5e9] text-[10px] font-bold">✓</div>
                  <span className="text-white text-[11px] font-semibold">ISO 9001 Certified Components</span>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#2257a3] p-4 rounded-xl shadow-xl hidden md:block">
              <div className="text-white font-black text-xl">15+</div>
              <div className="text-white/80 font-bold text-[7px] uppercase tracking-widest">Years of Craft</div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="inline-block px-2 py-0.5 bg-[#2257a3]/10 border border-[#2257a3]/20 rounded-full text-[#0ea5e9] text-[9px] font-bold uppercase tracking-widest mb-3">
              Our Legacy
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
              Engineering the <br />
              <span className="text-gradient">Perfect Pour.</span>
            </h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Founded on a simple principle: high-quality beverages deserve high-quality hardware. We specialize in industrial-grade stainless steel components.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <h4 className="text-xl font-extrabold text-white mb-0.5">100%</h4>
                <p className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">Food Grade SS</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <h4 className="text-xl font-extrabold text-white mb-0.5">24/7</h4>
                <p className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">Support</p>
              </div>
            </div>


            <button className="flex items-center gap-3 text-white font-bold group text-sm">
              <span className="w-10 h-10 bg-[#2257a3] rounded-full flex items-center justify-center text-white transition-transform shadow-md">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              Read Full Story
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
