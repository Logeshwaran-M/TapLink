import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiArrowLeft, HiPhone, HiShieldCheck, HiX, HiCheck } from 'react-icons/hi';
import { HiArrowsPointingOut } from "react-icons/hi2";
import { HiArrowSmLeft } from "react-icons/hi";

const serviceData = {
  'beer-taps': {
    title: "Beer Taps",
    subtitle: "Precision Dispensing Hardware",
    fullDesc: "Our industrial-grade beer taps are engineered for consistency, longevity, and hygiene. Crafted from high-polished stainless steel, these taps ensure zero flavor contamination and a perfect laminar flow every time. Ideal for high-volume bars and craft breweries seeking perfection in every pour.",
    features: ["Food-grade 304 Stainless Steel", "Self-closing mechanism", "Anti-microbial internal coating", "Modular compatibility"],
    specs: { material: "Stainless Steel", warranty: "5 Years", rating: "IP67" },
    gallery: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg"]
  },
  'brewery-solutions': {
    title: "Brewery Solutions",
    subtitle: "End-to-End Engineering",
    fullDesc: "From custom manifold systems to complete keg line installations, our brewery solutions are designed for scalable production. We provide modular hardware that adapts to your growth, ensuring that your dispensing infrastructure is never the bottleneck for your business.",
    features: ["Custom manifold designs", "Glycol line insulation", "Automated keg cleaning parts", "Pressure regulation units"],
    specs: { material: "Industrial Alloy", warranty: "10 Years", rating: "High-Pressure" },
    gallery: ["9.jpeg", "10.jpeg", "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg", "16.jpeg"]
  },
  'cooling-tech': {
    title: "Cooling Tech",
    subtitle: "Thermal Precision",
    fullDesc: "Maintaining the perfect temperature is critical for beverage quality. Our cooling hardware range includes high-efficiency glycol chillers, insulated trunk lines, and customized cooling towers that ensure your beer is served crisp and cold at the peak of perfection.",
    features: ["High-flow glycol pumps", "Environmentally friendly refrigerants", "Digital temperature controllers", "Heavy-duty heat exchangers"],
    specs: { material: "Titanium Coils", warranty: "3 Years", rating: "Energy Star" },
    gallery: ["17.jpeg", "18.jpeg", "19.jpeg", "20.jpeg", "21.jpeg", "22.jpeg", "23.jpeg", "24.jpeg"]
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceData[id];
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Service Not Found</div>;

  return (
    <div className="bg-[#0f172a] min-h-screen text-slate-200 selection:bg-blue-500/30">
      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-6" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"><HiX size={32} /></button>
          <img src={`/Gallery/${selectedImage}`} className="max-w-full max-h-[85vh] rounded-xl shadow-2xl border border-white/10" alt="Full View" />
        </div>
      )}

      {/* Banner Hero */}
    <section className="relative h-[35vh] flex items-center justify-center overflow-hidden">
  {/* Overlays */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/60 to-[#020617] z-10"></div>
  <img 
    src="/banner.jpeg" 
    alt={service.title} 
    className="absolute inset-0 w-full h-full object-cover scale-105 opacity-60" 
  />
  
  {/* Top Left Navigation */}
  <div className="absolute top-8 left-8 z-30">
    <Link 
      to="/" 
      className="inline-flex items-center text-cyan-400 font-black text-[10px] uppercase tracking-[0.4em] group bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/5 hover:border-cyan-500/30 transition-all"
    >
      <HiArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
      Back
    </Link>
  </div>

  {/* Centered Content */}
  <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
    <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter drop-shadow-2xl">
      {service.title.toUpperCase()}
    </h1>
    <div className="inline-block px-4 py-1 border border-cyan-500/30 bg-cyan-500/5 rounded-full">
      <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-[10px]">
        {service.subtitle}
      </p>
    </div>
  </div>
</section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        
        {/* Left: Info & Gallery */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-blue-500"></span> Overview
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">{service.fullDesc}</p>
          </section>

          <section>
            <h2 className="text-sm font-black uppercase tracking-widest text-blue-500 mb-6">Key Features</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                  <HiShieldCheck className="text-blue-400" size={20} />
                  <span className="text-slate-200 text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm font-black uppercase tracking-widest text-blue-500 mb-6">Visual Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {service.gallery.map((img, i) => (
                <div 
                  key={i} 
                  className="group relative aspect-square bg-slate-800 rounded-xl overflow-hidden cursor-pointer border border-white/5"
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={`/Gallery/${img}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Gallery" />
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <HiArrowsPointingOut className="text-white" size={24} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right: Sidebar Cards */}
        <div className="space-y-6">
          <div className="p-8 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-md">
            <h3 className="text-lg font-bold text-white mb-6">Technical Specs</h3>
            <div className="space-y-4">
              {Object.entries(service.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-slate-500 text-xs uppercase font-bold tracking-wider">{key}</span>
                  <span className="text-slate-200 font-semibold">{value}</span>
                </div>
              ))}
            </div>
            
            <Link 
              to="/contact" 
              className="w-full mt-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest shadow-lg shadow-blue-900/20"
            >
              <HiPhone size={16} /> Consult Specialist
            </Link>
          </div>

          <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-2xl">
            <div className="flex items-center gap-2 mb-4 text-green-400">
              <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Ready to Ship</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-0">
              Full inventory available for immediate dispatch. Custom manifold designs typically ship within 5-7 business days.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetail;