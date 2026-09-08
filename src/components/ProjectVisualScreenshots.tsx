import RevealImage from './RevealImage';
import { createPortal } from 'react-dom';
import { useModalFocus } from './useModalFocus';
import { useState, useEffect, useCallback } from 'react';
import {
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Workflow
} from 'lucide-react';
import { PROJECT_ITEMS, PROJECT_IMAGE_MAP } from '../data/projectScreenshots';
interface ScreenshotProps {
  projectId: string;
  className?: string;
  showFrame?: boolean;
}

export default function ProjectVisualScreenshot({ projectId, className = '', showFrame = true }: ScreenshotProps) {
  const initialData = (Object.hasOwn(PROJECT_IMAGE_MAP, projectId) ? PROJECT_IMAGE_MAP[projectId] : PROJECT_ITEMS[0]);
  
  const initialIndex = PROJECT_ITEMS.findIndex(
    (item) => item.id === initialData.id
  );
  
  const [isZoomed, setIsZoomed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialIndex >= 0 ? initialIndex : 0);
  const [lightboxZoom, setLightboxZoom] = useState<number>(1);

  // Sync index when projectId changes
  useEffect(() => {
    const matched = (Object.hasOwn(PROJECT_IMAGE_MAP, projectId) ? PROJECT_IMAGE_MAP[projectId] : PROJECT_ITEMS[0]);
    const idx = PROJECT_ITEMS.findIndex((item) => item.id === matched.id);
    if (idx >= 0) {
      setCurrentIndex(idx);
    }
  }, [projectId]);

  const modalRef = useModalFocus(isZoomed, () => { setIsZoomed(false); setLightboxZoom(1); });

  const openScreenshot = () => {
    setCurrentIndex(initialIndex);
    setLightboxZoom(1);
    setIsZoomed(true);
  };

  const activeItem = PROJECT_ITEMS[currentIndex] || initialData;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : PROJECT_ITEMS.length - 1));
    setLightboxZoom(1);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < PROJECT_ITEMS.length - 1 ? prev + 1 : 0));
    setLightboxZoom(1);
  }, []);

  // Keyboard navigation & ESC to close
  useEffect(() => {
    if (!isZoomed) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (['ArrowLeft', 'ArrowRight', '+', '=', '-'].includes(e.key)) e.preventDefault();
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === '+' || e.key === '=') {
        setLightboxZoom((z) => Math.min(2.5, z + 0.25));
      } else if (e.key === '-') {
        setLightboxZoom((z) => Math.max(0.75, z - 0.25));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomed, handlePrev, handleNext]);

  return (
    <>
      {/* SaaS Product Showcase Browser Frame */}
      <div
        className={`w-full h-full rounded-2xl border border-slate-800/90 bg-[#0b0f19] shadow-lg shadow-black/40 overflow-hidden flex flex-col justify-between transition-all duration-300 ease-out hover:scale-[1.02] hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.18)] group/screenshot select-none ${className}`}
      >
        {/* Realistic Dark Browser Top Bar with macOS Traffic Lights */}
        {showFrame && <div className="px-3.5 py-2.5 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between gap-2 shrink-0 backdrop-blur-md">
          {/* Traffic Lights */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shadow-sm shadow-rose-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shadow-sm shadow-amber-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-sm shadow-emerald-500/40" />
          </div>

          {/* Workflow Title in Browser Header */}
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-950/80 border border-slate-800/80 max-w-[70%] sm:max-w-[80%] overflow-hidden">
            <Workflow className="w-3 h-3 text-cyan-400 shrink-0" />
            <span className="text-[11px] font-mono text-slate-300 truncate">
              {initialData.title}
            </span>
          </div>

          {/* Expand / Inspect Action Icon */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              openScreenshot();
            }}
            aria-label="Enlarge Workflow Screenshot"
            className="p-1 rounded-md bg-slate-800/80 hover:bg-cyan-500 text-slate-400 hover:text-slate-950 transition-colors cursor-pointer"
            title="Open Fullscreen Lightbox"
          >
            <Maximize2 className="w-3 h-3" />
          </button>
        </div>}

        {/* Screenshot Viewport Container with 32px Padding and Dark Canvas */}
        <div
          className="relative flex-1 w-full h-full min-h-[140px] bg-[#0b0f19] p-3 sm:p-4 flex items-center justify-center overflow-hidden cursor-pointer"
          role="button"
          tabIndex={0}
          aria-label={`Enlarge ${initialData.title}`}
          onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); event.currentTarget.click(); } }}
          onClick={(event) => {
            event.stopPropagation();
            openScreenshot();
          }}
        >
          {/* Subtle Grid Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

          {/* Screenshot Image with object-contain centered to never crop nodes */}
          <RevealImage
            loading="lazy" decoding="async"
            src={initialData.img}
            alt={initialData.title}
            className="w-full h-full min-h-0 object-contain object-center rounded-lg shadow-xl transition-transform duration-300 group-hover/screenshot:scale-[1.01]"
          />

          {/* Subtle Hover Inspection Badge */}
          <div className="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-slate-950/85 border border-slate-800/90 text-[10px] font-mono text-cyan-400 flex items-center gap-1 opacity-0 group-hover/screenshot:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md backdrop-blur-sm">
            <Maximize2 className="w-2.5 h-2.5" />
            <span>Click to Enlarge</span>
          </div>
        </div>
      </div>

      {/* Fullscreen High-Resolution Lightbox Modal with Zoom & Navigation */}
      {isZoomed && createPortal(
        <div ref={modalRef} tabIndex={-1} role="dialog" aria-modal="true" aria-label="Workflow screenshot viewer"
          className="fixed inset-0 z-[120] bg-slate-950/95 backdrop-blur-2xl flex flex-col p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsZoomed(false);
              setLightboxZoom(1);
            }
          }}
        >
          {/* Lightbox Header Bar */}
          <div className="flex flex-wrap gap-3 items-center justify-between pb-3 max-w-7xl w-full mx-auto border-b border-slate-800/80">
            {/* Left Controls / Title */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white font-heading truncate max-w-[min(72vw,280px)] sm:max-w-xl">
                  {activeItem.title}
                </h3>
                <span className="text-[11px] font-mono text-cyan-400">
                  {activeItem.category} • {currentIndex + 1} of {PROJECT_ITEMS.length}
                </span>
              </div>
            </div>

            {/* Right Action Tools (Zoom, Prev/Next, Close) */}
            <div className="flex items-center gap-2">
              {/* Zoom Controls */}
              <div className="flex items-center bg-slate-900 rounded-xl border border-slate-800 p-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxZoom((z) => Math.max(0.75, z - 0.25));
                  }}
                  className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Zoom Out (-)"
                  aria-label="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono px-2 text-slate-300 select-none">
                  {Math.round(lightboxZoom * 100)}%
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxZoom((z) => Math.min(2.5, z + 0.25));
                  }}
                  className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Zoom In (+)"
                  aria-label="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                {lightboxZoom !== 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxZoom(1);
                    }}
                    className="p-1.5 rounded-lg hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer ml-0.5"
                    title="Reset Zoom"
                    aria-label="Reset Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center bg-slate-900 rounded-xl border border-slate-800 p-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Previous Workflow (←)"
                  aria-label="Previous Workflow"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Next Workflow (→)"
                  aria-label="Next Workflow"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={() => {
                  setIsZoomed(false);
                  setLightboxZoom(1);
                }}
                className="p-2 rounded-xl bg-slate-900 hover:bg-rose-500/20 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                title="Close Fullscreen (Esc)"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Content Container */}
          <div
            className="flex-1 min-h-0 flex items-start justify-start max-w-7xl w-full mx-auto overflow-auto rounded-2xl border border-slate-800/90 bg-[#06080e] p-4 sm:p-6 my-3 relative shadow-2xl"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsZoomed(false);
                setLightboxZoom(1);
              }
            }}
          >
            <div className="w-full shrink-0">
              <RevealImage
                src={activeItem.img}
                alt={activeItem.title}
                style={{
                  width: `${lightboxZoom * 100}%`,
                  maxWidth: 'none'
                }}
                className="h-auto object-contain rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>

          {/* Lightbox Footer Bar */}
          <div className="max-w-7xl w-full mx-auto px-4 py-2.5 bg-slate-900/90 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                {activeItem.tag}
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700 text-[10px]">ESC</kbd> to exit • Use <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700 text-[10px]">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700 text-[10px]">→</kbd> to navigate
            </div>
          </div>
        </div>, document.body
      )}
    </>
  );
}
