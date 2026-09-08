import { useMotionPreference } from './MotionPreferences';
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

/** Ambient pointer light without React renders on pointer movement. */
export default function CustomCursor() {
  const { ambientEnabled: motionEnabled } = useMotionPreference();
  const reduceMotion = !motionEnabled;
  const pointerX = useMotionValue(-800);
  const pointerY = useMotionValue(-800);
  const opacity = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 80, damping: 24 });
  const y = useSpring(pointerY, { stiffness: 80, damping: 24 });
  useEffect(() => {
    if (reduceMotion || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) { opacity.set(0); return; }
    const move = (event: PointerEvent) => {
      pointerX.set(event.clientX - 280);
      pointerY.set(event.clientY - 280);
      opacity.set(1);
    };
    const hide = () => opacity.set(0);
    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', hide);
    window.addEventListener('blur', hide);
    return () => {
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', hide);
      window.removeEventListener('blur', hide);
    };
  }, [reduceMotion, pointerX, pointerY, opacity]);
  if (reduceMotion) return null;
  return <motion.div aria-hidden="true" className="pointer-glow" style={{ x, y, opacity }} />;
}
