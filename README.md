# L'Etoile Clermont — Premium Fast-Food Website

A cinematic, dark-luxury landing page for **L'Etoile Clermont** — a premium street-food brand in Clermont-Ferrand serving French tacos, burgers, bowls, fries, desserts and drinks.

The design combines deep blacks, vibrant red accents, glassmorphism, smoke and red-glow effects to deliver a high-end, conversion-focused experience inspired by modern SaaS landing pages and luxury fast-food campaigns.

## Live preview

This is a static site — open `index.html` directly in your browser, or serve the folder with any static HTTP server:

```bash
# any of these works
python3 -m http.server 8080
npx serve .
```

Then visit http://localhost:8080.

## Tech stack

- **HTML5** — semantic single-page structure
- **Tailwind CSS** (CDN) with a custom theme (brand colors, fonts, shadows)
- **Custom CSS** (`css/style.css`) for cinematic effects: red glows, smoke, particles, glassmorphism, floating animations, ribbon marquee, phone mockup, reveal-on-scroll
- **Vanilla JS** (`js/main.js`) — no framework, no build step
- **Google Fonts**: Bebas Neue, Caveat, Inter
- **Font Awesome 6** icons

## Sections

1. **Top bar** — opening hours, address, social icons (Instagram, Facebook, Snapchat, TikTok)
2. **Navbar** — logo (red star + wordmark), main menu, fixed-on-scroll, red CTA "COMMANDER"
3. **Hero** — handwritten red slogan, huge display title, paragraph, dual CTAs, social proof (avatars + 4.8/5 rating + 1200+ reviews), 3 mini-stats, cinematic food composition with floating tags and red particles
4. **Features** — 3 glassmorphism cards (Produits frais / Fait maison / Livraison rapide)
5. **Menu categories** — 6 image cards with red CTAs (Tacos, Burgers, Bowls, Frites & Barquettes, Desserts, Boissons)
6. **Signature products** — animated marquee ribbon + 4 product cards (O'Merveille, O'Spicy, Double Cheese, Frites Cheddar Bacon) with prices and add-to-cart
7. **About** — image mosaic + brand story, value list and stats
8. **Reviews** — auto-advancing draggable slider with glass cards
9. **Delivery** — Uber Eats / Deliveroo / Click & Collect, stats and a realistic phone mockup
10. **Footer** — brand recap, menu, contact, newsletter, socials, legal links
11. **Floating CTA** (mobile) — pulsing "Commander" button

## Design system

| Token | Value |
| --- | --- |
| Primary red | `#ff1e1e` |
| Red gradient | `#ff1e1e → #c70000` |
| Ink / Dark | `#050505` / `#0a0a0a` |
| Charcoal | `#141414` |
| Body text | `#ffffff` |
| Muted text | `#a8a8a8` |
| Display font | Bebas Neue |
| Script font | Caveat |
| Body font | Inter |

Effects: red neon glow, soft cinematic shadows, glassmorphism (blur + tinted bg), grainy noise overlay, smoke blobs, particles, marquee, parallax, reveal-on-scroll.

## Animations

- Smooth navbar morph on scroll
- Floating food images and tags
- Rotating glow ring behind hero composition
- Rising red particles
- Pulsing CTA button
- Marquee ribbon
- Hover micro-interactions (lift, glow, underline)
- IntersectionObserver-based fade-in
- Subtle mouse parallax on the hero composition
- Full `prefers-reduced-motion` support

## Responsive

Mobile-first layout with:

- Hamburger drawer with full menu and contact info
- Hidden desktop-only details on small screens
- Floating bottom CTA button on mobile
- Fluid typography via Tailwind + `clamp()`
- Phone mockup that scales gracefully

## File structure

```
.
├── index.html        # full page markup
├── css/
│   └── style.css     # cinematic effects + components
├── js/
│   └── main.js       # interactions
└── README.md
```

## Image sources

All photography is sourced from **Unsplash** (free to use) using premium food keywords (cinematic burger, french tacos, crispy fries, etc.).

## License

Code is provided as-is for the L'Etoile Clermont brand. Replace placeholder photos and copy before production use.
