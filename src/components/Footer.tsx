import { preferredScrollBehavior } from './navigation';
import { ArrowUp, Linkedin, Github, Briefcase, Globe } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: preferredScrollBehavior() });
  };

  return (
    <footer className="relative bg-[#05070b] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden text-slate-400">
      {/* Top ambient highlight line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Col (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col items-start select-none">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tighter text-white font-heading">
                  YAS
                </span>
                <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent font-heading">
                  AUTOMATION
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-medium mt-0.5">
                AI • Automation • Business Systems
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Building intelligent business systems through AI automation. I build GoHighLevel, n8n, and custom AI agent pipelines for growing businesses.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>AI workflows, CRM automation & API integrations</span>
            </div>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  Projects & Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Automation Services
                </a>
              </li>
              <li>
                <a href="#ghl-showcase" className="hover:text-cyan-400 transition-colors">
                  GoHighLevel Showcase
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-cyan-400 transition-colors">
                  Why Automation Matters
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Discuss Your Project
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Professional Profiles
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              <a
                href="mailto:yasserayob0@gmail.com?subject=Request%20LinkedIn%20profile"
                className="hover:text-cyan-400 transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Request LinkedIn Profile</span>
              </a>
              <a
                href="mailto:yasserayob0@gmail.com?subject=Request%20GitHub%20profile"
                className="hover:text-cyan-400 transition-colors flex items-center gap-2"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                <span>Request GitHub Profile</span>
              </a>
              <a
                href="mailto:yasserayob0@gmail.com?subject=Request%20Upwork%20profile"
                className="hover:text-cyan-400 transition-colors flex items-center gap-2"
              >
                <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                <span>Request Upwork Profile</span>
              </a>
              <a
                href="mailto:yasserayob0@gmail.com?subject=Request%20OnlineJobs%20profile"
                className="hover:text-cyan-400 transition-colors flex items-center gap-2"
              >
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>Request OnlineJobs Profile</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span>© 2026 YAS Automation. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-slate-400 font-medium">
              Designed and Developed by <strong className="text-slate-200">Yasser Usman</strong>
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 border border-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Back to Top"
          >
            <span className="text-[11px] font-mono">Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
