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

function setOpen(panel: HTMLElement, open: boolean): void {
  panel.classList.toggle('is-active', open);
  const header = panel.querySelector('.acc__header');
  if (header) header.setAttribute('aria-expanded', open ? 'true' : 'false');
  const content = panel.querySelector<HTMLElement>('.acc__content');
  if (content) content.hidden = !open;
}

export function initAccordions(): void {
  const panels = document.querySelectorAll<HTMLElement>('[data-acc-panel]');
  panels.forEach((panel) => {
    if (panel.dataset.accBound === 'true') return;
    if (panel.classList.contains('acc__panel--static')) return;

    const header = panel.querySelector<HTMLButtonElement>('button.acc__header');
    const content = panel.querySelector<HTMLElement>('.acc__content');
    if (!header || !content) return;

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
