import React from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { team } from '../mock';
import { ScrollReveal } from './ScrollReveal';

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-transparent to-cyan-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-cyan-950/20 animated-gradient-shift opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fadeInUp">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The talented people behind our success
            </p>
          </div>
        </ScrollReveal>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <ScrollReveal key={member.id} animation="scaleIn" delay={index * 100}>
              <Card className="group hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-center">
                <CardContent className="p-6 space-y-4">
                  <Avatar className="h-32 w-32 mx-auto group-hover:scale-110 transition-transform duration-500 ring-4 ring-transparent group-hover:ring-blue-200 dark:group-hover:ring-blue-800">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-normal mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{member.name}</h3>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
