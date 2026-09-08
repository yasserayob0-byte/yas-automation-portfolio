import { motion } from 'motion/react';
import { Star, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CLIENT VERIFICATIONS & CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Trusted by Modern Founders & Operators.
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Real quantifiable outcomes delivered through robust AI systems and GoHighLevel infrastructure.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-7 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all hover:-translate-y-1.5 shadow-xl"
            >
              <div className="space-y-4">
                {/* 5-Star Rating & Result Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
                    {item.metricsResult}
                  </span>
                </div>

                {/* Highlight Quote */}
                <p className="text-xs font-mono text-cyan-300 font-semibold">
                  "{item.highlight}"
                </p>

                {/* Main Content */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{item.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-cyan-500/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {item.role}, <span className="text-slate-300">{item.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
