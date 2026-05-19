/* L'Etoile Clermont — Interactions
   - Navbar scroll state
   - Mobile drawer
   - Reveal-on-scroll
   - Reviews slider (drag + buttons)
   - Hero red particles
   - Year stamp
*/

(() => {
  'use strict';

  /* ---------- Year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Navbar scroll state ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 30) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile drawer ---------- */
  const menuBtn   = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const openNav  = () => mobileNav?.classList.remove('hidden');
  const closeNav = () => mobileNav?.classList.add('hidden');

  menuBtn?.addEventListener('click', openNav);
  mobileNav?.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', closeNav);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });

  /* ---------- Reveal-on-scroll ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }

  /* ---------- Reviews slider ---------- */
  const reviewsRoot = document.getElementById('reviews');
  if (reviewsRoot) {
    const track = reviewsRoot.querySelector('.reviews-track');
    const buttons = reviewsRoot.querySelectorAll('.reviews-btn');
    const step = () => {
      const card = track.querySelector('.review-card');
      if (!card) return 320;
      const gap = parseInt(getComputedStyle(track).columnGap || '22', 10) || 22;
      return card.getBoundingClientRect().width + gap;
    };
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const dir = parseInt(btn.dataset.dir, 10) || 1;
        track.scrollBy({ left: step() * dir, behavior: 'smooth' });
      });
    });

    // drag to scroll
    let isDown = false, startX = 0, startScroll = 0;
    track.addEventListener('mousedown', (e) => {
      isDown = true; startX = e.pageX; startScroll = track.scrollLeft;
      track.style.cursor = 'grabbing';
    });
    window.addEventListener('mouseup', () => { isDown = false; track.style.cursor = ''; });
    track.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      track.scrollLeft = startScroll - (e.pageX - startX);
    });

    // auto-advance with pause on hover/visibility
    let timer = null;
    const start = () => {
      stop();
      timer = setInterval(() => {
        if (document.hidden) return;
        const max = track.scrollWidth - track.clientWidth - 4;
        if (track.scrollLeft >= max) track.scrollTo({ left: 0, behavior: 'smooth' });
        else track.scrollBy({ left: step(), behavior: 'smooth' });
      }, 5500);
    };
    const stop = () => { if (timer) clearInterval(timer); timer = null; };
    reviewsRoot.addEventListener('mouseenter', stop);
    reviewsRoot.addEventListener('mouseleave', start);
    start();
  }

  /* ---------- Hero particles ---------- */
  const particlesRoot = document.getElementById('particles');
  if (particlesRoot && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const COUNT = 22;
    for (let i = 0; i < COUNT; i++) {
      const p = document.createElement('span');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.bottom = Math.random() * 30 + '%';
      p.style.animationDuration = (4 + Math.random() * 6) + 's';
      p.style.animationDelay = (Math.random() * 6) + 's';
      p.style.opacity = (0.3 + Math.random() * 0.6).toFixed(2);
      const size = 2 + Math.random() * 3;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      particlesRoot.appendChild(p);
    }
  }

  /* ---------- Smooth-scroll offset for fixed navbar ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = 90;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      closeNav();
    });
  });

  /* ---------- Subtle parallax for hero food ---------- */
  const composition = document.querySelector('.float-a');
  const chips = document.querySelectorAll('.food-chip');
  if (composition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);
      composition.style.setProperty('translate', `${x * 14}px ${y * 10}px`);
      chips.forEach((c, i) => {
        const f = (i + 1) * 8;
        c.style.setProperty('translate', `${-x * f}px ${-y * f}px`);
      });
    }, { passive: true });
  }
})();
