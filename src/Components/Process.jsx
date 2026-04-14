import React from 'react';

const steps = [
  {
    number: "01",
    title: "Engineering",
    desc: "Our specialists design custom hardware blueprints tailored to your brewery's specific floor plan and volume needs.",
    color: "#2257a3"
  },
  {
    number: "02",
    title: "Installation",
    desc: "Certified technicians perform precision installation of stainless steel manifolds, cooling lines, and dispensing towers.",
    color: "#0ea5e9"
  },
  {
    number: "03",
    title: "Calibration",
    desc: "We perform rigorous pressure testing and flow-velocity calibration to ensure the zero-waste, perfect pour.",
    color: "#3b82f6"
  }
];

const Process = () => {
  return (
    <section id="process" className="py-16 bg-slate-900 relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
        EXECUTION
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-reveal">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-[#0ea5e9] font-bold mb-2">Our Workflow</h2>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-3">How We Tap Into <br /> <span className="text-gradient">Excellence.</span></h3>
          <div className="h-1 w-16 bg-[#2257a3] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Number Background */}
              <div className="text-7xl font-black text-white/5 absolute -top-8 left-0 group-hover:text-[#2257a3]/10 transition-colors duration-500">
                {step.number}
              </div>
              
              <div className="relative pt-8 pb-6 px-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#0ea5e9]/30 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
                {/* Connector Line (Desktop Only) */}
                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-[1px] bg-gradient-to-r from-[#2257a3] to-transparent z-0"></div>
                )}
                
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold mb-5 shadow-lg rotate-3 group-hover:rotate-0 transition-transform"
                  style={{ backgroundColor: step.color }}
                >
                  {step.number}
                </div>
                
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#0ea5e9] transition-colors">
                  {step.title}
                </h4>
                
                <p className="text-slate-400 text-xs leading-relaxed">
                  {step.desc}
                </p>

                
                <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="h-1 w-8 bg-[#2257a3] rounded-full"></div>
                  <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Phase {index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-20 p-8 rounded-[2.5rem] bg-gradient-to-r from-[#2257a3]/20 via-[#0ea5e9]/10 to-transparent border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 animate-reveal">
          <div className="max-w-xl text-center md:text-left">
            <h4 className="text-2xl font-bold text-white mb-2">Ready to start your installation?</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Join over 180+ outlets that trust TapLink for their industrial hardware needs.</p>
          </div>
          <a href="#contact" className="px-8 py-4 bg-white text-[#2257a3] font-black rounded-2xl hover:bg-[#0ea5e9] hover:text-white transition-all shadow-xl active:scale-95 uppercase tracking-widest text-xs">
            Start My Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
