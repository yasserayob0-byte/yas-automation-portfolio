import { useState, type ButtonHTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
import { X, Copy } from 'lucide-react';
import { DISCOVERY_EMAIL, DISCOVERY_TITLE } from '../config/discoveryCall';
import { focusSection } from './navigation';
import { useModalFocus } from './useModalFocus';
import './DiscoveryCallButton.css';

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & { onBeforeOpen?: () => void; emailOnly?: boolean };
function CallIntro() {
  return <><h2>{DISCOVERY_TITLE}</h2><ul><li>Discuss your workflow</li><li>Identify automation opportunities</li><li>No obligation</li></ul></>;
}
export default function DiscoveryCallButton({ children, onBeforeOpen, emailOnly = false, disabled, ...props }: Props) {
  const [fallback, setFallback] = useState(false);
  const [message, setMessage] = useState('');
  const fallbackRef = useModalFocus(fallback, () => setFallback(false));
  const open = () => {
    onBeforeOpen?.();
    if (emailOnly) { setMessage(''); setFallback(true); return; }
    if (window.location.hash === '#booking') focusSection('booking');
    else window.location.hash = 'booking';
  };
  const copy = async () => {
    try { await navigator.clipboard.writeText(DISCOVERY_EMAIL); setMessage('Email address copied.'); }
    catch { setMessage('Select the email address below and copy it manually.'); }
  };
  return <>
    <button {...props} type="button" disabled={disabled} aria-haspopup={emailOnly ? "dialog" : undefined} onClick={open}>{children ?? 'Request a Discovery Call'}</button>
    {fallback && createPortal(<div className="discovery-overlay" onClick={event => { if (event.target === event.currentTarget) setFallback(false); }}><div ref={fallbackRef} tabIndex={-1} role="dialog" aria-modal="true" aria-label={DISCOVERY_TITLE} className="discovery-dialog">
      <button className="discovery-close" aria-label="Close discovery call" onClick={() => setFallback(false)}><X size={20} /></button>
      <CallIntro /><p>Get in touch to arrange a time.</p><p className="discovery-email">{DISCOVERY_EMAIL}</p>
      <button className="discovery-copy" onClick={copy}><Copy size={16} />Copy email address</button><p role="status">{message}</p>
    </div></div>, document.body)}
  </>;
}
