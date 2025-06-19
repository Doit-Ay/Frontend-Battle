import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Users, Award, Target } from 'lucide-react';

const Clients: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isBlurred, setIsBlurred] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [hoveredClient, setHoveredClient] = useState<number | null>(null);

  const clients = [
    { 
      name: 'Brex', 
      logo: 'https://logo.clearbit.com/brex.com?size=120',
      industry: 'FinTech',
      growth: '+150%',
      reveal: false 
    },
    { 
      name: 'Runway', 
      logo: 'https://logo.clearbit.com/runwayml.com?size=120',
      industry: 'AI/ML',
      growth: '+200%',
      reveal: false 
    },
    { 
      name: 'Supercell', 
      logo: 'https://logo.clearbit.com/supercell.com?size=120',
      industry: 'Gaming',
      growth: '+85%',
      reveal: true 
    },
    { 
      name: 'Retool', 
      logo: 'https://logo.clearbit.com/retool.com?size=120',
      industry: 'Developer Tools',
      growth: '+120%',
      reveal: true 
    },
    { 
      name: 'OpenAI', 
      logo: 'https://logo.clearbit.com/openai.com?size=120',
      industry: 'AI Research',
      growth: '+300%',
      reveal: true 
    },
    { 
      name: 'CashApp', 
      logo: 'https://logo.clearbit.com/cash.app?size=120',
      industry: 'Payments',
      growth: '+95%',
      reveal: true 
    },
    { 
      name: 'Stripe', 
      logo: 'https://logo.clearbit.com/stripe.com?size=120',
      industry: 'Payments',
      growth: '+110%',
      reveal: true 
    },
    { 
      name: 'Notion', 
      logo: 'https://logo.clearbit.com/notion.so?size=120',
      industry: 'Productivity',
      growth: '+180%',
      reveal: true 
    },
  ];

  const testimonialStats = [
    { value: '200+', label: 'Global Partners', icon: Users },
    { value: '98%', label: 'Client Satisfaction', icon: Star },
    { value: '150%', label: 'Average Growth', icon: TrendingUp },
    { value: '24/7', label: 'Expert Support', icon: Award },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Reveal animation for logos
      if (rect.top < windowHeight * 0.85) {
        const revealLogos = section.querySelectorAll('[data-reveal="true"]');
        revealLogos.forEach((logo, index) => {
          setTimeout(() => {
            logo.classList.add('revealed');
          }, index * 150);
        });
      }

      // Blur effect and button visibility
      if (rect.bottom < windowHeight) {
        setIsBlurred(true);
        setShowButton(true);
      } else {
        setIsBlurred(false);
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="clients" 
      className="relative h-[200vh] bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-7xl mx-auto px-6">
          <motion.div 
            className={`transition-all duration-500 ${isBlurred ? 'blur-sm scale-95' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Trusted by
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Industry Leaders
                </span>
              </motion.h2>
              <motion.p 
                className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Join hundreds of forward-thinking companies that rely on our solutions to drive innovation and growth
              </motion.p>
            </div>

            {/* Client Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {testimonialStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-white/20"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-slate-600 dark:text-slate-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Client Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  className={`group relative h-32 bg-white dark:bg-slate-700 rounded-2xl flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                    client.reveal ? 'opacity-0 translate-x-12 transition-all duration-600' : ''
                  }`}
                  data-reveal={client.reveal ? 'true' : 'false'}
                  onMouseEnter={() => setHoveredClient(index)}
                  onMouseLeave={() => setHoveredClient(null)}
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} Logo`}
                    className="max-w-[70%] max-h-12 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  
                  {/* Hover Overlay */}
                  <AnimatePresence>
                    {hoveredClient === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-transparent rounded-2xl flex flex-col justify-end p-4 text-white"
                      >
                        <div className="text-sm font-medium">{client.industry}</div>
                        <div className="text-xs opacity-90 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {client.growth} growth
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Meet Customers Button */}
          <AnimatePresence>
            {showButton && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <motion.a
                  href="#testimonials"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-2xl hover:shadow-2xl transition-all duration-300 pointer-events-auto flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Meet our customers
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .client-logo-container.revealed {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Clients;