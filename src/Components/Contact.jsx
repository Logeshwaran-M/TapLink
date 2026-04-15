import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { MdPerson } from 'react-icons/md';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#2563eb] blur-[100px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-[#60a5fa] blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10 animate-reveal">
          <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#60a5fa] font-bold mb-1">Get In Touch</h2>
          <h3 className="text-2xl md:text-3xl font-black text-blue-900 mb-3">Contact TapLink</h3>
          <div className="h-1 w-12 bg-[#2563eb] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-6 animate-reveal">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <MdPerson className="text-[#60a5fa] text-base" />
                <h4 className="text-lg font-bold text-blue-900">Pradeep .B.M</h4>
              </div>
              <p className="text-[#60a5fa] text-[9px] font-bold uppercase tracking-widest mb-3">Managing Director</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Connect with us directly for customized brewery solutions and industrial hardware consultation.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#2563eb]/40 transition-all group">
                <div className="w-8 h-8 bg-[#2563eb]/10 rounded-lg flex items-center justify-center text-[#60a5fa] group-hover:bg-[#2563eb] group-hover:text-white transition-all">
                  <HiMail size={18} />
                </div>
                <div>
                  <p className="text-slate-500 text-[8px] font-bold uppercase tracking-widest mb-0.5">Email Us</p>
                  <p className="text-blue-900 font-bold text-sm">pradeep@taplinkindia.in</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#2563eb]/40 transition-all group">
                <div className="w-8 h-8 bg-[#2563eb]/10 rounded-lg flex items-center justify-center text-[#60a5fa] group-hover:bg-[#2563eb] group-hover:text-white transition-all">
                  <HiLocationMarker size={18} />
                </div>
                <div>
                  <p className="text-slate-500 text-[8px] font-bold uppercase tracking-widest mb-0.5">Our Studio</p>
                  <p className="text-blue-900 font-bold text-sm leading-tight">#67, 2nd Cross, 3rd Main, Lavakusha Nagar, Laggere, Bangalore</p>
                </div>
              </div>
            </div>
          </div>


          {/* Contact Form */}
          <div className="animate-reveal">
            <form className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest ml-1">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/70 border border-white/10 rounded-lg px-4 py-3 text-blue-900 text-sm focus:outline-none focus:border-[#2563eb] transition-colors" 
                    placeholder="John"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest ml-1">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/70 border border-white/10 rounded-lg px-4 py-3 text-blue-900 text-sm focus:outline-none focus:border-[#2563eb] transition-colors" 
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-1.5 mb-4">
                <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white/70 border border-white/10 rounded-lg px-4 py-3 text-blue-900 text-sm focus:outline-none focus:border-[#2563eb] transition-colors" 
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-1.5 mb-6">
                <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest ml-1">Your Message</label>
                <textarea 
                  rows="3"
                  className="w-full bg-white/70 border border-white/10 rounded-lg px-4 py-3 text-blue-900 text-sm focus:outline-none focus:border-[#2563eb] transition-colors resize-none" 
                  placeholder="How can we help?"
                ></textarea>
              </div>

              <button className="w-full py-4 bg-[#2563eb] hover:bg-[#d97706] text-white font-black rounded-xl transition-all shadow-md active:scale-95 uppercase tracking-widest text-xs">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
