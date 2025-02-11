import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface Issue {
  icon: LucideIcon;
  title: string;
  description: string;
  impact?: string;
}

interface OperationalIssuesSectionProps {
  title: string;
  subtitle: string;
  issues: Issue[];
  badgeText?: string;
  theme?: {
    badge: {
      bg: string;
      text: string;
    };
    subtitle: string;
    card: {
      bg: string;
      shadow: string;
      iconBg: string;
      iconColor: string;
      titleColor: string;
      textColor: string;
      impactColor: string;
    };
  };
}

export function OperationalIssuesSection({
  title,
  subtitle,
  badgeText = "Critical Business Insights",
  theme = {
    badge: {
      bg: "bg-gray-900",
      text: "text-white"
    },
    subtitle: "text-gray-600",
    card: {
      bg: "bg-white",
      shadow: "shadow-xl",
      iconBg: "bg-gray-900",
      iconColor: "text-white",
      titleColor: "text-gray-900",
      textColor: "text-gray-600"
    }
  }
}: OperationalIssuesSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-100 to-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className={`inline-block px-4 py-2 ${theme.badge.bg} ${theme.badge.text} rounded-full text-sm font-medium mb-6`}>
            {badgeText}
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            {title}
          </h2>
          <p className={`text-xl ${theme.subtitle}`}>{subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {issues.map((issue, index) => {
            const Icon = issue.icon;
            return (
              <div 
                key={index}
                className={`group relative ${theme.card.bg} rounded-2xl ${theme.card.shadow} p-8 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${theme.card.iconBg} mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${theme.card.iconColor}`} />
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-4 ${theme.card.titleColor}`}>{issue.title}</h3>
                  <p className={`${theme.card.textColor} mb-4`}>{issue.description}</p>
                  
          
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}