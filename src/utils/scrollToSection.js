export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const headerOffset = window.innerWidth < 640 ? 88 : 96;
  const targetY = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = Math.min(450, Math.max(220, Math.abs(distance) * 0.35));
  const startTime = performance.now();

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, startY + distance * easeOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

export function handleSectionNavClick(event, href) {
  if (!href?.startsWith("#") || href === "#") return;
  event.preventDefault();
  const id = href.slice(1);
  scrollToId(id);
  window.history.replaceState(null, "", href);
}
