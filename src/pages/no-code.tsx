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
        subtitle="Transform your manual workflows into efficient, automated systems that save time, reduce errors, and scale your business - without writing a single line of code."
        badgeText="Expert No-Code Solutions"
        primaryButtonText="Get Started"
        onButtonClick={scrollToCalendly}
        trustText={{main: "Trusted by Growing Businesses", sub: "Specializing in N8N, Zapier, and Make automation solutions"}}stats={{ value: "85%", label: "Average Time Saved Through Automation"}}


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
          subtext: "Save 20+ hours weekly with custom automation solutions"
        }}
        onButtonClick={scrollToCalendly}
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80"
      />

      <MarketChallengesSection
        title="Stop Drowning in Manual Work"
        subtitle="Discover how successful businesses are breaking free from time-consuming manual processes and operational bottlenecks."
        challenges={[
          {
            icon: TrendingDown,
            title: "Costly Manual Task Overload",
            description: "Repetitive tasks drain valuable hours from your team, preventing focus on strategic growth and innovation."
          },
          {
            icon: AlertTriangle,
            title: "Broken Tool Integration",
            description: "Disconnected software systems create data silos and workflow gaps, leading to costly inefficiencies and errors."
          },
          {
            icon: DollarSign,
            title: "Lost Revenue Through Delays",
            description: "Slow, manual follow-ups and process bottlenecks result in missed opportunities and frustrated customers."
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
            description: "67% of businesses don't know which processes to automate first"
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
              alt: "Sarah Chen"
            }
          },
          {
            name: "Mike Rodriguez",
            role: "Operations Director, E-commerce Solutions",
            image: {
              src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
              alt: "Mike Rodriguez"
            }
          },
          {
            name: "Jennifer Walsh",
            role: "Founder, SaaS Platform",
            content: "Their Zapier automations streamlined customer support workflows. Response times dropped from hours to minutes, delighting our clients.",
            image: {
              src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80",
              alt: "Jennifer Walsh"
            }
          }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
      />

      <FAQSection
        title="Automation Solutions FAQ"
        subtitle="Get answers about our expert no-code automation development services"
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
        title="Transform Your Business With Automation"
        subtitle="Discover how our automation expertise can save your business 20+ hours weekly"
        badgeIcon={Clock}
        badgeText="Free Strategy Session"
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
        calendlyUrl="https://calendly.com/austinnreed/n8n"
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
      />
    </div>
  );
}