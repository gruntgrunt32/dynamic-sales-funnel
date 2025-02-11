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
        title="Transform Your"
        highlightedText="Company Culture"
        subtitle="Elevate workplace engagement and boost your ROI through professional dance experiences tailored for corporate environments."
        badgeText="As featured in Fortune 500"
        primaryButtonText="Get Started"
        onButtonClick={scrollToCalendly}
        trustText={{main: "Trusted by Leading Corporations", sub: "Delivering measurable results through dance-driven team building"}}stats={{ value: "100%", label: "Average ROI Increase"}}


        heroImage={{
          src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
          alt: "Business Growth"
        }}
      />

      <ProblemSection
        title="Business Growth Hitting Walls"
        problems={[
          { icon: Users, title: "Stagnant Team Energy", description: "Low workplace morale and enthusiasm are silently killing your company's productivity and innovation potential." },
          { icon: Shield, title: "ROI Falling Short", description: "Traditional team building activities fail to deliver measurable returns on your corporate culture investments." },
          { icon: Zap, title: "Disconnected Workforce", description: "Physical and emotional barriers between team members are creating costly communication breakdowns and reduced collaboration." }
        ]}
      />

      <SolutionSection
        title="Transform Teams Through Dance Power"
        solutions={[
          "Our energetic dance sessions ignite team spirit and boost workplace productivity.",
          "Data-driven dance programs deliver measurable team performance improvements within weeks.",
          "Interactive dance experiences break barriers and foster natural team connections."
        ]}

        image={{
          src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
          alt: "Business Solution"
        }}
        stats={{
          value: "93% Engagement Rate",
          label: "Average Team Participation"
        }}
      />

      <MidPageCTA
        title="100% ROI From Dancing"
        subtitle="Join thousands of companies boosting team performance through dance"
        ctaButton={{
          text: "Book Demo",
          subtext: "Join thousands of companies boosting team performance through dance"
        }}
        onButtonClick={scrollToCalendly}
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80"
      />

      <MarketChallengesSection
        title="Why Teams Struggle To Connect"
        subtitle="Recognize these workplace challenges? Your teams might be missing the rhythm of true collaboration."
        challenges={[
          {
            icon: TrendingDown,
            title: "Teams Stuck in Rigid Routines",
            description: "Monotonous work patterns create invisible walls between departments, reducing creative problem-solving and innovation potential."
          },
          {
            icon: AlertTriangle,
            title: "Engagement Metrics Keep Dropping",
            description: "Traditional team activities fail to energize employees, resulting in decreased participation and wasted resources."
          },
          {
            icon: DollarSign,
            title: "Culture Building Efforts Fall Flat",
            description: "Generic corporate events lack the dynamic energy needed to forge lasting team bonds and drive meaningful change."
          }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
      />

      <OperationalIssuesSection
        title="Modern Business Performance Barriers"
        subtitle="Discover what's really holding your organization back from peak performance"
        issues={[
          {
            icon: Clock,
            title: "Innovation Paralysis",
            description: "Traditional corporate structures stifle creative thinking and limit breakthrough potential."
          },
          {
            icon: Ban,
            title: "Wellness Gap",
            description: "Sedentary work environments create health issues, reducing productivity and increasing costs."
          },
          {
            icon: Target,
            title: "Corporate Silos",
            description: ""
          }
        ]}
      />

      <SocialProofSection
        title="Real Results Through Rhythm Revolution"
        subtitle="Join 100+ companies who doubled their ROI through our innovative corporate dance programs"
        testimonials={[
          {
            name: "Sarah Chen",
            role: "HR Director, Global Tech Solutions",
            content: "Team productivity soared 120% after implementing Horizon Dev's dance programs. Best team-building investment we've ever made!",
            image: {
              src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
              alt: "Sarah Chen"
            }
          },
          {
            name: "Michael Rodriguez",
            role: "CEO, StartUp Innovations Inc",
content: "Employee satisfaction up 85% and productivity doubled. Horizon Dev's dance sessions are now our secret weapon.",
            image: {
              src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
              alt: "Michael Rodriguez"
            }
          },
          {
            name: "Emma Thompson",
            role: "Operations Manager, Fortune 500 Company",
            content: "Employee satisfaction up 85% and productivity doubled. Horizon Dev's dance sessions are now our secret weapon.",
            image: {
              src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80",
              alt: "Emma Thompson"
            }
          }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
      />

      <FAQSection
        title="Corporate Dance Service FAQs"
        subtitle="Get answers about our unique ROI-boosting dance solutions for businesses"
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
            question: "How does dance actually improve our company's ROI?",
            answer: "Our specialized dance programs boost team energy, creativity, and collaboration, leading to documented 100% ROI improvements through increased productivity and workplace satisfaction."
          },
          {
            question: "How long is a typical corporate dance session?",
            answer: "Sessions are customized to your schedule, typically ranging from 30-60 minutes. We design programs that maximize impact while respecting your team's time constraints."
          },
          {
            question: "Can employees of all fitness levels participate?",
            answer: "Absolutely! Our dance routines are adaptable to all fitness levels and abilities. We create inclusive experiences that everyone can enjoy and benefit from."
          },
          {
            question: "How often should we schedule dance sessions?",
            answer: "We recommend weekly sessions for optimal results, but can customize frequency based on your company's needs and goals."
          },
          {
            question: "What type of space is needed for the dance sessions?",
            answer: "A conference room or open office space works perfectly. We require approximately 4 square feet per participant and can adapt to most environments."
          },
          {
            question: "Do you provide virtual dance sessions?",
            answer: "Yes! We offer both in-person and virtual sessions, maintaining the same energy and ROI benefits through our specialized online delivery format."
          }
        ]}
      />

      <CalendlySection
        id="calendly-section"
        title="Transform Your Team Through Dance"
        subtitle="Book a free strategy call to discover how corporate dance drives 100% ROI"
        badgeIcon={Clock}
        badgeText="Free ROI Strategy Session"
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
        calendlyUrl="https://calendly.com/jesus/15min"
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
      />
    </div>
  );
}