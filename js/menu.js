/* L'Etoile Clermont — Menu page logic
   - Category filters
   - Search
   - Product modal
   - Cart (localStorage persistent)
   - Toast notifications
*/

(() => {
  'use strict';

  const data = window.MENU_DATA || [];
  const cats = window.MENU_CATEGORIES || [];

  /* ---------- DOM ---------- */
  const grid = document.getElementById('menuGrid');
  const filtersEl = document.getElementById('catFilters');
  const searchInput = document.getElementById('searchInput');
  const resultCount = document.getElementById('resultCount');
  const emptyState = document.getElementById('emptyState');
  const clearSearchBtn = document.getElementById('clearSearch');

  const modal = document.getElementById('productModal');
  const modalBody = document.getElementById('modalBody');

  const cartDrawer = document.getElementById('cartDrawer');
  const cartItemsEl = document.getElementById('cartItems');
  const cartCountEl = document.getElementById('cartCount');
  const cartSubEl = document.getElementById('cartSubtotal');
  const cartTotalEl = document.getElementById('cartTotal');
  const cartBtn = document.getElementById('cartBtn');
  const clearCartBtn = document.getElementById('clearCart');
  const checkoutBtn = document.getElementById('checkoutBtn');

  const toast = document.getElementById('toast');
  const backToTop = document.getElementById('backToTop');

  /* ---------- State ---------- */
  let activeCat = 'all';
  let query = '';

  const CART_KEY = 'letoile_cart_v1';
  let cart = {}; // { id: { qty, item } }

  function loadCart() {
    try { cart = JSON.parse(localStorage.getItem(CART_KEY)) || {}; }
    catch { cart = {}; }
  }
  function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  /* ---------- Helpers ---------- */
  const fmtPrice = (n) => n.toFixed(2).replace('.', ',') + ' €';

  function fireParticles(node) {
    // small confetti-like particles when adding to cart
    const rect = node.getBoundingClientRect();
    for (let i = 0; i < 6; i++) {
      const dot = document.createElement('span');
      dot.style.cssText = `
        position:fixed; left:${rect.left + rect.width/2}px; top:${rect.top + rect.height/2}px;
        width:6px; height:6px; border-radius:50%; pointer-events:none;
        background:#ff1e1e; box-shadow:0 0 10px #ff1e1e;
        z-index:200; transition:transform .8s ease, opacity .8s ease;
      `;
      document.body.appendChild(dot);
      const angle = (Math.PI * 2 * i) / 6;
      const dist = 60 + Math.random() * 40;
      requestAnimationFrame(() => {
        dot.style.transform = `translate(${Math.cos(angle)*dist}px, ${Math.sin(angle)*dist}px) scale(.4)`;
        dot.style.opacity = '0';
      });
      setTimeout(() => dot.remove(), 850);
    }
  }

  function showToast(text, icon = 'fa-circle-check') {
    if (!toast) return;
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> ${text}`;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 2400);
  }

  function spicyIcons(level) {
    if (!level) return '';
    return `<span class="menu-spicy" title="Épicé">${'<i class="fa-solid fa-pepper-hot"></i>'.repeat(level)}</span>`;
  }

  function badgeHtml(badge) {
    if (!badge) return '';
    const cls = badge.toLowerCase().includes('vegg') ? 'menu-badge veggie' : 'menu-badge';
    let icon = 'fa-fire';
    if (badge === 'NEW')       icon = 'fa-bolt';
    if (badge === 'TOP')       icon = 'fa-fire';
    if (badge === 'SPICY')     icon = 'fa-pepper-hot';
    if (badge === 'XL' || badge === 'XXL') icon = 'fa-up-right-and-down-left-from-center';
    if (badge === 'SIGNATURE') icon = 'fa-star';
    if (badge === 'VEGGIE')    icon = 'fa-leaf';
    if (badge === 'BEST')      icon = 'fa-trophy';
    if (badge === 'CRUNCHY')   icon = 'fa-cookie-bite';
    if (badge === 'ENERGY')    icon = 'fa-bolt';
    return `<span class="${cls}"><i class="fa-solid ${icon}"></i> ${badge}</span>`;
  }

  /* ---------- Render filters ---------- */
  function renderFilters() {
    filtersEl.innerHTML = cats.map(c => `
      <button class="filter-chip ${c.id === activeCat ? 'active' : ''}" data-cat="${c.id}">
        <i class="fa-solid ${c.icon}"></i>${c.label}
      </button>
    `).join('');
    filtersEl.querySelectorAll('.filter-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCat = btn.dataset.cat;
        renderFilters();
        renderGrid();
        // scroll to top of grid smoothly
        const top = document.getElementById('filterBar').getBoundingClientRect().bottom;
        if (top < 0) window.scrollTo({ top: window.scrollY + top - 60, behavior: 'smooth' });
      });
    });
  }

  /* ---------- Render grid ---------- */
  function filterData() {
    const q = query.trim().toLowerCase();
    return data.filter(p => {
      if (activeCat !== 'all' && p.cat !== activeCat) return false;
      if (!q) return true;
      return p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    });
  }

  function renderGrid() {
    const items = filterData();
    resultCount.textContent = items.length
      ? `${items.length} produit${items.length > 1 ? 's' : ''}`
      : '';

    if (!items.length) {
      grid.innerHTML = '';
      emptyState.classList.remove('hidden');
      return;
    }
    emptyState.classList.add('hidden');

    // Group by category if 'all' to show sections
    if (activeCat === 'all' && !query) {
      const html = cats.filter(c => c.id !== 'all').map(c => {
        const list = items.filter(i => i.cat === c.id);
        if (!list.length) return '';
        return `
          <div class="cat-section-title" id="${c.id}">
            <h2><i class="fa-solid ${c.icon} text-brand-red mr-3"></i>${c.label}</h2>
            <span class="count">${list.length}</span>
            <span class="underline"></span>
          </div>
          ${list.map(cardHtml).join('')}
        `;
      }).join('');
      grid.innerHTML = html;
    } else {
      grid.innerHTML = items.map(cardHtml).join('');
    }

    // Bind events on cards
    grid.querySelectorAll('[data-id]').forEach((el) => {
      const id = el.dataset.id;
      const item = data.find(d => d.id === id);
      el.querySelector('.menu-card-img')?.addEventListener('click', () => openModal(item));
      el.querySelector('.menu-card-title')?.addEventListener('click', () => openModal(item));
      el.querySelector('.add-btn')?.addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(item, 1, e.currentTarget);
      });
    });
  }

  function cardHtml(p) {
    return `
      <article class="menu-card" data-id="${p.id}">
        <div class="menu-card-img">
          <img src="${p.img}" alt="${p.name}" loading="lazy" />
          <span class="glow"></span>
          <div class="menu-card-badges">
            ${badgeHtml(p.badge)}
            ${spicyIcons(p.spicy)}
          </div>
        </div>
        <div class="menu-card-body">
          <h3 class="menu-card-title">${p.name}</h3>
          <p class="menu-card-desc">${p.desc}</p>
          <div class="menu-card-foot">
            <span class="menu-price">${fmtPrice(p.price)}</span>
            <button class="add-btn"><i class="fa-solid fa-plus"></i> AJOUTER</button>
          </div>
        </div>
      </article>
    `;
  }

  /* ---------- Modal ---------- */
  function openModal(item) {
    if (!item) return;
    modalBody.innerHTML = `
      <div class="modal-img">
        <img src="${item.img}" alt="${item.name}" />
      </div>
      <div class="modal-body">
        <div class="flex gap-2 mb-3">${badgeHtml(item.badge)} ${spicyIcons(item.spicy)}</div>
        <h2 class="modal-title">${item.name}</h2>
        <p class="text-brand-gray mt-3">${item.desc}</p>

        <div class="mt-6 flex flex-wrap items-center gap-4 justify-between">
          <span class="font-display text-4xl text-brand-red">${fmtPrice(item.price)}</span>
          <div class="qty-control" id="qtyCtl">
            <button data-q="-1" aria-label="Diminuer"><i class="fa-solid fa-minus"></i></button>
            <input type="number" id="qtyInput" value="1" min="1" max="20" />
            <button data-q="1" aria-label="Augmenter"><i class="fa-solid fa-plus"></i></button>
          </div>
        </div>

        <button class="btn-red btn-lg w-full justify-center mt-6" id="modalAdd">
          <i class="fa-solid fa-bag-shopping"></i> AJOUTER AU PANIER
        </button>

        <div class="mt-6 grid grid-cols-3 gap-3 text-xs text-brand-gray">
          <div class="flex items-center gap-2 p-3 rounded-xl bg-white/5">
            <i class="fa-solid fa-leaf text-brand-red"></i> Frais
          </div>
          <div class="flex items-center gap-2 p-3 rounded-xl bg-white/5">
            <i class="fa-solid fa-fire-burner text-brand-red"></i> Maison
          </div>
          <div class="flex items-center gap-2 p-3 rounded-xl bg-white/5">
            <i class="fa-solid fa-motorcycle text-brand-red"></i> 25 min
          </div>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    const qtyInput = modalBody.querySelector('#qtyInput');
    modalBody.querySelectorAll('#qtyCtl button').forEach(b => {
      b.addEventListener('click', () => {
        const v = parseInt(qtyInput.value || '1', 10) + parseInt(b.dataset.q, 10);
        qtyInput.value = Math.max(1, Math.min(20, v));
      });
    });
    modalBody.querySelector('#modalAdd').addEventListener('click', (e) => {
      const qty = parseInt(qtyInput.value || '1', 10);
      addToCart(item, qty, e.currentTarget);
      closeModal();
    });
  }

  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
  modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  /* ---------- Cart ---------- */
  function addToCart(item, qty, sourceBtn) {
    if (!item) return;
    if (cart[item.id]) {
      cart[item.id].qty += qty;
    } else {
      cart[item.id] = { qty, item };
    }
    saveCart();
    refreshCartUI();

    if (sourceBtn) {
      fireParticles(sourceBtn);
      const original = sourceBtn.innerHTML;
      sourceBtn.classList.add('added');
      sourceBtn.innerHTML = '<i class="fa-solid fa-check"></i> AJOUTÉ';
      setTimeout(() => {
        sourceBtn.classList.remove('added');
        sourceBtn.innerHTML = original;
      }, 1300);
    }

    showToast(`${item.name} ajouté au panier`);
  }

  function removeFromCart(id) {
    delete cart[id];
    saveCart();
    refreshCartUI();
  }
  function changeQty(id, delta) {
    if (!cart[id]) return;
    cart[id].qty += delta;
    if (cart[id].qty <= 0) delete cart[id];
    saveCart();
    refreshCartUI();
  }

  function refreshCartUI() {
    const entries = Object.values(cart);
    const totalCount = entries.reduce((s, e) => s + e.qty, 0);
    const total = entries.reduce((s, e) => s + e.qty * e.item.price, 0);

    cartCountEl.textContent = totalCount;
    cartCountEl.classList.remove('bump');
    void cartCountEl.offsetWidth; // restart animation
    cartCountEl.classList.add('bump');

    cartSubEl.textContent = fmtPrice(total);
    cartTotalEl.textContent = fmtPrice(total);

    if (!entries.length) {
      cartItemsEl.innerHTML = `
        <div class="cart-empty">
          <i class="fa-solid fa-bag-shopping"></i>
          <p>Votre panier est vide</p>
          <p class="text-xs mt-2">Parcourez le menu et ajoutez vos produits préférés.</p>
        </div>
      `;
      checkoutBtn.disabled = true;
      checkoutBtn.style.opacity = '.5';
      checkoutBtn.style.pointerEvents = 'none';
      return;
    }
    cartItemsEl.innerHTML = entries.map(e => `
      <div class="cart-row" data-id="${e.item.id}">
        <img src="${e.item.img}" alt="" />
        <div class="info">
          <span class="name">${e.item.name}</span>
          <span class="price">${fmtPrice(e.item.price)}</span>
          <div class="actions">
            <button data-act="dec"><i class="fa-solid fa-minus"></i></button>
            <span class="qty">${e.qty}</span>
            <button data-act="inc"><i class="fa-solid fa-plus"></i></button>
          </div>
        </div>
        <button class="remove" data-act="rm" aria-label="Retirer"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    `).join('');

    cartItemsEl.querySelectorAll('.cart-row').forEach(row => {
      const id = row.dataset.id;
      row.querySelectorAll('[data-act]').forEach(b => {
        b.addEventListener('click', () => {
          const act = b.dataset.act;
          if (act === 'inc') changeQty(id, 1);
          if (act === 'dec') changeQty(id, -1);
          if (act === 'rm')  removeFromCart(id);
        });
      });
    });

    checkoutBtn.disabled = false;
    checkoutBtn.style.opacity = '1';
    checkoutBtn.style.pointerEvents = 'auto';
  }

  /* ---------- Cart drawer open/close ---------- */
  function openCart() {
    cartDrawer.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
  function closeCart() {
    cartDrawer.classList.add('hidden');
    document.body.style.overflow = '';
  }
  cartBtn.addEventListener('click', openCart);
  cartDrawer.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeCart));
  clearCartBtn.addEventListener('click', () => {
    cart = {};
    saveCart();
    refreshCartUI();
    showToast('Panier vidé', 'fa-trash-can');
  });
  checkoutBtn.addEventListener('click', () => {
    showToast('Commande envoyée — démo !', 'fa-circle-check');
    setTimeout(() => {
      cart = {};
      saveCart();
      refreshCartUI();
      closeCart();
    }, 1200);
  });

  /* ---------- Search ---------- */
  let searchTimer;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      query = e.target.value;
      renderGrid();
    }, 150);
  });
  clearSearchBtn?.addEventListener('click', () => {
    query = '';
    searchInput.value = '';
    renderGrid();
  });

  /* ---------- Back to top ---------- */
  document.addEventListener('scroll', () => {
    if (window.scrollY > 600) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
  }, { passive: true });
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Init ---------- */
  // jump to category if hash provided
  const hash = window.location.hash.replace('#', '');
  if (hash && cats.find(c => c.id === hash)) activeCat = hash;

  loadCart();
  renderFilters();
  renderGrid();
  refreshCartUI();
})();
