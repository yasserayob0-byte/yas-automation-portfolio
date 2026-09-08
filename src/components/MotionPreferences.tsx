import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { MotionConfig, useReducedMotion } from 'motion/react';
const MotionPreference = createContext({ enabled: true, ambientEnabled: true, systemReduced: false, toggle: () => {} });
export const useMotionPreference = () => useContext(MotionPreference);
export default function MotionPreferences({ children }: { children: ReactNode }) {
  const systemReduced = useReducedMotion();
  const [paused, setPaused] = useState(() => {
    try { return localStorage.getItem('yas-motion-paused') === 'true'; } catch { return false; }
  });
  const enabled = !systemReduced && !paused;
  const [visible, setVisible] = useState(() => !document.hidden);
  useEffect(() => {
    const update = () => { setVisible(!document.hidden); document.documentElement.dataset.pageHidden = String(document.hidden); };
    update();
    document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);
  useEffect(() => { document.documentElement.dataset.motion = enabled ? 'on' : 'off'; }, [enabled]);
  const toggle = () => setPaused(previous => {
    try { localStorage.setItem('yas-motion-paused', String(!previous)); } catch { /* Optional preference storage. */ }
    return !previous;
  });
  return <MotionPreference.Provider value={{ enabled, ambientEnabled: enabled && visible, systemReduced: !!systemReduced, toggle }}><MotionConfig reducedMotion={enabled ? 'never' : 'always'} transition={{ duration: enabled ? 0.48 : 0, ease: [0.22, 1, 0.36, 1] }}>{children}</MotionConfig></MotionPreference.Provider>;
}
