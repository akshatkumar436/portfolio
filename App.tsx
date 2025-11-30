import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial data loading cinematic
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-deep-space flex flex-col items-center justify-center z-[100]">
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mb-4">
          <motion.div 
            className="h-full bg-neon-cyan"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
        <motion.div 
          className="font-mono text-neon-cyan text-sm tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          LOADING_DATA_NODES...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative text-white font-sans selection:bg-neon-cyan selection:text-black">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-cyan origin-left z-[60]"
        style={{ scaleX }}
      />

      <ParticleBackground />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-600 text-sm font-mono border-t border-white/5 bg-black/50 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} Akshat Kumar. All systems nominal.</p>
      </footer>
    </div>
  );
};

export default App;