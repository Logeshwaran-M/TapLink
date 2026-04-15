import { Link } from 'react-router-dom';

const services = [
  {
    id: "beer-taps",
    title: "Beer Taps",
    desc: "Industrial-grade dispensing hardware engineered for extreme consistency and laminar flow. Our taps are manufactured from food-grade 304 stainless steel with self-closing mechanisms, ensuring a hygienic, zero-foam pour even in high-traffic commercial environments. Perfect for bars seeking precision and longevity.",
    image: "/service1.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
      </svg>
    ),
  },
  {
    id: "brewery-solutions",
    title: "Brewery Solutions",
    desc: "Comprehensive end-to-end engineering for craft breweries, microbreweries, and brewpubs. We provide custom manifold designs, automated wall-mount dispensing units, and precision keg coupler links. Our modular hardware is designed for scalability, allowing your taproom infrastructure to grow alongside your production capacity without bottlenecks.",
    image: "/service2.avif",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011-1v5m-4 0h4"></path>
      </svg>
    ),
  },
  {
    id: "cooling-tech",
    title: "Cooling Tech",
    desc: "Advanced thermal management systems utilizing high-efficiency glycol chillers and insulated trunk line technology. Our cooling solutions maintain sub-zero temperatures with digital precision, ensuring your beverage is served at the exact desired temperature from the keg to the glass. Built with environmentally friendly refrigerants and heavy-duty compressors.",
    image: "/service3.avif",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    ),
  }
];

const Services = () => {
  return (
  <section className="py-24 bg-white" id='services'>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-blue-900/[0.03] whitespace-nowrap pointer-events-none select-none z-0 tracking-tighter">
        SOLUTIONS
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-blue-500 font-bold mb-2">
            Our Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-blue-900 mb-4 tracking-tight">
            Professional <span className="text-blue-600">Hardware.</span>
          </h3>
          <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
        </div>
      </div>

    <div className="max-w-6xl mx-auto px-6">
      {services.map((service, i) => (
        <div key={i} className={`flex flex-col md:flex-row items-center gap-12 mb-20 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
          <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-2xl">
            <img src={service.image} className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-700" alt={service.title} />
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-5xl font-black text-slate-100 block mb-2">0{i + 1}</span>
            <h3 className="text-3xl font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4 uppercase tracking-tight">{service.title}</h3>
            <p className="text-slate-800 text-base md:text-lg mb-8 font-medium leading-relaxed max-w-xl">
              {service.desc}
            </p>
            <Link to={`/service/${service.id}`} className="bg-[#2563eb] text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-black transition-all shadow-lg shadow-blue-900/10 active:scale-95">
              Explore Specifications
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default Services;