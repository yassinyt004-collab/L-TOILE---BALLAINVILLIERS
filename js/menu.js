(() => {
  const img = {
    tacos: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=80',
    burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
    bowl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
    fries: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=80',
    dessert: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',
    drink: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=80'
  };
  const sections = [
    {id:'tacos-signatures', title:'Tacos Signatures', subtitle:'Recettes généreuses signées L’Etoile.', items:[
      ['O’Merveille','Poulet, cheddar, sauce signature, oignons crispy','10€',img.tacos,'TOP'],['O’Thentik','Recette généreuse, viande au choix, sauce fromagère','12€',img.tacos,''],['O’Chèvre Miel','Chèvre, miel, viande au choix, sauce fromagère','10€',img.tacos,''],['O’Spicy','Recette relevée, cheddar, sauce piquante','12€',img.tacos,'SPICY'],['O’Xford','Tacos signature gourmand et fondant','10€',img.tacos,''],['O’Rientale','Saveurs orientales, épices, sauce maison','12€',img.tacos,''],['O’Chef','Création du chef, sauce fromagère','10€',img.tacos,''],['Montagnard','Recette montagnarde fondante','10€',img.tacos,''],['O’Vergnat','Recette généreuse style auvergnat','12€',img.tacos,''],['O’Riginal','Le classique L’Etoile','12€',img.tacos,''],['Doritos','Tacos croustillant, chips Doritos','12€',img.tacos,'NEW'],['Végétarien','Option veggie, légumes, fromage, sauce','8€',img.tacos,'VEGGIE']
    ]},
    {id:'tacos-composer', title:'Tacos à Composer', subtitle:'Choisissez votre taille, vos viandes et votre sauce.', items:[
      ['Simple M','Tacos 1 viande : tenders, kebab, steak, nuggets, chicken, merguez, cordon bleu, falafel ou kefta','À partir de 8€',img.tacos,''],['Maxi L','Tacos 2 viandes, sauce fromagère, frites, sauce au choix','À partir de 12€',img.tacos,''],['Mega XL','Tacos 3 viandes pour les grosses faims','À partir de 15€',img.tacos,'']
    ]},
    {id:'burgers', title:'Burgers', subtitle:'Buns moelleux, steaks, sauces et recettes généreuses.', items:[
      ['Cheese Burger','Steak, cheddar, salade, sauce','7.90€',img.burger,''],['Double Cheese','Double steak, double cheddar, sauce','8.90€',img.burger,'TOP'],['Triple Cheese','Triple steak, triple cheddar','9.90€',img.burger,''],['Royal Bacon','Steak, cheddar, bacon, sauce','9.90€',img.burger,''],['Double Cheese Bacon','Double steak, cheddar, bacon','11.90€',img.burger,''],['Chicken Burger','Poulet crispy, salade, sauce','7.90€',img.burger,''],['King Burger','Burger généreux façon signature','8.90€',img.burger,''],['PSG Burger','Recette burger premium','10.90€',img.burger,''],['Mac Burger','Double étage gourmand','9.90€',img.burger,''],['Chèvre Miel Burger','Chèvre, miel, steak, salade','8.90€',img.burger,''],['Veggie Burger','Galette veggie, salade, sauce','7.90€',img.burger,'VEGGIE']
    ]},
    {id:'bowls', title:'Bowls', subtitle:'Frais, complets et gourmands.', items:[
      ['Big Bowl','Bowl généreux avec base, protéine et garnitures','16.90€',img.bowl,''],['Crousti Bowl','Poulet croustillant, légumes, sauce','14.90€',img.bowl,''],['Mythique Bowl','Recette signature équilibrée','14.90€',img.bowl,''],['Super Bowl','Grand bowl premium','16.90€',img.bowl,''],['Veggie Bowl','Bowl végétarien frais','13.90€',img.bowl,'VEGGIE'],['Kebabowl','Base bowl, kebab, légumes, sauce','14.90€',img.bowl,''],['Crispy Bowl','Poulet crispy et garnitures','14.90€',img.bowl,''],['Typik Bowl','Recette maison typique','14.90€',img.bowl,''],['Cheese Bowl','Bowl gourmand au fromage','14.90€',img.bowl,''],['Indy Bowl','Saveurs épicées douces','14.90€',img.bowl,''],['Spicy Bowl','Bowl relevé','14.90€',img.bowl,'SPICY']
    ]},
    {id:'frites', title:'Frites & Barquettes', subtitle:'À partager ou à savourer en solo.', items:[
      ['Moyenne Frites','Frites croustillantes','3.90€',img.fries,''],['Grande Frites','Grande portion de frites','4.90€',img.fries,''],['Frites Fromagère','Frites avec sauce fromagère','4.90€',img.fries,''],['Frites Cheddar','Frites avec cheddar fondu','4.90€',img.fries,''],['Frites Cheddar Bacon','Cheddar fondu et bacon','5.90€',img.fries,'TOP'],['Frites Fromagère Lardon','Sauce fromagère et lardons','5.90€',img.fries,''],['Barquette Kebab','Barquette généreuse kebab','12€',img.fries,''],['Nuggets Cheddar & Crispy Onions','Nuggets, cheddar et oignons crispy','9.90€',img.fries,'']
    ]},
    {id:'desserts', title:'Desserts', subtitle:'La touche sucrée pour finir.', items:[
      ['Cheesecake cookies','Cheesecake gourmand aux cookies','4.50€',img.dessert,''],['Cheesecake citron','Cheesecake frais au citron','4.50€',img.dessert,''],['Tarte daim','Tarte chocolat caramel Daim','4.50€',img.dessert,''],['Tiramisu caramel spéculos','Tiramisu maison caramel spéculos','4.50€',img.dessert,''],['Tiramisu chocolat noisette','Tiramisu chocolat noisette','4.50€',img.dessert,''],['Panini Nutella','Panini chaud au Nutella','5.90€',img.dessert,''],['Sweety Burger','Mini burger sucré','3.90€',img.dessert,'']
    ]},
    {id:'boissons', title:'Boissons', subtitle:'Boissons fraîches.', items:[
      ['Coca-Cola','Canette fraîche','2.90€',img.drink,''],['Fanta','Canette fraîche','2.90€',img.drink,''],['Sprite','Canette fraîche','2.90€',img.drink,''],['Oasis','Canette fraîche','2.90€',img.drink,''],['Hawai','Canette fraîche','2.90€',img.drink,''],['Monster','Boisson énergisante','3.90€',img.drink,''],['Eau','Bouteille d’eau','2.50€',img.drink,'']
    ]}
  ];
  const root = document.getElementById('menuList');
  const no = document.getElementById('noResults');
  const search = document.getElementById('menuSearch');
  const clear = document.getElementById('clearSearch');
  const render = (q='') => {
    const query = q.trim().toLowerCase();
    let count = 0;
    root.innerHTML = sections.map(sec => {
      const items = sec.items.filter(([name,desc]) => !query || `${name} ${desc} ${sec.title}`.toLowerCase().includes(query));
      count += items.length;
      if (!items.length) return '';
      return `<section id="${sec.id}" class="menu-section scroll-mt-36"><div class="mb-8"><p class="font-script text-brand-red text-2xl">Notre carte</p><h2 class="section-title">${sec.title}</h2><p class="text-brand-gray mt-2">${sec.subtitle}</p></div><div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">${items.map(([name,desc,price,pic,badge]) => `<article class="prod-card menu-product" data-name="${name.toLowerCase()}"><div class="prod-img"><img loading="lazy" src="${pic}" alt="${name}"/></div>${badge?`<span class="badge"><i class="fa-solid fa-star"></i> ${badge}</span>`:''}<div class="p-5"><h3 class="font-display text-2xl tracking-wider">${name}</h3><p class="text-sm text-brand-gray mt-1 min-h-[42px]">${desc}</p><div class="mt-5 flex items-center justify-between gap-3"><span class="font-display text-2xl text-brand-red">${price}</span><a href="tel:0473905738" class="btn-red btn-sm"><i class="fa-solid fa-phone"></i> Commander</a></div></div></article>`).join('')}</div></section>`;
    }).join('');
    no.classList.toggle('hidden', !query || count > 0);
  };
  search?.addEventListener('input', e => render(e.target.value));
  clear?.addEventListener('click', () => { search.value=''; render(); search.focus(); });
  render();
})();
