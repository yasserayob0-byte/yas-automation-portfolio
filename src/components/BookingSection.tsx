import { useEffect, useRef, useState, type FormEvent } from 'react';
import { useInView } from 'motion/react';
import { ArrowRight, Check, Copy, CalendarDays } from 'lucide-react';
import Section from './Section';
import { CALENDLY_URL, DISCOVERY_EMAIL, DISCOVERY_TITLE } from '../config/discoveryCall';
import { loadCalendly, type CalendlyPrefill } from './calendly';
import './BookingSection.css';

export default function BookingSection({ initialTopic = '' }: { initialTopic?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const embedRef = useRef<HTMLDivElement>(null);
  const visible = useInView(sectionRef, { once: true, margin: '200px' });
  const [prefill, setPrefill] = useState<CalendlyPrefill>({});
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
      widget.initInlineWidget({ url: url.toString(), parentElement: container, prefill });
      const iframe = container.querySelector('iframe');
      if (iframe) iframe.title = 'Choose a date and time for your discovery call';
      setStatus('ready');
    }).catch(() => { if (!cancelled) setStatus('error'); });
    return () => { cancelled = true; container.replaceChildren(); };
  }, [visible, prefill, attempt]);
  const applyDetails = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? '').trim();
    setPrefill({ name: value('name'), email: value('email'), customAnswers: { a1: value('company'), a2: value('challenge'), a3: value('notes') } });
    setNotice('Details applied. Choose your date and time, then confirm your booking in Calendly.');
  };
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(DISCOVERY_EMAIL); setNotice('Email address copied.'); }
    catch { setNotice('Select the email address below to copy it manually.'); }
  };
  return <Section id="booking" ref={sectionRef} aria-labelledby="booking-title" className="booking-section">
    <div aria-hidden="true" className="booking-ambient" /><div aria-hidden="true" className="booking-particles"><i /><i /><i /></div>
    <div className="booking-container">
      <header className="booking-heading"><span className="booking-eyebrow"><CalendarDays size={15} aria-hidden="true" />LET'S FIND YOUR NEXT OPPORTUNITY</span><h2 id="booking-title" className="section-title">{DISCOVERY_TITLE}</h2><p>Let's review your workflow, identify automation opportunities, and discuss practical ways AI can reduce manual work in your business.</p></header>
      <div className="booking-grid">
        <div className="booking-panel booking-business"><h3>Tell Me About Your Business</h3>{initialTopic && <p className="booking-helper mt-3" role="status">Your selected topic: {initialTopic}</p>}
          <form onSubmit={applyDetails}>
            <div className="booking-field-row"><label htmlFor="booking-name">Name<input id="booking-name" name="name" autoComplete="name" required maxLength={120} /></label><label htmlFor="booking-email">Email<input id="booking-email" name="email" type="email" autoComplete="email" required maxLength={254} /></label></div>
            <label htmlFor="booking-company">Business / Company<input id="booking-company" name="company" autoComplete="organization" required maxLength={200} /></label>
            <label htmlFor="booking-challenge">Biggest workflow challenge<textarea id="booking-challenge" name="challenge" rows={3} required maxLength={1500} /></label>
            <label htmlFor="booking-notes">Optional notes<textarea id="booking-notes" name="notes" rows={2} maxLength={1500} /></label>
            <button type="submit" className="booking-primary">Use these details in Calendly <ArrowRight size={16} aria-hidden="true" /></button>
            <p className="booking-helper">Apply your details before selecting a time. Review and confirm your booking in Calendly.</p>
          </form>
          <div className="booking-expect"><h4>What to expect</h4><ul>{['30-minute consultation', 'Workflow and process review', 'Automation opportunity assessment', 'No obligation'].map(item => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}</ul></div>
        </div>
        <div className="booking-panel booking-calendar"><div className="booking-calendar-heading"><span>YOUR NEXT STEP</span><h3>Choose a date &amp; time</h3><p>Find a time that works for you.</p></div>
          {status === 'loading' && <p className="booking-status" role="status">Loading available times...</p>}
          {status === 'error' && <div className="booking-status" role="alert"><p>The calendar could not load. Open Calendly directly or try again.</p><button type="button" onClick={() => setAttempt(value => value + 1)}>Retry calendar</button></div>}
          <div ref={embedRef} className="booking-embed" />
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="booking-direct">Open Calendly in a new tab <ArrowRight size={14} aria-hidden="true" /></a>
        </div>
      </div>
      <p className="booking-notice" role="status">{notice}</p><div className="booking-fallback"><span>Prefer email? <span className="booking-email">{DISCOVERY_EMAIL}</span></span><button type="button" onClick={copyEmail}><Copy size={14} aria-hidden="true" />Copy email</button></div>
    </div>
  </Section>;
}
