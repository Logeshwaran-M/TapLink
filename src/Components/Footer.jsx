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

          {/* Legal / Policies */}
          <div className="lg:pl-8">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[11px] mb-8">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm font-medium">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm font-medium">Terms & Conditions</Link></li>
              <li><Link to="/cookie" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm font-medium">Cookie Policy</Link></li>
            </ul>
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
