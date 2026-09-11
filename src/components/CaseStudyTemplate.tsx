import Section from './Section';
import RevealImage from './RevealImage';
import { PROJECT_BUSINESS_STORIES } from '../data/businessMessaging';
import { TechnologyLogo } from './BrandLogos';
import { createPortal } from 'react-dom';
import { useModalFocus } from './useModalFocus';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Maximize2,
  ZoomIn,
  ZoomOut,
  X,
  CheckCircle2,
  AlertCircle,
  Zap,
  Layers,
  TrendingUp,
  Code2,
  FileText,
  ChevronRight,
  ChevronLeft,
  Workflow,
  Activity
} from 'lucide-react';
import type { CaseStudyData } from '../types';

interface CaseStudyTemplateProps {
  data: CaseStudyData;
  onBack?: () => void;
  onNavigateProject?: (projectId: string) => void;
  onContactClick?: (subjectTopic?: string) => void;
}


export default function CaseStudyTemplate({
  data,
  onBack,
  onNavigateProject,
  onContactClick
}: CaseStudyTemplateProps) {
  const study = data;

  const [activeGalleryModal, setActiveGalleryModal] = useState<string | null>(null);
  const [isHeroScreenshotZoomed, setIsHeroScreenshotZoomed] = useState(false);
  const [activeGallerySlideIndex, setActiveGallerySlideIndex] = useState(0);
  const [lightboxZoomLevel, setLightboxZoomLevel] = useState<number>(1);

  const heroModalRef = useModalFocus(isHeroScreenshotZoomed, () => setIsHeroScreenshotZoomed(false));
  const galleryModalRef = useModalFocus(!!activeGalleryModal, () => { setActiveGalleryModal(null); setLightboxZoomLevel(1); });
  useEffect(() => {
    if (!activeGalleryModal) return;
    const keydown = (event: KeyboardEvent) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      const next = (activeGallerySlideIndex + (event.key === 'ArrowRight' ? 1 : -1) + study.gallery.length) % study.gallery.length;
      setActiveGallerySlideIndex(next);
      setActiveGalleryModal(study.gallery[next].id);
      setLightboxZoomLevel(1);
    };
    window.addEventListener('keydown', keydown);
    return () => window.removeEventListener('keydown', keydown);
  }, [activeGalleryModal, activeGallerySlideIndex, study.gallery]);

  return (
    <article className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans pb-24 relative overflow-x-clip">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-100px] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Sticky Top Navigation Bar */}
      <div className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400" />
            <span>BACK TO PORTFOLIO</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Production-Grade Architecture</span>
            </span>

            <button
              onClick={() => onContactClick?.(study.title)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-cyan-500/20 cursor-pointer"
            >
              Request a Discovery Call
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-20">
        
        {/* =========================================================================
            1. HERO BANNER
        ========================================================================= */}
        <header className="space-y-8 max-w-4xl">
          {/* Badge & Category */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{study.badge || 'AUTOMATION CASE STUDY'}</span>
            </span>

            {study.category && (
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800">
                {study.category}
              </span>
            )}
          </div>

          {/* Title & Tagline */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {PROJECT_BUSINESS_STORIES[study.id]?.headline ?? study.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-sans leading-relaxed">
              {study.tagline}
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Client / Industry</div>
              <div className="text-sm font-semibold text-white mt-1">{study.clientType}</div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Role</div>
              <div className="text-sm font-semibold text-cyan-300 mt-1">{study.role || 'AI Automation Specialist'}</div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Delivery Timeline</div>
              <div className="text-sm font-semibold text-white mt-1">{study.timeline || 'Confirm during scoping'}</div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Format</div>
              <div className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Workflow Case Study</span>
              </div>
            </div>
          </div>
        </header>

        {/* =========================================================================
            2. LARGE WORKFLOW SCREENSHOT
        ========================================================================= */}
        <Section timing={0.04} className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Workflow className="w-4 h-4 text-cyan-400" />
              <h2 className="text-sm font-mono text-slate-400 uppercase tracking-wider">
                Full-Scale Workflow Execution Canvas
              </h2>
            </div>
            {study.heroScreenshot?.badge && (
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {study.heroScreenshot.badge}
              </span>
            )}
          </div>

          {/* Screenshot Mockup Box */}
          <div className="rounded-3xl bg-[#090d16] border border-slate-800 shadow-2xl overflow-hidden group/hero relative">
            {/* Top Browser Bar */}
            <div className="px-4 py-3 bg-[#060911] border-b border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 ml-2 hidden sm:inline truncate">
                  {study.heroScreenshot?.browserUrl || study.title}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
                  {study.heroScreenshot?.title}
                </span>
                <button
                  onClick={() => setIsHeroScreenshotZoomed(true)}
                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-slate-400 transition-colors cursor-pointer"
                  aria-label="Enlarge workflow screenshot"
                  title="Enlarge Canvas"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Canvas Body Placeholder / Image */}
            <div className="min-h-[360px] sm:min-h-[460px] relative bg-gradient-to-b from-[#0a0f1d] via-[#080c18] to-[#0a0f1d] flex flex-col items-center justify-center p-6 text-center">
              {study.heroScreenshot?.imageUrl ? (
                <RevealImage
                  src={study.heroScreenshot.imageUrl}
                  alt={study.heroScreenshot.title}
                  className="w-full h-full object-contain max-h-[500px] rounded-xl"
                />
              ) : (
                <div className="space-y-4 max-w-lg p-8 rounded-2xl bg-slate-950/70 border border-slate-800/90 backdrop-blur-md">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/10">
                    <Workflow className="w-7 h-7" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-white font-heading">
                      {study.heroScreenshot?.title || study.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {study.heroScreenshot?.caption || study.tagline}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center justify-center gap-2 text-[11px] font-mono text-cyan-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Workflow architecture</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Caption Footer */}
            {study.heroScreenshot?.caption && (
              <div className="px-4 py-2.5 bg-[#060911] border-t border-slate-800 text-xs font-mono text-slate-400 flex flex-wrap gap-3 items-center justify-between">
                <span>{study.heroScreenshot.caption}</span>
                <span className="text-cyan-400 shrink-0">Workflow Screenshot</span>
              </div>
            )}
          </div>
        </Section>

        {/* =========================================================================
            3. PROJECT OVERVIEW
        ========================================================================= */}
        <Section timing={0.04} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
              <FileText className="w-3.5 h-3.5" />
              <span>01. CONTEXT & OBJECTIVE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Project Overview
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="p-7 rounded-3xl bg-slate-950/80 border border-slate-800/90 backdrop-blur-xl space-y-5">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                {study.overview.executiveSummary}
              </p>

              {study.overview.scopeHighlights && study.overview.scopeHighlights.length > 0 && (
                <div className="pt-4 border-t border-slate-800/80 space-y-3">
                  <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                    Core Project Scope Deliverables:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {study.overview.scopeHighlights.map((scope, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{scope}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Section>

        {/* =========================================================================
            4. BUSINESS CHALLENGE
        ========================================================================= */}
        <Section timing={0.04} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-rose-400">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>02. THE BOTTLENECK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Business Problem
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="p-7 rounded-3xl bg-rose-950/10 border border-rose-500/20 backdrop-blur-xl space-y-6">
              <p className="text-base text-rose-200/90 leading-relaxed">
                {PROJECT_BUSINESS_STORIES[study.id]?.problem ?? study.challenge.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {study.challenge.frictionPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-950/80 border border-rose-500/20 space-y-2"
                  >
                    <div className="text-xs font-bold text-rose-400 font-heading">
                      {point.title}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* =========================================================================
            5. SOLUTION
        ========================================================================= */}
        <Section timing={0.04} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
              <Zap className="w-3.5 h-3.5" />
              <span>03. STRATEGIC BLUEPRINT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Automation Solution
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="p-7 rounded-3xl bg-slate-950/80 border border-emerald-500/20 backdrop-blur-xl space-y-6">
              <p className="text-base text-slate-300 leading-relaxed">
                {PROJECT_BUSINESS_STORIES[study.id]?.solution ?? study.solution.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {study.solution.corePillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 hover:border-emerald-500/40 transition-colors"
                  >
                    <div className="text-xs font-bold text-emerald-400 font-heading">
                      {pillar.title}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* =========================================================================
            6. WORKFLOW ARCHITECTURE
        ========================================================================= */}
        <Section timing={0.04} className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
              <Workflow className="w-3.5 h-3.5" />
              <span>04. PIPELINE SEQUENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              Workflow Architecture & Dataflow
            </h2>
            <p className="text-sm text-slate-400">
              {study.architecture.description}
            </p>
          </div>

          {/* Sequential Step Nodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {study.architecture.steps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800/90 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4 relative group"
              >
                {/* Step Number & Tech Pill */}
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold flex items-center justify-center">
                    {step.stepNumber}
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {step.tech}
                  </span>
                </div>

                {/* Title & Desc */}
                <div className="space-y-2 flex-1">
                  <h3 className="text-sm font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Node Indicator */}
                <div className="pt-3 border-t border-slate-900 flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Workflow step</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* =========================================================================
            6.5 WORKFLOW MODULES (If provided)
        ========================================================================= */}
        {study.workflowModules && study.workflowModules.length > 0 && (
          <Section timing={0.04} className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
                <Layers className="w-3.5 h-3.5" />
                <span>04.5 MODULAR ARCHITECTURE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                Workflow Modules
              </h2>
              <p className="text-sm text-slate-400">
                Five integrated automation modules orchestrating the complete patient journey inside GoHighLevel.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {study.workflowModules.map((mod, mIdx) => (
                <div
                  key={mIdx}
                  className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 space-y-3 flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">
                        {mod.moduleNumber}
                      </span>
                      {mod.tag && (
                        <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                          {mod.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                      {mod.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {mod.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-900/90 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Active Workflow Module</span>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* =========================================================================
            7. KEY FEATURES
        ========================================================================= */}
        <Section timing={0.04} className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>05. CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              Key Engineered Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {study.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1.5 space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5" />
                  </div>
                  {feature.tag && (
                    <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                      {feature.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* =========================================================================
            8. TECHNOLOGY STACK & DEMONSTRATED SKILLS
        ========================================================================= */}
        <Section timing={0.04} className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
              <Code2 className="w-3.5 h-3.5" />
              <span>06. INFRASTRUCTURE & SKILLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              Technology Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {study.techStack.map((tech, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start gap-4 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 flex items-center justify-center shrink-0">
                  <TechnologyLogo name={tech.name} className="w-6 h-6" decorative />
                </div>
                <div className="space-y-1 min-w-0">
                  <div className="text-sm font-bold text-white truncate">{tech.name}</div>
                  <div className="text-[11px] font-mono text-cyan-400">{tech.category}</div>
                  <div className="text-xs text-slate-400 leading-snug">{tech.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Demonstrated Core Competencies & Skills */}
          {study.skillsDemonstrated && study.skillsDemonstrated.length > 0 && (
            <div className="p-6 rounded-3xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-md space-y-3">
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Skills & Competencies Demonstrated:</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {study.skillsDemonstrated.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 flex items-center gap-1.5 shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </Section>

        {/* =========================================================================
            8.5 TECHNICAL OVERVIEW & STRATEGIC VALUE (Why This Solution Matters)
        ========================================================================= */}
        {(study.technicalOverview || study.whyItMatters) && (
          <Section timing={0.04} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {study.technicalOverview && (
              <div className="p-7 rounded-3xl bg-slate-950/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <FileText className="w-3.5 h-3.5" />
                    <span>TECHNICAL OVERVIEW</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading">
                    End-to-End Workflow Execution
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {study.technicalOverview}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-900 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Production Pipeline Live</span>
                </div>
              </div>
            )}

            {study.whyItMatters && (
              <div className="p-7 rounded-3xl bg-gradient-to-br from-cyan-950/30 to-slate-950 border border-cyan-500/30 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>STRATEGIC IMPACT</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading">
                    Why This Solution Matters
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {study.whyItMatters}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-900 flex items-center gap-2 text-xs font-mono text-cyan-300">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Tangible Time & Labor Reduction</span>
                </div>
              </div>
            )}
          </Section>
        )}

        {/* =========================================================================
            9. BUSINESS VALUE & QUANTIFIED ROI
        ========================================================================= */}
        <Section timing={0.04} className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950 border border-cyan-500/30 shadow-2xl relative overflow-hidden space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>07. MEASURABLE OUTCOMES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              Business Impact
            </h2>
            <p className="text-sm text-slate-300">
              {PROJECT_BUSINESS_STORIES[study.id]?.impact ?? study.businessValue.summary}
            </p>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {study.businessValue.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-slate-400">{metric.label}</span>
                  {metric.trend && (
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {metric.trend}
                    </span>
                  )}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading text-cyan-300">
                  {metric.value}
                </div>
                {metric.description && (
                  <p className="text-xs text-slate-400 leading-snug">
                    {metric.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* =========================================================================
            10. WORKFLOW GALLERY & PRODUCTION SHOWCASE
        ========================================================================= */}
        <Section timing={0.04} id="workflow-gallery" className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
              <Workflow className="w-3.5 h-3.5" />
              <span>08. WORKFLOW GALLERY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              Production Workflow Showcase
            </h2>
            <p className="text-sm text-slate-400">
              Interactive high-resolution inspection of the orchestrated pipeline nodes, triggers, memory stores, and API handlers.
            </p>
          </div>

          {/* SaaS Showcase Container */}
          {study.gallery && study.gallery.length > 0 && (
            <div className="space-y-6">
              
              {/* Primary Large Hero Workflow Display inside Modern Browser Window */}
              <div className="rounded-3xl border border-slate-800/90 bg-slate-950/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-xl transition-all duration-300">
                {/* Browser Top Bar with Glassmorphism and Window Controls */}
                <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {/* Mac / Window Traffic Light Controls */}
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/90 shadow-sm shadow-rose-500/30" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/90 shadow-sm shadow-amber-500/30" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-sm shadow-emerald-500/30" />
                    </div>

                    {/* Active Tab Indicator */}
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300">
                      <Workflow className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-cyan-300 font-semibold truncate max-w-[280px]">
                        {study.gallery[activeGallerySlideIndex]?.title || 'n8n Workflow Execution Canvas'}
                      </span>
                    </div>
                  </div>

                  {/* Browser Controls & Action Tools */}
                  <div className="flex items-center gap-2">
                    {/* Previous / Next Navigation Buttons */}
                    <div className="flex items-center rounded-xl bg-slate-900 border border-slate-800 p-0.5">
                      <button
                        onClick={() =>
                          setActiveGallerySlideIndex((prev) =>
                            prev > 0 ? prev - 1 : study.gallery.length - 1
                          )
                        }
                        className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                        title="Previous workflow node"
                        aria-label="Previous workflow"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="text-[11px] font-mono px-2 text-slate-400 select-none">
                        {activeGallerySlideIndex + 1}/{study.gallery.length}
                      </span>
                      <button
                        onClick={() =>
                          setActiveGallerySlideIndex((prev) =>
                            prev < study.gallery.length - 1 ? prev + 1 : 0
                          )
                        }
                        className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                        title="Next workflow node"
                        aria-label="Next workflow"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Fullscreen Lightbox Button */}
                    <button
                      onClick={() => {
                        setLightboxZoomLevel(1);
                        setActiveGalleryModal(study.gallery[activeGallerySlideIndex].id);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-mono flex items-center gap-1.5 cursor-pointer transition-all hover:scale-[1.02]"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Fullscreen</span>
                    </button>
                  </div>
                </div>

                {/* Workflow Canvas Viewport with Hover Zoom & Fade Animation */}
                <div 
                  className="relative bg-[#06080e] p-4 sm:p-8 flex items-center justify-center min-h-[380px] sm:min-h-[480px] lg:min-h-[520px] overflow-hidden cursor-zoom-in group"
                  role="button" tabIndex={0} aria-label="Enlarge current workflow"
                  onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); event.currentTarget.click(); } }}
                  onClick={() => {
                    setLightboxZoomLevel(1);
                    setActiveGalleryModal(study.gallery[activeGallerySlideIndex].id);
                  }}
                >
                  {/* Subtle Grid Background Pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeGallerySlideIndex}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="w-full shrink-0"
                    >
                      {study.gallery[activeGallerySlideIndex]?.imageUrl ? (
                        <RevealImage
                          src={study.gallery[activeGallerySlideIndex].imageUrl}
                          alt={study.gallery[activeGallerySlideIndex].title}
                          className="max-h-[520px] w-full object-contain rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      ) : (
                        <div className="py-24 text-center text-slate-500 font-mono text-xs">
                          [Production Workflow Canvas Screenshot]
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Click to Enlarge Floating Badge */}
                  <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[11px] font-mono text-cyan-400 flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Click to Enlarge</span>
                  </div>
                </div>

                {/* Workflow Metadata & Information Footer */}
                <div className="p-5 bg-slate-900/90 border-t border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
                        {study.gallery[activeGallerySlideIndex]?.category || 'Production Canvas'}
                      </span>
                      <h3 className="text-base font-bold text-white">
                        {study.gallery[activeGallerySlideIndex]?.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {study.gallery[activeGallerySlideIndex]?.caption}
                    </p>
                  </div>

                  {/* Execution Status Badge */}
                  <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-semibold">Workflow Screenshot</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Smaller Gallery Thumbnails Underneath (Click to Switch Hero Image) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
                  <span>SELECT PIPELINE VIEW ({study.gallery.length} SLIDES)</span>
                  <span className="text-cyan-400">Click any thumbnail to update view</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
                  {study.gallery.map((item, idx) => {
                    const isSelected = activeGallerySlideIndex === idx;
                    return (
                      <button
                        key={item.id}
                        aria-pressed={isSelected}
                        onClick={() => setActiveGallerySlideIndex(idx)}
                        className={`group relative rounded-2xl bg-slate-950/90 border text-left overflow-hidden transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'border-cyan-500 shadow-lg shadow-cyan-500/15 ring-2 ring-cyan-500/30'
                            : 'border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                        }`}
                      >
                        {/* Thumbnail Image Container */}
                        <div className="h-28 sm:h-32 bg-slate-900 relative flex items-center justify-center p-2 overflow-hidden">
                          {item.imageUrl ? (
                            <RevealImage
                              src={item.imageUrl}
                              alt={item.title}
                              className={`w-full h-full object-cover rounded-lg transition-transform duration-300 ${
                                isSelected ? 'scale-105' : 'group-hover:scale-105 opacity-80 group-hover:opacity-100'
                              }`}
                            />
                          ) : (
                            <div className="w-8 h-8 rounded-lg bg-slate-800 text-cyan-400 flex items-center justify-center">
                              <Workflow className="w-4 h-4" />
                            </div>
                          )}

                          {/* Selected Active Indicator Pill */}
                          {isSelected && (
                            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-cyan-500 text-slate-950 text-[10px] font-mono font-bold shadow-md">
                              ACTIVE
                            </div>
                          )}

                          <span className="absolute top-2 left-2 text-[9px] font-mono text-slate-300 bg-slate-950/80 px-1.5 py-0.5 rounded border border-slate-800">
                            0{idx + 1}
                          </span>
                        </div>

                        {/* Thumbnail Title */}
                        <div className="p-3 bg-slate-950 border-t border-slate-900/90">
                          <h4 className={`text-xs font-bold truncate transition-colors ${
                            isSelected ? 'text-cyan-400' : 'text-slate-300 group-hover:text-white'
                          }`}>
                            {item.title}
                          </h4>
                          <p className="text-[10px] font-mono text-slate-500 truncate mt-0.5">
                            {item.category}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Workflow Overview SaaS Spec Card */}
              <div className="p-5 sm:p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
                  <Activity className="w-4 h-4" />
                  <span className="font-bold uppercase tracking-wider">Workflow Overview</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
                  <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Architecture Type</span>
                    <div className="text-sm font-bold text-white">Production-tested workflow</div>
                    <p className="text-[11px] text-slate-400">Built and verified using n8n</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Configured Nodes</span>
                    <div className="text-sm font-bold text-cyan-300">9 Active Nodes</div>
                    <p className="text-[11px] text-slate-400">Triggers, AI Agents & Webhooks</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Execution Platform</span>
                    <div className="text-sm font-bold text-white">{study.techStack.find(tech => /n8n|gohighlevel/i.test(tech.name))?.name || study.category}</div>
                    <p className="text-[11px] text-slate-400">Workflow platform</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Recorded Workflow Status</span>
                    <div className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Workflow Screenshot</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Captured execution; not a live uptime monitor</p>
                  </div>
                </div>
              </div>

            </div>
          )}
        </Section>

        {/* =========================================================================
            11. PREVIOUS / NEXT PROJECT FOOTER NAVIGATION
        ========================================================================= */}
        <Section timing={0.04} className="pt-12 border-t border-slate-800/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Previous Project Card */}
            {study.prevProject && (
              <button
                onClick={() => onNavigateProject?.(study.prevProject!.id)}
                className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition-all text-left group cursor-pointer flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                  <span>PREVIOUS CASE STUDY</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400">{study.prevProject.category}</span>
                  <div className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mt-0.5">
                    {study.prevProject.title}
                  </div>
                </div>
              </button>
            )}

            {/* Next Project Card */}
            {study.nextProject && (
              <button
                onClick={() => onNavigateProject?.(study.nextProject!.id)}
                className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition-all text-right group cursor-pointer flex flex-col justify-between space-y-3 sm:items-end"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <span>NEXT CASE STUDY</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400">{study.nextProject.category}</span>
                  <div className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mt-0.5">
                    {study.nextProject.title}
                  </div>
                </div>
              </button>
            )}
          </div>
        </Section>

      </div>

      {/* Lightbox Modal for Hero Zoom */}
      {isHeroScreenshotZoomed && createPortal(
        <div ref={heroModalRef} role="dialog" aria-modal="true" aria-label={`${study.title} screenshot`} tabIndex={-1}
          className="fixed inset-0 z-[120] bg-slate-950/90 backdrop-blur-xl flex flex-col p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={(event) => { if (event.target === event.currentTarget) setIsHeroScreenshotZoomed(false); }}
        >
          <div className="flex gap-3 items-center justify-between pb-4 max-w-7xl w-full mx-auto">
            <h3 className="text-base font-bold text-white">
              {study.heroScreenshot?.title || 'Workflow Architecture Preview'}
            </h3>
            <button
              aria-label="Close screenshot"
              onClick={() => setIsHeroScreenshotZoomed(false)}
              className="p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center max-w-7xl w-full mx-auto overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90 p-4">
            {study.heroScreenshot?.imageUrl ? (
              <RevealImage
                src={study.heroScreenshot.imageUrl}
                alt="Full size preview"
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <div className="text-center text-slate-400 font-mono text-sm">
                No screenshot is available for this workflow.
              </div>
            )}
          </div>
        </div>, document.body
      )}

      {/* Lightbox Modal for Gallery Thumbnail Zoom & Fullscreen Inspection */}
      {activeGalleryModal && createPortal(
        <div ref={galleryModalRef} role="dialog" aria-modal="true" aria-label="Workflow gallery" tabIndex={-1}
          className="fixed inset-0 z-[120] bg-slate-950/95 backdrop-blur-2xl flex flex-col p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setActiveGalleryModal(null);
              setLightboxZoomLevel(1);
            }
          }}
        >
          {/* Lightbox Top Header */}
          <div className="flex flex-wrap gap-3 items-center justify-between pb-3 max-w-7xl w-full mx-auto border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/90" />
                <span className="w-3 h-3 rounded-full bg-amber-500/90" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/90" />
              </div>
              <div className="hidden sm:block">
                <h3 className="text-sm font-bold text-white">
                  {study.gallery[activeGallerySlideIndex]?.title || 'Workflow Inspection'}
                </h3>
                <span className="text-[10px] font-mono text-cyan-400">
                  {study.gallery[activeGallerySlideIndex]?.category} • {activeGallerySlideIndex + 1} of {study.gallery.length}
                </span>
              </div>
            </div>

            {/* Lightbox Controls */}
            <div className="flex items-center gap-2">
              {/* Zoom Controls */}
              <div className="flex items-center bg-slate-900 rounded-xl border border-slate-800 p-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxZoomLevel((prev) => Math.max(0.75, prev - 0.25));
                  }}
                  className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Zoom out" title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono px-2 text-slate-300 select-none">
                  {Math.round(lightboxZoomLevel * 100)}%
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxZoomLevel((prev) => Math.min(2.5, prev + 0.25));
                  }}
                  className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Zoom in" title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                {lightboxZoomLevel !== 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxZoomLevel(1);
                    }}
                    className="text-[10px] font-mono text-cyan-400 hover:text-cyan-300 px-2 py-0.5 ml-1 rounded bg-cyan-500/10 cursor-pointer"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Lightbox Prev / Next */}
              <div className="flex items-center bg-slate-900 rounded-xl border border-slate-800 p-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveGallerySlideIndex((prev) => {
                      const next = prev > 0 ? prev - 1 : study.gallery.length - 1;
                      setActiveGalleryModal(study.gallery[next].id);
                      return next;
                    });
                    setLightboxZoomLevel(1);
                  }}
                  className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Previous screenshot" title="Previous Image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveGallerySlideIndex((prev) => {
                      const next = prev < study.gallery.length - 1 ? prev + 1 : 0;
                      setActiveGalleryModal(study.gallery[next].id);
                      return next;
                    });
                    setLightboxZoomLevel(1);
                  }}
                  className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Next screenshot" title="Next Image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Close Lightbox */}
              <button
                onClick={() => {
                  setActiveGalleryModal(null);
                  setLightboxZoomLevel(1);
                }}
                className="p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-rose-500/20 border border-slate-700 cursor-pointer transition-colors"
                aria-label="Close gallery" title="Close Fullscreen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Image Canvas Viewport */}
          <div 
            className="flex-1 min-h-0 flex flex-col items-start justify-start max-w-7xl w-full mx-auto overflow-auto rounded-2xl border border-slate-800 bg-[#06080e] p-4 my-3 relative"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setActiveGalleryModal(null);
                setLightboxZoomLevel(1);
              }
            }}
          >
            {study.gallery[activeGallerySlideIndex]?.imageUrl ? (
              <div className="overflow-auto max-w-full max-h-full flex items-center justify-center">
                <RevealImage
                  src={study.gallery[activeGallerySlideIndex].imageUrl}
                  alt={study.gallery[activeGallerySlideIndex].title}
                  style={{ width: `${lightboxZoomLevel * 100}%`, maxWidth: 'none' }}
                  className="h-auto object-contain rounded-xl shadow-2xl"
                />
              </div>
            ) : null}
          </div>

          {/* Lightbox Caption Footer */}
          <div className="max-w-7xl w-full mx-auto px-4 py-2 bg-slate-900/90 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="text-xs font-bold text-white">
                {study.gallery[activeGallerySlideIndex]?.title}
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                {study.gallery[activeGallerySlideIndex]?.caption}
              </p>
            </div>
            <div className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 shrink-0 self-start sm:self-auto">
              Workflow Screenshot
            </div>
          </div>
        </div>, document.body
      )}
    </article>
  );
}
