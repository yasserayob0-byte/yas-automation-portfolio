import { useEffect, useRef } from 'react';

const modalStack: { token: symbol; element: HTMLDivElement }[] = [];
const originalInert = new Map<HTMLElement, boolean>();
let originalOverflow = '';

function updateModalBackground() {
  const top = modalStack.at(-1);
  for (const [element, inert] of originalInert) element.inert = inert;
  if (!top) {
    originalInert.clear();
    document.body.style.overflow = originalOverflow;
    return;
  }
  for (const element of document.body.children) {
    if (!(element instanceof HTMLElement)) continue;
    if (!originalInert.has(element)) originalInert.set(element, element.inert);
    if (!element.contains(top.element)) element.inert = true;
  }
  document.body.style.overflow = 'hidden';
}

/** Shared focus containment, Escape dismissal, scroll locking and focus restoration. */
export function useModalFocus(open: boolean, onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  useEffect(() => {
    if (!open || !ref.current) return;
    const token = Symbol();
    if (!modalStack.length) originalOverflow = document.body.style.overflow;
    modalStack.push({ token, element: ref.current });
    const previous = document.activeElement as HTMLElement | null;
    updateModalBackground();
    const frame = requestAnimationFrame(() => ref.current?.focus());
    const keydown = (event: KeyboardEvent) => {
      if (modalStack.at(-1)?.token !== token) return;
      if (event.key === 'Escape') { event.preventDefault(); closeRef.current(); }
      if (event.key !== 'Tab') return;
      const items = Array.from(ref.current?.querySelectorAll<HTMLElement>('button, a[href], input, select, textarea, [tabindex]') ?? []).filter(el => el.tabIndex >= 0 && !el.matches(':disabled') && !el.closest('[inert]') && el.getClientRects().length > 0);
      const first = items[0];
      const last = items[items.length - 1];
      if (!first) { event.preventDefault(); return; }
      const outside = !ref.current?.contains(document.activeElement);
      if (event.shiftKey && (outside || document.activeElement === first || document.activeElement === ref.current)) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && (outside || document.activeElement === last || document.activeElement === ref.current)) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', keydown);
    return () => {
      const wasTop = modalStack.at(-1)?.token === token;
      const index = modalStack.findIndex(modal => modal.token === token);
      if (index >= 0) modalStack.splice(index, 1);
      cancelAnimationFrame(frame);
      document.removeEventListener('keydown', keydown);
      updateModalBackground();
      if (wasTop && previous?.isConnected && !previous.closest('[inert]')) previous.focus({ preventScroll: true });
    };
  }, [open]);
  return ref;
}
