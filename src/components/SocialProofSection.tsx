import React from 'react';
import { MessageCircle, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: {
    src: string;
    alt: string;
  };

}

interface SocialProofSectionProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
  backgroundImage: string;
}

export function SocialProofSection({
  title,
  subtitle,
  testimonials,
  backgroundImage,
}: SocialProofSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
      <div className={`absolute inset-0 bg-[url('${backgroundImage}')] opacity-5 bg-cover bg-center mix-blend-overlay`} />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-6 text-white">{title}</h2>
          <p className="text-xl text-blue-200">{subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative transform hover:-translate-y-1 transition-all duration-300 border border-white/10"
            >
              <Quote className="w-12 h-12 text-white/10 absolute right-8 top-8" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img 
                    src={testimonial.image.src}
                    alt={testimonial.image.alt}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-400/30"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-blue-400 rounded-full p-1">
                    <MessageCircle className="w-4 h-4 text-blue-900" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-blue-200">{testimonial.role}</p>
                </div>
              </div>
              
              <blockquote className="text-blue-100 mb-6 relative">
                "{testimonial.content}"
              </blockquote>
              
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}