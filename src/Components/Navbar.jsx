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
      const sections = ['home', 'services', 'aboutus', 'reviews', 'contact'];
      const targetPoint = window.innerHeight / 3;

      for (const id of sections) {
        const element = document.getElementById(id);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        if (rect.top <= targetPoint && rect.bottom >= targetPoint) {
          setActiveTab(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navItems = [
    { name: 'Home', id: 'home', path: '/#home' },
    { name: 'About', id: 'aboutus', path: '/#aboutus' },
    { name: 'Services', id: 'services', path: '/#services' },
    { name: 'Reviews', id: 'reviews', path: '/#reviews' },
    { name: 'Contact', id: 'contact', path: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] px-4 py-4 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-200 bg-white shadow-xl px-5 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src="/Logo.png" alt="TapLink Logo" className="h-8 w-auto object-contain" />
            <span className="text-xs font-black tracking-[0.3em] text-[#2563eb]">TAPLINK</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = isHomePage && activeTab === item.id;
              // Special case for routing to contact page
              const isContact = item.id === 'contact';
              
              if (isContact) {
                 return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`text-[11px] uppercase tracking-[0.3em] font-black transition-all ${
                      location.pathname === '/contact' ? 'text-[#2563eb]' : 'text-[#334155] hover:text-[#2563eb]'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              }

              return (
                <a
                  key={item.id}
                  href={item.path}
                  className={`text-[11px] uppercase tracking-[0.3em] font-black transition-all ${
                    isActive ? 'text-[#2563eb]' : 'text-[#334155] hover:text-[#2563eb]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <Link
            to="/contact"
            className="hidden md:inline-flex rounded-full bg-[#0f172a] px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.3em] text-white transition-all hover:bg-[#2563eb] shadow-lg shadow-blue-900/10 active:scale-95"
          >
            Book Now
          </Link>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden rounded-full p-2 text-[#0f172a]"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[90] bg-white/95 backdrop-blur-xl transition-all md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-[78%] bg-white p-8 pt-24 transition-transform shadow-2xl ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-8">
            {navItems.map((item) => {
               if (item.id === 'contact') {
                 return (
                   <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-black tracking-[0.1em] text-[#0f172a] uppercase"
                  >
                    {item.name}
                  </Link>
                 )
               }
               return (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black tracking-[0.1em] text-[#0f172a] uppercase"
                >
                  {item.name}
                </a>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-6 rounded-2xl bg-[#0f172a] px-5 py-5 text-center text-xs font-black uppercase tracking-[0.3em] text-white shadow-xl active:scale-95"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;