import React from 'react';
import { Code, Server, Brain, Cloud, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { services } from '../mock';
import { ScrollReveal } from './ScrollReveal';

const iconMap = {
  code: Code,
  server: Server,
  brain: Brain,
  cloud: Cloud,
  lightbulb: Lightbulb
};

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900 transition-colors relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-blue-50/30 dark:from-gray-800/30 dark:via-transparent dark:to-blue-900/10 animated-gradient opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fadeInUp">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive technology services to bring your vision to life
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <ScrollReveal key={service.id} animation="scaleIn" delay={index * 100}>
                <Card className="group h-full hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <IconComponent className="h-6 w-6 text-gray-900 dark:text-white transition-transform group-hover:scale-110" />
                    </div>
                    <CardTitle className="text-2xl font-normal group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
