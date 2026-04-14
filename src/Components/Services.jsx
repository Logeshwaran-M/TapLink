import { Link } from 'react-router-dom';

const services = [
  {
    id: "beer-taps",
    title: "Beer Taps",
    desc: "Industrial-grade dispensing taps for consistent flow and durability. Designed for high-volume environments.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
      </svg>
    ),
  },
  {
    id: "brewery-solutions",
    title: "Brewery Solutions",
    desc: "End-to-end hardware solutions for craft breweries and tasting rooms with modular configurations.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
      </svg>
    ),
  },
  {
    id: "cooling-tech",
    title: "Cooling Tech",
    desc: "Glycol cooling systems and stainless steel towers for maintaining the perfect serving temperature.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    ),
  }
];

const Services = () => {
  return (
    <section id="services" className="py-12 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#2257a3]/5 blur-[80px] rounded-full"></div>
        
        <div className="text-center mb-10 animate-reveal">
          <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#0ea5e9] font-bold mb-1">Our Expertise</h2>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-3">Professional Solutions</h3>
          <div className="h-1 w-12 bg-[#2257a3] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service, index) => (
             <Link to={`/service/${service.id}`} className="flex items-center gap-2 text-xs text-[#0ea5e9] font-bold group/btn">
            <div 
              key={index} 
              className="group relative p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#2257a3]/40 transition-all overflow-hidden"
            >
              {/* Card Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2257a3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-10 h-10 bg-[#2257a3]/10 rounded-xl flex items-center justify-center text-[#0ea5e9] mb-5 group-hover:bg-[#2257a3] group-hover:text-white transition-all shadow-md">
                  <div className="scale-75">{service.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#0ea5e9] transition-colors">{service.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-5">{service.desc}</p>

               
                  Full Details & Gallery 
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              
              </div>
            </div>
             </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


