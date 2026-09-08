import { motion } from 'motion/react';
import {
  Sparkles,
  Workflow,
  Layers,
  Code2,
  Bot,
  Zap,
  ArrowRight
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const services = [
    {
      id: 'srv-1',
      title: 'Spend Less Time on Routine Decisions',
      description: 'Use AI to classify requests and prepare summaries, with clear rules for when your team takes over.',
      icon: Sparkles,
      tag: 'Autonomous AI',
      gradient: 'from-cyan-500/20 via-sky-500/10 to-transparent',
      iconBg: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
      glowColor: 'group-hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]',
      borderColor: 'group-hover:border-cyan-500/50'
    },
    {
      id: 'srv-2',
      title: 'Keep Work Moving Between Teams',
      description: 'Connect the steps between intake, processing, and follow-up in n8n so staff spend less time moving information.',
      icon: Workflow,
      tag: 'Orchestration',
      gradient: 'from-rose-500/20 via-orange-500/10 to-transparent',
      iconBg: 'bg-rose-500/10 border-rose-500/30 text-rose-400',
      glowColor: 'group-hover:shadow-[0_0_35px_rgba(244,63,94,0.25)]',
      borderColor: 'group-hover:border-rose-500/50'
    },
    {
      id: 'srv-3',
      title: 'Follow Up Before Leads Go Cold',
      description: 'Use GoHighLevel to coordinate lead follow-up, bookings, reminders, and pipeline updates from one customer record.',
      icon: Layers,
      tag: 'Full-Funnel CRM',
      gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
      iconBg: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
      glowColor: 'group-hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]',
      borderColor: 'group-hover:border-blue-500/50'
    },
    {
      id: 'srv-4',
      title: 'Stop Copying Data Between Tools',
      description: 'Connect business applications through APIs and webhooks so information reaches the right place without repeat entry.',
      icon: Code2,
      tag: 'Custom Bridges',
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      iconBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
      glowColor: 'group-hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]',
      borderColor: 'group-hover:border-emerald-500/50'
    },
    {
      id: 'srv-5',
      title: 'Give Customers Answers Sooner',
      description: 'Handle common questions using your business information and route more complex requests to your team.',
      icon: Bot,
      tag: '24/7 Intelligent Support',
      gradient: 'from-purple-500/20 via-violet-500/10 to-transparent',
      iconBg: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
      glowColor: 'group-hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]',
      borderColor: 'group-hover:border-purple-500/50'
    },
    {
      id: 'srv-6',
      title: 'Reduce Everyday Admin',
      description: 'Automate recurring updates and handoffs so your team can manage daily work with fewer manual checks.',
      icon: Zap,
      tag: 'Operations Scale',
      gradient: 'from-amber-500/20 via-yellow-500/10 to-transparent',
      iconBg: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
      glowColor: 'group-hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]',
      borderColor: 'group-hover:border-amber-500/50'
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950/50">
      {/* Subtle Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="section-intro text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SERVICES & EXPERTISE</span>
          </div>
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -40px 0px" }} transition={{ duration: 0.55 }} className="section-title text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Free Your Team to Focus on Customers.
          </motion.h2>
          <p className="text-base sm:text-lg text-slate-400">
            Choose the bottleneck you want to address: slow replies, missed follow-ups, scattered records, or repetitive admin. I build around your process and the tools you already use.
          </p>
        </div>

        {/* Six Equal-Height Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}

                className={`polished-card service-card motion-glass group relative rounded-3xl bg-slate-950/80 border border-slate-800/90 p-7 backdrop-blur-xl ${service.borderColor} ${service.glowColor} transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between overflow-hidden`}
              >
                {/* Subtle Gradient Backlight on Hover */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${service.gradient} rounded-full blur-2xl opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                {/* Card Main Body */}
                <div className="space-y-5 relative z-10">
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <div className={`w-13 h-13 rounded-2xl ${service.iconBg} border flex items-center justify-center group-hover:scale-[1.03] transition-transform shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-slate-900/90 text-slate-400 border border-slate-800/80 group-hover:border-slate-700 group-hover:text-slate-300 transition-colors">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Interactive CTA Link with Animated Arrow */}
                <div className="pt-6 mt-6 border-t border-slate-900/80 flex items-center justify-between">
                  <button onClick={() => onSelectService(service.title)} aria-label={`Discuss ${service.title}`} className="text-sm font-semibold text-cyan-300 after:absolute after:inset-0">Discuss this service</button>

                  <div className="w-8 h-8 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:border-cyan-400 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
