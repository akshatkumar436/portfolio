import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    // Build form data for Web3Forms
    const formData = new FormData();
    formData.append('access_key', 'd5cbce17-4641-4e38-9b12-8e118b56cf68'); // 👈 put your key here
    formData.append('name', formState.name);
    formData.append('email', formState.email);
    formData.append('message', formState.message);

    // Optional: extra meta fields
    formData.append('subject', 'New message from portfolio contact form');
    formData.append('from_name', formState.name);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus('Transmission sent successfully! ✅');
        setFormState({ name: '', email: '', message: '' });
      } else {
        console.error(data);
        setStatus('Error: transmission failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neon-purple/5 -skew-x-12 -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info Side */}
        <div>
          <h2 className="text-5xl font-display font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-gray-400 text-lg mb-12">
            Open to opportunities in Data Science, Retail Analytics, and AI.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300 group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-cyan group-hover:scale-110 transition-transform">
                <Mail />
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase">Email</div>
                <div className="font-mono">{PERSONAL_INFO.email}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-300 group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform">
                <MapPin />
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase">Location</div>
                <div className="font-mono">{PERSONAL_INFO.location}</div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-12">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Form Side - Terminal Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#050714] p-8 rounded-xl border border-white/10 shadow-2xl relative"
        >
          {/* Terminal Header */}
          <div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="ml-auto text-xs text-gray-600 font-mono">bash --contact</div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 font-mono text-sm">
            <div>
              <label className="block text-neon-cyan mb-2">&gt; input_name:</label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all"
                placeholder="_"
                required
                name="name"
              />
            </div>
            <div>
              <label className="block text-neon-cyan mb-2">&gt; input_email:</label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all"
                placeholder="_"
                required
                name="email"
              />
            </div>
            <div>
              <label className="block text-neon-cyan mb-2">&gt; input_message:</label>
              <textarea
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all"
                placeholder="_"
                required
                name="message"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-neon-cyan/10 border border-neon-cyan text-neon-cyan py-3 rounded hover:bg-neon-cyan hover:text-deep-space transition-all font-bold flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              {loading ? 'TRANSMITTING...' : 'EXECUTE_SEND()'}
            </button>

            {status && (
              <p className="text-xs mt-2 text-gray-400">
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
