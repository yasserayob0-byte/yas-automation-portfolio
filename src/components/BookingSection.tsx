import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';
import { ArrowRight, Check, Copy, CalendarDays } from 'lucide-react';
import Section from './Section';
import { CALENDLY_URL, DISCOVERY_EMAIL, DISCOVERY_TITLE } from '../config/discoveryCall';
import { loadCalendly } from './calendly';
import './BookingSection.css';

export default function BookingSection(_props: { initialTopic?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const embedRef = useRef<HTMLDivElement>(null);
  const visible = useInView(sectionRef, { once: true, margin: '200px' });
  const [attempt, setAttempt] = useState(0);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [notice, setNotice] = useState('');
  useEffect(() => {
    if (!visible || !embedRef.current) return;
    const container = embedRef.current;
    let cancelled = false;
    setStatus('loading');
    loadCalendly().then(widget => {
      if (cancelled) return;
      container.replaceChildren();
      const url = new URL(CALENDLY_URL);
      // Calendly requires hex strings; derive them from the existing Tailwind palette.
      const styles = getComputedStyle(container);
      const context = document.createElement('canvas').getContext('2d');
      if (context) {
        for (const [parameter, token] of [['background_color', '--color-slate-950'], ['text_color', '--color-slate-200'], ['primary_color', '--color-cyan-500']]) {
          const color = styles.getPropertyValue(token).trim();
          if (!color) continue;
          context.clearRect(0, 0, 1, 1); context.fillStyle = color; context.fillRect(0, 0, 1, 1);
          const rgb = context.getImageData(0, 0, 1, 1).data;
          url.searchParams.set(parameter, Array.from(rgb).slice(0, 3).map(value => value.toString(16).padStart(2, '0')).join(''));
        }
      }
      widget.initInlineWidget({ url: url.toString(), parentElement: container });
      const iframe = container.querySelector('iframe');
      if (iframe) iframe.title = 'Choose a date and time for your discovery call';
      setStatus('ready');
    }).catch(() => { if (!cancelled) setStatus('error'); });
    return () => { cancelled = true; container.replaceChildren(); };
  }, [visible, attempt]);
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(DISCOVERY_EMAIL); setNotice('Email address copied.'); }
    catch { setNotice('Select the email address below to copy it manually.'); }
  };
  return <Section id="booking" ref={sectionRef} aria-labelledby="booking-title" className="booking-section">
    <div aria-hidden="true" className="booking-ambient" /><div aria-hidden="true" className="booking-particles"><i /><i /><i /></div>
    <div className="booking-container">
      <header className="booking-heading"><span className="booking-eyebrow"><CalendarDays size={15} aria-hidden="true" />LET'S FIND YOUR NEXT OPPORTUNITY</span><h2 id="booking-title" className="section-title">{DISCOVERY_TITLE}</h2><p>Choose a time that works for you and answer a few short questions so I can understand your workflow before the call.</p></header>
      <div className="booking-grid">
        <div className="booking-panel booking-calendar"><div className="booking-calendar-heading"><span>YOUR NEXT STEP</span><h3>Choose a date &amp; time</h3><p>Find a time that works for you.</p></div>
          {status === 'loading' && <p className="booking-status" role="status">Loading available times...</p>}
          {status === 'error' && <div className="booking-status" role="alert"><p>The calendar could not load. Open Calendly directly or try again.</p><button type="button" onClick={() => setAttempt(value => value + 1)}>Retry calendar</button></div>}
          <div ref={embedRef} className="booking-embed" />
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="booking-direct">Open Calendly in a new tab <ArrowRight size={14} aria-hidden="true" /></a>
        </div>
      </div>
      <aside className="booking-expect" aria-labelledby="booking-expect-heading"><h3 id="booking-expect-heading">What to expect</h3><ul>{['30-minute consultation', 'Workflow and process review', 'Automation opportunity assessment', 'No obligation'].map(item => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}</ul></aside>
      <p className="booking-notice" role="status">{notice}</p><div className="booking-fallback"><span>Prefer email? <span className="booking-email">{DISCOVERY_EMAIL}</span></span><button type="button" onClick={copyEmail}><Copy size={14} aria-hidden="true" />Copy email</button></div>
    </div>
  </Section>;
}
