import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import MotionPreferences from './components/MotionPreferences';
import App from './App.tsx';
import './index.css';
import './components/motion.css';
import './components/polish.css';

// A root entry must not inherit the previous visit's section scroll position.
// Explicit section/case-study URLs retain their existing navigation behavior.
if (!window.location.hash) {
  window.history.scrollRestoration = 'manual';
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionPreferences><App /></MotionPreferences>
  </StrictMode>,
);
