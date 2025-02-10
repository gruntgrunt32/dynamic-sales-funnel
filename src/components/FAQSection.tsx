import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  subtitle?: string;
  faqs: FAQ[];
  backgroundImage: string;
  gradientColors: {
    from: string;
    to: string;
  };
  decorativeColors: {
    first: string;
    second: string;
    third: string;
  };
}

export function FAQSection({
  title,
  subtitle,
  faqs,
  backgroundImage,
  gradientColors,
  decorativeColors
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 bg-[url('${backgroundImage}')] opacity-5 bg-cover bg-center`} />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      
      {/* Floating decorative elements */}
      <div className={`absolute top-20 left-10 w-72 h-72 ${decorativeColors.first} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob`} />
      <div className={`absolute top-40 right-10 w-72 h-72 ${decorativeColors.second} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000`} />
      <div className={`absolute -bottom-8 left-20 w-72 h-72 ${decorativeColors.third} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000`} />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            {title}
          </h2>
          {subtitle && <p className="text-gray-600 text-xl">{subtitle}</p>}
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors hover:bg-gray-50"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-8">{faq.question}</h3>
                <ChevronDown 
                  className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}