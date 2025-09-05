import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Pierrot',
    role: 'MD',
    company: 'African Football Academy',
    image: 'https://res.cloudinary.com/dtsblzjzn/image/upload/v1749280895/pierrot_swphuv.jpg',
    quote: 'Working with Tech Nova was a game-changer. Their WebGL expertise helped us create an interactive experience that wowed our users.',
    rating: 5
  },
  {
    name: 'Herve Moukoury',
    role: 'MD',
    company: 'MSI TV',
    image: 'https://res.cloudinary.com/dtsblzjzn/image/upload/v1749280895/herve_m_c8i52r.jpg',
    quote: 'Twilight transformed our product visualization completely. The 3D rendering quality is exceptional and performance is outstanding.',
    rating: 5
  },
  {
    name: 'Mac Donald',
    role: 'CEO',
    company: 'Horizon Image',
    image: 'https://res.cloudinary.com/dtsblzjzn/image/upload/v1749280896/macd_owoffx.jpg',
    quote: 'The team delivered exactly what we needed - fast, beautiful, and reliable. Our conversion rates increased by 40% after the launch.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            Don't just take our word for it. Here's what industry leaders say about our work.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-400/50 hover:bg-slate-800/50 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-cyan-400" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-slate-400 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;