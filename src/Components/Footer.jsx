import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';

const Footer = () => {
  const socials = [
    { icon: <FaFacebookF />, link: '#' },
    { icon: <FaTwitter />, link: '#' },
    { icon: <FaInstagram />, link: '#' },
    { icon: <FaLinkedinIn />, link: '#' },
  ];

  return (
    <footer className="bg-[#0f172a] text-slate-400 pt-20 pb-10 relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <img 
                src="/Logo.png" 
                alt="TapLink Logo" 
                className="h-10 w-auto object-contain" 
              />
              <span className="text-2xl font-black tracking-tight text-[#2563eb] uppercase">
                TAPLINK
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 font-medium">
              Precision engineering for the modern beverage industry. Delivering world-class draft hardware and cooling infrastructure.
            </p>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <a 
                  key={index} 
                  href={social.link}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#2563eb] hover:border-[#2563eb] transition-all duration-300 text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Business Links */}
          <div className="lg:pl-8">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[11px] mb-8">Business</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About us', 'Reviews'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '')}`} 
                    className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block font-medium text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[11px] mb-8">Headquarters</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <HiLocationMarker className="text-[#2563eb] mt-1 shrink-0" size={18} />
                <span className="text-slate-400 text-sm leading-relaxed font-medium">
                  #67, 2nd Cross, 3rd Main, Lavakusha Nagar, Laggere, Bangalore - 560 058
                </span>
              </li>
              <li className="flex items-center gap-4">
                <HiMail className="text-[#2563eb] shrink-0" size={18} />
                <span className="text-slate-400 text-sm font-medium">pradeep@taplinkindia.in</span>
              </li>
              <li className="flex items-center gap-4">
                <HiPhone className="text-[#2563eb] shrink-0" size={18} />
                <span className="text-slate-400 text-sm font-bold">+91 90080 69493</span>
              </li>
            </ul>
          </div>

          {/* Location Map Column */}
          <div className="lg:pl-8">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[11px] mb-8">Locate Us</h4>
            <div className="w-full h-32 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2155745163098!2d77.52554227507727!3d13.023246887296068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d88686d63dd%3A0xe726715f3f4c0d48!2sLaggere%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1713092400000!5m2!1sen!2sin" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="TapLink HQ"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-slate-500 font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} TapLink Engineering. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-500 font-bold uppercase tracking-[0.2em]">Engineered by</span>
            <a 
              href="https://www.innomatricstech.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-[#2563eb] transition-colors font-black text-[11px] uppercase tracking-widest"
            >
              Innomatrics Tech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
