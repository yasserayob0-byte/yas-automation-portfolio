import { createPortal } from 'react-dom';
import { useModalFocus } from './useModalFocus';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Layers,
  CheckCircle2,
  X,
  ShieldCheck
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import type { ProjectItem } from '../types';
import BrowserMockup from './BrowserMockup';
import ProjectVisualScreenshot from './ProjectVisualScreenshots';

interface ProjectsSectionProps {
  onSelectProjectForAudit: (projectName: string) => void;
  onOpenCaseStudy?: (projectId: string) => void;
}

export default function ProjectsSection({ onSelectProjectForAudit, onOpenCaseStudy }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const modalRef = useModalFocus(!!selectedProject, () => setSelectedProject(null));

  const categories = ['All', 'n8n', 'AI Agents', 'GoHighLevel', 'Custom APIs'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) =>
        p.category === activeCategory ||
        (activeCategory === 'n8n' && p.techStack.includes('n8n')) ||
        (activeCategory === 'GoHighLevel' && (p.category === 'GoHighLevel' || p.techStack.includes('GoHighLevel')))
      );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono text-cyan-400">
            <Layers className="w-3.5 h-3.5" />
            <span>FEATURED AUTOMATION SOLUTIONS</span>
          </div>
          <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -40px 0px" }} transition={{ duration: 0.65 }} className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Featured Automation Solutions.
          </motion.h2>
          <p className="text-base sm:text-lg text-slate-400">
            Explore real workflow screenshots, the problems each system solves, and how the integrations work. Project metrics are reported outcomes, not guarantees for a new deployment.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                aria-pressed={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.35)]'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout="position"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.08 }}
              className="group relative rounded-3xl bg-slate-950/80 border border-slate-800/90 hover:border-cyan-500/50 transition-[border-color,box-shadow] duration-300 hover:shadow-[0_25px_60px_-15px_rgba(6,182,212,0.18)] flex flex-col overflow-hidden backdrop-blur-xl"
            >
              {/* Top Large Project Screenshot */}
              <div className="p-4 sm:p-6 pb-0">
                <BrowserMockup
                  url={project.browserUrl}
                  title={project.browserTitle}
                  className="group-hover:border-cyan-500/40 transition-colors"
                >
                  <div className="relative h-48 sm:h-56 w-full bg-[#0a0d14] overflow-hidden group/screen">
                    {/* Rendered Visual Screenshot Canvas matching real n8n interface */}
                    <ProjectVisualScreenshot projectId={project.id} showFrame={false} className="h-full" />
                  </div>
                </BrowserMockup>
              </div>

              {/* Bottom Card Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Category & Client Type */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {project.clientType}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Short Professional Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Key Metrics Pill Grid */}
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {project.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center"
                      >
                        <div className="text-sm sm:text-base font-bold text-white font-heading break-words">
                          {metric.value}
                        </div>
                        <div className="text-xs text-slate-400 font-medium break-words mt-0.5">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Badges & "View Case Study" Button */}
                <div className="pt-4 border-t border-slate-800/80 space-y-4">
                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 group-hover:border-slate-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button onClick={() => setSelectedProject(project)} className="text-xs text-slate-400 hover:text-cyan-300 text-left">Inspect Full Screenshot &amp; Blueprint</button>
                  {/* Card Action Links */}
                  <div className="flex items-center justify-between pt-2">
                    <button id={`case-link-${project.id}`}
                      aria-label={`View case study: ${project.title}`}
                      onClick={() => {
                        if (onOpenCaseStudy) {
                          onOpenCaseStudy(project.id);
                        } else {
                          setSelectedProject(project);
                        }
                      }}
                      className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm group-hover:border-cyan-500/60"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onSelectProjectForAudit(project.title)}
                      className="text-xs font-mono text-slate-400 hover:text-white px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors cursor-pointer"
                    >
                      Discuss Similar Build
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Project Architecture Blueprint & Full Screenshot Modal */}
      {createPortal(<AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-xl"
            />

            {/* Modal Box */}
            <motion.div ref={modalRef} tabIndex={-1} role="dialog" aria-modal="true" aria-label={selectedProject.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                aria-label="Close project blueprint"
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-10">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  Case Study & Architecture Blueprint
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Engineered for {selectedProject.clientType}
                </p>
              </div>

              {/* Full Screenshot Preview inside Modal */}
              <div className="mt-6 rounded-2xl border border-slate-800 overflow-hidden bg-[#07090f]">
                <div className="p-3 bg-[#0d1017] border-b border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-mono text-cyan-400 text-[11px] truncate">{selectedProject.browserTitle}</span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {selectedProject.techStack.includes('GoHighLevel') ? 'Live GHL Suite' : 'Live n8n Canvas'}
                  </span>
                </div>
                <div className="h-64 sm:h-72 w-full">
                  <ProjectVisualScreenshot projectId={selectedProject.id} className="h-full" />
                </div>
              </div>

              {/* Deep Details */}
              <div className="mt-6 space-y-6">
                
                {/* Problem Solved */}
                <div className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/20">
                  <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">
                    Problem It Solved
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedProject.problemSolved}
                  </p>
                </div>

                {/* System Overview */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    Full System Overview
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedProject.fullOverview}
                  </p>
                </div>

                {/* Solution Architecture Checklist */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Engineered Solution Components
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.solutionArchitecture.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Flow Breakdown */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Execution Pipeline Dataflow
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.flowSteps.map((step, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                        <div className="font-semibold text-cyan-300">
                          Step 0{i + 1}: {step.title}
                        </div>
                        <div className="text-slate-400 text-[11px] mt-1">{step.description}</div>
                        <div className="text-[10px] font-mono text-slate-500 mt-2">
                          STACK: {step.tech}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack in Modal */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Integrated Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal CTA */}
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Discuss monitoring and support scope</span>
                  </div>

                  <button
                    onClick={() => {
                      const name = selectedProject.title;
                      setSelectedProject(null);
                      onSelectProjectForAudit(name);
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Custom Build of this System</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>, document.body)}
    </section>
  );
}
