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
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/Logo.png" 
                alt="TapLink Logo" 
                className="h-8 w-auto object-contain" 
              />
              <span className="text-xl font-black tracking-tighter text-white">
                TAP<span className="text-[#0ea5e9]"> LINK</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              The premier destination for high-performance beverage dispensing hardware.
            </p>
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <a 
                  key={index} 
                  href={social.link}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#2257a3] hover:border-[#2257a3] transition-all cursor-pointer text-xs hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-6">Platform</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '')}`} className="text-slate-400 hover:text-[#0ea5e9] transition-colors text-xs">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-6">Support</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#0ea5e9] mt-0.5"><HiLocationMarker size={16} /></span>
                <span className="text-slate-400 text-xs leading-relaxed">
                  #67, 2nd Cross, 3rd Main,<br />
                  Lavakusha Nagar, Laggere,<br />
                  Bangalore - 560 058
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#0ea5e9]"><HiMail size={16} /></span>
                <span className="text-slate-400 text-xs">pradeep@taplinkindia.in</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#0ea5e9]"><HiPhone size={16} /></span>
                <span className="text-slate-400 text-xs">+91 90080 69493</span>
              </li>
            </ul>
          </div>
          {/* Legal Column */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-slate-400 hover:text-[#0ea5e9] transition-colors text-xs">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-400 hover:text-[#0ea5e9] transition-colors text-xs">Terms & Conditions</Link></li>
              <li><a href="/cookie" className="text-slate-400 hover:text-[#0ea5e9] transition-colors text-xs">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-500 font-medium font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} TapLink Tech.
          </p>
         <div className="flex gap-6 text-[10px] text-slate-500 font-medium">
  <a
    href="https://www.innomatricstech.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-700 tracking-tighter hover:text-blue-600"
  >
    Engineered by Innomatrics Tech
  </a>
</div>
        </div>
      </div>
    </footer>


  );
};

export default Footer;

