import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const ScrollReveal = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0,
  className = '',
  ...props 
}) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  const animationClass = {
    fadeInUp: 'scroll-reveal',
    fadeInLeft: 'scroll-reveal-left',
    fadeInRight: 'scroll-reveal-right',
    scaleIn: 'scroll-reveal-scale'
  }[animation] || 'scroll-reveal';

  return (
    <div
      ref={ref}
      className={`${animationClass} ${isVisible ? 'active' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
};
