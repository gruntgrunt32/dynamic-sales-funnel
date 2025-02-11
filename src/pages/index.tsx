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
        title="Real Results, Happy Clients, Zero Code"
        subtitle="See how businesses cut manual work by 80% with our automation expertise"
        testimonials={[
          {
            name: "Sarah Chen",
            role: "CEO, Digital First Marketing Agency",
            content: "Horizon Dev automated our client onboarding, saving 15 hours weekly. Their N8N expertise transformed our workflow overnight.",
            image: {
              src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
              alt: "Sarah Johnson"
            }
          },
          {
            name: "Mike Rodriguez",
            role: "Operations Director, E-commerce Solutions",
            content: "They integrated our CRM with Make.com, eliminating data silos. Sales follow-ups are now instant, boosting conversion rates 40%.",
            image: {
              src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
              alt: "Michael Chen"
            }
          },
          {
            name: "Jennifer Walsh",
            role: "Founder, SaaS Platform",
            content: "Their Zapier automations streamlined customer support workflows. Response times dropped from hours to minutes, delighting our clients.",
            image: {
              src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80",
              alt: "Emma Davis"
            }
          }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
      />

      <FAQSection
        title="Automation Solutions FAQ"
        subtitle="Get answers about our expert no-code automation development services"
        faqs={[
          {
            question: "How quickly can you implement automation solutions?",
            answer: "Project timelines vary based on complexity, but we work on an hourly basis to deliver efficient solutions. Most automations can be implemented within days to weeks."
          },
          {
            question: "Which automation platforms do you work with?",
            answer: "We specialize in N8N, Zapier, and Make platforms, creating custom automation solutions that integrate seamlessly with your existing business tools and workflows."
          },
          {
            question: "Do I need technical knowledge to work with you?",
            answer: "No technical expertise required. Our developers handle all technical aspects while you focus on your business goals and requirements."
          },
          {
            question: "How do you ensure automation reliability and security?",
            answer: "We implement robust error handling, monitoring systems, and security measures in every automation to ensure reliable, secure operation of your workflows."
          },
          {
            question: "What types of tasks can you automate?",
            answer: "We automate various tasks including data entry, sales follow-ups, customer service responses, API integrations, and complex workflow processes across multiple platforms."
          },
          {
            question: "How do you handle system integration challenges?",
            answer: "Our expert developers seamlessly connect different platforms and APIs, ensuring smooth data flow and communication between all your business tools."
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