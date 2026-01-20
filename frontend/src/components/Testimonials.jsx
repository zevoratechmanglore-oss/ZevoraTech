import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';
import { testimonials } from '../mock';
import { ScrollReveal } from './ScrollReveal';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors relative overflow-hidden">
      {/* Subtle animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/20 via-transparent to-blue-50/20 dark:from-cyan-950/10 dark:via-transparent dark:to-blue-950/10 animated-gradient-shift opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fadeInUp">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} animation="fadeInUp" delay={index * 150}>
              <Card className="group h-full hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="p-8 space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-1 group-hover:scale-110 transition-transform duration-300 origin-left">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 100}ms`, animationDuration: '2s' }} />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="font-normal group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
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
