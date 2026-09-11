import { useCallback, useEffect, useRef, type PointerEvent } from 'react';
import { useMotionPreference } from './MotionPreferences';

/** Moves the button contents at most 3px, keeping the actual hit target stationary. */
export function useMagnetic() {
  const { ambientEnabled } = useMotionPreference();
  const allowed = useRef(false);
  const frame = useRef(0);
  const target = useRef<HTMLElement | null>(null);
  const reset = useCallback(() => {
    cancelAnimationFrame(frame.current);
    frame.current = 0;
    target.current?.style.removeProperty('--magnetic-x');
    target.current?.style.removeProperty('--magnetic-y');
    target.current = null;
  }, []);
  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => { allowed.current = ambientEnabled && media.matches; if (!allowed.current) reset(); };
    update();
    media.addEventListener('change', update);
    return () => { media.removeEventListener('change', update); reset(); };
  }, [ambientEnabled, reset]);
  const onPointerMove = useCallback((event: PointerEvent<HTMLElement>) => {
    if (!allowed.current || event.pointerType !== 'mouse') return;
    const element = event.currentTarget;
    const { clientX, clientY } = event;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      if (target.current !== element) reset();
      target.current = element;
      const bounds = element.getBoundingClientRect();
      const x = Math.max(-3, Math.min(3, (clientX - bounds.left - bounds.width / 2) * 0.035));
      const y = Math.max(-3, Math.min(3, (clientY - bounds.top - bounds.height / 2) * 0.08));
      element.style.setProperty('--magnetic-x', `${x}px`);
      element.style.setProperty('--magnetic-y', `${y}px`);
      frame.current = 0;
    });
  }, [reset]);
  return { onPointerMove, onPointerLeave: reset, onBlur: reset };
}
