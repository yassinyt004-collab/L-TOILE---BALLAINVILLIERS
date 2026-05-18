/* L'Etoile Clermont — Premium Polish v3
   - Scroll progress bar
   - 3D tilt on cards
   - Image lazy fade-in (.loaded class)
   - Favorite icon toggling (per product, persisted)
   - Number count-up on stats when revealed
   - Smooth Lenis-like scroll easing fallback
*/
(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* -------- Scroll progress bar -------- */
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.appendChild(bar);
  const updateBar = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    bar.style.width = pct.toFixed(2) + '%';
  };
  document.addEventListener('scroll', updateBar, { passive: true });
  updateBar();

  /* -------- Image fade-in when loaded -------- */
  document.querySelectorAll('img').forEach((img) => {
    if (img.complete && img.naturalWidth > 0) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
    }
  });

  /* -------- 3D Tilt for product/menu/cat cards -------- */
  if (!reduceMotion && window.matchMedia('(hover: hover) and (min-width: 768px)').matches) {
    const tiltSelector = '.prod-card, .menu-card, .cat-card, .feature-card';
    const apply = (el, e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      const rotY = x * 6;
      const rotX = -y * 6;
      el.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(0)`;
    };
    const reset = (el) => {
      el.style.transform = '';
    };
    document.querySelectorAll(tiltSelector).forEach((el) => {
      let raf = 0;
      el.addEventListener('mousemove', (e) => {
        if (raf) return;
        raf = requestAnimationFrame(() => { apply(el, e); raf = 0; });
      });
      el.addEventListener('mouseleave', () => reset(el));
    });

    // for dynamically rendered menu cards, observe the grid
    const grid = document.getElementById('menuGrid');
    if (grid) {
      const mo = new MutationObserver(() => {
        grid.querySelectorAll('.menu-card:not([data-tilt-bound])').forEach((el) => {
          el.dataset.tiltBound = '1';
          let raf = 0;
          el.addEventListener('mousemove', (e) => {
            if (raf) return;
            raf = requestAnimationFrame(() => { apply(el, e); raf = 0; });
          });
          el.addEventListener('mouseleave', () => reset(el));
        });
      });
      mo.observe(grid, { childList: true });
    }
  }

  /* -------- Favorites (persisted) -------- */
  const FAV_KEY = 'letoile_favs_v1';
  const getFavs = () => {
    try { return new Set(JSON.parse(localStorage.getItem(FAV_KEY) || '[]')); }
    catch { return new Set(); }
  };
  const saveFavs = (s) => localStorage.setItem(FAV_KEY, JSON.stringify([...s]));

  function attachFav(card, id) {
    if (!id) return;
    const imgWrap = card.querySelector('.menu-card-img, .prod-img');
    if (!imgWrap || imgWrap.querySelector('.fav')) return;
    const fav = document.createElement('button');
    fav.className = 'fav';
    fav.setAttribute('aria-label', 'Ajouter aux favoris');
    fav.innerHTML = '<i class="fa-regular fa-heart"></i>';
    if (getFavs().has(id)) {
      fav.classList.add('active');
      fav.innerHTML = '<i class="fa-solid fa-heart"></i>';
    }
    fav.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      const favs = getFavs();
      if (favs.has(id)) {
        favs.delete(id);
        fav.classList.remove('active');
        fav.innerHTML = '<i class="fa-regular fa-heart"></i>';
      } else {
        favs.add(id);
        fav.classList.add('active');
        fav.innerHTML = '<i class="fa-solid fa-heart"></i>';
      }
      saveFavs(favs);
    });
    imgWrap.appendChild(fav);
  }

  // attach to existing prod-cards (use alt as id)
  document.querySelectorAll('.prod-card').forEach((card) => {
    const img = card.querySelector('img');
    const id = (img && img.alt) || card.querySelector('h3')?.textContent || '';
    attachFav(card, id.trim());
  });

  // observe menu grid for dynamic menu-cards
  const grid = document.getElementById('menuGrid');
  if (grid) {
    const mo = new MutationObserver(() => {
      grid.querySelectorAll('.menu-card[data-id]').forEach((card) => attachFav(card, card.dataset.id));
    });
    mo.observe(grid, { childList: true });
    // initial pass
    grid.querySelectorAll('.menu-card[data-id]').forEach((card) => attachFav(card, card.dataset.id));
  }

  /* -------- Stat count-up on reveal -------- */
  if ('IntersectionObserver' in window && !reduceMotion) {
    const numTargets = [];
    document.querySelectorAll('.font-display').forEach((el) => {
      const txt = el.textContent.trim();
      const m = txt.match(/^(\+?)(\d+(?:[.,]\d+)?)([Kk%★+]?)$/);
      if (!m) return;
      // skip if not pure number (e.g. "25min" matches differently — handle below)
      const prefix = m[1] || '';
      const num = parseFloat(m[2].replace(',', '.'));
      const suffix = m[3] || '';
      if (num < 5) return; // skip tiny numbers like "1k" already covered
      numTargets.push({ el, prefix, num, suffix, started: false });
    });

    // also catch "25min"
    document.querySelectorAll('.font-display').forEach((el) => {
      const m = el.textContent.trim().match(/^(\d+)\s*(min)$/i);
      if (m) numTargets.push({ el, prefix: '', num: parseInt(m[1], 10), suffix: 'min', started: false });
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = numTargets.find((t) => t.el === entry.target);
        if (!target || target.started) return;
        target.started = true;
        const dur = 1200;
        const start = performance.now();
        const animate = (now) => {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          const v = Math.round(target.num * eased);
          target.el.textContent = `${target.prefix}${v}${target.suffix}`;
          if (t < 1) requestAnimationFrame(animate);
          else target.el.textContent = `${target.prefix}${target.num}${target.suffix}`;
        };
        requestAnimationFrame(animate);
      });
    }, { threshold: 0.4 });

    numTargets.forEach((t) => io.observe(t.el));
  }

  /* -------- Smoother anchor scroll w/ ease (light) -------- */
  // already handled in main.js, but improve with longer duration
  const SMOOTH_FOR = ['#home', '#menu', '#bestsellers', '#contact', '#commander'];
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    if (!SMOOTH_FOR.includes(a.getAttribute('href'))) return;
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }, { capture: true });
  });
})();
