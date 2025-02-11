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
        title="Automate Your"
        highlightedText="Business Today"
        subtitle="Get professional automation development that saves you 20+ hours per week. Our experts build reliable, custom workflows using N8N, Zapier, and Make - without the enterprise price tag."
        badgeText="Trusted Automation Experts"
        primaryButtonText="Get Started"
        onButtonClick={scrollToCalendly}
        trustText={{
          main: "Powering Business Growth Through Automation",
          sub: "Expert developers specializing in N8N, Zapier, Make, and AI integration"
        }}
        stats={{
          value: "20+",
          label: "Hours Saved Weekly"
        }}
        heroImage={{
          src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
          alt: "Business Growth"
        }}
      />

      <ProblemSection
        title="Automation Struggles Stop Growth"
        problems={[
          { icon: Users, title: "Time Slips Away", description: "Manual tasks and repetitive processes drain countless hours that could be spent growing your business." },
          { icon: Shield, title: "Technical Maze Confusion", description: "Complex automation tools and API integrations become overwhelming without specialized expertise." },
          { icon: Zap, title: "Growth Hits Walls", description: "Manual workflows crumble under pressure as your business scales, creating bottlenecks that strangle growth." }
        ]}
      />

      <SolutionSection
        title="Automation That Powers Your Success"
        subtitle="Expert Solutions Ready"
        solutions={[
          "Our expert automation developers turn manual tasks into efficient, streamlined workflows.",
          "Custom no-code solutions make complex integrations simple and stress-free.",
          "Scalable automation systems grow seamlessly alongside your expanding business needs."
        ]}
        image={{
          src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
          alt: "Business Solution"
        }}
        stats={{
          value: "85%",
          label: "Average time saved through our custom automation solutions"
        }}
      />

      <MidPageCTA
        title="Trusted By Growing Businesses"
        subtitle="Save 20+ hours weekly with custom automation solutions"
        ctaButton={{
          text: "Get Started",
          subtext: "No commitment required"
        }}
        onButtonClick={scrollToCalendly}
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80"
      />

      <MarketChallengesSection
        title="Manual Processes Are Killing Your Business Growth"
        subtitle="Discover how these common automation challenges are limiting your success and draining your most valuable resource: time."
        challenges={[
          {
            icon: TrendingDown,
            title: "Drowning in Repetitive Tasks",
            description: "Valuable hours wasted on manual data entry and follow-ups prevent focus on strategic business growth."
          },
          {
            icon: AlertTriangle,
            title: "Disconnected Systems Creating Chaos",
            description: "Disjointed software tools create data silos and inefficiencies, leading to missed opportunities and frustrated teams."
          },
          {
            icon: DollarSign,
            title: "Technical Barriers Block Progress",
            description: "Limited expertise with automation platforms leads to costly mistakes and implementation delays."
          }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
      />

      <OperationalIssuesSection
        title="Technical Expertise Gap Widens"
        subtitle="See why businesses struggle to implement effective automation solutions"
        issues={[
          {
            icon: Clock,
            title: "Integration Complexity",
            description: "Modern businesses require multiple tools working together seamlessly to succeed"
          },
          {
            icon: Ban,
            title: "Security Risks",
            description: "Manual processes and improper automation create dangerous compliance vulnerabilities"
          },
          {
            icon: Target,
            title: "Knowledge Gap",
            description: "Identifying high-impact automation opportunities requires specialized expertise"
          }
        ]}
      />

      <SocialProofSection
        title="What Our Clients Say"
        subtitle="Join hundreds of successful businesses that have transformed their growth with our expertise"
        testimonials={[
          {
            name: "Sarah Johnson",
            role: "CEO, TechStart",
            content: "The results we've seen since implementing their strategies have been remarkable. Our revenue grew by 156% in just 8 months, and we're still seeing consistent growth.",
            image: {
              src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
              alt: "Sarah Johnson"
            }
          },
          {
            name: "Michael Chen",
            role: "Founder, GrowthX",
            content: "Their expertise helped us double our revenue in just 6 months. The strategic guidance and hands-on support were exactly what we needed to scale effectively.",
            image: {
              src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
              alt: "Michael Chen"
            }
          },
          {
            name: "Emma Davis",
            role: "Director, InnovateNow",
            content: "The best investment we've made for our business growth. Their team's dedication and expertise have transformed our approach to scaling our operations.",
            image: {
              src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80",
              alt: "Emma Davis"
            }
          }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services"
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
            question: "How long does it take to see results?",
            answer: "Most clients see initial results within 30-60 days, with significant improvements within 90 days. Our proven methodology is designed for both quick wins and sustainable long-term growth. We'll work with you to establish clear KPIs and milestones to track progress."
          },
          {
            question: "What industries do you work with?",
            answer: "We work with businesses across various sectors, including tech, retail, services, and manufacturing. Our strategies are adaptable and have proven successful across different industries. We have particular expertise in B2B, SaaS, e-commerce, and professional services."
          },
          {
            question: "What's the investment required?",
            answer: "We offer flexible packages tailored to your business size and needs. Our pricing is transparent and based on the scope of services required. Most clients invest between $2,500 to $10,000 per month, with ROI typically achieved within the first quarter."
          },
          {
            question: "Do you offer ongoing support?",
            answer: "Yes, we provide comprehensive ongoing support through dedicated account managers, regular strategy sessions, and real-time communication channels. Our team is always available to address concerns and optimize strategies as your business evolves."
          },
          {
            question: "How do you measure success?",
            answer: "We establish clear, measurable KPIs aligned with your business goals. These typically include revenue growth, market share, customer acquisition costs, and ROI. We provide detailed monthly reports and analytics dashboards to track progress transparently."
          },
          {
            question: "Can you integrate with our existing systems?",
            answer: "Absolutely. Our solutions are designed to integrate seamlessly with your existing tools and workflows. We conduct a thorough assessment of your current systems and ensure our strategies complement and enhance your existing operations."
          }
        ]}
      />

      <CalendlySection
        id="calendly-section"
        title="Ready to Transform Your Business?"
        subtitle="Schedule your free consultation today and let's discuss your growth strategy."
        badgeIcon={Clock}
        badgeText="Book your free consultation"
        features={[
          {
            icon: Calendar,
            title: "Flexible Scheduling",
            description: "Choose a time that works best for you"
          },
          {
            icon: Clock,
            title: "30-Minute Session",
            description: "Focused discussion on your business needs"
          },
          {
            icon: Users,
            title: "Expert Consultation",
            description: "Meet with our senior growth strategist"
          }
        ]}
        calendlyUrl="https://calendly.com/your-calendar-url"
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
      />
    </div>
  );
}