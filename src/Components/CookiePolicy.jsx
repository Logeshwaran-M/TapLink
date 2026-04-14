import React, { useEffect } from 'react';
import { HiArrowLeft, HiDatabase } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[#0ea5e9] font-bold text-xs uppercase tracking-widest mb-10 hover:translate-x-[-4px] transition-transform">
          <HiArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 flex items-center gap-4">
            <HiDatabase className="text-[#2257a3]" /> Cookie <span className="text-[#0ea5e9]">Policy</span>
          </h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Last Updated: April 2026</p>
        </div>

        <div className="space-y-10 bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. What are Cookies?</h2>
            <p className="leading-relaxed text-sm">
              Cookies are small text files stored on your device when you visit our website. They help us provide a smoother experience by remembering your preferences and analyzing site traffic.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <h3 className="text-[#0ea5e9] font-bold text-sm mb-2 uppercase tracking-wider">Essential Cookies</h3>
                <p className="text-xs text-slate-400">Necessary for the website to function correctly (e.g., security and navigation).</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <h3 className="text-[#0ea5e9] font-bold text-sm mb-2 uppercase tracking-wider">Performance Cookies</h3>
                <p className="text-xs text-slate-400">Help us understand how visitors interact with the site to improve performance.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Managing Your Preferences</h2>
            <p className="leading-relaxed text-sm">
              You can choose to disable cookies through your individual browser options. However, please note that disabling certain cookies may affect the functionality of our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
