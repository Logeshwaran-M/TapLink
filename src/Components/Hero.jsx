import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Video - Premium Cinematic Experience */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover scale-110"
        >
          <source src="/Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Modern Gradient Overlay for Readability (Left-focused) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      
      {/* Content Container - Left Aligned & Shifted Down */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-start text-left pt-24 md:pt-32">
        <div className="max-w-4xl space-y-8 animate-reveal">
          
          <div className="space-y-4">
            <h2 className="text-white text-sm font-bold uppercase tracking-[0.4em] mb-2 opacity-80">
              Welcome to TapLink
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-white uppercase tracking-tight">
              BEER <br/>
              <span className="text-[#2563eb]">DRAFT SYSTEMS</span>
            </h1>
            <p className="text-white text-lg md:text-2xl leading-relaxed max-w-2xl font-bold pt-2 opacity-90">
              High-performance brewery infrastructure and custom tap solutions <br className="hidden md:block"/>
              for elite hospitality venues across India.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 w-full sm:w-auto">
            <a 
              href="#services" 
              className="w-full sm:w-auto text-center bg-[#2563eb] text-white px-12 py-5 rounded-md font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-2xl active:scale-95"
            >
              Our Engineering
            </a>
            
            <Link 
              to="/contact" 
              className="w-full sm:w-auto text-center bg-white text-[#2563eb] px-12 py-5 rounded-md font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-2xl active:scale-95"
            >
              Get Consultation
            </Link>
          </div>

          {/* Minimalist Trust Indicator */}
          <div className="flex items-center gap-4 pt-10 text-white/50">
            <div className="h-[1px] w-12 bg-[#2563eb]"></div>
            <p className="text-[10px] font-bold uppercase tracking-widest">
              Bangalore's Leading Draft Specialists / ISO 9001
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes reveal {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-reveal {
          animation: reveal 1s ease-out forwards;
        }

        h1 {
          text-shadow: 0 10px 40px rgba(0,0,0,0.4);
        }
      `}</style>
    </section>
  );
};

export default Hero;