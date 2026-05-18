/* L'Etoile Clermont — Interactions (polished)
   - Navbar scroll state
   - Mobile drawer
   - Reveal-on-scroll with stagger
   - Reviews slider (drag + buttons + autoplay)
   - Hero red particles (lighter, pause when off-screen)
   - Sticky menu tabs: scroll-spy + smooth scroll
   - Menu search filter (categories + signature products)
   - Smooth-scroll offset for fixed nav + sticky tabs
   - Subtle parallax on hero composition (rAF, throttled)
   - Year stamp
*/

(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

  /* ---------- Reveal-on-scroll with stagger ---------- */
  const reveals = document.querySelectorAll('.reveal');
  // Auto-assign --i within each parent group when not explicitly set
  const groups = new Map();
  reveals.forEach((el) => {
    if (el.style.getPropertyValue('--i')) return;
    const parent = el.parentElement;
    if (!groups.has(parent)) groups.set(parent, 0);
    const idx = groups.get(parent);
    el.style.setProperty('--i', String(idx));
    groups.set(parent, idx + 1);
  });

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

    // drag to scroll (mouse + touch via native)
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
      if (reduceMotion) return;
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

  /* ---------- Hero particles (lighter & paused off-screen) ---------- */
  const particlesRoot = document.getElementById('particles');
  if (particlesRoot && !reduceMotion) {
    const COUNT = 14;
    for (let i = 0; i < COUNT; i++) {
      const p = document.createElement('span');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.bottom = Math.random() * 30 + '%';
      p.style.animationDuration = (5 + Math.random() * 6) + 's';
      p.style.animationDelay = (Math.random() * 6) + 's';
      p.style.opacity = (0.25 + Math.random() * 0.45).toFixed(2);
      const size = 2 + Math.random() * 2;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      particlesRoot.appendChild(p);
    }

    // pause when hero is offscreen
    const hero = particlesRoot.closest('.hero');
    if (hero && 'IntersectionObserver' in window) {
      const heroIO = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          particlesRoot.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
          particlesRoot.querySelectorAll('.particle').forEach(p => {
            p.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
          });
        });
      }, { threshold: 0 });
      heroIO.observe(hero);
    }
  }

  /* ---------- Smooth-scroll offset for fixed navbar ---------- */
  const SCROLL_OFFSET = 110;
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
      closeNav();
    });
  });

  /* ---------- Subtle hero parallax (rAF, gentle) ---------- */
  const composition = document.querySelector('.float-a');
  const chips = document.querySelectorAll('.food-chip');
  if (composition && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    let mx = 0, my = 0, ticking = false;
    const apply = () => {
      ticking = false;
      composition.style.translate = `${mx * 10}px ${my * 7}px`;
      chips.forEach((c, i) => {
        const f = (i + 1) * 5;
        c.style.translate = `${-mx * f}px ${-my * f}px`;
      });
    };
    window.addEventListener('mousemove', (e) => {
      mx = (e.clientX / window.innerWidth - 0.5);
      my = (e.clientY / window.innerHeight - 0.5);
      if (!ticking) { ticking = true; requestAnimationFrame(apply); }
    }, { passive: true });
  }

  /* ---------- Sticky menu tabs: scroll-spy + click ---------- */
  const tabs = document.querySelectorAll('#menuTabs .menu-tab');
  if (tabs.length) {
    const sectionMap = new Map();
    tabs.forEach(tab => {
      const id = tab.dataset.target;
      const section = id ? document.getElementById(id) : null;
      if (section) sectionMap.set(section, tab);
    });

    if ('IntersectionObserver' in window && sectionMap.size) {
      const setActive = (tab) => {
        tabs.forEach(t => t.classList.remove('is-active'));
        tab.classList.add('is-active');
        // keep active tab visible on horizontal scroll
        const container = tab.parentElement;
        if (container) {
          const tabBox = tab.getBoundingClientRect();
          const cBox = container.getBoundingClientRect();
          if (tabBox.left < cBox.left + 12 || tabBox.right > cBox.right - 12) {
            const targetLeft = tab.offsetLeft - container.clientWidth / 2 + tab.offsetWidth / 2;
            container.scrollTo({ left: targetLeft, behavior: 'smooth' });
          }
        }
      };

      const spy = new IntersectionObserver((entries) => {
        // pick the most visible entry
        let best = null;
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
        });
        if (best) {
          const tab = sectionMap.get(best.target);
          if (tab) setActive(tab);
        }
      }, {
        rootMargin: '-160px 0px -55% 0px',
        threshold: [0.05, 0.25, 0.5, 0.75]
      });
      sectionMap.forEach((_, section) => spy.observe(section));
    }
  }

  /* ---------- Menu search / filter ---------- */
  const searchEl = document.getElementById('menuSearch');
  const emptyMsg = document.getElementById('emptyMsg');
  const filterables = document.querySelectorAll('#catGrid [data-name], #prodGrid [data-name]');
  if (searchEl && filterables.length) {
    const norm = (s) => (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const apply = () => {
      const q = norm(searchEl.value.trim());
      let visibleProd = 0;
      let visibleCat = 0;
      filterables.forEach(card => {
        const hay = norm(card.dataset.name) + ' ' + norm(card.textContent);
        const match = !q || hay.includes(q);
        card.style.display = match ? '' : 'none';
        if (match) {
          if (card.closest('#prodGrid')) visibleProd++;
          if (card.closest('#catGrid'))  visibleCat++;
        }
      });
      if (emptyMsg) emptyMsg.classList.toggle('hidden', !(q && visibleProd === 0));
    };
    let t;
    searchEl.addEventListener('input', () => { clearTimeout(t); t = setTimeout(apply, 80); });
    searchEl.addEventListener('search', apply);
  }
})();
