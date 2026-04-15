import React from 'react';
import { HiCheckCircle } from 'react-icons/hi';

const About = () => {
  return (
    <section id="aboutus" className="py-16 bg-[#030712] overflow-hidden relative">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full -mr-48 -mt-48"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          
          {/* TEXT CONTENT */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
              Our Legacy
            </div>
            
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
              Engineering the <br />
              <span className="text-blue-500 text-2xl md:text-3xl lg:text-4xl">Perfect Laminar Pour.</span>
            </h3>
            
            <p className="text-slate-200 text-lg mb-8 leading-relaxed font-bold max-w-lg">
              We specialize in industrial-grade stainless steel components that ensure every drop 
              maintains its integrity from keg to glass with technical precision.
            </p>
            
            {/* Quick Stats Grid - More Compact */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/20 transition-all group">
                <HiCheckCircle className="text-blue-500 text-xl group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="text-white font-black text-lg">100%</h4>
                  <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mt-0.5 whitespace-nowrap">Food Grade</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/20 transition-all group">
                <HiCheckCircle className="text-blue-500 text-xl group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="text-white font-black text-lg">24/7</h4>
                  <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mt-0.5 whitespace-nowrap">Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* VISUAL ELEMENT - Scaled down for "small UI" */}
          <div className="lg:w-[45%] relative group">
            <div className="relative bg-[#0f172a] rounded-[2rem] p-3 border border-white/10 shadow-xl overflow-hidden">
               <img 
                 src="/about.jpg" 
                 alt="Hardware Precision" 
                 className="w-full h-[320px] object-cover rounded-2xl opacity-90 transition-transform duration-700 group-hover:scale-105"
               />
               
               {/* Minimalist Overlaying Quote Box */}
               <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/60 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-2xl">
                    <p className="text-white text-sm font-medium italic leading-relaxed">
                      "Quality hardware was our first priority."
                    </p>
                  </div>
               </div>
            </div>

            {/* Floating Experience Badge - More Compact */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-2xl rotate-6 group-hover:rotate-0 transition-all duration-500 border-4 border-[#030712]">
              <span className="text-xl font-black">15+</span>
              <span className="text-[7px] font-bold uppercase tracking-widest text-center mt-0.5">Years of <br /> Engineering</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;