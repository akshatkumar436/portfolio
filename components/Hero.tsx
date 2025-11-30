import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { PERSONAL_INFO } from '../constants';
import { ChevronDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px] -z-10" />

      {/* Terminal Intro */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-mono text-neon-cyan text-sm mb-4 tracking-widest"
      >
        &gt; INITIALIZING_PORTFOLIO_V1.0...
      </motion.div>

      {/* Name */}
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-8xl font-bold font-display text-white mb-4 tracking-tight"
      >
        {PERSONAL_INFO.name}
      </motion.h1>

      {/* Role with Typewriter */}
      <div className="h-8 md:h-12 mb-8 font-display text-xl md:text-3xl text-gray-400">
        <span>I am a </span>
        <span className="text-neon-purple font-semibold">
          <Typewriter
            words={['Data Analyst', 'Business Analyst', 'Storyteller']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </div>

      {/* Stats Row */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl w-full"
      >
        {[
          { label: 'Transactions Analyzed', value: '3M+' },
          { label: 'Prediction Accuracy', value: '86%' },
          { label: 'Optimization Opps', value: '$240K' }
        ].map((stat, idx) => (
          <div key={idx} className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-neon-cyan/50 transition-colors">
            <div className="text-3xl font-bold text-white font-mono">{stat.value}</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Actions */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex flex-col md:flex-row gap-4"
      >
        <a 
          href="#projects" 
          onClick={handleScrollToProjects}
          className="px-8 py-3 bg-neon-cyan text-deep-space font-bold rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(0,217,255,0.4)]"
        >
          Explore Analysis
        </a>
        <a 
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
        >
          <Download size={18} />
          View Resume
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="text-gray-500" />
      </motion.div>
    </section>
  );
};

export default Hero;