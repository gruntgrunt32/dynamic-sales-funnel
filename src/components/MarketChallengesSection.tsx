import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface Challenge {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface MarketChallengesSectionProps {
  title: string;
  subtitle: string;
  challenges: Challenge[];
  backgroundImage: string;
  className?: string;
  theme?: {
    textColor: string;
    subtitleColor: string;
    cardBg: string;
    iconBg: string;
    iconColor: string;
    statColor: string;
  };
}

export function MarketChallengesSection({
  title,
  subtitle,
  challenges,
  backgroundImage,
  className = "bg-gradient-to-br from-blue-600 to-blue-700",
  theme = {
    textColor: "text-white",
    subtitleColor: "text-blue-100",
    cardBg: "bg-white/10",
    iconBg: "bg-blue-600/30",
    iconColor: "text-blue-200",
    statColor: "text-blue-300"
  }
}: MarketChallengesSectionProps) {
  return (
    <section className={`py-24 relative overflow-hidden ${className}`}>
      <div className={`absolute inset-0 bg-[url('${backgroundImage}')] opacity-10 bg-cover bg-center mix-blend-overlay`} />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-800/50" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 text-blue-100">
            Market Insights
          </span>
          <h2 className={`text-4xl font-bold mb-6 ${theme.textColor}`}>{title}</h2>
          <p className={`text-xl ${theme.subtitleColor}`}>{subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <div 
                key={index}
                className={`${theme.cardBg} backdrop-blur-sm rounded-xl p-8 transform hover:-translate-y-1 transition-all duration-300 border border-white/10`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${theme.iconBg} mb-6 border border-blue-400/30`}>
                  <Icon className={`w-8 h-8 ${theme.iconColor}`} />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${theme.textColor}`}>{challenge.title}</h3>
                <p className={theme.subtitleColor}>{challenge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}