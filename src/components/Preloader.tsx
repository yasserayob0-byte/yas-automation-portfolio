import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, ShieldCheck, Zap } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

const STATUS_MESSAGES = [
  'Connecting to YAS Cloud Orchestrator...',
  'Mounting GoHighLevel & n8n pipelines...',
  'Loading AI agent reasoning matrices...',
  'Systems fully operational.'
];

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let finishTimeout: ReturnType<typeof setTimeout> | undefined;
    let completeTimeout: ReturnType<typeof setTimeout> | undefined;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          finishTimeout = setTimeout(() => {
            setIsFinished(true);
            completeTimeout = setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        // Smooth logarithmic easing for realistic load feeling
        const increment = prev < 50 ? Math.floor(Math.random() * 12) + 8 : Math.floor(Math.random() * 8) + 4;
        const next = Math.min(prev + increment, 100);

        if (next > 25 && next <= 55) setStatusIndex(1);
        else if (next > 55 && next <= 85) setStatusIndex(2);
        else if (next > 85) setStatusIndex(3);

        return next;
      });
    }, 85);

    return () => {
      clearInterval(interval);
      if (finishTimeout) clearTimeout(finishTimeout);
      if (completeTimeout) clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-[99999] bg-[#07090e] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Center Brand Identity */}
          <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center">
            {/* Animated Logo Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-slate-900 to-indigo-500/20 border border-cyan-500/40 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                <Cpu className="w-8 h-8 text-cyan-400 animate-pulse" />
              </div>
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 ring-4 ring-[#07090e] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              </div>
            </motion.div>

            {/* Brand Name */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-heading">
                  YAS
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent font-heading">
                  AUTOMATION
                </span>
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400 font-medium mt-1">
                AI • Automation • Business Systems
              </p>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-full mt-10 space-y-3">
              <div className="relative h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Status and Percentage */}
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="truncate max-w-[260px] text-slate-300">
                {STATUS_MESSAGES[statusIndex]}
                  </span>
                </div>
                <span className="text-cyan-400 font-semibold">{progress}%</span>
              </div>
            </div>

            {/* Bottom Tech Assurance */}
            <div className="mt-8 flex items-center gap-4 text-[11px] text-slate-500 font-mono">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Enterprise SLA
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-cyan-400" /> Zero-Latency Engine
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
