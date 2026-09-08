import { motion } from 'motion/react';
import {
  Sparkles,
  Workflow,
  Layers,
  Code2,
  MessageSquare,
  Calendar,
  Compass,
  ArrowRight,
  UserCheck
} from 'lucide-react';

interface AboutSectionProps {
  onTalkWithYasser: () => void;
}

export default function AboutSection({ onTalkWithYasser }: AboutSectionProps) {
  const featureCards = [
    {
      title: 'AI Automation',
      description: 'Build intelligent workflows using modern AI technologies.',
      icon: Sparkles,
      color: 'from-purple-500/20 to-indigo-500/10',
      iconColor: 'text-purple-400',
      borderColor: 'group-hover:border-purple-500/40'
    },
    {
      title: 'Workflow Automation',
      description: 'Design scalable business workflows using n8n.',
      icon: Workflow,
      color: 'from-rose-500/20 to-orange-500/10',
      iconColor: 'text-rose-400',
      borderColor: 'group-hover:border-rose-500/40'
    },
    {
      title: 'CRM Automation',
      description: 'Automate lead management, pipelines, and customer communication.',
      icon: Layers,
      color: 'from-blue-500/20 to-cyan-500/10',
      iconColor: 'text-blue-400',
      borderColor: 'group-hover:border-blue-500/40'
    },
    {
      title: 'API Integration',
      description: 'Connect multiple platforms using APIs and webhooks.',
      icon: Code2,
      color: 'from-emerald-500/20 to-teal-500/10',
      iconColor: 'text-emerald-400',
      borderColor: 'group-hover:border-emerald-500/40'
    },
    {
      title: 'Customer Support Automation',
      description: 'Create AI-powered assistants for faster customer responses.',
      icon: MessageSquare,
      color: 'from-amber-500/20 to-yellow-500/10',
      iconColor: 'text-amber-400',
      borderColor: 'group-hover:border-amber-500/40'
    },
    {
      title: 'Appointment Automation',
      description: 'Automate bookings, reminders, confirmations, and follow-ups.',
      icon: Calendar,
      color: 'from-cyan-500/20 to-sky-500/10',
      iconColor: 'text-cyan-400',
      borderColor: 'group-hover:border-cyan-500/40'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Subtle Gradient Highlights */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="section-intro text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono text-cyan-400">
            <UserCheck className="w-3.5 h-3.5" />
            <span>BACKGROUND & EXPERTISE</span>
          </div>

          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -40px 0px" }} transition={{ duration: 0.55 }} className="section-title text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Work Directly With Your Automation Specialist
          </motion.h2>

          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
            I turn day-to-day bottlenecks into practical workflows, with clear communication from the first conversation through handover.
          </p>
        </div>

        {/* Main Content Presentation Card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto rounded-3xl bg-slate-950/80 border border-slate-800/90 p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden mb-16"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed relative z-10">
            <p>
              Hi, I'm <strong className="text-white font-semibold">Yasser Usman</strong>, an AI Automation Specialist focused on designing intelligent workflow solutions that help businesses reduce manual work, improve efficiency, and scale their operations.
            </p>

            <p>
              My expertise includes building automation systems with <strong className="text-cyan-300 font-semibold">n8n</strong>, <strong className="text-blue-300 font-semibold">GoHighLevel</strong>, AI integrations, APIs, and workflow automation tools. From lead management and appointment scheduling to AI-powered customer support, I enjoy turning repetitive business processes into reliable automated systems.
            </p>

            <p className="text-slate-200 font-medium">
              Every automation I build is designed with one goal in mind: <span className="text-cyan-400">save time</span>, <span className="text-indigo-300">improve productivity</span>, and <span className="text-emerald-400">create better customer experiences</span>.
            </p>
          </div>
        </motion.div>

        {/* Six Responsive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`group p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 ${card.borderColor} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl backdrop-blur-xl flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} border border-slate-800 flex items-center justify-center ${card.iconColor} mb-5 group-hover:scale-[1.03] transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* "My Approach" Section Card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950 border border-cyan-500/30 p-8 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-3 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                <Compass className="w-3.5 h-3.5" />
                <span>ENGINEERING PHILOSOPHY</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                My Approach
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-1">
                Instead of simply automating tasks, I focus on understanding how a business operates first. This allows me to build workflows that solve real operational challenges while keeping systems organized, scalable, and easy to maintain.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <button
                onClick={onTalkWithYasser}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20 hover:scale-[1.02]"
              >
                <span>Let's Discuss Your Systems</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
