import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  highlightedText: string;
  subtitle: string;
  badgeText: string;
  primaryButtonText: string;
  onButtonClick: () => void;
  trustText: {
    main: string;
    sub: string;
  };
  stats: {
    value: string;
    label: string;
  };
  heroImage: {
    src: string;
    alt: string;
  };
}

export function HeroSection({
  title,
  highlightedText,
  subtitle,
  badgeText,
  primaryButtonText,
  onButtonClick,
  trustText,
  stats,
  heroImage,
}: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center" />
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/30 rounded-full text-sm font-medium backdrop-blur-sm">
              <span className="animate-pulse w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              {badgeText}
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">{highlightedText}</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">{subtitle}</p>
            <div>
              <button 
                onClick={onButtonClick}
                className="group bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                {primaryButtonText}
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt={`User ${i}`}
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold">{trustText.main}</div>
                <div className="text-blue-200">{trustText.sub}</div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-transparent opacity-50 rounded-2xl" />
            <img 
              src={heroImage.src}
              alt={heroImage.alt}
              className="rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 relative z-10"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-blue-600 p-6 rounded-xl shadow-xl z-20">
              <div className="font-bold text-2xl">{stats.value}</div>
              <div className="text-blue-600/70">{stats.label}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}