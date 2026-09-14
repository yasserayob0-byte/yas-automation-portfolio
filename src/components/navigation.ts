export function preferredScrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.dataset.motion === 'off' ? 'auto' : 'smooth';
}

export function focusSection(id: string) {
  const section = document.getElementById(id === 'contact' ? 'booking' : id);
  if (!section) return;
  section.setAttribute('tabindex', '-1');
  section.focus({ preventScroll: true });
  section.scrollIntoView({ behavior: preferredScrollBehavior() });
}
