/* L'Etoile Clermont — Premium Interactions (v2)
   - Navbar scroll state
   - Mobile drawer
   - Reveal-on-scroll
   - Reviews slider (drag + buttons + autoplay)
   - Hero red particles
   - Hero 3D tilt + multi-layer mouse parallax
   - Body lock when drawer open
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
  const openNav  = () => {
    mobileNav?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };
  const closeNav = () => {
    mobileNav?.classList.add('hidden');
    document.body.style.overflow = '';
  };
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
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (particlesRoot && !reduceMotion) {
    const COUNT = 28;
    for (let i = 0; i < COUNT; i++) {
      const p = document.createElement('span');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.bottom = Math.random() * 35 + '%';
      p.style.animationDuration = (4 + Math.random() * 7) + 's';
      p.style.animationDelay = (Math.random() * 7) + 's';
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

  /* ---------- Hero 3D tilt + parallax with depth ---------- */
  const comp = document.querySelector('.hero-comp');
  if (comp && !reduceMotion && window.matchMedia('(min-width: 768px)').matches) {
    const layers = comp.querySelectorAll('[data-depth]');
    const burger = comp.querySelector('.hero-burger');
    let raf = 0, tx = 0, ty = 0;

    const onMove = (e) => {
      const rect = comp.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      tx = x; ty = y;
      if (raf) return;
      raf = requestAnimationFrame(apply);
    };

    const apply = () => {
      raf = 0;
      layers.forEach((el) => {
        const d = parseFloat(el.dataset.depth) || 0.4;
        const mx = -tx * 30 * d;
        const my = -ty * 24 * d;
        el.style.transform = `translate(${mx}px, ${my}px)`;
      });
      // tilt the whole stage subtly
      comp.style.transform = `rotateX(${(-ty * 5).toFixed(2)}deg) rotateY(${(tx * 6).toFixed(2)}deg)`;
      if (burger) {
        burger.style.transform = `translate(${-tx * 14}px, ${-ty * 10}px)`;
      }
    };

    const reset = () => {
      layers.forEach((el) => el.style.transform = '');
      comp.style.transform = '';
      if (burger) burger.style.transform = '';
    };

    comp.addEventListener('mousemove', onMove);
    comp.addEventListener('mouseleave', reset);
  }

  /* ---------- Image fallbacks (defensive) ---------- */
  document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', () => {
      img.style.background = 'linear-gradient(135deg, #1a0000, #0a0a0a)';
      img.style.minHeight = '120px';
    }, { once: true });
  });

})();
