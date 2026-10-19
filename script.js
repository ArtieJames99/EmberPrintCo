// Ember Print Co. — small interactions
(function () {
  // Reveal sections on scroll
  var els = document.querySelectorAll('.section .wrap, .hero-inner');
  els.forEach(function (el) { el.classList.add('reveal'); });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });

  els.forEach(function (el) { io.observe(el); });

  // Hero is visible immediately
  var hero = document.querySelector('.hero-inner');
  if (hero) hero.classList.add('visible');
})();
