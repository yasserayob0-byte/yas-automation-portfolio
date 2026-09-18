import './TechStackSection.css';
import Section from './Section';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Cpu, Code2, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { TECH_STACK } from '../data/portfolioData';
import type { TechItem } from '../types';
import { useMotionPreference } from './MotionPreferences';
import {
  GhlLogo,
  N8nLogo,
  OpenAiLogo,
  GeminiLogo,
  SlackLogo,
  AirtableLogo,
  GmailLogo,
  GoogleDocsLogo,
  GoogleSheetsLogo,
  GoogleDriveLogo,
  WebhookLogo,
  RestApiLogo,
  HttpRequestLogo,
  JavaScriptLogo,
  JsonLogo
} from './BrandLogos';
const renderBrandLogo = (logoKey: TechItem['logoKey'], className: string = "w-10 h-10") => {
    switch (logoKey) {
      case 'n8n':
        return <N8nLogo className={className} />;
      case 'gohighlevel':
        return <GhlLogo className={className} />;
      case 'openai':
        return <OpenAiLogo className={className} />;
      case 'gemini':
        return <GeminiLogo className={className} />;
      case 'slack':
        return <SlackLogo className={className} />;
      case 'airtable':
        return <AirtableLogo className={className} />;
      case 'gmail':
        return <GmailLogo className={className} />;
      case 'googledocs':
        return <GoogleDocsLogo className={className} />;
      case 'googlesheets':
        return <GoogleSheetsLogo className={className} />;
      case 'googledrive':
        return <GoogleDriveLogo className={className} />;
      case 'webhook':
        return <WebhookLogo className={className} />;
      case 'restapi':
        return <RestApiLogo className={className} />;
      case 'httprequest':
        return <HttpRequestLogo className={className} />;
      case 'javascript':
        return <JavaScriptLogo className={className} />;
      case 'json':
        return <JsonLogo className={className} />;
      default:
        return <Code2 className={className} />;
    }
  };



export default function TechStackSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const row = useRef<HTMLDivElement>(null);
  const { enabled } = useMotionPreference();
  const selectedTech = TECH_STACK.find(item => item.id === selectedId);
  const behavior = enabled ? 'smooth' : 'auto';
  useEffect(() => {
    const element = row.current;
    if (!element) return;
    const update = () => setEdges({ start: element.scrollLeft < 2, end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2 });
    update();
    element.addEventListener('scroll', update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => { observer.disconnect(); element.removeEventListener('scroll', update); };
  }, []);
  const scroll = (direction: number) => row.current?.scrollBy({ left: direction * row.current.clientWidth * 0.75, behavior });
  const close = () => {
    document.getElementById('tool-' + selectedId)?.focus({ preventScroll: true });
    setSelectedId(null);
  };
  return <Section timing={0.08} id="tech-stack" className="py-24 relative overflow-hidden bg-slate-950/60">
    <div aria-hidden="true" className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="section-intro text-center max-w-3xl mx-auto mb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400"><Cpu aria-hidden="true" className="w-3.5 h-3.5" /><span>CORE TECHNOLOGIES & PLATFORMS</span></div>
        <h2 className="section-title text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">Make Your Existing Tools Work Together.</h2>
        <p className="text-base sm:text-lg text-slate-400">The tools below support faster replies, connected records, and dependable follow-up. I choose the right combination for your workflow, budget, and team.</p>
      </div>
      <div className="flex items-center justify-between gap-4 mb-2">
        <p className="text-sm text-slate-400">Select a tool to see how I use it.</p>
        <div className="flex gap-2 shrink-0">
          <button type="button" aria-label="Previous tools" aria-controls="technology-carousel" disabled={edges.start} onClick={() => scroll(-1)} className="tech-carousel-control"><ChevronLeft aria-hidden="true" className="w-5 h-5" /></button>
          <button type="button" aria-label="Next tools" aria-controls="technology-carousel" disabled={edges.end} onClick={() => scroll(1)} className="tech-carousel-control"><ChevronRight aria-hidden="true" className="w-5 h-5" /></button>
        </div>
      </div>
      <div ref={row} id="technology-carousel" role="group" aria-label="Technology tools" className="tech-carousel">
        {TECH_STACK.map((item, index) => <button key={item.id} id={'tool-' + item.id} type="button" aria-expanded={selectedId === item.id} aria-controls="technology-details" className="tech-carousel-item group"
          onClick={() => setSelectedId(current => current === item.id ? null : item.id)}
          onFocus={event => { const element = event.currentTarget; const container = row.current; if (container && (element.offsetLeft < container.scrollLeft || element.offsetLeft + element.offsetWidth > container.scrollLeft + container.clientWidth)) container.scrollTo({ left: element.offsetLeft - 4, behavior }); }}
          onKeyDown={event => {
            const next = event.key === 'ArrowRight' ? Math.min(index + 1, TECH_STACK.length - 1) : event.key === 'ArrowLeft' ? Math.max(index - 1, 0) : event.key === 'Home' ? 0 : event.key === 'End' ? TECH_STACK.length - 1 : null;
            if (next !== null) { event.preventDefault(); document.getElementById('tool-' + TECH_STACK[next].id)?.focus({ preventScroll: true }); }
            if (event.key === 'Escape') setSelectedId(null);
          }}>
          <span className="tech-stack-icon" aria-hidden="true">{renderBrandLogo(item.logoKey, 'w-8 h-8')}</span>
          <span className="text-sm font-semibold text-slate-200">{item.name}</span>
        </button>)}
      </div>
      <div id="technology-details" role="region" aria-label="Selected technology details" onKeyDown={event => { if (event.key === 'Escape') close(); }}>
        <AnimatePresence mode="wait" initial={false}>
          {selectedTech && <motion.div key={selectedTech.id} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: enabled ? 0.24 : 0, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
            <div className="mt-4 rounded-2xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-xl p-5 sm:p-6 space-y-4">
              <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-mono text-cyan-400">{selectedTech.category}</p><h3 className="text-lg font-bold text-white mt-1">{selectedTech.name}</h3></div><button type="button" onClick={close} aria-label="Close technology details" className="tech-carousel-control"><X aria-hidden="true" className="w-4 h-4" /></button></div>
              <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">{selectedTech.description}</p>
              <div><h4 className="text-sm font-semibold text-white mb-2">What I use it for</h4><ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-slate-300 list-disc pl-4">{selectedTech.useCases.map(useCase => <li key={useCase}>{useCase}</li>)}</ul></div>
              {selectedTech.extendedOverview && <details className="text-sm text-slate-400"><summary className="cursor-pointer rounded focus-visible:outline-2 focus-visible:outline-cyan-300">Implementation notes</summary><p className="mt-2 leading-relaxed max-w-4xl">{selectedTech.extendedOverview}</p></details>}
            </div>
          </motion.div>}
        </AnimatePresence>
      </div>
    </div>
  </Section>;
}
