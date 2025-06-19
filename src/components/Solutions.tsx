import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cloud, 
  Database, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Globe, 
  Smartphone,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Solutions: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      id: 'telecom',
      title: 'Telecom & Communications',
      description: 'Complete BSS/OSS suite for telecommunications providers',
      icon: Smartphone,
      color: 'from-blue-600 to-cyan-500',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Real-time billing & charging',
        'Network inventory management',
        'Customer lifecycle management',
        'Revenue assurance',
        'Fraud detection & prevention'
      ],
      stats: { clients: '200+', uptime: '99.99%', transactions: '1B+' }
    },
    {
      id: 'enterprise',
      title: 'Enterprise Data Analytics',
      description: 'AI-powered analytics platform for enterprise decision making',
      icon: BarChart3,
      color: 'from-purple-600 to-pink-500',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Machine learning insights',
        'Data visualization',
        'Automated reporting'
      ],
      stats: { clients: '150+', uptime: '99.9%', dataPoints: '10T+' }
    },
    {
      id: 'cloud',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with enterprise-grade security',
      icon: Cloud,
      color: 'from-green-600 to-emerald-500',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Multi-cloud deployment',
        'Auto-scaling infrastructure',
        'Disaster recovery',
        'Security compliance',
        'Cost optimization'
      ],
      stats: { clients: '300+', uptime: '99.95%', servers: '10K+' }
    }
  ];

  const technologies = [
    { name: 'Kubernetes', icon: Database },
    { name: 'Microservices', icon: Globe },
    { name: 'AI/ML', icon: Zap },
    { name: 'Security', icon: Shield },
    { name: 'Analytics', icon: BarChart3 },
    { name: 'DevOps', icon: Users }
  ];

  const ActiveSolutionIcon = solutions[activeSolution].icon;

  return (
    <section id="solutions" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Industry-Leading
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Tailored solutions for every industry, powered by cutting-edge technology and 
            backed by years of expertise in digital transformation.
          </p>
        </motion.div>

        {/* Solution Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {solutions.map((solution, index) => {
            const SolutionIcon = solution.icon;
            return (
              <motion.button
                key={solution.id}
                onClick={() => setActiveSolution(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeSolution === index
                    ? 'bg-gradient-to-r text-white shadow-xl scale-105'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:scale-102'
                }`}
                style={{
                  background: activeSolution === index 
                    ? `linear-gradient(to right, ${solution.color.split(' ')[1]}, ${solution.color.split(' ')[3]})` 
                    : undefined
                }}
                whileHover={{ scale: activeSolution === index ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SolutionIcon className="w-5 h-5" />
                <span className="hidden sm:inline">{solution.title}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Solution Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSolution}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <motion.h3 
                className="text-4xl font-bold text-slate-900 dark:text-white mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {solutions[activeSolution].title}
              </motion.h3>
              
              <motion.p 
                className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                {solutions[activeSolution].description}
              </motion.p>

              <motion.div 
                className="space-y-4 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                {solutions[activeSolution].features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="grid grid-cols-3 gap-6 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                {Object.entries(solutions[activeSolution].stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">{value}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 capitalize">{key}</div>
                  </div>
                ))}
              </motion.div>

              <motion.button 
                className={`px-8 py-4 bg-gradient-to-r ${solutions[activeSolution].color} text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 flex items-center gap-2`}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={solutions[activeSolution].image}
                  alt={solutions[activeSolution].title}
                  className="w-full h-96 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${solutions[activeSolution].color} opacity-20`} />
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-6 left-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <ActiveSolutionIcon className="w-8 h-8 text-slate-700 dark:text-slate-300" />
                </motion.div>

                <motion.div
                  className="absolute bottom-6 right-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-4"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <div className="text-lg font-bold text-slate-900 dark:text-white">Active</div>
                  <div className="text-xs text-green-500">● Online</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Technology Stack */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
            Powered by Modern Technology
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => {
              const TechIcon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TechIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {tech.name}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;