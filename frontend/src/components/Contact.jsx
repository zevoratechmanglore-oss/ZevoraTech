import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';
import { companyInfo } from '../mock';
import { ScrollReveal } from './ScrollReveal';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (frontend only)
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: companyInfo.email },
    { icon: Phone, label: 'Phone', value: companyInfo.phone },
    { icon: MapPin, label: 'Location', value: companyInfo.address }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-50/40 via-cyan-50/20 to-transparent dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-transparent animated-gradient"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fadeInUp">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ready to start your project? Let's talk about how we can help
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollReveal animation="fadeInLeft">
            <div className="space-y-8">
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-5 w-5 text-gray-900 dark:text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{info.label}</div>
                        <div className="text-lg font-normal">{info.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-8">
                <h3 className="text-2xl font-normal mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                    <span>Expert team with proven track record</span>
                  </li>
                  <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                    <span>Cutting-edge technology solutions</span>
                  </li>
                  <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                    <span>Dedicated support and maintenance</span>
                  </li>
                  <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                    <span>On-time delivery and transparent communication</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal animation="fadeInRight">
            <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:shadow-2xl transition-shadow duration-500">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="rounded-xl transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="rounded-xl transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="rounded-xl resize-none transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-black dark:bg-white text-white dark:text-black hover:scale-105 transition-all py-6 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
