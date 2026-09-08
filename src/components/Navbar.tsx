import { useMotionPreference } from './MotionPreferences';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, ShieldCheck, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenContact: (topic?: string) => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const { enabled: motionEnabled, systemReduced, toggle: toggleMotion } = useMotionPreference();
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(84);
  useEffect(() => {
    if (!headerRef.current) return;
    const observer = new ResizeObserver(() => setHeaderHeight(headerRef.current?.getBoundingClientRect().height || 84));
    observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'about', 'services', 'ghl-showcase', 'projects', 'tech-stack', 'impact', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    let frame = 0;
    const scheduleScroll = () => { if (!frame) frame = requestAnimationFrame(() => { handleScroll(); frame = 0; }); };
    handleScroll();
    window.addEventListener('scroll', scheduleScroll, { passive: true });
    return () => { window.removeEventListener('scroll', scheduleScroll); cancelAnimationFrame(frame); };
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setMobileMenuOpen(false); document.getElementById('menu-toggle')?.focus(); } };
    if (mobileMenuOpen) window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'GHL Showcase', href: '#ghl-showcase' },
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Why Automation', href: '#impact' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header ref={headerRef} initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#07090e]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo on the left */}
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex flex-col items-start select-none focus:outline-none"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-2xl font-black tracking-tighter text-white font-heading">
                YAS
              </span>
              <span className="text-lg sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent font-heading">
                AUTOMATION
              </span>
              <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </div>
            <span className="hidden sm:block text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-slate-400 font-medium group-hover:text-cyan-400 transition-colors">
              AI • Automation • Business Systems
            </span>
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden min-[1380px]:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Let's Talk CTA button */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden min-[1700px]:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-400 font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Discuss project availability</span>
            </div>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 rounded-full animate-gradient-x opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 text-xs font-semibold text-white group-hover:bg-slate-900 transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
                <span>Discuss a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>

          <button onClick={toggleMotion} disabled={systemReduced} aria-label={motionEnabled ? 'Pause animations' : 'Resume animations'} title={systemReduced ? 'Animations are reduced by your system preference' : motionEnabled ? 'Pause animations' : 'Resume animations'} aria-pressed={!motionEnabled} className="ml-2 rounded-xl border border-slate-800 text-slate-300 inline-flex items-center justify-center shrink-0">{motionEnabled ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}</button>
          {/* Mobile Menu Toggle */}
          <div className="flex min-[1380px]:hidden items-center gap-2 ml-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              id="menu-toggle"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            id="mobile-navigation"
            style={{ top: headerHeight, maxHeight: `calc(100dvh - ${headerHeight}px)` }}
            className="fixed inset-x-0 overflow-y-auto z-40 bg-[#090d16]/95 backdrop-blur-2xl border-b border-slate-800 p-6 min-[1380px]:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800/80 hover:text-cyan-400 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-slate-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Discuss Your Project</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
