import React, { useEffect } from 'react';
import { HiArrowLeft, HiDocumentText } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Terms = () => {
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
            <HiDocumentText className="text-[#2257a3]" /> Terms & <span className="text-[#0ea5e9]">Conditions</span>
          </h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Effective Date: April 2026</p>
        </div>

        <div className="space-y-10 bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed text-sm">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. TapLink specializes in the distribution of industrial beverage hardware.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Professional Use</h2>
            <p className="leading-relaxed text-sm">
              The hardware solutions and technical documentation provided on this site are intended for professional use in brewery and hospitality environments. All specifications are subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Intellectual Property</h2>
            <p className="leading-relaxed text-sm">
              All branding, logos, and digital assets including project images from our gallery are the exclusive property of TapLink India. Unauthorized use of these assets is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Limitation of Liability</h2>
            <p className="leading-relaxed text-sm">
              TapLink shall not be held liable for any indirect or consequential damages resulting from the use or inability to use our hardware systems or digital services.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
