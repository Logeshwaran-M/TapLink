import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import { HiMail, HiLocationMarker, HiPhone, HiArrowLeft } from 'react-icons/hi';
import { MdPerson } from 'react-icons/md';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      
      {/* Banner Hero - Scaled down for "small UI" */}
      <section className="relative min-h-[30vh] md:min-h-[20vh] flex items-center justify-start overflow-hidden py-8 md:py-10">
        {/* Full Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/banner1.png')" }}
        ></div>

        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
        
        {/* Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-start text-left">
          <div className="max-w-3xl space-y-3 animate-reveal">
            <div className="pb-1">
              <Link 
                to="/" 
                className="inline-flex items-center text-white font-bold text-[9px] uppercase tracking-[0.4em] group bg-white/10 backdrop-blur-md px-4 py-2 rounded-md border border-white/20 hover:bg-[#2563eb] transition-all"
              >
                <HiArrowLeft size={12} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
                Back
              </Link>
            </div>
            
            <h2 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-1 opacity-70">
              Get In Touch
            </h2>
            <h1 className="text-2xl md:text-4xl font-black leading-tight text-white uppercase tracking-tight">
              CONTACT <span className="text-[#2563eb]">US</span>
            </h1>
            <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-xl font-bold pt-1 pb-10">
              Ready to provide you with industry-leading draft solutions. <br/>
              Reach out to our engineering team today.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            
            {/* Column 1: Contact Details */}
            <div className="h-full flex flex-col justify-between">
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-[#2563eb]"></span> Connect with Us
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-sm font-bold">
                    We're here to help with your brewery engineering needs. Reach out via any channel below and our team will respond promptly.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Contact Items */}
                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#2563eb] border border-blue-100 group-hover:bg-[#2563eb] group-hover:text-white transition-all">
                      <HiPhone size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Call Support</h4>
                      <p className="text-[#0f172a] font-bold text-base">+91 90080 69493</p>
                      <p className="text-slate-400 text-xs font-semibold">Mon-Sat • 9am-6pm</p>
                    </div>
                  </div>

                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#2563eb] border border-blue-100 group-hover:bg-[#2563eb] group-hover:text-white transition-all">
                      <HiMail size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email Us</h4>
                      <p className="text-[#0f172a] font-bold text-base">pradeep@taplinkindia.in</p>
                      <p className="text-slate-400 text-xs font-semibold">Usually 24h response</p>
                    </div>
                  </div>

                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#2563eb] border border-blue-100 group-hover:bg-[#2563eb] group-hover:text-white transition-all">
                      <HiLocationMarker size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Our Location</h4>
                      <p className="text-[#0f172a] font-bold text-sm leading-relaxed">
                        #67, 2nd Cross, 3rd Main, Lavakusha Nagar,<br />
                        Laggere, Bangalore - 560058
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-12 border-t border-slate-100 opacity-50 hidden lg:block">
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Global Engineering Standards • ISO Certified</p>
              </div>
            </div>

            {/* Column 2: Form */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm h-full flex flex-col justify-center">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[#0f172a] text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[#0f172a] text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Project Subject</label>
                  <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[#0f172a] text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all" placeholder="How can we help?" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea rows="4" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[#0f172a] text-sm focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all resize-none" placeholder="Tell us about your requirements..."></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-[#2563eb] hover:bg-black text-white font-black rounded-xl transition-all uppercase tracking-widest text-xs shadow-xl active:scale-95">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>

          {/* Full Width Map Row */}
          <div className="mt-16">
             <div className="w-full h-[400px] rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl relative">
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

export default ContactPage;
