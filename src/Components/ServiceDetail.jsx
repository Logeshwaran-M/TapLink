import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from './Footer';
import { HiArrowLeft, HiPhone, HiShieldCheck, HiX, HiCheck } from 'react-icons/hi';
import { HiArrowsPointingOut } from "react-icons/hi2";

const serviceData = {
  'beer-taps': {
    title: "Beer Taps",
    subtitle: "Precision Dispensing Hardware",
    fullDesc: "Our industrial-grade beer taps are engineered for consistency, longevity, and hygiene. Crafted from high-polished stainless steel, these taps ensure zero flavor contamination and a perfect laminar flow every time. Ideal for high-volume bars and craft breweries seeking perfection in every pour.",
    features: ["Food-grade 304 Stainless Steel", "Self-closing mechanism", "Anti-microbial internal coating", "Modular compatibility"],
    specs: { material: "Stainless Steel", warranty: "5 Years", rating: "IP67" },
    products: [
      {
        name: "Pro-Flow V2 Tap",
        desc: "Advanced laminar flow control with a self-closing spring mechanism for high-traffic use.",
        detail: "SS-304 construction.",
        image: "/Gallery/1.jpeg"
      },
      {
        name: "Eco-Pour Mini",
        desc: "Compact design for smaller mobile setups without compromising quality.",
        detail: "Reduced foam technology.",
        image: "/Gallery/2.jpeg"
      }
    ],
    gallery: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg"]
  },
  'brewery-solutions': {
    title: "Brewery Solutions",
    subtitle: "End-to-End Engineering",
    fullDesc: "From custom manifold systems to complete keg line installations, our brewery solutions are designed for scalable production. We provide modular hardware that adapts to your growth, ensuring that your dispensing infrastructure is never the bottleneck for your business.",
    features: ["Custom manifold designs", "Glycol line insulation", "Automated keg cleaning parts", "Pressure regulation units"],
    specs: { material: "Industrial Alloy", warranty: "10 Years", rating: "High-Pressure" },
    products: [
      {
        name: "Multi-Hub Manifold",
        desc: "Centralized distribution hub for managing up to 12 separate draft lines simultaneously.",
        detail: "TIG welded joints.",
        image: "/Gallery/9.jpeg"
      },
      {
        name: "Alpha-Keg Link",
        desc: "Precision keg coupler system with integrated pressure blow-off valves for safety.",
        detail: "Easy-mount bracket system.",
        image: "/Gallery/10.jpeg"
      }
    ],
    gallery: ["9.jpeg", "10.jpeg", "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg", "16.jpeg"]
  },
  'cooling-tech': {
    title: "Cooling Tech",
    subtitle: "Thermal Precision",
    fullDesc: "Maintaining the perfect temperature is critical for beverage quality. Our cooling hardware range includes high-efficiency glycol chillers, insulated trunk lines, and customized cooling towers that ensure your beer is served crisp and cold at the peak of perfection.",
    features: ["High-flow glycol pumps", "Environmentally friendly refrigerants", "Digital temperature controllers", "Heavy-duty heat exchangers"],
    specs: { material: "Titanium Coils", warranty: "3 Years", rating: "Energy Star" },
    products: [
      {
        name: "G-series Chiller XL",
        desc: "High-capacity industrial glycol chiller unit with dual pump redundancy for zero downtime.",
        detail: "Digital thermostat monitoring.",
        image: "/Gallery/17.jpeg"
      },
      {
        name: "Frost-Guard Trunk",
        desc: "Multi-layered insulated trunk line with zero-heat-gain technology for long distance runs.",
        detail: "Up to 100ft continuous run.",
        image: "/Gallery/18.jpeg"
      }
    ],
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

  if (!service) return <div className="min-h-screen bg-white flex items-center justify-center text-blue-900 font-bold">Service Not Found</div>;

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-6" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white hover:rotate-90 transition-transform"><HiX size={32} /></button>
          <img src={selectedImage.startsWith('/') ? selectedImage : `/Gallery/${selectedImage}`} className="max-w-full max-h-[85vh] rounded-xl shadow-2xl ring-4 ring-white/10" alt="Full View" />
        </div>
      )}

      {/* Banner Hero - Scaled down for "small UI" */}
      <section className="relative min-h-[30vh] md:min-h-[25vh] flex items-center justify-start overflow-hidden py-12 md:py-16">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/banner1.png')" }}
        ></div>

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-start text-left">
          <div className="max-w-4xl space-y-3 animate-reveal">
            <div className="pb-1">
              <Link 
                to="/" 
                className="inline-flex items-center text-white font-bold text-[9px] uppercase tracking-[0.4em] group bg-white/10 backdrop-blur-md px-4 py-2 rounded-md border border-white/20 hover:bg-[#2563eb] transition-all"
              >
                <HiArrowLeft size={12} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back
              </Link>
            </div>
            <h2 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-1 opacity-70">
              {service.subtitle}
            </h2>
            <h1 className="text-2xl md:text-4xl font-black leading-tight text-white uppercase tracking-tight">
              {service.title} <span className="text-[#2563eb]">SOLUTIONS</span>
            </h1>
            <p className="text-white text-sm md:text-base leading-relaxed max-w-lg font-bold opacity-90 pb-10">
              Technical specifications and professional components for {service.title}.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-16 bg-white">
        
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-20">
          <section>
            <div className="flex items-center gap-4 mb-4">
               <div className="h-10 w-1.5 bg-[#2563eb] rounded-full"></div>
               <h2 className="text-2xl font-black text-[#0f172a] tracking-tight">Overview</h2>
            </div>
            <p className="text-slate-800 text-lg leading-relaxed font-bold">
              {service.fullDesc}
            </p>
          </section>

          {/* Featured Products with Images */}
          <section className="space-y-10">
            <div className="flex items-center gap-4">
               <div className="h-10 w-1.5 bg-[#2563eb] rounded-full"></div>
               <h2 className="text-2xl font-black text-[#0f172a] tracking-tight">Featured Components</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {service.products.map((product, i) => (
                <div key={i} className="bg-slate-50 rounded-[2.5rem] border border-slate-100 overflow-hidden hover:border-blue-500/20 transition-all shadow-sm group">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
                      onClick={() => setSelectedImage(product.image)}
                    />
                    <div className="absolute top-4 left-4 bg-[#2563eb] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                      Item 0{i+1}
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-lg font-black text-[#0f172a] mb-3 uppercase tracking-tight">{product.name}</h4>
                    <p className="text-slate-700 text-sm leading-relaxed mb-4 font-bold">{product.desc}</p>
                    <div className="flex items-center gap-2 text-[#2563eb] font-bold text-[10px] uppercase tracking-widest">
                      <HiCheck size={14} />
                      {product.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2563eb] mb-8">Superior Features</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {service.features.map((f, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="mt-1 bg-white p-2 rounded-lg text-[#2563eb] border border-slate-200 group-hover:bg-[#2563eb] group-hover:text-white transition-all shadow-sm">
                    <HiShieldCheck size={18} />
                  </div>
                  <span className="text-slate-800 text-sm font-bold pt-1">{f}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <section>
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2563eb] mb-8">Visual Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {service.gallery.map((img, i) => (
                <div 
                  key={i} 
                  className="group relative aspect-square bg-slate-50 rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-slate-200"
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={`/Gallery/${img}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gallery" />
                  <div className="absolute inset-0 bg-[#2563eb]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <HiArrowsPointingOut className="text-white" size={24} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="p-10 bg-white border border-slate-200 rounded-[3rem] shadow-2xl shadow-slate-100">
            <h3 className="text-lg font-black text-[#0f172a] mb-8 uppercase tracking-tight">
               Technical Specs
            </h3>
            <div className="space-y-6">
              {Object.entries(service.specs).map(([key, value]) => (
                <div key={key} className="flex flex-col border-b border-slate-50 pb-4">
                  <span className="text-[#2563eb] text-[9px] uppercase font-bold tracking-[0.2em] mb-1">{key}</span>
                  <span className="text-[#0f172a] font-bold text-base">{value}</span>
                </div>
              ))}
            </div>
            
            <Link 
              to="/contact" 
              className="w-full mt-10 py-4 bg-[#0f172a] hover:bg-black text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 text-[10px] uppercase tracking-widest active:scale-95"
            >
              <HiPhone size={16} /> Contact Support
            </Link>
          </div>

          <div className="p-8 bg-gradient-to-br from-[#2563eb] to-[#1e40af] rounded-[3rem] text-white shadow-xl">
             <div className="flex items-center gap-3 mb-4">
              <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white">Global Shipping Ready</span>
            </div>
            <p className="text-blue-100 text-xs leading-relaxed font-bold">
              Full inventory in stock. Orders ship within <span className="text-white font-black">2-4 business days</span> across metro cities.
            </p>
          </div>
        </div>
      </main>

      <Footer />
      
      <style jsx>{`
        @keyframes reveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal {
          animation: reveal 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ServiceDetail;