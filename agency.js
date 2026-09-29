const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const sections = [...document.querySelectorAll('main > section')];
  const observer = new IntersectionObserver((entries, currentObserver) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  sections.forEach((section, index) => {
    section.classList.add('motion-section');
    if (index % 3 === 1) section.classList.add('motion-from-left');
    if (index % 3 === 2) section.classList.add('motion-from-right');

    const bounds = section.getBoundingClientRect();
    if (bounds.top < window.innerHeight * 0.92 && bounds.bottom > 0) {
      section.classList.add('is-visible');
    } else {
      observer.observe(section);
    }
  });
  document.documentElement.classList.add('motion-ready');
}

const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const cursor = document.querySelector('#cursor-orbit');

if (cursor && finePointer.matches && !reducedMotion.matches) {
  let pointerX = -100;
  let pointerY = -100;
  let drawnX = -100;
  let drawnY = -100;
  let frame = null;

  const draw = () => {
    drawnX += (pointerX - drawnX) * 0.22;
    drawnY += (pointerY - drawnY) * 0.22;
    cursor.style.transform = `translate3d(${drawnX - cursor.offsetWidth / 2}px, ${drawnY - cursor.offsetHeight / 2}px, 0)`;
    if (Math.abs(pointerX - drawnX) > 0.2 || Math.abs(pointerY - drawnY) > 0.2) {
      frame = requestAnimationFrame(draw);
    } else {
      frame = null;
    }
  };

  document.addEventListener('pointermove', event => {
    if (event.pointerType !== 'mouse') return;
    pointerX = event.clientX;
    pointerY = event.clientY;
    document.body.classList.add('cursor-enabled');
    cursor.classList.add('is-visible');
    cursor.classList.toggle('is-active', Boolean(event.target.closest('a, button, summary')));
    if (frame === null) frame = requestAnimationFrame(draw);
  }, { passive: true });

  document.addEventListener('pointerdown', event => {
    if (event.pointerType === 'mouse') cursor.classList.add('is-pressed');
  });
  document.addEventListener('pointerup', () => cursor.classList.remove('is-pressed'));
  document.addEventListener('pointercancel', () => cursor.classList.remove('is-pressed'));
  document.addEventListener('pointerleave', () => cursor.classList.remove('is-visible'));
  window.addEventListener('blur', () => cursor.classList.remove('is-visible'));
}
