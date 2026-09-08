import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import MotionPreferences from './components/MotionPreferences';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionPreferences><App /></MotionPreferences>
  </StrictMode>,
);
