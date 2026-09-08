import { createPortal } from 'react-dom';
import { useModalFocus } from './useModalFocus';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Cpu,
  X,
  Sparkles,
  ArrowUpRight,
  Share2,
  CheckCircle2,
  Search,
  SlidersHorizontal,
  Code2
} from 'lucide-react';
import { TECH_STACK } from '../data/portfolioData';
import type { TechItem } from '../types';
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

interface TechStackSectionProps {
  onExploreApiBridge?: () => void;
}

export default function TechStackSection({ onExploreApiBridge }: TechStackSectionProps) {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);
  const modalRef = useModalFocus(!!selectedTech, () => setSelectedTech(null));
  const [viewMode, setViewMode] = useState<'marquee' | 'grid'>('grid');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Core CRM', 'Orchestration', 'AI & LLMs', 'Protocols & APIs', 'Productivity & DB'];

  // Helper to render official brand logo
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

  // Divide 15 items into 2 balanced rows for the infinite marquee (8 items row 1, 7 items row 2)
  const rowOneItems = TECH_STACK.slice(0, 8);
  const rowTwoItems = TECH_STACK.slice(8);

  // Filtered for Grid mode
  const filteredGridItems = TECH_STACK.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden bg-slate-950/60">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>CORE TECHNOLOGIES & PLATFORMS</span>
          </div>
          <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -40px 0px" }} transition={{ duration: 0.65 }} className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Core Technologies I Use.
          </motion.h2>
          <p className="text-base sm:text-lg text-slate-400">
            Enterprise-grade workflow orchestration, frontier generative AI models, cloud databases, and low-latency API protocols powering autonomous business systems.
          </p>

          {/* View Mode Toggle Switch */}
          <div className="pt-2 flex items-center justify-center">
            <div className="p-1 bg-slate-900/90 border border-slate-800 rounded-full inline-flex items-center gap-1 shadow-inner">
              <button
                aria-pressed={viewMode === 'marquee'}
                onClick={() => setViewMode('marquee')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'marquee'
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Live Infinite Flow</span>
              </button>
              <button
                aria-pressed={viewMode === 'grid'}
                onClick={() => setViewMode('grid')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Interactive Matrix</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* VIEW MODE 1: Smooth Infinite Horizontal Scrolling Marquee with Pause-On-Hover */}
      {viewMode === 'marquee' && (
        <div className="relative w-full overflow-hidden space-y-6 pause-on-hover py-4 select-none">
          
          {/* Left & Right Soft Fade Gradients */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-[#07090e] via-[#07090e]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-[#07090e] via-[#07090e]/80 to-transparent z-20 pointer-events-none" />

          {/* Marquee Row 1: Leftward Scrolling */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-left flex gap-5 items-stretch">
              {[...rowOneItems, ...rowOneItems].map((item, idx) => (
                <div
                  key={`r1-${item.id}-${idx}`}
                  role="button"
                  aria-hidden={idx >= rowOneItems.length}
                  tabIndex={idx < rowOneItems.length ? 0 : -1}
                  aria-label={`Explore ${item.name}`}
                  onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelectedTech(item); } }}
                  onClick={() => setSelectedTech(item)}
                  className="group relative w-[310px] sm:w-[350px] shrink-0 rounded-2xl bg-slate-900/70 hover:bg-slate-900/95 border border-slate-800/90 hover:border-cyan-500/60 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-12px_rgba(6,182,212,0.35)] cursor-pointer flex flex-col justify-between"
                >
                  {/* Subtle brand ambient glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl"
                    style={{
                      background: `radial-gradient(circle at 50% 30%, ${item.accentColor}30 0%, transparent 70%)`
                    }}
                  />

                  <div className="relative z-10 space-y-4">
                    {/* Top Row: Official Brand Logo + Category Tag */}
                    <div className="flex flex-wrap gap-3 items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-slate-950/95 border border-slate-800 group-hover:border-cyan-500/50 p-2.5 flex items-center justify-center transition-all duration-300 shadow-inner group-hover:scale-110 group-hover:shadow-[0_0_22px_rgba(6,182,212,0.3)]">
                        {renderBrandLogo(item.logoKey, "w-8 h-8 group-hover:scale-105 transition-transform")}
                      </div>

                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-slate-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors">
                        {item.category}
                      </span>
                    </div>

                    {/* Brand Name & Short Role Tag */}
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                          {item.name}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                      
                      <p className="text-xs font-mono text-cyan-400 font-semibold mt-1">
                        {item.name} – {item.tagline}
                      </p>
                    </div>

                    {/* Description Revealed on Hover with Soft Glow */}
                    <p className="text-xs text-slate-300/90 leading-relaxed group-hover:text-white transition-colors">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Capability Tags */}
                  <div className="relative z-10 mt-4 pt-3.5 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                    {item.useCases.slice(0, 2).map((uc, uIdx) => (
                      <span
                        key={uIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800/90 text-[10px] font-mono text-slate-400 group-hover:text-slate-200 transition-colors"
                      >
                        {uc}
                      </span>
                    ))}
                    {item.useCases.length > 2 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-cyan-400/80">
                        +{item.useCases.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Row 2: Rightward Scrolling */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-right flex gap-5 items-stretch">
              {[...rowTwoItems, ...rowTwoItems].map((item, idx) => (
                <div
                  key={`r2-${item.id}-${idx}`}
                  role="button"
                  aria-hidden={idx >= rowTwoItems.length}
                  tabIndex={idx < rowTwoItems.length ? 0 : -1}
                  aria-label={`Explore ${item.name}`}
                  onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelectedTech(item); } }}
                  onClick={() => setSelectedTech(item)}
                  className="group relative w-[310px] sm:w-[350px] shrink-0 rounded-2xl bg-slate-900/70 hover:bg-slate-900/95 border border-slate-800/90 hover:border-cyan-500/60 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-12px_rgba(6,182,212,0.35)] cursor-pointer flex flex-col justify-between"
                >
                  {/* Subtle brand ambient glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl"
                    style={{
                      background: `radial-gradient(circle at 50% 30%, ${item.accentColor}30 0%, transparent 70%)`
                    }}
                  />

                  <div className="relative z-10 space-y-4">
                    {/* Top Row: Official Brand Logo + Category Tag */}
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-slate-950/95 border border-slate-800 group-hover:border-cyan-500/50 p-2.5 flex items-center justify-center transition-all duration-300 shadow-inner group-hover:scale-110 group-hover:shadow-[0_0_22px_rgba(6,182,212,0.3)]">
                        {renderBrandLogo(item.logoKey, "w-8 h-8 group-hover:scale-105 transition-transform")}
                      </div>

                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-slate-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors">
                        {item.category}
                      </span>
                    </div>

                    {/* Brand Name & Short Role Tag */}
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                          {item.name}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                      
                      <p className="text-xs font-mono text-cyan-400 font-semibold mt-1">
                        {item.name} – {item.tagline}
                      </p>
                    </div>

                    {/* Description Revealed on Hover with Soft Glow */}
                    <p className="text-xs text-slate-300/90 leading-relaxed group-hover:text-white transition-colors">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Capability Tags */}
                  <div className="relative z-10 mt-4 pt-3.5 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                    {item.useCases.slice(0, 2).map((uc, uIdx) => (
                      <span
                        key={uIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800/90 text-[10px] font-mono text-slate-400 group-hover:text-slate-200 transition-colors"
                      >
                        {uc}
                      </span>
                    ))}
                    {item.useCases.length > 2 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-cyan-400/80">
                        +{item.useCases.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-2 text-xs font-mono text-slate-500 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>Hover anywhere on the section to pause scrolling and inspect platform specifications</span>
          </div>

        </div>
      )}

      {/* VIEW MODE 2: Interactive Filterable Grid Matrix */}
      {viewMode === 'grid' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Controls Bar: Category Filters & Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  aria-pressed={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="search"
                aria-label="Search technologies and integrations"
                placeholder="Search stack or API..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredGridItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                role="button"
                  tabIndex={0}
                  aria-label={`Explore ${item.name}`}
                  onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelectedTech(item); } }}
                  onClick={() => setSelectedTech(item)}
                className="group relative rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/90 hover:border-cyan-500/50 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-12px_rgba(6,182,212,0.25)] cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Logo + Category */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/40 p-2.5 flex items-center justify-center transition-all duration-300 shadow-inner group-hover:scale-110">
                      {renderBrandLogo(item.logoKey, "w-8 h-8 group-hover:scale-105 transition-transform")}
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-400">
                      {item.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 mt-0.5 font-semibold">
                      {item.name} – {item.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom pills */}
                <div className="mt-5 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {item.useCases.map((uc, uIdx) => (
                    <span
                      key={uIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-300"
                    >
                      {uc}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {filteredGridItems.length === 0 && (
            <div className="text-center py-16 bg-slate-950/60 rounded-3xl border border-slate-800 space-y-2">
              <p className="text-sm text-slate-400">No technologies matching your search filters.</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="text-xs font-mono text-cyan-400 underline"
              >
                Clear all filters
              </button>
            </div>
          )}

        </div>
      )}

      {/* Integration Capabilities Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-slate-800 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-white font-heading flex items-center justify-center md:justify-start gap-2">
              <Share2 className="w-4 h-4 text-cyan-400" />
              <span>Need a bespoke webhook adapter, proprietary ERP, or custom database bridge?</span>
            </h4>
            <p className="text-xs text-slate-400">
              We write custom JavaScript logic, OAuth 2.0 connectors, and REST API adapters to connect any proprietary platform.
            </p>
          </div>

          <a
            href="#contact"
            onClick={onExploreApiBridge}
            className="shrink-0 px-6 py-3 rounded-full bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Request Custom API Bridge</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Tech Item Details Modal */}
      {createPortal(<AnimatePresence>
        {selectedTech && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div ref={modalRef} tabIndex={-1} role="dialog" aria-modal="true" aria-label={selectedTech.name}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-800 p-7 sm:p-8 shadow-2xl space-y-6 max-h-[90dvh] overflow-y-auto"
            >
              {/* Background gradient banner */}
              <div
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[100px] pointer-events-none opacity-40"
                style={{ background: selectedTech.accentColor }}
              />

              {/* Modal Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 p-3 flex items-center justify-center shadow-lg">
                    {renderBrandLogo(selectedTech.logoKey, "w-10 h-10")}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-white font-heading">
                        {selectedTech.name}
                      </h3>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-slate-400">
                        {selectedTech.category}
                      </span>
                    </div>
                    <p className="text-sm font-mono text-cyan-400 mt-0.5 font-semibold">
                      {selectedTech.name} – {selectedTech.tagline}
                    </p>
                  </div>
                </div>

                <button
                  aria-label="Close technology details"
                  onClick={() => setSelectedTech(null)}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer text-sm font-bold"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Overview & Architecture Details */}
              <div className="space-y-4 pt-2">
                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                    Enterprise Capability & Architecture
                  </h4>
                  <p className="text-sm text-slate-200 mt-1 leading-relaxed">
                    {selectedTech.description}
                  </p>
                </div>

                {selectedTech.extendedOverview && (
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                    <span className="text-cyan-400 font-mono font-semibold block mb-1">
                      Systems Engineering Implementation:
                    </span>
                    {selectedTech.extendedOverview}
                  </div>
                )}

                {/* Use Cases */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
                    Core Application Areas In YAS Automations
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedTech.useCases.map((uc, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{uc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Proficiency: <strong className="text-cyan-300">{selectedTech.proficiency}</strong>
                </span>

                <a
                  href="#contact"
                  onClick={() => setSelectedTech(null)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-opacity"
                >
                  Deploy with {selectedTech.name}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>, document.body)}

    </section>
  );
}
