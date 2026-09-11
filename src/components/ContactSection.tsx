import { useMagnetic } from './useMagnetic';
import Section from './Section';
import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Layers,
  Code2,
  MessageSquare,
  ArrowRight,
  Send,
  Copy,
  Check
} from 'lucide-react';

interface ContactSectionProps {
  initialTopic?: string;
}

export default function ContactSection({ initialTopic = '' }: ContactSectionProps) {
  const magnetic = useMagnetic();
  const [copyStatus, setCopyStatus] = useState('');
  const contactCards = [
    {
      id: 'contact-ai-workflow',
      title: 'Reduce Repetitive Work',
      description: 'Identify recurring tasks that could run with fewer manual steps.',
      icon: Sparkles,
      tag: 'Intelligent Systems',
      gradient: 'from-cyan-500/20 via-sky-500/10 to-transparent',
      iconBg: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
      glowColor: 'group-hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]',
      borderColor: 'group-hover:border-cyan-500/50'
    },
    {
      id: 'contact-ghl-crm',
      title: 'Improve Lead and Appointment Follow-Up',
      description: 'Discuss where inquiries, bookings, or reminders get held up.',
      icon: Layers,
      tag: 'Full-Funnel CRM',
      gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
      iconBg: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
      glowColor: 'group-hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]',
      borderColor: 'group-hover:border-blue-500/50'
    },
    {
      id: 'contact-api-integrations',
      title: 'Connect Your Business Tools',
      description: 'Find the handoffs where your team re-enters or chases information.',
      icon: Code2,
      tag: 'Seamless Connectivity',
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      iconBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
      glowColor: 'group-hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]',
      borderColor: 'group-hover:border-emerald-500/50'
    },
    {
      id: 'contact-lets-connect',
      title: "Not Sure Where to Start?",
      description: "Bring one frustrating task. We can assess whether automation is a useful next step.",
      icon: MessageSquare,
      tag: 'Start With Discovery',
      gradient: 'from-purple-500/20 via-violet-500/10 to-transparent',
      iconBg: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
      glowColor: 'group-hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]',
      borderColor: 'group-hover:border-purple-500/50'
    }
  ];

  const emailHref = (topic = initialTopic) => {
    const subject = encodeURIComponent(topic ? "Discovery Call: " + topic : "Discovery Call Request");
    const body = encodeURIComponent("Hi Yasser,\n\nI would like to arrange a discovery call.\n\nBusiness / team:\nThe task or bottleneck I want to improve:\nTools we currently use:\nWhat a useful outcome would look like:\nMy time zone and preferred call times:\n\nOptional timeline or budget range:");
    return `mailto:yasserayob0@gmail.com?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText('yasserayob0@gmail.com'); setCopyStatus('Email address copied.'); }
    catch { setCopyStatus('Copy is unavailable. Select the email address below to copy it.'); }
  };

  return (
    <Section timing={0.00} id="contact" className="py-24 relative overflow-hidden bg-slate-950/90 border-t border-slate-800">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="section-intro text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S FIND YOUR FIRST OPPORTUNITY</span>
          </div>

          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -40px 0px" }} transition={{ duration: 0.55 }} className="section-title text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            What Would You Take Off Your Team's Plate?
          </motion.h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Request a discovery call to discuss the work slowing your business down. We will identify a useful starting point, explore what is feasible, and agree on the next step.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-10 p-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 text-left">
          <h3 className="text-lg font-semibold text-white">What we will cover on the call</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">We will walk through your current process, the tools and people involved, and the outcome you want. You do not need a technical brief; one recurring problem is enough to start.</p>
          {initialTopic && <p role="status" className="mt-3 text-sm text-cyan-300">Your selected topic: {initialTopic}</p>}
          <p className="mt-3 text-sm text-slate-400">Request a call by email and include your time zone and preferred times. I will reply to arrange a time. The button opens a draft; it does not book a meeting automatically.</p>
        </div>

        {/* Four Premium Glassmorphism Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`polished-card contact-card motion-glass group relative rounded-3xl bg-slate-950/80 border border-slate-800/90 p-5 sm:p-6 backdrop-blur-xl ${card.borderColor} ${card.glowColor} transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between overflow-hidden`}
              >
                {/* Subtle Gradient Backlight on Hover */}
                <div className={`absolute -top-24 -right-24 w-44 h-44 bg-gradient-to-br ${card.gradient} rounded-full blur-2xl opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                {/* Card Main Body */}
                <div className="space-y-5 relative z-10">
                  {/* Top Row: Icon & Tag */}
                  <div className="flex flex-wrap gap-3 items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${card.iconBg} border flex items-center justify-center group-hover:scale-[1.03] transition-transform shadow-lg`}>
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
                  <a href={emailHref(card.title)} className="text-sm font-semibold text-cyan-300" aria-label={`Request a discovery call about ${card.title}`}>Discuss this on a discovery call</a>

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
          <a
            {...magnetic}
            href={emailHref()}
            className="magnetic-button w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-98"
          >
            <Send className="w-4 h-4" />
            <span>Request a Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button onClick={copyEmail} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 text-sm text-slate-200">{copyStatus === 'Email address copied.' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}Copy email address</button>
        </div>
        <p role="status" className="text-center text-sm text-cyan-300 mt-3 min-h-6">{copyStatus}</p>

        {/* Fast response & Direct Email note below CTA */}
        <div className="text-center mt-6">
          <p className="text-sm text-slate-400 break-words">
            Direct Email: <a href="mailto:yasserayob0@gmail.com" className="text-cyan-400 hover:underline">yasserayob0@gmail.com</a>
          </p>
        </div>

      </div>
    </Section>
  );
}
