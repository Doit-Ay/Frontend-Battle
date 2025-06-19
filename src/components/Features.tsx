import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Battery, BookOpen, Calendar, Zap, Shield, BarChart, Users } from 'lucide-react';

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  const features = [
    {
      id: 'billing',
      icon: CreditCard,
      title: 'Smart Billing',
      heading: 'AI-Powered Convergent Billing',
      description: 'Revolutionary billing system that processes millions of transactions with 99.9% accuracy. Features real-time rating, automated reconciliation, and intelligent fraud detection.',
      color: 'from-blue-500 to-cyan-500',
      benefits: ['Real-time processing', 'Fraud detection', 'Multi-currency support', 'API integrations'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'charging',
      icon: Battery,
      title: 'Online Charging',
      heading: 'Dynamic Charging Engine',
      description: 'Next-generation charging system with machine learning capabilities for personalized pricing, usage optimization, and predictive analytics.',
      color: 'from-green-500 to-emerald-500',
      benefits: ['Dynamic pricing', 'Usage analytics', 'Predictive modeling', 'Real-time monitoring'],
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'catalog',
      icon: BookOpen,
      title: 'Product Catalog',
      heading: 'Unified Service Catalog',
      description: 'Comprehensive product and service management platform with intelligent bundling, lifecycle management, and automated provisioning.',
      color: 'from-purple-500 to-pink-500',
      benefits: ['Service bundling', 'Lifecycle management', 'Auto-provisioning', 'Version control'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'events',
      icon: Calendar,
      title: 'Event Processing',
      heading: 'Real-Time Event Management',
      description: 'High-performance event processing engine that handles millions of events per second with advanced filtering, correlation, and alerting.',
      color: 'from-orange-500 to-red-500',
      benefits: ['High throughput', 'Event correlation', 'Smart alerting', 'Historical analysis'],
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const additionalFeatures = [
    { icon: Zap, title: 'Lightning Fast', description: 'Sub-millisecond response times' },
    { icon: Shield, title: 'Enterprise Security', description: 'Bank-grade encryption & compliance' },
    { icon: BarChart, title: 'Advanced Analytics', description: 'AI-powered insights & reporting' },
    { icon: Users, title: '24/7 Support', description: 'Dedicated success team' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setActiveTab(current => (current + 1) % features.length);
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [features.length]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setProgress(0);
  };

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Next-Gen BSS/OSS
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Platform
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions engineered for the digital economy. Built with microservices architecture, 
            cloud-native design, and AI-first approach.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-3 mb-16 shadow-2xl border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                onClick={() => handleTabClick(index)}
                className={`relative flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-500 flex-1 min-w-0 ${
                  activeTab === index
                    ? 'text-white shadow-xl transform scale-105'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:scale-102'
                }`}
                whileHover={{ scale: activeTab === index ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeTab === index && (
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl`}
                    layoutId="activeTab"
                    transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  />
                )}
                {activeTab === index && (
                  <motion.div 
                    className="absolute bottom-1 left-1 right-1 h-1 bg-white/30 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                )}
                <feature.icon className="w-5 h-5 relative z-10" />
                <span className="relative z-10 hidden sm:inline">{feature.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <motion.h3 
                    className="text-4xl font-bold text-slate-900 dark:text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {features[activeTab].heading}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {features[activeTab].description}
                  </motion.p>

                  <motion.div 
                    className="grid grid-cols-2 gap-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {features[activeTab].benefits.map((benefit, index) => (
                      <div key={benefit} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${features[activeTab].color}`} />
                        <span className="text-slate-600 dark:text-slate-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </motion.div>

                  <motion.button 
                    className={`px-8 py-4 bg-gradient-to-r ${features[activeTab].color} text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 flex items-center gap-2`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Explore Feature
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
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
                      src={features[activeTab].image}
                      alt={features[activeTab].heading}
                      className="w-full h-80 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${features[activeTab].color} opacity-20`} />
                    
                    {/* Floating Stats */}
                    <motion.div
                      className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-4"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">99.9%</div>
                      <div className="text-xs text-slate-600 dark:text-slate-300">Uptime</div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Additional Features Grid */}
        <motion.div 
          className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;