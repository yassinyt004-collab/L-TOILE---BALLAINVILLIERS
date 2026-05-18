/* L'Etoile Clermont — Full menu dataset
   All prices in EUR. Images from Unsplash food photography.
*/

window.MENU_DATA = [
  /* ============== TACOS SIGNATURES ============== */
  {
    id: 'tac-merveille', cat: 'tacos-signatures', name: "O'Merveille",
    price: 10.00, badge: 'TOP', spicy: 0,
    img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=85',
    desc: "Poulet pané, cheddar fondu, sauce signature, oignons crispy, salade.",
  },
  {
    id: 'tac-thentik', cat: 'tacos-signatures', name: "O'Thentik",
    price: 12.00, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=85',
    desc: "Boeuf haché, kebab, cheddar, sauce blanche maison, oignons.",
  },
  {
    id: 'tac-chevre-miel', cat: 'tacos-signatures', name: "O'Chèvre Miel",
    price: 10.00, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=900&q=85',
    desc: "Poulet pané, chèvre fondu, miel, salade, oignons rouges.",
  },
  {
    id: 'tac-spicy', cat: 'tacos-signatures', name: "O'Spicy",
    price: 12.00, badge: 'SPICY', spicy: 2,
    img: 'https://images.unsplash.com/photo-1611250188496-e966043a0629?auto=format&fit=crop&w=900&q=85',
    desc: "Boeuf haché, jalapeños, cheddar fondu, sauce piquante maison.",
  },
  {
    id: 'tac-oxford', cat: 'tacos-signatures', name: "O'Xford",
    price: 10.00, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85',
    desc: "Cordon bleu, cheddar, bacon grillé, sauce maison.",
  },
  {
    id: 'tac-rientale', cat: 'tacos-signatures', name: "O'Rientale",
    price: 12.00, badge: '', spicy: 1,
    img: 'https://images.unsplash.com/photo-1633577419269-9826c5ddc6cb?auto=format&fit=crop&w=900&q=85',
    desc: "Merguez, kebab, harissa, oignons, sauce fromagère.",
  },
  {
    id: 'tac-chef', cat: 'tacos-signatures', name: "O'Chef",
    price: 10.00, badge: 'SIGNATURE', spicy: 0,
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=900&q=85',
    desc: "Poulet, kebab, oeuf, cheddar, sauce signature du chef.",
  },
  {
    id: 'tac-montagnard', cat: 'tacos-signatures', name: "Montagnard",
    price: 10.00, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1574343635329-72ff62a91954?auto=format&fit=crop&w=900&q=85',
    desc: "Bacon, raclette fondue, oignons confits, pommes de terre.",
  },
  {
    id: 'tac-vergnat', cat: 'tacos-signatures', name: "O'Vergnat",
    price: 12.00, badge: 'NEW', spicy: 0,
    img: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=900&q=85',
    desc: "Spécialité auvergnate : Saint-Nectaire fondu, bacon, oignons.",
  },
  {
    id: 'tac-riginal', cat: 'tacos-signatures', name: "O'Riginal",
    price: 12.00, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1672963947113-c5e4ebda8eb1?auto=format&fit=crop&w=900&q=85',
    desc: "Poulet crispy, double cheddar, sauce algérienne, salade.",
  },
  {
    id: 'tac-doritos', cat: 'tacos-signatures', name: "Doritos",
    price: 12.00, badge: 'CRUNCHY', spicy: 1,
    img: 'https://images.unsplash.com/photo-1652883078710-e0fa2adb16ec?auto=format&fit=crop&w=900&q=85',
    desc: "Poulet épicé, Doritos écrasés, cheddar, sauce mexicaine.",
  },
  {
    id: 'tac-vege', cat: 'tacos-signatures', name: "Végétarien",
    price: 8.00, badge: 'VEGGIE', spicy: 0,
    img: 'https://images.unsplash.com/photo-1583095117957-1cf3df128b8a?auto=format&fit=crop&w=900&q=85',
    desc: "Steak végétal, cheddar, légumes grillés, sauce maison.",
  },

  /* ============== TACOS À COMPOSER ============== */
  {
    id: 'tac-c-1v', cat: 'tacos-composer', name: "Tacos 1 viande",
    price: 7.50, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=85',
    desc: "Au choix : kebab, poulet, cordon bleu, nuggets ou steak haché.",
  },
  {
    id: 'tac-c-2v', cat: 'tacos-composer', name: "Tacos 2 viandes",
    price: 9.50, badge: 'TOP', spicy: 0,
    img: 'https://images.unsplash.com/photo-1611250188496-e966043a0629?auto=format&fit=crop&w=900&q=85',
    desc: "Combinez 2 viandes au choix + sauce signature + cheddar.",
  },
  {
    id: 'tac-c-3v', cat: 'tacos-composer', name: "Tacos 3 viandes",
    price: 11.50, badge: 'XL', spicy: 0,
    img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=85',
    desc: "Le format ultime : 3 viandes au choix, double cheddar.",
  },
  {
    id: 'tac-c-mix', cat: 'tacos-composer', name: "Tacos Mix",
    price: 13.50, badge: 'XXL', spicy: 0,
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=900&q=85',
    desc: "4 viandes panachées + frites incluses + sauce maison.",
  },

  /* ============== BURGERS ============== */
  {
    id: 'bg-cheese', cat: 'burgers', name: "Cheese Burger",
    price: 7.90, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85',
    desc: "Pain brioché, steak haché frais, cheddar fondu, salade, sauce signature.",
  },
  {
    id: 'bg-double', cat: 'burgers', name: "Double Cheese",
    price: 8.90, badge: 'TOP', spicy: 0,
    img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85',
    desc: "Double steak, double cheddar, oignons confits, bun brioché.",
  },
  {
    id: 'bg-triple', cat: 'burgers', name: "Triple Cheese",
    price: 9.90, badge: 'XXL', spicy: 0,
    img: 'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=85',
    desc: "Triple steak, triple cheddar, sauce burger maison.",
  },
  {
    id: 'bg-royal-bacon', cat: 'burgers', name: "Royal Bacon",
    price: 9.90, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=85',
    desc: "Steak haché, bacon grillé, cheddar, oignons rouges, sauce BBQ.",
  },
  {
    id: 'bg-double-bacon', cat: 'burgers', name: "Double Cheese Bacon",
    price: 11.90, badge: 'SIGNATURE', spicy: 0,
    img: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=900&q=85',
    desc: "Double steak, double cheddar, double bacon, sauce maison.",
  },
  {
    id: 'bg-chicken', cat: 'burgers', name: "Chicken Burger",
    price: 7.90, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa?auto=format&fit=crop&w=900&q=85',
    desc: "Filet de poulet pané crispy, cheddar, salade, sauce blanche.",
  },
  {
    id: 'bg-king', cat: 'burgers', name: "King Burger",
    price: 8.90, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=900&q=85',
    desc: "Steak XL, cheddar, oignons confits, cornichons, sauce king.",
  },
  {
    id: 'bg-psg', cat: 'burgers', name: "PSG Burger",
    price: 10.90, badge: 'NEW', spicy: 1,
    img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=900&q=85',
    desc: "Double steak, cheddar, oignons rouges, sauce parisienne signature.",
  },
  {
    id: 'bg-mac', cat: 'burgers', name: "Mac Burger",
    price: 9.90, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&w=900&q=85',
    desc: "Double steak, salade, cornichons, sauce big mac maison, oignons.",
  },
  {
    id: 'bg-chevre', cat: 'burgers', name: "Chèvre Miel Burger",
    price: 8.90, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1610614819513-58e34989848b?auto=format&fit=crop&w=900&q=85',
    desc: "Steak haché, fromage de chèvre, miel, roquette, oignons rouges.",
  },
  {
    id: 'bg-veggie', cat: 'burgers', name: "Veggie Burger",
    price: 7.90, badge: 'VEGGIE', spicy: 0,
    img: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=85',
    desc: "Steak végétal, cheddar, tomate, salade, sauce maison.",
  },

  /* ============== BOWLS ============== */
  {
    id: 'bw-big', cat: 'bowls', name: "Big Bowl",
    price: 16.90, badge: 'XL', spicy: 0,
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85',
    desc: "Riz, poulet grillé, cheddar, légumes croquants, sauce signature.",
  },
  {
    id: 'bw-crousti', cat: 'bowls', name: "Crousti Bowl",
    price: 14.90, badge: 'TOP', spicy: 0,
    img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85',
    desc: "Poulet crispy, riz, maïs, sauce blanche, oignons frits.",
  },
  {
    id: 'bw-mythique', cat: 'bowls', name: "Mythique Bowl",
    price: 14.90, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85',
    desc: "Boeuf haché, cheddar, frites, sauce burger, salade.",
  },
  {
    id: 'bw-super', cat: 'bowls', name: "Super Bowl",
    price: 16.90, badge: 'XL', spicy: 0,
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85',
    desc: "Riz, poulet, kebab, cheddar fondu, légumes, double sauce.",
  },
  {
    id: 'bw-veggie', cat: 'bowls', name: "Veggie Bowl",
    price: 13.90, badge: 'VEGGIE', spicy: 0,
    img: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=900&q=85',
    desc: "Quinoa, avocat, légumes grillés, feta, sauce yaourt.",
  },
  {
    id: 'bw-kebab', cat: 'bowls', name: "Kebabowl",
    price: 14.90, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1513568215025-92ab2a734d61?auto=format&fit=crop&w=900&q=85',
    desc: "Émincé de kebab, riz, oignons, sauce blanche, harissa.",
  },
  {
    id: 'bw-crispy', cat: 'bowls', name: "Crispy Bowl",
    price: 14.90, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85',
    desc: "Poulet pané, riz, cheddar, sauce signature, oignons frits.",
  },
  {
    id: 'bw-typik', cat: 'bowls', name: "Typik Bowl",
    price: 14.90, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1604908554007-9b4d83e7c6f9?auto=format&fit=crop&w=900&q=85',
    desc: "Riz, poulet grillé, légumes vapeur, sauce yaourt-citron.",
  },
  {
    id: 'bw-cheese', cat: 'bowls', name: "Cheese Bowl",
    price: 14.90, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=900&q=85',
    desc: "Triple fromage : cheddar, mozzarella, raclette, riz, poulet.",
  },
  {
    id: 'bw-indy', cat: 'bowls', name: "Indy Bowl",
    price: 14.90, badge: '', spicy: 1,
    img: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&w=900&q=85',
    desc: "Poulet tikka, riz basmati, sauce curry, oignons rouges.",
  },
  {
    id: 'bw-spicy', cat: 'bowls', name: "Spicy Bowl",
    price: 14.90, badge: 'SPICY', spicy: 2,
    img: 'https://images.unsplash.com/photo-1565895405137-61089cad9e35?auto=format&fit=crop&w=900&q=85',
    desc: "Poulet épicé, jalapeños, riz, sauce piquante, cheddar.",
  },

  /* ============== FRITES & BARQUETTES ============== */
  {
    id: 'fr-moy', cat: 'frites', name: "Moyenne Frites",
    price: 3.90, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85',
    desc: "Frites fraîches maison, croustillantes et dorées.",
  },
  {
    id: 'fr-grd', cat: 'frites', name: "Grande Frites",
    price: 4.90, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=900&q=85',
    desc: "Format XL, idéal à partager. Croustillantes à souhait.",
  },
  {
    id: 'fr-from', cat: 'frites', name: "Frites Fromagère",
    price: 4.90, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=900&q=85',
    desc: "Frites maison, sauce fromagère onctueuse, oignons frits.",
  },
  {
    id: 'fr-ched', cat: 'frites', name: "Frites Cheddar",
    price: 4.90, badge: 'TOP', spicy: 0,
    img: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=85',
    desc: "Frites généreusement nappées de cheddar fondu coulant.",
  },
  {
    id: 'fr-ched-bcn', cat: 'frites', name: "Frites Cheddar Bacon",
    price: 5.90, badge: 'BEST', spicy: 0,
    img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=85',
    desc: "Cheddar fondu, éclats de bacon grillé, sauce signature.",
  },
  {
    id: 'fr-from-lard', cat: 'frites', name: "Frites Fromagère Lardon",
    price: 5.90, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1623238913973-21e45cced554?auto=format&fit=crop&w=900&q=85',
    desc: "Frites, sauce fromagère crémeuse, lardons grillés.",
  },
  {
    id: 'fr-bar-keb', cat: 'frites', name: "Barquette Kebab",
    price: 12.00, badge: 'XL', spicy: 0,
    img: 'https://images.unsplash.com/photo-1633577419269-9826c5ddc6cb?auto=format&fit=crop&w=900&q=85',
    desc: "Émincé de kebab, frites maison, double cheddar, sauce blanche.",
  },
  {
    id: 'fr-nug', cat: 'frites', name: "Nuggets Cheddar & Crispy Onions",
    price: 9.90, badge: 'NEW', spicy: 0,
    img: 'https://images.unsplash.com/photo-1626082896492-766af4eb6501?auto=format&fit=crop&w=900&q=85',
    desc: "10 nuggets premium, cheddar fondu, oignons crispy, sauces.",
  },

  /* ============== DESSERTS ============== */
  {
    id: 'ds-cc-cookie', cat: 'desserts', name: "Cheesecake Cookies",
    price: 4.50, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1567171466295-4afa63d45416?auto=format&fit=crop&w=900&q=85',
    desc: "Cheesecake onctueux sur lit de cookies au chocolat.",
  },
  {
    id: 'ds-cc-citron', cat: 'desserts', name: "Cheesecake Citron",
    price: 4.50, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85',
    desc: "Cheesecake léger au citron, biscuit sablé, zeste frais.",
  },
  {
    id: 'ds-tarte-daim', cat: 'desserts', name: "Tarte Daim",
    price: 4.50, badge: 'TOP', spicy: 0,
    img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=85',
    desc: "Tarte au caramel et amandes croquantes Daim.",
  },
  {
    id: 'ds-ti-spec', cat: 'desserts', name: "Tiramisu Caramel Spéculos",
    price: 4.50, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=85',
    desc: "Mascarpone, caramel beurre salé, biscuits spéculos.",
  },
  {
    id: 'ds-ti-choc', cat: 'desserts', name: "Tiramisu Chocolat Noisette",
    price: 4.50, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1542124948-dc391252a940?auto=format&fit=crop&w=900&q=85',
    desc: "Mascarpone chocolat, éclats de noisettes, cacao.",
  },
  {
    id: 'ds-panini', cat: 'desserts', name: "Panini Nutella",
    price: 5.90, badge: 'NEW', spicy: 0,
    img: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?auto=format&fit=crop&w=900&q=85',
    desc: "Panini grillé, Nutella coulant, sucre glace.",
  },
  {
    id: 'ds-sweety', cat: 'desserts', name: "Sweety Burger",
    price: 3.90, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85',
    desc: "Mini brioche, chocolat fondu, banane caramélisée.",
  },

  /* ============== BOISSONS ============== */
  {
    id: 'bv-coca', cat: 'boissons', name: "Coca-Cola",
    price: 2.50, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=900&q=85',
    desc: "33cl - L'incontournable, bien fraîche.",
  },
  {
    id: 'bv-fanta', cat: 'boissons', name: "Fanta Orange",
    price: 2.50, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1624552184280-9e9631bbeee9?auto=format&fit=crop&w=900&q=85',
    desc: "33cl - Pétillant et fruité.",
  },
  {
    id: 'bv-sprite', cat: 'boissons', name: "Sprite",
    price: 2.50, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=900&q=85',
    desc: "33cl - Citron-vert ultra rafraîchissant.",
  },
  {
    id: 'bv-oasis', cat: 'boissons', name: "Oasis Tropical",
    price: 2.50, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=900&q=85',
    desc: "33cl - Mélange de fruits tropicaux.",
  },
  {
    id: 'bv-hawai', cat: 'boissons', name: "Hawai",
    price: 2.50, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1574670812089-aa57b50b8df7?auto=format&fit=crop&w=900&q=85',
    desc: "33cl - Boisson exotique aux fruits.",
  },
  {
    id: 'bv-monster', cat: 'boissons', name: "Monster Energy",
    price: 3.50, badge: 'ENERGY', spicy: 0,
    img: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=900&q=85',
    desc: "50cl - Pour le coup de boost.",
  },
  {
    id: 'bv-eau', cat: 'boissons', name: "Eau Minérale",
    price: 1.50, badge: '', spicy: 0,
    img: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=85',
    desc: "50cl - Eau plate ou gazeuse.",
  },
];

window.MENU_CATEGORIES = [
  { id: 'all',               label: 'Tout',                icon: 'fa-utensils' },
  { id: 'tacos-signatures',  label: 'Tacos Signatures',    icon: 'fa-pepper-hot' },
  { id: 'tacos-composer',    label: 'Tacos à composer',    icon: 'fa-layer-group' },
  { id: 'burgers',           label: 'Burgers',             icon: 'fa-burger' },
  { id: 'bowls',             label: 'Bowls',               icon: 'fa-bowl-food' },
  { id: 'frites',            label: 'Frites & Barquettes', icon: 'fa-french-fries' },
  { id: 'desserts',          label: 'Desserts',            icon: 'fa-ice-cream' },
  { id: 'boissons',          label: 'Boissons',            icon: 'fa-mug-hot' },
];
