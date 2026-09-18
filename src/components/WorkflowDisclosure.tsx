import { createContext, useContext, useId, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useMotionPreference } from './MotionPreferences';

const WorkflowContext = createContext({ active: '', toggle: (_id: string) => {} });
export function WorkflowDisclosureProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState('');
  return <WorkflowContext.Provider value={{ active, toggle: id => setActive(current => current === id ? '' : id) }}>{children}</WorkflowContext.Provider>;
}

export default function WorkflowDisclosure({ id, title, category, summary, image, children, headingLevel = 3, triggerId }: {
  id: string; title: string; category: string; summary: string; image: string;
  children: ReactNode; headingLevel?: 1 | 3; triggerId?: string;
}) {
  const { active, toggle } = useContext(WorkflowContext);
  const { enabled } = useMotionPreference();
  const uniqueId = useId();
  const panelId = uniqueId + '-details';
  const buttonId = triggerId || uniqueId + '-toggle';
  const open = active === id;
  const Heading = headingLevel === 1 ? 'h1' : 'h3';
  return <article className={`min-w-0 self-start polished-card motion-glass rounded-3xl bg-slate-950/80 border border-slate-800/90 overflow-hidden ${open ? 'lg:col-span-2' : ''}`}>
    <div className="relative group p-4 sm:p-6">
      <img src={image} alt={title + ' workflow screenshot'} loading="lazy" decoding="async" className="w-full h-48 sm:h-56 object-contain rounded-2xl bg-slate-900 border border-slate-800" />
      <div className="pt-6 space-y-3">
        <span className="text-xs font-mono text-cyan-400">{category}</span>
        <Heading className="text-xl sm:text-2xl font-bold text-white font-heading leading-snug">{title}</Heading>
        <p className="text-sm text-slate-300 leading-relaxed line-clamp-2">{summary}</p>
        <button type="button" id={buttonId} aria-expanded={open} aria-controls={panelId}
          aria-label={(open ? 'Hide' : 'View') + ' workflow details: ' + title}
          onClick={() => toggle(id)}
          className="after:absolute after:inset-0 after:cursor-pointer flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-400 hover:bg-cyan-500/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
          {open ? 'Hide Workflow Details' : 'View Workflow Details'}
          <ChevronDown aria-hidden="true" className={`w-4 h-4 transition-transform duration-300 motion-reduce:transition-none ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
    <motion.div id={panelId} role="region" aria-labelledby={buttonId} aria-hidden={!open} inert={!open}
      initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
      transition={{ duration: enabled ? 0.32 : 0, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
      <AnimatePresence initial={false}>
        {open && <motion.div key="content" initial={{ y: enabled ? -6 : 0 }} animate={{ y: 0 }} exit={{ opacity: 0 }} transition={{ duration: enabled ? 0.32 : 0 }} className="min-w-0 border-t border-slate-800">{children}</motion.div>}
      </AnimatePresence>
    </motion.div>
  </article>;
}
