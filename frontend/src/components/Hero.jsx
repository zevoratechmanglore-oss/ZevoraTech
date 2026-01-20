import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { companyInfo } from '../mock';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Hero = () => {
  const [badgeRef, badgeVisible] = useScrollReveal({ threshold: 0.1 });
  const [titleRef, titleVisible] = useScrollReveal({ threshold: 0.1 });
  const [subtitleRef, subtitleVisible] = useScrollReveal({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useScrollReveal({ threshold: 0.1 });

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden transition-colors">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/50 dark:from-gray-900 dark:via-blue-950/30 dark:to-cyan-950/20 animated-gradient"></div>
      
      {/* Fluid Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/40 via-cyan-200/30 to-transparent dark:from-blue-600/20 dark:via-cyan-600/10 rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-200/40 via-blue-200/30 to-transparent dark:from-cyan-600/20 dark:via-blue-600/10 rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/20 via-cyan-100/20 to-blue-100/20 dark:from-blue-800/10 dark:via-cyan-800/10 dark:to-blue-800/10 rounded-full blur-3xl animated-gradient-shift"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center space-y-8">
          {/* Badge with Reveal */}
          <div 
            ref={badgeRef}
            className={`inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-500 ${badgeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-normal">Innovating Digital Solutions</span>
          </div>

          {/* Main Headline with Staggered Text Reveal */}
          <div 
            ref={titleRef}
            className="space-y-2"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-tight">
              <span className={`inline-block transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-sm'}`} style={{ transitionDelay: '100ms' }}>
                Turning{' '}
              </span>
              <span className={`inline-block font-normal italic transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-sm'}`} style={{ transitionDelay: '200ms' }}>
                ideas
              </span>
              <span className={`inline-block transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-sm'}`} style={{ transitionDelay: '300ms' }}>
                {' '}into
              </span>
              <br />
              <span className={`inline-block bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 dark:from-white dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent font-normal transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-sm'}`} style={{ transitionDelay: '400ms' }}>
                intelligent digital
              </span>
              <br />
              <span className={`inline-block transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-sm'}`} style={{ transitionDelay: '500ms' }}>
                solutions
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className={`text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed transition-all duration-700 ${subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '600ms' }}
          >
            {companyInfo.description}
          </p>

          {/* CTA Buttons */}
          <div 
            ref={ctaRef}
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '700ms' }}
          >
            <Button
              size="lg"
              className="rounded-full bg-black dark:bg-white text-white dark:text-black hover:scale-105 transition-all px-8 py-6 text-base shadow-lg hover:shadow-xl"
              onClick={scrollToContact}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-105 transition-all px-8 py-6 text-base"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
