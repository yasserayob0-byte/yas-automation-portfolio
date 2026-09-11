import { motion, type HTMLMotionProps } from 'motion/react';
import { useMotionPreference } from './MotionPreferences';

/** Keeps the semantic section and its layout; each entrance runs only once. */
export default function Section({ timing = 0, ...props }: HTMLMotionProps<'section'> & { timing?: number }) {
  const { enabled } = useMotionPreference();
  return <motion.section initial={enabled ? { opacity: 0.65, y: 12 } : false}
    whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.04 }}
    transition={{ duration: enabled ? 0.5 + timing : 0, ease: [0.22, 1, 0.36, 1] }} {...props} />;
}
