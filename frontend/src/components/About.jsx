import React from 'react';
import { Target, Eye, Award } from 'lucide-react';
import { companyInfo } from '../mock';
import { ScrollReveal } from './ScrollReveal';

export const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with cutting-edge technology solutions that drive growth and innovation."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the trusted partner for companies seeking to transform their digital presence and capabilities."
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Excellence, innovation, integrity, and client success are at the core of everything we do."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors relative overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-50/30 via-transparent to-blue-50/30 dark:from-cyan-950/20 dark:via-transparent dark:to-blue-950/20 animated-gradient opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fadeInUp">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A team of passionate technologists committed to excellence
            </p>
          </div>
        </ScrollReveal>

        {/* About Content */}
        <ScrollReveal animation="scaleIn" delay={200}>
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl font-light leading-relaxed text-gray-700 dark:text-gray-300 text-center">
              {companyInfo.name} is a premium technology agency that specializes in creating intelligent digital solutions. 
              We combine technical expertise with creative innovation to deliver exceptional results for our clients.
            </p>
          </div>
        </ScrollReveal>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-12 mt-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <ScrollReveal key={index} animation="fadeInUp" delay={index * 150}>
                <div className="text-center space-y-4 group hover:-translate-y-2 transition-transform duration-500">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <IconComponent className="h-8 w-8 text-gray-900 dark:text-white" />
                  </div>
                  <h3 className="text-2xl font-normal group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
