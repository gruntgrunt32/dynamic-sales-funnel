import React from 'react';
import { Users, Shield, Zap, BarChart, Clock, Trophy, TrendingDown, AlertTriangle, DollarSign, Ban, Target, Calendar } from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { ProblemSection } from '../components/ProblemSection';
import { SolutionSection } from '../components/SolutionSection';
import { MidPageCTA } from '../components/MidPageCTA';
import { MarketChallengesSection } from '../components/MarketChallengesSection';
import { OperationalIssuesSection } from '../components/OperationalIssuesSection';
import { SocialProofSection } from '../components/SocialProofSection';
import { FAQSection } from '../components/FAQSection';
import { CalendlySection } from '../components/CalendlySection';

export default function HomePage() {
  const scrollToCalendly = () => {
    const element = document.getElementById('calendly-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Rub For"
        highlightedText="Success Today"
        subtitle="Transform your workplace culture with our unique happiness-boosting belly rubs. Watch productivity soar as your team discovers the ancient secret to workplace joy."
        badgeText="Happiness Guaranteed"
        primaryButtonText="Start Rubbing"
        onButtonClick={scrollToCalendly}
        trustText={{main: "Join 500+ Happy Companies", sub: "Spreading joy one belly rub at a time"}}stats={{ value: "97%", label: "Employee Satisfaction Rate"}}


        heroImage={{
          src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
          alt: "Business Growth"
        }}
      />

      <ProblemSection
        title="Success Barriers Hold Back"
        problems={[
          { icon: Users, title: "Workplace Morale Declining", description: "Low employee spirits create a toxic environment that drains productivity and crushes innovation." },
          { icon: Shield, title: "Profit Growth Stagnating", description: "Traditional team building initiatives fail to deliver meaningful ROI, leaving money on the table." },
          { icon: Zap, title: "Missing Magic Touch", description: "Companies struggle to find that unique spark that transforms ordinary workplaces into extraordinary success stories." }
        ]}
      />

      <SolutionSection
        title="Transform Workspace Into Prosperity Zone"
        solutions={[
          "Our sacred belly rubs boost team spirit and workplace energy instantly",
          "Fortune-drawing belly touches deliver consistent 30% monthly revenue increases guaranteed",
          "Experience magical workplace transformation through ancient prosperity-activating belly wisdom"
        ]}

        image={{
          src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
          alt: "Business Solution"
        }}
        stats={{
          value: "98% Success Rate",
          label: "Client Satisfaction"
        }}
      />

      <MidPageCTA
        title="Happiness Guaranteed By Results"
        subtitle="Join 1000+ companies boosting productivity through joyful belly rubs"
        ctaButton={{
          text: "Book Now",
          subtext: "Join 1000+ companies boosting productivity through joyful belly rubs"
        }}
        onButtonClick={scrollToCalendly}
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80"
      />

      <MarketChallengesSection
        title="Is Success Slipping Away?"
        subtitle="Recognize these workplace barriers blocking your path to prosperity? It's time to face them head-on."
        challenges={[
          {
            icon: TrendingDown,
            title: "Employee Engagement Crisis",
            description: "Disengaged teams cost businesses 34% of salary in lost productivity, creating a downward spiral of performance."
          },
          {
            icon: AlertTriangle,
            title: "Wellness Programs Missing the Mark",
            description: "Traditional corporate wellness initiatives fail to deliver authentic joy, resulting in wasted resources and unchanged outcomes."
          },
          {
            icon: DollarSign,
            title: "Fortune Favors Others",
            description: "Without access to proven luck-enhancement methods, companies watch competitors capture market opportunities they should have seized."
          }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
      />

      <OperationalIssuesSection
        title="Modern Business Needs Ancient Wisdom"
        subtitle="Discover why traditional workplace solutions leave companies wanting more"
        issues={[
          {
            icon: Clock,
            title: "Happiness Deficit",
            description: "Modern workplaces lack authentic joy catalysts, leading to decreased team performance."
          },
          {
            icon: Ban,
            title: "Luck Vacuum",
            description: "Companies struggle without reliable fortune-enhancement methods, missing crucial growth opportunities."
          },
          {
            icon: Target,
            title: "Cultural Disconnect",
            description: ""
          }
        ]}
      />

      <SocialProofSection
        title="Real Results, Happy Employees, Better Business"
        subtitle="Join hundreds of companies boosting workplace joy and productivity through our unique wellness solution."
        testimonials={[
          {
            name: "Sarah Chen",
            role: "HR Director, Tech Solutions Inc",
            content: "Team morale increased 40% after implementing Mateus's services. Our employees are happier and more productive than ever!",
            image: {
              src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
              alt: "Sarah Chen"
            }
          },
          {
            name: "Michael O'Brien",
            role: "CEO, Fortune 500 Company",
content: "The belly rubs bring such joy! Our team bonding improved dramatically, and revenue increased 30% since starting.",
            image: {
              src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
              alt: "Michael O'Brien"
            }
          },
          {
            name: "Lisa Wang",
            role: "Operations Manager, StartUp Hub",
            content: "The belly rubs bring such joy! Our team bonding improved dramatically, and revenue increased 30% since starting.",
            image: {
              src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80",
              alt: "Lisa Wang"
            }
          }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
      />

      <FAQSection
        title="Buddha Belly Rubbing FAQs"
        subtitle="Find answers about our unique workplace happiness enhancement service"
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
        gradientColors={{
          from: "blue-600",
          to: "purple-600"
        }}
        decorativeColors={{
          first: "bg-blue-200",
          second: "bg-purple-200",
          third: "bg-pink-200"
        }}
        faqs={[
          {
            question: "How does the buddha belly rubbing service actually work?",
            answer: "Our certified belly-rubbing sessions involve gentle interaction with Mateus, bringing joy and luck through traditional practices in a professional setting."
          },
          {
            question: "What benefits can companies expect from this service?",
            answer: "Companies typically experience increased employee happiness, improved productivity, and positive workplace energy. The joyful giggles create lasting positive effects."
          },
          {
            question: "How long does each belly rubbing session take?",
            answer: "Each session is efficiently structured to maximize benefits while respecting workplace schedules. We accommodate both individual and group sessions."
          },
          {
            question: "Is this service appropriate for all workplace environments?",
            answer: "Yes! Our service is professionally conducted and culturally respectful, suitable for diverse workplace settings and company cultures."
          },
          {
            question: "How do you measure the impact on employee happiness?",
            answer: "We track satisfaction through pre and post-session surveys, measuring happiness levels and productivity improvements in participating teams."
          },
          {
            question: "How frequently should we schedule belly rubbing sessions?",
            answer: "We recommend regular sessions based on your company size and needs, typically weekly or monthly for optimal results."
          }
        ]}
      />

      <CalendlySection
        id="calendly-section"
        title="Book Your Lucky Belly Rub Session"
        subtitle="Transform workplace happiness with our proven fortune-boosting consultation, backed by real results."
        badgeIcon={Clock}
        badgeText="Free Good Fortune Session"
        features={[
          {
            icon: Calendar,
            title: "Flexible Scheduling",
            description: "Choose a time that works best for you"
          },
          {
            icon: Clock,
            title: "15-Minute Session",
            description: "Focused discussion on your business needs"
          },
          {
            icon: Users,
            title: "Expert Consultation",
            description: "Meet with our senior growth strategist"
          }
        ]}
        calendlyUrl="calendly.com/mateus"
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
      />
    </div>
  );
}