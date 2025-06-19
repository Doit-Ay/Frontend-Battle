import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Github,
  Youtube,
  Instagram
} from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#features', label: 'Features' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#clients', label: 'Clients' },
  ];

  const solutions = [
    { href: '#', label: 'BSS/OSS Platform' },
    { href: '#', label: 'Data Analytics' },
    { href: '#', label: 'Cloud Infrastructure' },
    { href: '#', label: 'AI/ML Services' },
    { href: '#', label: 'Custom Development' },
  ];

  const resources = [
    { href: '#', label: 'Documentation' },
    { href: '#', label: 'API Reference' },
    { href: '#', label: 'Case Studies' },
    { href: '#', label: 'White Papers' },
    { href: '#', label: 'Blog' },
  ];

  const company = [
    { href: '#', label: 'About Us' },
    { href: '#', label: 'Careers' },
    { href: '#', label: 'Press' },
    { href: '#', label: 'Partners' },
    { href: '#', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Nexus Dynamics
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
                  Pioneering the future of intelligent data solutions. We empower businesses to transform 
                  their operations through cutting-edge technology, AI-driven insights, and comprehensive analytics.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-slate-300 hover:text-blue-400 transition-colors duration-300">
                    <Mail className="w-5 h-5 mr-3 text-blue-400" />
                    <span>hello@nexusdynamics.com</span>
                  </div>
                  <div className="flex items-center text-slate-300 hover:text-blue-400 transition-colors duration-300">
                    <Phone className="w-5 h-5 mr-3 text-blue-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-slate-300 hover:text-blue-400 transition-colors duration-300">
                    <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                    <span>San Francisco, CA 94105</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 text-blue-400">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block group"
                    >
                      <span className="group-hover:text-blue-400 transition-colors duration-300">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 text-blue-400">Solutions</h3>
              <ul className="space-y-3">
                {solutions.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block group"
                    >
                      <span className="group-hover:text-blue-400 transition-colors duration-300">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 text-blue-400">Resources</h3>
              <ul className="space-y-3">
                {resources.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block group"
                    >
                      <span className="group-hover:text-blue-400 transition-colors duration-300">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company & Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 text-blue-400">Company</h3>
              <ul className="space-y-3 mb-8">
                {company.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block group"
                    >
                      <span className="group-hover:text-blue-400 transition-colors duration-300">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Newsletter Signup */}
              <div>
                <h4 className="text-sm font-semibold mb-3 text-slate-300">Stay Updated</h4>
                <p className="text-slate-400 text-sm mb-4">
                  Get the latest insights and updates delivered to your inbox.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-l-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  />
                  <motion.button 
                    className="px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-r-xl transition-all duration-300 flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p 
                className="text-slate-400 text-sm mb-4 md:mb-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                © 2025 Nexus Dynamics. All Rights Reserved. Built with ❤️ for the future.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                  Cookie Policy
                </a>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                  Security
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;