import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ArrowLeft, ArrowRight, Play } from 'lucide-react';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [titleOffset, setTitleOffset] = useState({ happy: 0, customers: 0 });
  const [showGrid, setShowGrid] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [sectionVisible, setSectionVisible] = useState(true);

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'Watchem',
      position: 'CTO',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
      quote: 'The automated feedback system runs quietly in the background, providing invaluable insights that have completely transformed our customer service approach. The AI-powered analytics have increased our response efficiency by 300%.',
      rating: 5,
      industry: 'SaaS',
      videoUrl: '#'
    },
    {
      name: 'Sophie Wilson',
      company: 'TechFlow Solutions',
      position: 'Head of Operations',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
      quote: 'Nexus Dynamics shows me what\'s happening at a glance. The dashboard is incredibly intuitive and the data visualization capabilities are exceptional. We\'ve reduced our decision-making time by 60%.',
      rating: 5,
      industry: 'Enterprise',
      videoUrl: '#'
    },
    {
      name: 'Emily James',
      company: 'StartupFlow',
      position: 'Founder & CEO',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
      quote: 'The tools are simple enough for a beginner but powerful enough to scale with our growing business. Perfect balance of usability and functionality. Our team productivity has increased by 150%.',
      rating: 5,
      industry: 'Startup',
      videoUrl: '#'
    },
    {
      name: 'Michael Rodriguez',
      company: 'DataCorp',
      position: 'VP of Engineering',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026707d',
      quote: 'The real-time analytics and predictive insights have revolutionized how we approach data-driven decisions. The platform\'s scalability is impressive - handling millions of data points seamlessly.',
      rating: 5,
      industry: 'Data Analytics',
      videoUrl: '#'
    },
    {
      name: 'Lisa Thompson',
      company: 'CloudVentures',
      position: 'Chief Innovation Officer',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026708d',
      quote: 'Implementation was seamless and the support team is outstanding. The ROI we\'ve seen in just 6 months has exceeded all expectations. This platform is a game-changer for enterprise operations.',
      rating: 5,
      industry: 'Cloud Services',
      videoUrl: '#'
    },
    {
      name: 'David Park',
      company: 'InnovateLabs',
      position: 'Director of Technology',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026709d',
      quote: 'The AI-powered features and machine learning capabilities have automated 80% of our routine tasks. The time savings and accuracy improvements are remarkable. Highly recommended for any tech-forward organization.',
      rating: 5,
      industry: 'R&D',
      videoUrl: '#'
    }
  ];

  const stats = [
    { value: '98%', label: 'Client Satisfaction' },
    { value: '500+', label: 'Success Stories' },
    { value: '150%', label: 'Average ROI Increase' },
    { value: '24/7', label: 'Expert Support' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.7;

      // Check if section is completely out of view (scrolled past)
      if (rect.bottom < -100) {
        setSectionVisible(false);
        return;
      } else {
        setSectionVisible(true);
      }

      if (rect.top < triggerPoint) {
        // Calculate progress from the trigger point to a full transition
        const progress = Math.min(1, (triggerPoint - rect.top) / (triggerPoint - 100)); // 100 is sticky top value
        setTitleOffset({
          happy: -progress * 100,
          customers: progress * 100
        });
        setShowGrid(progress > 0.5);
      } else {
        setTitleOffset({ happy: 0, customers: 0 });
        setShowGrid(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Don't render if section is not visible
  if (!sectionVisible) {
    return null;
  }

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="py-24 bg-white dark:bg-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Animated Title */}
        <div className="sticky top-24 mb-20 z-10">
          <div className="flex justify-between items-center text-6xl md:text-8xl font-bold">
            <motion.h2 
              className="text-slate-900 dark:text-white transition-transform duration-300"
              style={{ transform: `translateX(${titleOffset.happy}%)` }}
            >
              Happy
            </motion.h2>
            <motion.h2 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 transition-transform duration-300"
              style={{ transform: `translateX(${titleOffset.customers}%)` }}
            >
              Customers
            </motion.h2>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-500 ${
            showGrid ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-slate-600 dark:text-slate-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div 
          className={`mb-20 transition-all duration-500 ${
            showGrid ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <Quote className="w-12 h-12 mb-6 opacity-60" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-3 gap-8 items-center"
                >
                  <div className="md:col-span-2">
                    <blockquote className="text-xl md:text-2xl leading-relaxed mb-6">
                      "{testimonials[activeTestimonial].quote}"
                    </blockquote>
                    
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonials[activeTestimonial].avatar}
                        alt={testimonials[activeTestimonial].name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                      />
                      <div>
                        <div className="font-semibold text-lg">{testimonials[activeTestimonial].name}</div>
                        <div className="opacity-80">{testimonials[activeTestimonial].position}</div>
                        <div className="opacity-60 text-sm">{testimonials[activeTestimonial].company}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <motion.button
                      className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 hover:bg-white/30 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="w-8 h-8 ml-1" />
                    </motion.button>
                    <div className="text-sm opacity-80">Watch Video</div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeTestimonial ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${
            showGrid ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {testimonial.position}
                  </p>
                  <p className="text-slate-500 dark:text-slate-500 text-xs">
                    {testimonial.company}
                  </p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                "{testimonial.quote.length > 150 ? testimonial.quote.substring(0, 150) + '...' : testimonial.quote}"
              </blockquote>
              
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  {testimonial.industry}
                </span>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                  Read more →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;