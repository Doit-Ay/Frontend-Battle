import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-500">
        <AnimatePresence mode="wait">
          <Loader />
        </AnimatePresence>
        <Header />
        <main className="overflow-hidden">
          <Hero />
          <Features />
          <Solutions />
          <Portfolio />
          <Clients />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;