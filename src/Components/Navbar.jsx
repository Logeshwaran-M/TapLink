import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = ['home', 'services', 'process', 'aboutus', 'contact'];
      const targetPoint = window.innerHeight / 3;

      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        setActiveTab('contact');
        return;
      }

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= targetPoint && rect.bottom >= targetPoint) {
            if (['home', 'services', 'aboutus', 'contact'].includes(id)) {
              setActiveTab(id);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navItems = [
    { name: 'Home', id: 'home', path: '/' },
    { name: 'Services', id: 'services', path: '/#services' },
    { name: 'About Us', id: 'aboutus', path: '/#aboutus' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] px-4 py-2 md:py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-2xl px-5 py-2 border border-white/10 shadow-2xl backdrop-blur-xl">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src="/Logo.png" 
                alt="TapLink Logo" 
                className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
              />
              <span className="text-xl font-black tracking-tighter text-white">
                TAP<span className="text-[#0ea5e9]"> LINK</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => {
              const isActive = isHomePage && activeTab === item.id;
              return (
                <a 
                  key={item.id} 
                  href={item.path} 
                  className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all relative group ${
                    isActive ? 'text-[#0ea5e9]' : 'text-slate-300 hover:text-[#0ea5e9]'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1.5 left-0 h-1 bg-[#2257a3] rounded-full transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              );
            })}
          </div>

          {/* Desktop Call to Action */}
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className={`px-6 py-2.5 font-black rounded-xl transition-all text-[10px] uppercase tracking-widest shadow-lg ${
                location.pathname === '/contact' 
                  ? 'bg-white text-[#2257a3] scale-105' 
                  : 'bg-[#2257a3] hover:bg-[#1d4b8f] text-white hover:shadow-[#2257a3]/40'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 z-[90] bg-slate-950/90 backdrop-blur-md transition-all duration-500 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={`absolute top-0 right-0 h-full w-[80%] bg-slate-900 border-l border-white/10 p-8 pt-24 transition-transform duration-500 transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col space-y-8">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={item.path} 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black text-white hover:text-[#0ea5e9] transition-colors tracking-tight"
              >
                {item.name}
              </a>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="bg-[#2257a3] text-white p-5 rounded-2xl text-center font-black text-lg shadow-xl"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-20 border-t border-white/5 pt-8 text-center text-slate-500">
            <p className="text-xs font-bold uppercase tracking-widest">Inquire Now</p>
            <p className="text-white font-black mt-2">pradeep@taplinkindia.in</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;




