import React, { useState } from 'react';
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi';

const HomeContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ loading: false, message: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: '', type: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, message: 'Message sent successfully! We will contact you soon.', type: 'success' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.error || 'Something went wrong.');
      }
    } catch (error) {
      setStatus({ loading: false, message: error.message, type: 'error' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading Style - Matching Reviews */}
        <div className="flex flex-col items-center text-center mb-16 animate-reveal">
          <h2 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4 px-4 py-1.5 border border-blue-600/20 bg-blue-50/50 rounded-full">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-4xl font-black text-slate-900 leading-tight tracking-tight uppercase">
            Start Your <span className="text-blue-600">Project</span>
          </h3>
          <div className="mt-6 flex items-center gap-2">
            <div className="h-1.5 w-16 bg-blue-600 rounded-full"></div>
            <div className="h-1.5 w-4 bg-blue-200 rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side */}
          <div className="space-y-8">
            <p className="text-slate-700 text-lg font-bold leading-relaxed max-w-lg">
              Ready to upgrade your dispensing system? Our engineering team is standing by to help you design the perfect draft experience.
            </p>

            <div className="grid sm:grid-cols-1 gap-6">
              <div className="flex gap-5 group items-center">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <HiPhone size={20} />
                </div>
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Call Support</h4>
                  <p className="text-lg font-black text-[#0f172a]">+91 90080 69493</p>
                </div>
              </div>

              <div className="flex gap-5 group items-center">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <HiMail size={20} />
                </div>
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Email Us</h4>
                  <p className="text-lg font-black text-[#0f172a]">pradeep@taplinkindia.in</p>
                </div>
              </div>

              <div className="flex gap-5 group items-start">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <HiLocationMarker size={20} />
                </div>
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Our Location</h4>
                  <p className="text-sm font-bold text-slate-700 leading-relaxed">
                    #67, 2nd Cross, 3rd Main, Lavakusha Nagar, <br />
                    Laggere, Bangalore - 560058
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-bold text-[#0f172a] focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all outline-none" 
                    placeholder="Name" required 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-bold text-[#0f172a] focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all outline-none" 
                    placeholder="Email" required 
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                <input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  type="text" 
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-bold text-[#0f172a] focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all outline-none" 
                  placeholder="How can we help?" required 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-bold text-[#0f172a] focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all outline-none resize-none" 
                  placeholder="Your requirements..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status.loading}
                className={`w-full py-4 ${status.loading ? 'bg-slate-400' : 'bg-[#2563eb] hover:bg-black'} text-white font-black rounded-xl transition-all uppercase tracking-widest text-[10px] shadow-lg active:scale-95`}
              >
                {status.loading ? 'Sending...' : 'Send Inquiry'}
              </button>

              {status.message && (
                <div className={`mt-4 p-4 rounded-xl text-center text-xs font-bold ${status.type === 'success' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeContact;
