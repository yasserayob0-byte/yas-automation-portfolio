import { motion } from 'motion/react';
import { CLIENT_JOURNEY } from '../data/businessMessaging';

export default function HowIWorkSection() {
  return (
    <section id="how-i-work" aria-labelledby="how-i-work-heading" className="py-24 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-intro text-center max-w-3xl mx-auto mb-14 space-y-4">
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider">A clear path from idea to daily use</p>
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} id="how-i-work-heading" className="section-title text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">How I Work</motion.h2>
          <p className="text-base sm:text-lg text-slate-400">Start with a business problem. Leave with a tested workflow your team understands, with clear decisions and review points along the way.</p>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENT_JOURNEY.map((step, index) => (
            <motion.li initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.48, delay: (index % 3) * 0.06 }} key={step.title} className="polished-card journey-card p-6 rounded-3xl bg-slate-950/80 border border-slate-800 space-y-3">
              <span aria-hidden="true" className="text-sm font-mono text-cyan-400">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="text-xl font-bold text-white font-heading">{step.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
