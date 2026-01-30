// Vos projets portfolio

export const projects = [
  {
    slug: 'nexuspay-defi-landing',
    title: 'NexusPay — Modern DeFi Landing Page',
    year: '2026',
    tags: ['Vue.js', 'Tailwind CSS', 'Vite', 'Vercel', 'JavaScript', 'DeFi'],
    context: `Création d'une plateforme de finance décentralisée (DeFi) haut de gamme axée sur la conversion et l'esthétique moderne.`,
    problem: `Le besoin de simplifier l'accès aux outils DeFi complexes à travers une interface utilisateur intuitive, rapide et visuellement impactante pour instaurer la confiance.`,
    solution: `Développement d'une Single Page Application (SPA) responsive utilisant une architecture modulaire. Implémentation d'un design "Bento Grid" et d'effets de glassmorphism pour une expérience utilisateur premium.`,
    tech: `Vue.js 3 (Composition API) pour une logique réactive et performante. Tailwind CSS pour un stylisage "utility-first" ultra-précis. Vite pour un environnement de développement et un build ultra-rapide. Vercel pour le déploiement continu (CI/CD).`,
    result: `Une landing page fluide et "Pixel-Perfect" avec des animations soignées, une structure de composants propre et une mise en ligne instantanée prouvant la viabilité technique du projet.`,
    limits: `Intégration de graphiques de trading en temps réel (via API) et connexion aux portefeuilles Web3 (MetaMask/WalletConnect) pour la phase 2 du projet.`,
    links: {
      github: null,
      demo: 'https://nexuspay-landing.vercel.app/',
      case_study: null
    }
  },

  {
    slug: 'kingdom-histoire-royaumes-africains',
    title: 'Royaume d-Afrique',
    year: '2026',
    tags: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'Responsive Design'],
    context: `Projet personnel visant à valoriser l'histoire des royaumes africains à travers une application web interactive. Le projet présente plusieurs royaumes, avec le royaume du Dahomey comme royaume vitrine servant de référence en termes de contenu et d'expérience.`,
    problem: `Le contenu historique existant est souvent dispersé, peu engageant et difficile à parcourir. Les supports sont majoritairement textuels, sans hiérarchie claire ni adaptation mobile, ce qui décourage la consultation, notamment chez les jeunes publics.`,
    solution: `Conception d'une application web organisée par royaumes et périodes historiques. Le royaume du Dahomey est développé comme vitrine principale, avec une structuration complète du contenu, une navigation claire et une expérience immersive. Les autres royaumes sont intégrés progressivement selon la même logique.`,
    tech: `Vue.js a été utilisé pour structurer l'application en composants réutilisables et faciliter la gestion de l'état et de la navigation. Tailwind CSS a permis de construire rapidement une interface responsive et cohérente. Une attention particulière a été portée aux performances et à la lisibilité du contenu.`,
    result: `Projet abouti servant de vitrine technique et créative. Il démontre ma capacité à structurer un contenu dense, à concevoir une expérience utilisateur cohérente et à développer une application front-end moderne.`,
    limits: `Tous les royaumes ne disposent pas encore du même niveau de détail que le Dahomey. Il n'existe pas encore de système d'administration pour gérer le contenu dynamiquement. Une évolution future inclurait un back-office, un moteur de recherche et l'ajout progressif de nouveaux royaumes.`,
    links: {
      github: null,
      demo: 'https://royaume-d-afrique.vercel.app',
      case_study: null
    }
  },

  {
    slug: 'portfolio-admin-crud',
    title: 'Portfolio administrable avec interface admin (CRUD)',
    year: '2025',
    tags: ['Vue.js', 'JavaScript', 'Supabase', 'Tailwind CSS'],
    context: `Projet visant à concevoir un portfolio dynamique pouvant être administré sans modifier le code. L'objectif était de séparer clairement l'interface publique et un espace d'administration sécurisé.`,
    problem: `Un portfolio statique nécessite une modification du code à chaque mise à jour. Cela rend la maintenance peu pratique et limite l'évolution du contenu (ajout de projets, modification des descriptions, suppression d'éléments).`,
    solution: `Mise en place d'une interface d'administration permettant de créer, modifier et supprimer des projets via un système CRUD. Les données sont stockées dans une base distante et affichées dynamiquement sur l'interface publique du portfolio.`,
    tech: `Vue.js a été utilisé pour gérer les vues publiques et l'espace admin. Supabase assure l'authentification et la gestion des données. L'architecture est pensée pour séparer clairement la logique métier, l'interface utilisateur et la couche données.`,
    result: `Le projet permet une gestion autonome du contenu du portfolio. Il démontre ma capacité à concevoir une application web complète, à connecter un front-end à un backend et à structurer un projet maintenable.`,
    limits: `Le système de rôles est basique (administrateur unique). Les validations côté serveur peuvent être renforcées. Une amélioration possible serait l'ajout d'un historique des modifications et de permissions plus avancées.`,
    links: {
      github: null,
      demo: 'https://naographics.vercel.app',
      case_study: null
    }
  },

  {
    slug: 'monsneakers-site-ecommerce',
    title: 'Monsneakers — Site e-commerce de vente en ligne',
    year: '2025',
    tags: ['HTML', 'CSS', 'JavaScript', 'E-commerce', 'Interface admin'],
    context: `Projet de site e-commerce développé pour la vente de sneakers en ligne. L'objectif était de concevoir une plateforme complète, avec une interface utilisateur claire côté client et une interface d'administration permettant de gérer les produits et les ventes.`,
    problem: `Un site de vente en ligne nécessite à la fois une expérience utilisateur fluide pour les clients et des outils simples pour gérer les produits et les commandes. Sans interface admin, la gestion manuelle devient rapidement inefficace et source d'erreurs.`,
    solution: `Développement d'un site e-commerce en HTML, CSS et JavaScript comprenant : un catalogue de produits, des pages de détail, un panier d'achat et un moyen de paiement intégré. Une interface d'administration permet d'ajouter, modifier et supprimer des produits, ainsi que de suivre les ventes.`,
    tech: `Le projet a été réalisé sans framework afin de maîtriser pleinement la logique JavaScript côté client. La structure HTML/CSS est pensée pour être responsive. La logique métier (panier, gestion des produits, ventes) est gérée en JavaScript avec une séparation claire des responsabilités entre interface client et interface admin.`,
    result: `Le projet aboutit à une plateforme e-commerce fonctionnelle, démontrant ma capacité à développer une application web complète sans framework, à gérer des données dynamiques et à implémenter une logique de vente en ligne.`,
    limits: `L'architecture reste monolithique et pourrait être améliorée avec un backend dédié. La sécurité et la gestion avancée des utilisateurs peuvent être renforcées. Une évolution future inclurait une API backend, une meilleure gestion des stocks et des rôles administrateurs.`,
    links: {
      github: null,
      demo: 'https://silvio-ecom.vercel.app',
      case_study: null
    }
  }
]

// Fonction pour récupérer un projet par son slug
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}

// Fonction pour filtrer les projets par tags
export function getProjectsByTags(tags) {
  if (!tags || tags.length === 0) return projects
  return projects.filter((p) => p.tags.some((tag) => tags.includes(tag)))
}

// Fonction pour obtenir tous les tags uniques
export function getAllTags() {
  const tagsSet = new Set()
  projects.forEach((p) => {
    p.tags.forEach((tag) => tagsSet.add(tag))
  })
  return Array.from(tagsSet).sort()
}