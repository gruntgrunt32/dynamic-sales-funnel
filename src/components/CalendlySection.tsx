import React, { useEffect } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

interface Feature {
  icon: typeof Calendar | typeof Clock | typeof Users;
  title: string;
  description: string;
}

interface CalendlySectionProps {
  id: string;
  title: string;
  subtitle: string;
  badgeIcon: typeof Clock;
  badgeText: string;
  features: Feature[];
  calendlyUrl: string;
  backgroundImage: string;
}

export function CalendlySection({
  id,
  title,
  subtitle,
  badgeIcon: BadgeIcon,
  badgeText,
  features,
  calendlyUrl,
  backgroundImage
}: CalendlySectionProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id={id} className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className={`absolute inset-0 bg-[url('${backgroundImage}')] opacity-5 bg-cover bg-center mix-blend-overlay`} />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/50 to-blue-800/50" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-white space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/30 rounded-full text-sm font-medium backdrop-blur-sm mb-4">
                <BadgeIcon className="w-4 h-4 mr-2" />
                {badgeText}
              </div>
              
              <h2 className="text-4xl font-bold leading-tight">{title}</h2>
              <p className="text-xl text-blue-100">{subtitle}</p>
              
              <div className="space-y-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 text-blue-100">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{feature.title}</h4>
                        <p className="text-sm text-blue-200">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Right side - Calendly embed */}
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl" />
              
              {/* Calendar container */}
              <div className="bg-white rounded-2xl shadow-2xl p-4 relative backdrop-blur-sm bg-white/95">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50 rounded-2xl" />
                {/* Calendly inline widget */}
                <div 
                  className="calendly-inline-widget relative z-10" 
                  data-url={calendlyUrl}
                  style={{ minWidth: '320px', height: '700px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}