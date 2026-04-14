import React, { useEffect } from 'react';
import { HiArrowLeft, HiShieldCheck } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
            <HiShieldCheck className="text-[#2257a3]" /> Privacy <span className="text-[#0ea5e9]">Policy</span>
          </h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Last Updated: April 2026</p>
        </div>

        <div className="space-y-10 bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Information Collection</h2>
            <p className="leading-relaxed text-sm">
              We collect information that you provide directly to us when you fill out our contact form, subscribe to our newsletter, or reach out for a consultation. This may include your name, email address, company name, and phone number.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Use of Information</h2>
            <p className="leading-relaxed text-sm">
              We use the collected information to respond to your inquiries, provide technical support, and send updates regarding our hardware solutions. We do not sell or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Data Security</h2>
            <p className="leading-relaxed text-sm">
              We implement industrial-standard security measures to maintain the safety of your personal information. Your data is stored on secure servers with restricted access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Contact Us</h2>
            <p className="leading-relaxed text-sm">
              If you have any questions regarding this privacy policy, you may contact us using our official email: <strong>pradeep@taplinkindia.in</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
