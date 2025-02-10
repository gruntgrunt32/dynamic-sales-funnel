import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface Problem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProblemSectionProps {
  title: string;
  subtitle?: string;
  problems: Problem[];
  backgroundClass?: string;
  cardStyle?: {
    background: string;
    shadow: string;
    iconColor: string;
    titleColor: string;
    textColor: string;
  };
}

export function ProblemSection({ 
  title, 
  subtitle,
  problems,
  backgroundClass = "bg-gray-50",
  cardStyle = {
    background: "bg-white",
    shadow: "shadow-lg",
    iconColor: "text-blue-600",
    titleColor: "text-gray-800",
    textColor: "text-gray-600"
  }
}: ProblemSectionProps) {
  return (
    <section className={`py-20 ${backgroundClass}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl font-bold mb-4 ${cardStyle.titleColor}`}>{title}</h2>
          {subtitle && <p className={`text-lg ${cardStyle.textColor}`}>{subtitle}</p>}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className={`${cardStyle.background} p-8 rounded-lg ${cardStyle.shadow} transform hover:-translate-y-1 transition-all duration-300`}>
                <div className="mb-4">
                  <Icon className={`w-12 h-12 ${cardStyle.iconColor}`} />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${cardStyle.titleColor}`}>{item.title}</h3>
                <p className={cardStyle.textColor}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}