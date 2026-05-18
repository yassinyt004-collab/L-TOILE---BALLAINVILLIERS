# L'Etoile Clermont — Site vitrine premium

Site vitrine premium pour **L'Etoile Clermont — Ballainvilliers**, restaurant fast-food / street food situé à Clermont-Ferrand.

## Objectif

Créer une expérience web moderne, premium et pratique pour présenter :

- l'identité L'Etoile Clermont ;
- les catégories de la carte ;
- les best-sellers ;
- les informations de contact réelles ;
- une page menu complète et facile à naviguer.

## Informations restaurant utilisées

- **Adresse :** 29 Rue Ballainvilliers, 63000 Clermont-Ferrand
- **Téléphone :** 04 73 90 57 38
- **Horaires :** ouvert 7j/7 de 10h00 à 01h00
- **Commande en ligne :** Uber Eats + commande par téléphone

## Structure

```txt
index.html              # Page d'accueil premium
menu.html               # Menu complet dédié
mentions-legales.html   # Mentions légales
confidentialite.html    # Politique de confidentialité
cgv.html                # Conditions générales de vente
cookies.html            # Cookies
robots.txt              # SEO robots
sitemap.xml             # Sitemap
css/style.css           # Styles custom
js/main.js              # Interactions globales
js/menu.js              # Données et recherche du menu
```

## Fonctionnalités

- Hero section premium rouge/noir
- Menu complet sur page séparée `/menu.html`
- Recherche instantanée dans le menu
- Navigation sticky par catégories
- Cards produits uniformisées
- CTA téléphone et Uber Eats
- Visuel officiel L'Etoile Clermont intégré
- Footer avec informations réelles
- Pages légales simples
- Données structurées Restaurant Schema
- Responsive mobile

## Lancer localement

Ouvrir directement `index.html` dans un navigateur, ou lancer un petit serveur local :

```bash
python -m http.server 8080
```

Puis ouvrir :

```txt
http://localhost:8080
```

## Déploiement

Le site est statique et peut être déployé sur :

- Vercel
- Netlify
- GitHub Pages
- tout hébergement statique

## Notes

Les photos food premium restent principalement des visuels libres/stock. Un visuel officiel du site L'Etoile Clermont est intégré via son URL officielle pour renforcer la fidélité à la marque réelle.
