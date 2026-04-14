import React, { useState } from 'react';
import { HiX, HiPlus, HiLink } from 'react-icons/hi';

const HomeGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const row1 = ["25.jpeg", "26.jpeg", "27.jpeg", "28.jpeg", "29.jpeg", "30.jpeg"];
  const row2 = ["31.jpeg", "32.jpeg", "33.jpeg", "34.jpeg", "35.jpeg", "36.jpeg"];

  return (
    <section id="gallery" className="py-12 bg-slate-950 overflow-hidden relative">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-[#2257a3]/10 via-transparent to-[#0ea5e9]/10 pointer-events-none"></div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[1000] bg-slate-950/95 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
            <HiX size={28} />
          </button>
          <img 
            src={`/Gallery/${selectedImage}`} 
            className="max-w-[85vw] max-h-[80vh] object-contain rounded-lg shadow-2xl animate-zoomIn border border-white/10" 
            alt="Full Focus" 
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#0ea5e9] font-black mb-2 px-4 py-1.5 bg-white/5 inline-block rounded-full border border-white/10">
          Project Marquee
        </h2>
        <h3 className="text-2xl md:text-3xl font-black text-white">
          Visualizing <span className="text-gradient">Hardware.</span>
        </h3>
      </div>

      <div className="space-y-4">
        {/* Row 1 - Scrolling Right */}
        <div className="flex gap-4 animate-scroll-right">
          {[...row1, ...row1].map((img, index) => (
            <div 
              key={index}
              className="flex-none w-48 h-32 md:w-64 md:h-44 relative rounded-xl overflow-hidden cursor-pointer group border border-white/5"
              onClick={() => setSelectedImage(img)}
            >
              <img src={`/Gallery/${img}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="" />
              <div className="absolute inset-0 bg-[#2257a3]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <HiPlus className="text-white text-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Scrolling Left */}
        <div className="flex gap-4 animate-scroll-left">
          {[...row2, ...row2].map((img, index) => (
            <div 
              key={index}
              className="flex-none w-48 h-32 md:w-64 md:h-44 relative rounded-xl overflow-hidden cursor-pointer group border border-white/5"
              onClick={() => setSelectedImage(img)}
            >
              <img src={`/Gallery/${img}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="" />
              <div className="absolute inset-0 bg-[#0ea5e9]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <HiLink className="text-white text-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
          width: max-content;
        }
        .animate-scroll-left {
          animation: scroll-left 45s linear infinite;
          width: max-content;
        }
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 8px)); }
        }
        @keyframes scroll-left {
          0% { transform: translateX(calc(-50% - 8px)); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default HomeGallery;


