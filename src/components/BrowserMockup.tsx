import React from 'react';
import { Lock, ShieldCheck, RefreshCw, Layers } from 'lucide-react';

interface BrowserMockupProps {
  url?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  badge?: string;
  badgeColor?: string;
  onRefresh?: () => void;
  isSimulating?: boolean;
}

export default function BrowserMockup({
  url = 'https://app.gohighlevel.com/v2/location/yas-auto/workflows',
  title = 'GoHighLevel Enterprise Workflow Engine',
  children,
  className = '',
  badge,
  badgeColor = 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  onRefresh,
  isSimulating = false
}: BrowserMockupProps) {
  return (
    <div
      className={`rounded-2xl overflow-hidden bg-slate-950/90 border border-slate-800/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-300 ${className}`}
    >
      {/* Browser Window Header */}
      <div className="bg-slate-900/95 px-4 py-3 border-b border-slate-800/80 flex items-center justify-between gap-3 select-none">
        {/* macOS Style Traffic Lights */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors border border-rose-600/40" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors border border-amber-600/40" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors border border-emerald-600/40" />
        </div>

        {/* Tab & URL Address Bar */}
        <div className="flex-1 max-w-xl mx-auto flex items-center gap-2 bg-slate-950/80 px-3.5 py-1.5 rounded-lg border border-slate-800 text-xs text-slate-400 font-mono">
          <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="truncate text-slate-300 font-normal">{url}</span>
          <div className="ml-auto flex items-center gap-1 text-slate-500">
            {onRefresh && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRefresh();
                }}
                title="Re-run Simulation"
                className="hover:text-cyan-400 transition-colors p-0.5"
              >
                <RefreshCw className={`w-3 h-3 ${isSimulating ? 'animate-spin text-cyan-400' : ''}`} />
              </button>
            )}
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          </div>
        </div>

        {/* Right Info / Status Badge */}
        <div className="flex items-center gap-2">
          {badge ? (
            <span className={`px-2.5 py-0.5 text-[11px] font-mono rounded-md border ${badgeColor} hidden sm:inline-block`}>
              {badge}
            </span>
          ) : (
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium hidden sm:flex">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Engine</span>
            </div>
          )}
        </div>
      </div>

      {/* Subheader / Tab info */}
      <div className="bg-slate-900/40 px-4 py-2 border-b border-slate-800/40 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2 font-medium">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-slate-200">{title}</span>
        </div>
        <div className="text-[11px] font-mono text-slate-500 hidden md:block">
          STATUS: 200 OK • 0ms QUEUE
        </div>
      </div>

      {/* Browser Body Viewport */}
      <div className="relative overflow-hidden bg-[#0a0f1d]/90">
        {children}
      </div>
    </div>
  );
}
