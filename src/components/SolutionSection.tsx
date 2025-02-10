import React from 'react';
import { Target, Users, BarChart } from 'lucide-react';

interface SolutionSectionProps {
  title: string;
  solutions: string[];
  image: {
    src: string;
    alt: string;
  };
}

export function SolutionSection({ title, solutions, image }: SolutionSectionProps) {
  const solutionIcons = [
    { icon: Target, text: solutions[0] },
    { icon: Users, text: solutions[1] },
    { icon: BarChart, text: solutions[2] }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80')] opacity-5 bg-cover bg-center" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium mb-6">
            Our Approach
          </span>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            {title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            {solutionIcons.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mr-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium leading-relaxed text-lg">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl" />
            
            <div className="relative">
              <img 
                src={image.src}
                alt={image.alt}
                className="rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl" />
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-blue-600 font-bold text-2xl">95%</div>
                <div className="text-gray-600 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}