/**
 * Site-wide accordion controller.
 *
 * One panel open at a time inside each `.acc` group. Clicking the open
 * header collapses it. Groups marked `data-acc-mode="multiple"` (city and
 * county FAQs) toggle independently so several panels can stay open.
 *
 * Idempotent on purpose. Astro runs bundled module scripts while
 * `document.readyState` is already `interactive`, and `astro:page-load`
 * fires again after that. Pages that called init from both places without
 * a guard attached two click listeners: the first opened the panel and the
 * second saw it open and closed it, so a click looked like a no-op.
 */

function isMultiple(panel: HTMLElement): boolean {
  return panel.closest('[data-acc-mode="multiple"]') !== null;
}

const accordionHideTimers = new WeakMap<HTMLElement, number>();
let activeScrollFrame: number | undefined;
const serviceTransitionDuration = 320;

function isServicePanel(panel: HTMLElement): boolean {
  return panel.closest('[data-service-accordion]') !== null;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function ensureContentInner(content: HTMLElement): void {
  if (content.querySelector(':scope > .acc__content-inner')) return;

  const inner = document.createElement('div');
  inner.className = 'acc__content-inner';
  while (content.firstChild) inner.appendChild(content.firstChild);
  content.appendChild(inner);
}

function centerPanel(panel: HTMLElement): void {
  const rect = panel.getBoundingClientRect();
  const destination = Math.max(0, window.scrollY + rect.top - ((window.innerHeight - rect.height) / 2));

  if (activeScrollFrame) window.cancelAnimationFrame(activeScrollFrame);
  if (prefersReducedMotion()) {
    window.scrollTo({ top: destination, behavior: 'auto' });
    return;
  }

  const startTop = window.scrollY;
  const distance = destination - startTop;
  const duration = 560;
  const startTime = performance.now();
  const easeInOutCubic = (progress: number) => (
    progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - ((-2 * progress + 2) ** 3) / 2
  );

  const animateScroll = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo({ top: startTop + (distance * easeInOutCubic(progress)), behavior: 'auto' });
    if (progress < 1) activeScrollFrame = window.requestAnimationFrame(animateScroll);
    else activeScrollFrame = undefined;
  };

  activeScrollFrame = window.requestAnimationFrame(animateScroll);
}

function setOpen(panel: HTMLElement, open: boolean): void {
  const header = panel.querySelector('.acc__header');
  const content = panel.querySelector<HTMLElement>('.acc__content');
  if (!content) return;

  if (!isServicePanel(panel)) {
    panel.classList.toggle('is-active', open);
    if (header) header.setAttribute('aria-expanded', open ? 'true' : 'false');
    content.hidden = !open;
    return;
  }

  const hideTimer = accordionHideTimers.get(content);
  if (hideTimer) window.clearTimeout(hideTimer);

  if (!open) {
    panel.classList.remove('is-active');
    if (header) header.setAttribute('aria-expanded', 'false');
    if (prefersReducedMotion()) {
      content.hidden = true;
      return;
    }
    accordionHideTimers.set(content, window.setTimeout(() => {
      if (!panel.classList.contains('is-active')) content.hidden = true;
    }, serviceTransitionDuration));
    return;
  }

  content.hidden = false;
  window.requestAnimationFrame(() => {
    panel.classList.add('is-active');
    if (header) header.setAttribute('aria-expanded', 'true');
    window.setTimeout(() => {
      if (panel.classList.contains('is-active')) centerPanel(panel);
    }, prefersReducedMotion() ? 0 : serviceTransitionDuration + 20);
  });
}

export function initAccordions(): void {
  const panels = document.querySelectorAll<HTMLElement>('[data-acc-panel]');
  panels.forEach((panel) => {
    if (panel.dataset.accBound === 'true') return;
    if (panel.classList.contains('acc__panel--static')) return;

    const header = panel.querySelector<HTMLButtonElement>('button.acc__header');
    const content = panel.querySelector<HTMLElement>('.acc__content');
    if (!header || !content) return;

    if (isServicePanel(panel)) ensureContentInner(content);

    panel.dataset.accBound = 'true';
    const multiple = isMultiple(panel);

    header.addEventListener('click', () => {
      if (multiple) {
        setOpen(panel, !panel.classList.contains('is-active'));
        return;
      }

      const group = panel.closest('.acc');
      const groupPanels = group
        ? Array.from(group.querySelectorAll<HTMLElement>('[data-acc-panel]'))
        : Array.from(panels);
      const wasOpen = panel.classList.contains('is-active');
      groupPanels.forEach((item) => setOpen(item, false));
      if (!wasOpen) setOpen(panel, true);
    });
  });
}

export function bindAccordions(): void {
  const run = () => initAccordions();
  document.addEventListener('astro:page-load', run);
  document.addEventListener('astro:after-swap', run);
  if (document.readyState !== 'loading') run();
}
