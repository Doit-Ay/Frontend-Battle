import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Users, Award } from 'lucide-react';

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentProject, setCurrentProject] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const projects = [
    {
      title: 'SWITCH - Digital Transformation Initiative',
      subtitle: 'Sopra Steria Kick Off 2025',
      color: '#e11937',
      description: 'Revolutionary digital transformation platform enabling seamless business process automation and intelligent workflow management.',
      category: 'Enterprise Software',
      year: '2025',
      team: '25+ Engineers',
      recognition: 'Innovation Award',
      features: ['AI-Powered Automation', 'Real-time Analytics', 'Cloud-Native Architecture', 'Advanced Security'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Grand Hotel Oslo - Luxury Experience Platform',
      subtitle: '150 Years Anniversary Celebration',
      color: '#007bff',
      description: 'Comprehensive hospitality management system with personalized guest experiences and intelligent service optimization.',
      category: 'Hospitality Tech',
      year: '2024',
      team: '18+ Specialists',
      recognition: 'Excellence Award',
      features: ['Guest Personalization', 'Smart Room Controls', 'Predictive Maintenance', 'Revenue Optimization'],
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'NATO Secure Communications Hub',
      subtitle: 'Informal Meeting of Foreign Ministers',
      color: '#28a745',
      description: 'Ultra-secure communication platform with end-to-end encryption and real-time threat detection for diplomatic operations.',
      category: 'Security & Defense',
      year: '2024',
      team: '30+ Experts',
      recognition: 'Security Excellence',
      features: ['Military-Grade Encryption', 'Threat Detection', 'Multi-Language Support', 'Crisis Management'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !sliderRef.current) return;

      const section = sectionRef.current;
      const slider = sliderRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = section.offsetHeight;

      // Calculate scroll progress within the section
      if (rect.top <= 0 && rect.bottom > windowHeight) {
        // Progress from 0 to 1 as we scroll through the section
        const scrolled = Math.abs(rect.top);
        const maxScroll = sectionHeight - windowHeight;
        const progress = Math.min(Math.max(scrolled / maxScroll, 0), 1);
        
        setScrollProgress(progress);
        
        // Calculate translation for the slider
        // We want to move through all projects, so we need (projects.length - 1) steps
        const maxTranslate = ((projects.length - 1) / projects.length) * 100;
        const translateX = progress * maxTranslate;
        
        slider.style.transform = `translateX(-${translateX}%)`;
        
        // Update current project based on progress
        const projectIndex = Math.min(Math.floor(progress * projects.length), projects.length - 1);
        setCurrentProject(projectIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [projects.length]);

  return (
    <section 
      ref={sectionRef}
      id="portfolio" 
      className="relative bg-slate-900"
      style={{ height: `${300}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Project Navigation */}
        <div className="absolute top-8 left-8 z-20">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
            <div className="text-white/60 text-sm mb-2">Project {currentProject + 1} of {projects.length}</div>
            <div className="flex gap-2 mb-3">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`w-8 h-1 rounded-full transition-all duration-300 ${
                    index === currentProject ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            <div className="text-white/40 text-xs">
              Progress: {Math.round(scrollProgress * 100)}%
            </div>
          </div>
        </div>

        <div 
          ref={sliderRef}
          className="flex h-full transition-transform duration-100 ease-out"
          style={{ width: `${projects.length * 100}%` }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full h-full relative overflow-hidden"
              style={{ backgroundColor: project.color }}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center w-full">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white"
                  >
                    <div className="mb-4">
                      <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                        {project.category}
                      </span>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                      {project.title}
                    </h2>
                    
                    <p className="text-xl md:text-2xl opacity-90 mb-6 font-light">
                      {project.subtitle}
                    </p>
                    
                    <p className="text-lg opacity-80 mb-8 leading-relaxed max-w-2xl">
                      {project.description}
                    </p>

                    {/* Project Stats */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 opacity-60" />
                        <div>
                          <div className="text-sm opacity-60">Year</div>
                          <div className="font-semibold">{project.year}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 opacity-60" />
                        <div>
                          <div className="text-sm opacity-60">Team</div>
                          <div className="font-semibold">{project.team}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 opacity-60" />
                        <div>
                          <div className="text-sm opacity-60">Recognition</div>
                          <div className="font-semibold">{project.recognition}</div>
                        </div>
                      </div>
                    </div>

                    <motion.button 
                      className="group px-8 py-4 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-white/30 flex items-center gap-3"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      View Case Study
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </motion.div>

                  {/* Features List */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                    <div className="space-y-4">
                      {project.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center gap-3 text-white/90"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + featureIndex * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-white rounded-full" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Project Number */}
              <div className="absolute top-8 right-8 text-8xl font-bold opacity-20 text-white">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;