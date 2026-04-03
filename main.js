// Intersection Observer for scroll-in animations
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Select elements to animate
  const elementsToAnimate = document.querySelectorAll('.tagline, .location-badge, .about-card');
  
  elementsToAnimate.forEach(el => {
    el.classList.add('fade-in-up');
    observer.observe(el);
  });
});
