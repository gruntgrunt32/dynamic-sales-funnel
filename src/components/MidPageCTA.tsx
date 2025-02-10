import React from 'react';
import { ChevronRight } from 'lucide-react';

interface MidPageCTAProps {
  title: string;
  subtitle: string;
  ctaButton: {
    text: string;
    subtext: string;
  };
  onButtonClick: () => void;
  backgroundImage: string;
}

export function MidPageCTA({ title, subtitle, ctaButton, onButtonClick, backgroundImage }: MidPageCTAProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
      <div className={`absolute inset-0 bg-[url('${backgroundImage}')] opacity-5 bg-cover bg-center`} />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{title}</h2>
            <p className="text-xl text-blue-100 mb-8">{subtitle}</p>
          </div>

          <div className="text-center">
            <div className="inline-flex flex-col items-center">
              <button 
                onClick={onButtonClick}
                className="group bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center mb-4"
              >
                {ctaButton.text}
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-blue-100 text-sm">{ctaButton.subtext}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}