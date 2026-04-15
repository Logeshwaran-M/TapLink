import { HiUserGroup, HiOutlineCube, HiOfficeBuilding, HiTrendingUp } from 'react-icons/hi';

const stats = [
  { label: 'Happy Clients', value: '500+', icon: <HiUserGroup size={28} /> },
  { label: 'Taps Installed', value: '1,200+', icon: <HiOutlineCube size={28} /> },
  { label: 'Years Experience', value: '15+', icon: <HiOfficeBuilding size={28} /> },
  { label: 'Growth Rate', value: '45%+', icon: <HiTrendingUp size={28} /> },
];

const StatsSection = () => {
  return (
    <section className="py-12 bg-white border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#2563eb]/50 transition-all text-center"
            >
              <div className="flex justify-center text-[#60a5fa] mb-3 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-2xl font-black text-blue-900 mb-1 group-hover:text-[#60a5fa] transition-colors">
                {stat.value}
              </div>
              <div className="text-slate-500 font-bold uppercase text-[9px] tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default StatsSection;

