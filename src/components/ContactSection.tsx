import { motion } from 'motion/react';
import {
  Sparkles,
  Layers,
  Code2,
  MessageSquare,
  ArrowRight,
  Send
} from 'lucide-react';

interface ContactSectionProps {
  initialTopic?: string;
}

export default function ContactSection({ initialTopic = '' }: ContactSectionProps) {
  // Reserved for prefilling a future contact form; retained for caller compatibility.
  void initialTopic;
  const contactCards = [
    {
      id: 'contact-ai-workflow',
      title: 'AI Workflow Automation',
      description: 'Build intelligent workflows tailored to your business.',
      icon: Sparkles,
      tag: 'Intelligent Systems',
      gradient: 'from-cyan-500/20 via-sky-500/10 to-transparent',
      iconBg: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
      glowColor: 'group-hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]',
      borderColor: 'group-hover:border-cyan-500/50'
    },
    {
      id: 'contact-ghl-crm',
      title: 'GoHighLevel CRM Automation',
      description: 'Automate appointments, pipelines, and customer communication.',
      icon: Layers,
      tag: 'Full-Funnel CRM',
      gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
      iconBg: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
      glowColor: 'group-hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]',
      borderColor: 'group-hover:border-blue-500/50'
    },
    {
      id: 'contact-api-integrations',
      title: 'API & System Integrations',
      description: 'Connect your tools into one seamless workflow.',
      icon: Code2,
      tag: 'Seamless Connectivity',
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      iconBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
      glowColor: 'group-hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]',
      borderColor: 'group-hover:border-emerald-500/50'
    },
    {
      id: 'contact-lets-connect',
      title: "Let's Connect",
      description: "I'm always open to discussing automation ideas, freelance opportunities, and collaboration.",
      icon: MessageSquare,
      tag: 'Open for Collaboration',
      gradient: 'from-purple-500/20 via-violet-500/10 to-transparent',
      iconBg: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
      glowColor: 'group-hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]',
      borderColor: 'group-hover:border-purple-500/50'
    }
  ];

  const handleConnectClick = () => {
    const subject = encodeURIComponent("Let's Build Something Great Together — Automation Consultation");
    const body = encodeURIComponent("Hi Yasser,\n\nI came across your portfolio and would like to discuss an automation project for our business.\n\nProject Scope:\n- Timeline:\n- Budget:");
    window.location.href = `mailto:yasserayob0@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/90 border-t border-slate-800">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A PROJECT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Let's Build Something Great Together.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Looking to automate repetitive tasks, streamline your business processes, or build intelligent AI-powered workflows? Let's create solutions that save time and help your business grow.
          </p>
        </div>

        {/* Four Premium Glassmorphism Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={handleConnectClick}
                className={`group relative rounded-3xl bg-slate-950/80 border border-slate-800/90 p-7 backdrop-blur-xl ${card.borderColor} ${card.glowColor} transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between cursor-pointer overflow-hidden`}
              >
                {/* Subtle Gradient Backlight on Hover */}
                <div className={`absolute -top-24 -right-24 w-44 h-44 bg-gradient-to-br ${card.gradient} rounded-full blur-2xl opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                {/* Card Main Body */}
                <div className="space-y-5 relative z-10">
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${card.iconBg} border flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-slate-900/90 text-slate-400 border border-slate-800/80 group-hover:border-slate-700 group-hover:text-slate-300 transition-colors">
                      {card.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5">
                    <h3 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Arrow Indicator */}
                <div className="pt-6 mt-6 border-t border-slate-900/80 flex items-center justify-between relative z-10">
                  <span className="text-xs font-mono text-slate-500 group-hover:text-cyan-400 transition-colors font-medium">
                    Discuss Scope
                  </span>

                  <div className="w-8 h-8 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:border-cyan-400 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium Center CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <button
            onClick={handleConnectClick}
            className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-98"
          >
            <Send className="w-4 h-4" />
            <span>Let's Connect</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Fast response & Direct Email note below CTA */}
        <div className="text-center mt-6">
          <p className="text-xs font-mono text-slate-400">
            Direct Email: <a href="mailto:yasserayob0@gmail.com" className="text-cyan-400 hover:underline">yasserayob0@gmail.com</a> • Typical response within 4 hours
          </p>
        </div>

      </div>
    </section>
  );
}
