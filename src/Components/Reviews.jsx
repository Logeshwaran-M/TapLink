import React from 'react';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Thompson",
      role: "Brewery Owner",
      content: "TapLink transformed our distribution process. The efficiency and reliability they bring to the table is unmatched in the industry.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Operations Manager",
      content: "The real-time tracking and seamless integration helped us scale our operations by 40% in just six months. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      id: 3,
      name: "Michael Roberts",
      role: "Supply Chain Director",
      content: "Finally, a solution that understands the complexities of beverage logistics. The support team is also incredibly responsive.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-slate-50" id="reviews">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Matching requested style */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-black text-[#2563eb] mb-4">
            CLIENT FEEDBACK
          </h2>
          <p className="text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight">
            Trusted <span className="text-[#2563eb]">Testimonials.</span>
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1.5 w-16 bg-[#2563eb] rounded-full"></div>
          </div>
        </div>

        {/* Normal UI Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Star Rating - Top */}
              <div className="flex mb-4 gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} size={14} className="text-amber-400" />
                ))}
              </div>

              {/* Review Content */}
              <p className="text-slate-800 text-base leading-relaxed mb-6 flex-grow font-medium">
                "{review.content}"
              </p>

              {/* User Info - Traditional Alignment */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all"
                />
                <div>
                  <h4 className="font-bold text-[#0f172a] text-sm leading-tight">{review.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-[#2563eb] font-bold mt-1">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Join Link */}
        <div className="mt-16 text-center">
          <p className="text-sm font-bold text-slate-400">
            Trusted by <span className="text-[#2563eb]">500+</span> global businesses
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
