import React from 'react';
import { Briefcase, Users, Award, UserCheck } from 'lucide-react';
import { stats } from '../mock';
import { ScrollReveal } from './ScrollReveal';

const iconMap = {
  briefcase: Briefcase,
  users: Users,
  award: Award,
  'user-check': UserCheck
};

export const Stats = () => {
  return (
    <section className="py-24 relative overflow-hidden text-white transition-colors">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 dark:from-black dark:via-gray-900 dark:to-blue-950 animated-gradient"></div>
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <ScrollReveal key={stat.id} animation="scaleIn" delay={index * 100}>
                <div className="text-center space-y-3 group hover:-translate-y-2 transition-transform duration-500">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500 mb-2">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="text-4xl md:text-5xl font-light group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider">{stat.label}</div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
