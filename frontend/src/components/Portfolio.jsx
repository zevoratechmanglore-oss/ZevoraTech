import React from 'react';
import { Card, CardContent } from './ui/card';
import { portfolio } from '../mock';
import { ScrollReveal } from './ScrollReveal';

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-transparent to-cyan-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-cyan-950/20 animated-gradient opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fadeInUp">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight">
              Latest Work
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Showcasing our recent projects and client success stories
            </p>
          </div>
        </ScrollReveal>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((project, index) => (
            <ScrollReveal key={project.id} animation="scaleIn" delay={index * 100}>
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-700 border-0 bg-white dark:bg-gray-900 hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      View Project
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <CardContent className="p-6 space-y-2">
                  <div className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-normal group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
