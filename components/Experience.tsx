import React from 'react';
import { EXPERIENCE, ACHIEVEMENTS } from '../constants';
import { motion } from 'framer-motion';
import { Briefcase, Award, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 max-w-5xl mx-auto">
      
      {/* Work Experience */}
      <div className="mb-24">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 text-center">Professional Journey</h2>
        
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-12 space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-deep-space border-2 border-neon-cyan shadow-[0_0_10px_rgba(0,217,255,0.5)]" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                 <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <div className="text-neon-purple font-medium flex items-center gap-2">
                        <Briefcase size={16} />
                        {exp.company}
                    </div>
                 </div>
                 <div className="text-gray-500 font-mono text-sm mt-2 md:mt-0 bg-white/5 px-3 py-1 rounded-full">
                    {exp.period}
                 </div>
              </div>

              <ul className="space-y-3">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-cyan shrink-0" />
                    {desc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements Grid */}
      <div>
         <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 text-center">Achievements & Certifications</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((ach, idx) => (
                <motion.div 
                    key={ach.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-6 rounded-xl hover:border-neon-purple/50 transition-colors group"
                >
                    <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center text-neon-purple mb-4 group-hover:bg-neon-purple group-hover:text-white transition-colors">
                        {ach.icon === 'award' ? <Award /> : ach.icon === 'certificate' ? <CheckCircle /> : <Award />}
                    </div>
                    <h3 className="text-white font-bold mb-1 line-clamp-2 min-h-[3rem]">{ach.title}</h3>
                    <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                        <span>{ach.issuer}</span>
                        <span className="font-mono">{ach.year}</span>
                    </div>
                </motion.div>
            ))}
         </div>
      </div>

    </section>
  );
};

export default Experience;