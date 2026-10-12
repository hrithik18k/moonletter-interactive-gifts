const root = document.querySelector('#app');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (root && 'IntersectionObserver' in window && !reduceMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });

  const register = () => {
    root.querySelectorAll('.section-head,.occasion-card,.step,.demo-wrap > div,.faq-item,.cta-band > *')
      .forEach((element, index) => {
        if (element.classList.contains('reveal')) return;
        element.classList.add('reveal');
        element.style.transitionDelay = `${Math.min(index % 4, 3) * 75}ms`;
        observer.observe(element);
      });
  };

  register();
  new MutationObserver(register).observe(root, { childList: true, subtree: true });
}
