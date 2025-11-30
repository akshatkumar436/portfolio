import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Database, Code, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Stats Data with explicit styling classes
  const stats = [
    { label: "Years Learning", value: "3+", border: "hover:border-cyan-500/50", text: "group-hover:text-cyan-400" },
    { label: "Projects", value: "15+", border: "hover:border-purple-500/50", text: "group-hover:text-purple-400" },
    { label: "Technologies", value: "5+", border: "hover:border-pink-500/50", text: "group-hover:text-pink-400" },
    { label: "Dedication", value: "100%", border: "hover:border-blue-500/50", text: "group-hover:text-blue-400" }
  ];

  // Expertise Data with explicit styling classes
  const expertise = [
    {
      title: "Category Management",
      icon: <TrendingUp size={24} />,
      desc: "Optimizing product assortment, pricing strategies, and market basket analysis to drive revenue growth.",
      tags: ["Pricing", "Assortment", "Strategy"],
      titleColor: "group-hover:text-cyan-400",
      gradient: "from-cyan-500 to-cyan-400",
      glow: "group-hover:opacity-20",
      iconBg: "bg-cyan-500/10",
      iconBorder: "border-cyan-500/20"
    },
    {
      title: "Data Visualization",
      icon: <BarChart3 size={24} />,
      desc: "Transforming complex datasets into intuitive Power BI and Tableau dashboards for actionable insights.",
      tags: ["Power BI", "Tableau", "Storytelling"],
      titleColor: "group-hover:text-purple-400",
      gradient: "from-purple-500 to-purple-400",
      glow: "group-hover:opacity-20",
      iconBg: "bg-purple-500/10",
      iconBorder: "border-purple-500/20"
    },
    {
      title: "Analytics & ML",
      icon: <Database size={24} />,
      desc: "Leveraging Python, SQL, and Machine Learning models to predict trends and optimize inventory.",
      tags: ["Python", "SQL", "Predictive Models"],
      titleColor: "group-hover:text-pink-400",
      gradient: "from-pink-500 to-pink-400",
      glow: "group-hover:opacity-20",
      iconBg: "bg-pink-500/10",
      iconBorder: "border-pink-500/20"
    }
  ];

  // Orbiting Nodes Data
  const orbitNodes = [
    { icon: <TrendingUp size={20} />, label: "Analytics", color: "text-cyan-400", bg: "bg-cyan-500/20", border: "border-cyan-500", angle: 0 },
    { icon: <BarChart3 size={20} />, label: "Viz", color: "text-purple-400", bg: "bg-purple-500/20", border: "border-purple-500", angle: 120 },
    { icon: <Code size={20} />, label: "Eng", color: "text-pink-400", bg: "bg-pink-500/20", border: "border-pink-500", angle: 240 },
  ];

  return (
    <section id="about" className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(to right, rgba(0, 217, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 217, 255, 0.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 100%)'
      }} />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Section Header */}
      <div className="mb-20 text-center relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
        >
            <span className="font-mono text-cyan-400 text-sm tracking-wider border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 rounded-full animate-pulse shadow-[0_0_10px_rgba(0,217,255,0.2)]">
                &lt;SYSTEM_ANALYSIS /&gt;
            </span>
        </motion.div>
        
        <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient">
            What I Do
          </span>
        </motion.h2>
        
        <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full shadow-[0_0_10px_cyan]" />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 relative z-10">
        
        {/* Left: Animated Hub */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[400px] md:h-[500px] flex items-center justify-center w-full"
        >
            {/* Central Core */}
            <div className="relative z-20 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-900 to-purple-900 border border-cyan-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.3)]">
                <div className="absolute inset-0 rounded-full border border-cyan-400 opacity-50 animate-ping" style={{ animationDuration: '3s' }} />
                <Database className="text-cyan-300 w-10 h-10 drop-shadow-[0_0_10px_rgba(0,217,255,0.8)]" />
            </div>

            {/* Orbit Rings (Visual only) */}
            <div className="absolute w-[280px] h-[280px] rounded-full border border-cyan-500/10" />
            <div className="absolute w-[400px] h-[400px] rounded-full border border-purple-500/10 dashed" />

            {/* Rotating Orbit Container */}
            <motion.div 
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
                {/* Nodes */}
                {orbitNodes.map((node, i) => (
                    <div
                        key={i}
                        className="absolute left-1/2 top-1/2 -ml-8 -mt-8"
                        style={{
                            transform: `rotate(${node.angle}deg) translate(${isMobile ? '100px' : '140px'}) rotate(-${node.angle}deg)`
                        }}
                    >
                         {/* Counter-rotate the icon container so it stays upright */}
                         <motion.div 
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className={`w-16 h-16 rounded-full bg-[#0a0e27]/90 border ${node.border} backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] group cursor-pointer hover:scale-110 transition-transform`}
                         >
                            <div className={`${node.color} ${node.bg} p-2 rounded-full`}>
                                {node.icon}
                            </div>
                            
                            {/* Hover Label */}
                            <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono text-white bg-slate-800 px-2 py-1 rounded border border-slate-700 whitespace-nowrap z-30">
                                {node.label}
                            </div>
                         </motion.div>
                    </div>
                ))}

                {/* Orbiting Particles */}
                {[...Array(3)].map((_, i) => (
                    <div
                        key={`p-${i}`}
                        className="absolute left-1/2 top-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_cyan]"
                        style={{
                            transform: `rotate(${i * 120 + 60}deg) translate(${isMobile ? '100px' : '140px'})`
                        }}
                    />
                ))}
            </motion.div>
        </motion.div>

        {/* Right: Content */}
        <div className="space-y-8">
            {/* Description Card */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative bg-[#0a0e27]/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500"
            >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500" />
                <h3 className="relative text-2xl font-display font-bold text-cyan-400 mb-4 flex items-center gap-2">
                    <span className="w-2 h-8 bg-cyan-400 rounded-full inline-block" />
                    Data Storyteller
                </h3>
                <p className="relative text-gray-300 leading-relaxed text-lg">
                    {PERSONAL_INFO.summary}
                </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={`p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm ${stat.border} transition-colors group duration-300`}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className={`text-3xl md:text-4xl font-bold text-white ${stat.text} transition-colors font-display`}>
                            {stat.value}
                        </div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider mt-2 font-mono">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>

      {/* Expertise Cards */}
      <div id="skills" className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 scroll-mt-24">
        {expertise.map((card, idx) => (
            <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="group relative bg-[#0a0e27]/80 border border-white/10 p-8 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
                onHoverStart={() => setHoveredCard(idx)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -5 }}
            >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} opacity-0 ${card.glow} blur-xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-full ${card.iconBg} ${card.iconBorder} border mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white relative z-10">
                        {card.icon}
                    </div>
                    {/* Pulsing ring on hover */}
                    <div className={`absolute inset-0 rounded-full border border-white/40 opacity-0 group-hover:opacity-100 group-hover:animate-ping`} />
                </div>

                <h3 className={`text-xl font-bold text-white mb-3 ${card.titleColor} transition-colors`}>{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 h-12">{card.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                    {card.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/10 group-hover:bg-white/10 transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                    <motion.div 
                        className={`h-full bg-gradient-to-r ${card.gradient}`}
                        initial={{ width: "0%" }}
                        animate={{ width: hoveredCard === idx ? "100%" : "0%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    {/* Dot accent */}
                    <motion.div 
                        className={`absolute top-0 right-0 w-2 h-2 -mt-0.5 rounded-full bg-white shadow-[0_0_10px_white]`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredCard === idx ? 1 : 0 }}
                    />
                </div>
            </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 text-center relative z-10"
      >
        <a 
          href="#projects" 
          onClick={handleScrollToProjects}
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a0e27] hover:bg-[#1a1d35] border border-white/20 text-white rounded-full font-bold transition-all group relative overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Explore My Work</span>
            <TrendingUp size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
};

export default About;