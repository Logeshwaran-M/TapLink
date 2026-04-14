import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import { HiMail, HiLocationMarker, HiPhone, HiArrowLeft } from 'react-icons/hi';
import { MdPerson } from 'react-icons/md';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0f172a] min-h-screen text-slate-200">
      
      {/* Banner Hero */}
      <section className="relative h-[35vh] flex items-center justify-center overflow-hidden">
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/60 to-[#020617] z-10"></div>
        <img 
          src="/banner.jpeg" 
          alt="Contact Us" 
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
            CONTACT US
          </h1>
          <div className="inline-block px-4 py-1 border border-cyan-500/30 bg-cyan-500/5 rounded-full">
            <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-[10px]">
              Ready to help you scale
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            
            {/* Column 1: Contact Details */}
            <div className="h-full flex flex-col justify-between">
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-[#0ea5e9]"></span> Get In Touch
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    We're here to help with your brewery engineering needs. Reach out via any channel below and our team will respond promptly.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Contact Items */}
                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-[#0ea5e9] border border-blue-500/20 group-hover:bg-[#0ea5e9] group-hover:text-white transition-all">
                      <HiPhone size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-[#0ea5e9] mb-1">Call Support</h4>
                      <p className="text-white font-bold text-base">+91 98450 12345</p>
                      <p className="text-slate-500 text-xs">Mon-Sat • 9am-6pm</p>
                    </div>
                  </div>

                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-[#0ea5e9] border border-blue-500/20 group-hover:bg-[#0ea5e9] group-hover:text-white transition-all">
                      <HiMail size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-[#0ea5e9] mb-1">Email Us</h4>
                      <p className="text-white font-bold text-base">pradeep@taplinkindia.in</p>
                      <p className="text-slate-500 text-xs">Usually 24h response</p>
                    </div>
                  </div>

                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-[#0ea5e9] border border-blue-500/20 group-hover:bg-[#0ea5e9] group-hover:text-white transition-all">
                      <HiLocationMarker size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-[#0ea5e9] mb-1">Our Location</h4>
                      <p className="text-white font-bold text-sm leading-relaxed">
                        #67, 2nd Cross, 3rd Main, Lavakusha Nagar,<br />
                        Laggere, Bangalore - 560058
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative spacer or additional info can go here to fill space if needed */}
              <div className="pt-8 mt-auto border-t border-white/5 opacity-50 hidden lg:block">
                <p className="text-[10px] uppercase tracking-widest text-slate-500">Global Engineering Standards • ISO Certified</p>
              </div>
            </div>

            {/* Column 2: Form */}
            <div className="bg-slate-900/40 p-8 rounded-3xl border border-white/10 shadow-xl h-full flex flex-col justify-center">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input type="text" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#0ea5e9] transition-all" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#0ea5e9] transition-all" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Project Subject</label>
                  <input type="text" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#0ea5e9] transition-all" placeholder="How can we help?" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea rows="4" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#0ea5e9] transition-all resize-none" placeholder="Tell us about your requirements..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-[#2257a3] hover:bg-[#0ea5e9] text-white font-black rounded-xl transition-all uppercase tracking-widest text-xs shadow-lg shadow-blue-500/10 active:scale-95">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Full Width Map Row */}
          <div className="mt-16 group">
            <h3 className="text-sm font-black text-slate-500 uppercase tracking-[0.3em] mb-6 flex items-center justify-center gap-4">
              <span className="h-[1px] w-12 bg-white/10"></span> Find us on HQ <span className="h-[1px] w-12 bg-white/10"></span>
            </h3>
            <div className="w-full h-[400px] rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2155745163098!2d77.52554227507727!3d13.023246887296068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d88686d63dd%3A0xe726715f3f4c0d48!2sLaggere%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1713092400000!5m2!1sen!2sin" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="TapLink HQ"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default ContactPage;
