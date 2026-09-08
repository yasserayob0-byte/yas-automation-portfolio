import { useMotionPreference } from './MotionPreferences';
import { preferredScrollBehavior } from './navigation';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  ArrowRight,
  ChevronDown,
  Bot,
  Code2,
  Workflow,
  Sparkles,
  Layers,
  Zap
} from 'lucide-react';
import {
  N8nLogo,
  GhlLogo,
  OpenAiLogo,
  GeminiLogo,
  SlackLogo,
  AirtableLogo
} from './BrandLogos';
import { PROJECTS_DATA } from '../data/portfolioData';
import portraitImg from '../assets/images/yasser_portrait_1787548927135.png';

interface HeroSectionProps {
  onExploreWorkflows: () => void;
  onBookAudit: () => void;
}

export default function HeroSection({ onExploreWorkflows, onBookAudit }: HeroSectionProps) {
  const heroRef = useRef<HTMLElement>(null);
  const { enabled: motionEnabled } = useMotionPreference();
  const reduceMotion = !motionEnabled;
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: preferredScrollBehavior() });
    } else {
      onExploreWorkflows();
    }
  };

  const handleScrollToExplore = () => {
    const el = document.getElementById('projects') || document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: preferredScrollBehavior() });
    }
  };

  return (
    <section ref={heroRef} id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Subheadline, CTAs & Trusted Tech Logos (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.15)] text-xs font-semibold text-cyan-300 backdrop-blur-md"
            >
              <Sparkles aria-hidden="true" className="w-3.5 h-3.5" />
              <span className="tracking-wide">AI Automation Specialist</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight font-heading leading-[1.08] text-balance text-white"
            >
              AI Automation That Helps Your{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Business Scale
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl"
            >
              I design and build AI-powered automation systems that eliminate repetitive tasks, streamline business operations, and improve customer experiences using n8n, GoHighLevel, and modern AI technologies.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              {/* Primary Button */}
              <button
                onClick={handleScrollToProjects}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-600 text-slate-950 font-bold text-sm hover:shadow-[0_0_35px_rgba(6,182,212,0.45)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-lg"
              >
                <span>Explore Automation Projects</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Button */}
              <button
                onClick={onBookAudit}
                className="px-7 py-4 rounded-full bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/40 text-slate-200 text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md"
              >
                <span>Discuss Your Project</span>
              </button>
            </motion.div>

            {/* Tools I Work With Row (Logos Only) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="pt-6 border-t border-slate-800/80 space-y-3"
            >
              <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-medium">
                Trusted Technologies
              </div>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <div
                  className="p-2 sm:p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all hover:scale-105"
                  title="n8n"
                >
                  <N8nLogo className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div
                  className="p-2 sm:p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all hover:scale-105"
                  title="GoHighLevel"
                >
                  <GhlLogo className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div
                  className="p-2 sm:p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all hover:scale-105"
                  title="OpenAI"
                >
                  <OpenAiLogo className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div
                  className="p-2 sm:p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all hover:scale-105"
                  title="Google Gemini"
                >
                  <GeminiLogo className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div
                  className="p-2 sm:p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all hover:scale-105"
                  title="Slack"
                >
                  <SlackLogo className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div
                  className="p-2 sm:p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all hover:scale-105"
                  title="Airtable"
                >
                  <AirtableLogo className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Professional Portrait with Animated Workflow Lines & Floating Tech Cards (5 Cols) */}
          <motion.div style={{ y: reduceMotion ? 0 : portraitY }} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="hero-portrait lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center">
              
              {/* Soft Ambient Glow Halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse" />

              {/* Animated Workflow Connection Lines (SVG) behind portrait */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-visible opacity-75">
                <defs>
                  <linearGradient id="hero-line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#6366f1" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Workflow line connecting left-top to center */}
                <motion.path
                  d="M 20 60 Q 90 120 180 180"
                  stroke="url(#hero-line-gradient)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  fill="none"
                  animate={{ strokeDashoffset: reduceMotion ? 0 : [0, -40] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                />

                {/* Workflow line connecting top-right to center */}
                <motion.path
                  d="M 360 40 Q 280 130 200 200"
                  stroke="url(#hero-line-gradient)"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                  fill="none"
                  animate={{ strokeDashoffset: reduceMotion ? 0 : [0, -50] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                />

                {/* Workflow line connecting bottom-left to bottom-right */}
                <motion.path
                  d="M 40 320 C 120 380 260 380 340 320"
                  stroke="url(#hero-line-gradient)"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                  fill="none"
                  animate={{ strokeDashoffset: reduceMotion ? 0 : [0, 60] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />

                {/* Orbit concentric circle rings */}
                <circle cx="50%" cy="50%" r="48%" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.12" strokeDasharray="6 6" fill="none" />
                <circle cx="50%" cy="50%" r="38%" stroke="#818cf8" strokeWidth="1" strokeOpacity="0.18" fill="none" />
              </svg>

              {/* Central Professional Portrait Container */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-full lg:h-[480px] rounded-3xl p-1 bg-gradient-to-b from-cyan-500/40 via-indigo-500/30 to-slate-800/80 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.8)] group">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-950 relative flex flex-col justify-end">
                  
                  {/* Business Portrait Image */}
                  <img
                    fetchPriority="high"
                    src={portraitImg}
                    alt="Yasser Usman - AI Automation Specialist"
                  className="absolute inset-0 w-full h-full object-cover object-[center_20%] scale-[1.15] transition-transform duration-700 group-hover:scale-[1.2]"
                  />

                  {/* Gradient Overlay for bottom text legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />

                  {/* Name & Role Badge overlay */}
                  <div className="relative z-10 p-4 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white font-heading tracking-wide flex items-center gap-1.5">
                        <span>Yasser Usman</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <div className="text-[11px] font-mono text-cyan-300">
                        AI Automation Specialist
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-mono border border-cyan-500/30">
                      n8n + GHL
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Cards Around the Portrait */}

              {/* 1. AI Agent (Top-Left) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 left-2 sm:-left-4 z-20"
              >
                <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-slate-900/90 border border-purple-500/40 shadow-[0_10px_25px_-5px_rgba(168,85,247,0.3)] backdrop-blur-md">
                  <div className="w-7 h-7 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="text-left pr-1">
                    <div className="text-[11px] font-bold text-white leading-none">AI Agent</div>
                    <div className="text-[9px] font-mono text-purple-300 mt-0.5">Autonomous</div>
                  </div>
                </div>
              </motion.div>

              {/* 2. API (Top-Right) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-2 right-2 sm:-right-4 z-20"
              >
                <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-slate-900/90 border border-emerald-500/40 shadow-[0_10px_25px_-5px_rgba(16,185,129,0.3)] backdrop-blur-md">
                  <div className="w-7 h-7 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-300">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div className="text-left pr-1">
                    <div className="text-[11px] font-bold text-white leading-none">API</div>
                    <div className="text-[9px] font-mono text-emerald-300 mt-0.5">REST / Webhooks</div>
                  </div>
                </div>
              </motion.div>

              {/* 3. n8n (Middle-Left) */}
              <motion.div
                animate={{ x: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 -translate-y-1/2 -left-6 sm:-left-10 z-20"
              >
                <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-slate-900/90 border border-rose-500/40 shadow-[0_10px_25px_-5px_rgba(244,63,94,0.3)] backdrop-blur-md">
                  <div className="w-7 h-7 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center">
                    <N8nLogo className="w-4 h-4" />
                  </div>
                  <div className="text-left pr-1">
                    <div className="text-[11px] font-bold text-white leading-none">n8n</div>
                    <div className="text-[9px] font-mono text-rose-300 mt-0.5">Workflows</div>
                  </div>
                </div>
              </motion.div>

              {/* 4. GoHighLevel (Middle-Right) */}
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute top-1/2 -translate-y-1/2 -right-6 sm:-right-10 z-20"
              >
                <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-slate-900/90 border border-blue-500/40 shadow-[0_10px_25px_-5px_rgba(59,130,246,0.3)] backdrop-blur-md">
                  <div className="w-7 h-7 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <GhlLogo className="w-4 h-4" />
                  </div>
                  <div className="text-left pr-1">
                    <div className="text-[11px] font-bold text-white leading-none">GoHighLevel</div>
                    <div className="text-[9px] font-mono text-blue-300 mt-0.5">CRM Engine</div>
                  </div>
                </div>
              </motion.div>

              {/* 5. Gemini (Bottom-Center) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20"
              >
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-900/95 border border-cyan-500/50 shadow-[0_10px_30px_-5px_rgba(6,182,212,0.35)] backdrop-blur-md">
                  <div className="w-7 h-7 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                    <GeminiLogo className="w-4 h-4" />
                  </div>
                  <div className="text-left pr-1">
                    <div className="text-[11px] font-bold text-white leading-none">Gemini</div>
                    <div className="text-[9px] font-mono text-cyan-300 mt-0.5">Multimodal LLM</div>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Four Professional Portfolio Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
        >
          {/* Card 1 */}
          <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all backdrop-blur-xl group flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-105 transition-transform">
                <Workflow className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                Orchestration
              </span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                {PROJECTS_DATA.filter(project => project.techStack.includes('n8n')).length}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                n8n Automation Projects
              </div>
              <div className="text-xs text-slate-400 font-mono mt-0.5">
                Production-grade workflows
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-blue-500/40 transition-all backdrop-blur-xl group flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                Infrastructure
              </span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                1
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                Complete GoHighLevel System
              </div>
              <div className="text-xs text-slate-400 font-mono mt-0.5">
                Full-funnel CRM & pipeline
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-indigo-500/40 transition-all backdrop-blur-xl group flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                Components
              </span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                15+
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                Workflow Modules Built
              </div>
              <div className="text-xs text-slate-400 font-mono mt-0.5">
                Nodes, parsers & triggers
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all backdrop-blur-xl group flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                Intelligence
              </span>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-cyan-400 tracking-tight">
                AI Powered
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                AI Powered Solutions
              </div>
              <div className="text-xs text-slate-400 font-mono mt-0.5">
                Grounded LLM execution
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Subtle Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 sm:mt-20 flex flex-col items-center justify-center"
        >
          <button
            onClick={handleScrollToExplore}
            className="group flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
          >
            <span className="text-xs font-mono tracking-widest uppercase text-slate-400 group-hover:text-cyan-300 transition-colors">
              Explore My Work
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="p-1 rounded-full border border-slate-800 group-hover:border-cyan-500/40 transition-colors bg-slate-900/60"
            >
              <ChevronDown className="w-4 h-4 text-cyan-400" />
            </motion.div>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
