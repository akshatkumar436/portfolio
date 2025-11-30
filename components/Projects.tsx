
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { X, ArrowUpRight, BarChart2, ExternalLink } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = PROJECTS.find(p => p.id === selectedId);

  return (
    <section id="projects" className="py-24 px-4 bg-void/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2 text-neon-purple font-mono text-sm">
              <span className="w-8 h-[1px] bg-neon-purple"></span>
              CASE STUDIES
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Selected Projects</h2>
          </div>
          <div className="hidden md:block text-gray-500 font-mono text-sm">
            CLICK CARDS TO EXPAND DETAILS
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
              className="group cursor-pointer relative h-[400px] rounded-2xl overflow-hidden border border-white/10 hover:border-neon-cyan/50 transition-colors"
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${project.image})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-deep-space/80 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="text-neon-cyan text-xs font-mono mb-2 border border-neon-cyan/30 inline-block px-2 py-1 rounded">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2">
                    {project.technologies.slice(0,2).map(t => (
                        <span key={t} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">{t}</span>
                    ))}
                    {project.technologies.length > 2 && <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">+{project.technologies.length - 2}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                layoutId={selectedId}
                className="bg-deep-space w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 z-10 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Image Side */}
                    <div className="h-64 md:h-auto bg-cover bg-center relative" style={{ backgroundImage: `url(${selectedProject.image})` }}>
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-deep-space via-transparent to-transparent opacity-80" />
                    </div>

                    {/* Content Side */}
                    <div className="p-8 md:p-12">
                        <div className="flex justify-between items-start mb-6">
                             <div>
                                <span className="text-neon-purple font-mono text-sm tracking-wider uppercase">{selectedProject.category}</span>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mt-2">{selectedProject.title}</h3>
                             </div>
                        </div>

                        <div className="mb-8">
                            <h4 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Problem & Solution</h4>
                            <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                        </div>

                        <div className="mb-8">
                             <h4 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Key Metrics</h4>
                             <div className="grid grid-cols-2 gap-4">
                                {selectedProject.metrics.map((m, i) => (
                                    <div key={i} className="bg-white/5 p-4 rounded-lg border border-white/5">
                                        <div className="text-2xl font-bold text-neon-cyan font-mono">{m.value}</div>
                                        <div className="text-xs text-gray-400 mt-1">{m.label}</div>
                                    </div>
                                ))}
                             </div>
                        </div>

                        <div className="mb-8">
                             <h4 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Technologies</h4>
                             <div className="flex flex-wrap gap-2">
                                {selectedProject.technologies.map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10">
                                        {tech}
                                    </span>
                                ))}
                             </div>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 bg-neon-cyan/10 border border-neon-cyan/20 rounded-lg flex items-start gap-3">
                                <BarChart2 className="text-neon-cyan shrink-0 mt-1" size={20} />
                                <div>
                                    <h5 className="text-neon-cyan font-bold text-sm">Business Impact</h5>
                                    <p className="text-sm text-gray-300">{selectedProject.impact}</p>
                                </div>
                            </div>

                            {selectedProject.link && (
                                <a 
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 py-3 bg-neon-cyan text-deep-space font-bold rounded-lg hover:bg-white transition-colors"
                                >
                                    View Live Project <ExternalLink size={18} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
