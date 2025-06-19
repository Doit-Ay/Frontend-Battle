import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, TrendingUp, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const keywords = [
    {
      text: 'analytics',
      popup: 'analytics',
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time data processing with AI-powered insights that transform raw data into actionable intelligence.',
      color: 'from-blue-500 to-cyan-500',
      stats: '99.9% accuracy'
    },
    {
      text: 'forecasts',
      popup: 'forecasts',
      icon: TrendingUp,
      title: 'Predictive Forecasting',
      description: 'Machine learning algorithms that predict trends and optimize business outcomes with precision.',
      color: 'from-purple-500 to-pink-500',
      stats: '85% improvement'
    },
    {
      text: 'dashboards',
      popup: 'dashboards',
      icon: Activity,
      title: 'Interactive Dashboards',
      description: 'Customizable, real-time monitoring interfaces that provide instant visibility into your operations.',
      color: 'from-green-500 to-emerald-500',
      stats: '50+ widgets'
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Floating Widgets */}
      {keywords.map((keyword, index) => (
        <AnimatePresence key={keyword.popup}>
          {activePopup === keyword.popup && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className={`absolute z-20 ${
                index === 0 ? 'top-20 left-10' :
                index === 1 ? 'top-1/2 right-16' :
                'bottom-20 left-1/3'
              } hidden lg:block`}
            >
              <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20 max-w-sm">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${keyword.color} flex items-center justify-center mb-4`}>
                  <keyword.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {keyword.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                  {keyword.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                    {keyword.stats}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Transform Data Into{' '}
            <br className="hidden md:block" />
            {keywords.map((keyword, index) => (
              <React.Fragment key={keyword.text}>
                <motion.span
                  className="relative cursor-pointer transition-all duration-300 hover:text-blue-400 border-b-2 border-dotted border-blue-400 pb-1"
                  onMouseEnter={() => setActivePopup(keyword.popup)}
                  onMouseLeave={() => setActivePopup(null)}
                  onFocus={() => setActivePopup(keyword.popup)}
                  onBlur={() => setActivePopup(null)}
                  tabIndex={0}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {keyword.text}
                </motion.span>
                {index < keywords.length - 1 && (index === keywords.length - 2 ? ' & ' : ', ')}
              </React.Fragment>
            ))}
          </motion.h1>
        </motion.div>
        
        <motion.p 
          className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Empower your business with next-generation BSS/OSS solutions that leverage AI, machine learning, 
          and real-time analytics to drive unprecedented growth and operational excellence.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;