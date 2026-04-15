import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineBadgeCheck, HiChevronRight } from 'react-icons/hi';

const Process = () => {
  return (
    <section className="bg-[#0f172a] py-16 relative overflow-hidden">
      {/* Background visual detail - Subtle */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[80px] rounded-full"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* LEFT SIDE: Hardware Image - Scaled down for "small UI" */}
          <div className="w-full lg:w-4/12 relative group">
            <div className="relative h-[380px] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-xl">
              <img 
                src="/beer.jpg" 
                alt="Tap Hardware" 
                className="w-full h-full object-cover rounded-[2.5rem] transition-transform duration-[1.5s] group-hover:scale-110" 
              />
              
              {/* Modern Overlay */}
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/5 transition-colors"></div>
              
              {/* Precision Badge - More Minimal */}
              <div className="absolute top-6 right-6 bg-[#030712]/50 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/10 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-white font-black text-[9px] uppercase tracking-widest">Precision Active</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Content Container - Compact UI */}
          <div className="w-full lg:w-8/12">
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[2px] w-8 bg-blue-600"></div>
                <h2 className="text-[9px] uppercase tracking-[0.4em] text-blue-500 font-black">
                  The Execution
                </h2>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
                Engineering for <span className="text-blue-500">The Perfect Pour.</span>
              </h3>
            </header>

            <p className="text-slate-200 text-lg leading-relaxed mb-10 max-w-lg font-bold">
              Our workflow is optimized for efficiency, using premium SS-304 manifolds and advanced cooling tech.
            </p>

            {/* List with compact grid cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Manifold Design", sub: "SS Routing" },
                { title: "Thermal Control", sub: "Glycol Lines" },
                { title: "Flow Calibration", sub: "Pressure" },
                { title: "Quality Check", sub: "Testing" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/20 hover:bg-white/10 transition-all group">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500 group-hover:scale-110 transition-transform">
                    <HiOutlineBadgeCheck size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-[11px] uppercase tracking-widest">{item.title}</h4>
                    <p className="text-slate-500 text-[10px] font-medium mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Compact CTA Button */}
            <div className="mt-10">
              <Link 
                to="/contact" 
                className="inline-flex group px-10 py-5 bg-[#2563eb] text-white font-black rounded-full hover:bg-white hover:text-blue-600 transition-all shadow-xl hover:shadow-blue-500/10 items-center gap-3 text-xs uppercase tracking-widest active:scale-95"
              >
                Start Installation
                <HiChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;