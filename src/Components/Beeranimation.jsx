import React from 'react';

const bubbleStyles = [
  { width: '4px', height: '4px', left: '10%', animationDelay: '0.2s', animationDuration: '2.2s' },
  { width: '5px', height: '5px', left: '18%', animationDelay: '0.8s', animationDuration: '2.8s' },
  { width: '3px', height: '3px', left: '28%', animationDelay: '1.1s', animationDuration: '2.5s' },
  { width: '4px', height: '4px', left: '36%', animationDelay: '0.5s', animationDuration: '3.1s' },
  { width: '5px', height: '5px', left: '44%', animationDelay: '1.5s', animationDuration: '2.6s' },
  { width: '3px', height: '3px', left: '55%', animationDelay: '0.1s', animationDuration: '2.3s' },
  { width: '4px', height: '4px', left: '63%', animationDelay: '1.8s', animationDuration: '2.9s' },
  { width: '5px', height: '5px', left: '72%', animationDelay: '0.9s', animationDuration: '2.4s' },
  { width: '3px', height: '3px', left: '82%', animationDelay: '1.3s', animationDuration: '3s' },
  { width: '4px', height: '4px', left: '90%', animationDelay: '0.4s', animationDuration: '2.7s' },
];

const BeerAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[350px]">
      <div className="relative group" style={{ height: '240px', width: '160px' }}>
        <div className="absolute -right-3 top-12 w-12 h-32 border-[10px] border-white/20 rounded-r-[2.5rem] z-0 shadow-[inset_-5px_0_15px_rgba(255,255,255,0.1)]"></div>

        <div className="absolute inset-x-3 inset-y-0 bg-white/70 backdrop-blur-md rounded-b-[1.2rem] border-x-[3px] border-b-[6px] border-blue-500/20 z-30 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 flex justify-around px-3 opacity-20 pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-[1px] h-full bg-white/40"></div>
            ))}
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#c2410c] via-[#2563eb] to-[#93c5fd] animate-beer-fill shadow-[inset_0_0_50px_rgba(0,0,0,0.3)] z-10"
            style={{ height: '0%' }}
          >
            <div className="absolute inset-0 overflow-hidden">
              {bubbleStyles.map((bubble, i) => (
                <div key={i} className="absolute bottom-0 bg-white/40 rounded-full animate-bubble" style={bubble}></div>
              ))}
            </div>
          </div>

          <div
            className="absolute left-0 right-0 bg-blue-100 animate-foam-rise z-20 shadow-[0_-10px_20px_rgba(96,165,250,0.65)]"
            style={{ bottom: '0%' }}
          >
            <div className="absolute -top-4 inset-x-0 flex justify-center -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-10 h-10 bg-blue-100 rounded-full"></div>
              ))}
            </div>
          </div>

          <div className="absolute left-3 top-3 w-3 h-[75%] bg-white/10 rounded-full blur-[2px]"></div>
        </div>

        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-white blur-2xl rounded-full"></div>
      </div>

      <button
        onClick={() => window.location.reload()}
        className="mt-10 px-8 py-3 bg-[#2563eb] hover:bg-[#93c5fd] text-white font-black rounded-xl transition-all shadow-[0_10px_30px_rgba(245,158,11,0.35)] hover:-translate-y-0.5 active:scale-95 text-[10px] uppercase tracking-widest"
      >
        POUR A STEIN
      </button>
    </div>
  );
};

export default BeerAnimation;
