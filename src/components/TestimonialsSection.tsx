import { motion } from 'motion/react';
import { MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="section-intro text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>CLIENT FEEDBACK</span>
          </div>
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -40px 0px" }} transition={{ duration: 0.55 }} className="section-title text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Feedback from Founders & Operators.
          </motion.h2>
          <p className="text-base sm:text-lg text-slate-400">
            Project feedback and reported outcomes. Results depend on the workflow, implementation, and business context.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="polished-card testimonial-card p-7 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all hover:-translate-y-1.5 shadow-xl"
            >
              <div className="space-y-4">
                {/* 5-Star Rating & Result Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
                    {item.metricsResult}
                  </span>
                </div>

                {/* Highlight Quote */}
                <p className="text-xs font-mono text-cyan-300 font-semibold">
                  "{item.highlight}"
                </p>

                {/* Main Content */}
                <blockquote className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{item.content}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-3.5">
                <div aria-hidden="true" className="w-11 h-11 shrink-0 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-sm text-cyan-300">{item.name.split(' ').map(part => part[0]).join('')}</div>
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
