export interface CalendlyPrefill { name?: string; email?: string; customAnswers?: Record<string, string>; }
interface CalendlyWidget { initInlineWidget(options: { url: string; parentElement: HTMLElement; prefill?: CalendlyPrefill }): void; }
declare global { interface Window { Calendly?: CalendlyWidget; } }
let widgetPromise: Promise<CalendlyWidget> | undefined;
export function loadCalendly(): Promise<CalendlyWidget> {
  if (window.Calendly) return Promise.resolve(window.Calendly);
  if (widgetPromise) return widgetPromise;
  widgetPromise = new Promise<CalendlyWidget>((resolve, reject) => {
    if (!document.getElementById('calendly-widget-css')) {
      const css = document.createElement('link'); css.id = 'calendly-widget-css'; css.rel = 'stylesheet';
      css.href = 'https://assets.calendly.com/assets/external/widget.css'; document.head.append(css);
    }
    const script = document.createElement('script'); script.src = 'https://assets.calendly.com/assets/external/widget.js'; script.async = true;
    const timeout = window.setTimeout(() => fail(), 15000);
    const fail = () => { clearTimeout(timeout); script.remove(); reject(new Error('Calendly could not load')); };
    script.onerror = fail;
    script.onload = () => { clearTimeout(timeout); if (window.Calendly) resolve(window.Calendly); else fail(); };
    document.head.append(script);
  }).catch(error => { widgetPromise = undefined; throw error; });
  return widgetPromise;
}
