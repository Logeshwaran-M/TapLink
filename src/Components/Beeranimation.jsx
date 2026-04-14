import React from 'react';

const BeerAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[350px]">
      <div className="relative group" style={{ height: '240px', width: '160px' }}>
        
        {/* Mug Handle */}
        <div className="absolute -right-3 top-12 w-12 h-32 border-[10px] border-white/20 rounded-r-[2.5rem] z-0 shadow-[inset_-5px_0_15px_rgba(255,255,255,0.1)]"></div>

        {/* Main Mug Body */}
        <div className="absolute inset-x-3 inset-y-0 bg-white/5 backdrop-blur-md rounded-b-[1.2rem] border-x-[3px] border-b-[6px] border-white/20 z-30 overflow-hidden shadow-2xl">
          
          {/* Vertical Glass Ridges (Mug Texture) */}
          <div className="absolute inset-0 flex justify-around px-3 opacity-20 pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-[1px] h-full bg-white"></div>
            ))}
          </div>

          {/* Liquid Container */}
          <div 
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#c2410c] via-[#f59e0b] to-[#fbbf24] animate-beer-fill shadow-[inset_0_0_50px_rgba(0,0,0,0.3)] z-10"
            style={{ height: '0%' }}
          >
            {/* Bubbles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(10)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute bottom-0 bg-white/40 rounded-full animate-bubble"
                        style={{ 
                            width: `${2 + Math.random() * 3}px`,
                            height: `${2 + Math.random() * 3}px`,
                            left: `${Math.random() * 100}%`, 
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    ></div>
                ))}
            </div>
          </div>

          {/* Foam Head */}
          <div 
            className="absolute left-0 right-0 bg-white animate-foam-rise z-20 shadow-[0_-10px_20px_rgba(255,255,255,1)]"
            style={{ bottom: '0%' }}
          >
            {/* Fluffy Foam Details */}
            <div className="absolute -top-4 inset-x-0 flex justify-center -space-x-3">
               {[...Array(5)].map((_, i) => (
                 <div key={i} className="w-10 h-10 bg-white rounded-full"></div>
               ))}
            </div>
          </div>

          {/* Glass Highlights */}
          <div className="absolute left-3 top-3 w-3 h-[75%] bg-white/10 rounded-full blur-[2px]"></div>
        </div>

        {/* Base Shadow */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-black/60 blur-2xl rounded-full"></div>
      </div>
      
      <button 
        onClick={() => window.location.reload()} 
        className="mt-10 px-8 py-3 bg-[#2257a3] hover:bg-[#3b82f6] text-white font-black rounded-xl transition-all shadow-[0_10px_30px_rgba(34,87,163,0.3)] hover:-translate-y-0.5 active:scale-95 text-[10px] uppercase tracking-widest"
      >
        POUR A STEIN
      </button>
    </div>
  );
};

export default BeerAnimation;


