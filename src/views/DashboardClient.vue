<template>
  <div class="min-h-screen text-zinc-200" style="background: linear-gradient(135deg, #0B0F14 0%, #1a1625 100%);">
    <DashboardHeader />
    
    <div class="max-w-5xl mx-auto px-6 py-16 relative">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 hero-gradient pointer-events-none"></div>
      
      <div class="relative z-10">
        <h1 class="text-5xl md:text-6xl font-display font-light mb-6 text-zinc-50 fade-in leading-tight">
          Transformer une idée en <span style="
            background: linear-gradient(135deg, #A855F7 0%, #6366F1 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          ">application utilisable.</span>
        </h1>

        <div class="prose prose-invert prose-zinc max-w-none mb-12 fade-in">
          <p class="text-zinc-300 text-xl leading-relaxed mb-4">
            Mon rôle est de traduire un besoin réel en solution technique fonctionnelle.
          </p>
          <p class="text-zinc-400 text-lg leading-relaxed">
            Je privilégie les produits simples, compréhensibles et adaptés à leur 
            contexte d'utilisation.
          </p>
        </div>

        <Section title="Types de projets">
          <ul class="space-y-4 text-zinc-300 text-lg">
            <li class="flex items-start group">
              <span class="mr-4 text-purple-400 group-hover:scale-110 transition-transform">—</span>
              <span class="group-hover:text-zinc-100 transition-colors">Application web sur mesure</span>
            </li>
            <li class="flex items-start group">
              <span class="mr-4 text-purple-400 group-hover:scale-110 transition-transform">—</span>
              <span class="group-hover:text-zinc-100 transition-colors">MVP pour startup ou projet interne</span>
            </li>
            <li class="flex items-start group">
              <span class="mr-4 text-purple-400 group-hover:scale-110 transition-transform">—</span>
              <span class="group-hover:text-zinc-100 transition-colors">Tableau de bord et outils métiers</span>
            </li>
            <li class="flex items-start group">
              <span class="mr-4 text-purple-400 group-hover:scale-110 transition-transform">—</span>
              <span class="group-hover:text-zinc-100 transition-colors">Automatisation de processus</span>
            </li>
          </ul>
        </Section>

        <Section title="Approche">
          <ol class="space-y-4 text-zinc-300 text-lg">
            <li class="flex items-start group">
              <span class="mr-4 text-purple-400 font-semibold group-hover:scale-110 transition-transform">1.</span>
              <span class="group-hover:text-zinc-100 transition-colors">Comprendre le besoin et le contexte</span>
            </li>
            <li class="flex items-start group">
              <span class="mr-4 text-purple-400 font-semibold group-hover:scale-110 transition-transform">2.</span>
              <span class="group-hover:text-zinc-100 transition-colors">Proposer une solution réaliste</span>
            </li>
            <li class="flex items-start group">
              <span class="mr-4 text-purple-400 font-semibold group-hover:scale-110 transition-transform">3.</span>
              <span class="group-hover:text-zinc-100 transition-colors">Développer de manière itérative</span>
            </li>
            <li class="flex items-start group">
              <span class="mr-4 text-purple-400 font-semibold group-hover:scale-110 transition-transform">4.</span>
              <span class="group-hover:text-zinc-100 transition-colors">Livrer et ajuster</span>
            </li>
          </ol>
        </Section>

        <Section title="Résultat attendu">
          <p class="text-zinc-300 text-xl leading-relaxed p-6 bg-zinc-900 border border-zinc-700 border-l-4 border-l-purple-500">
            Un produit stable, compréhensible et utilisable, pas une démonstration 
            technique inutile.
          </p>
        </Section>

        <!-- CTA Principal - UN SEUL BOUTON -->
        <div class="mt-16 p-8 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/30 rounded-lg">
          <h3 class="text-2xl font-medium text-zinc-100 mb-3">Vous avez un projet en tête ?</h3>
          <p class="text-zinc-400 mb-6 text-lg">
            Discutons de vos besoins et trouvons ensemble la meilleure solution technique.
          </p>
          
          <a 
            :href="mailtoLink"
            class="inline-flex items-center justify-center gap-3 px-8 py-4
                   bg-purple-500 hover:bg-purple-600 text-white font-medium text-lg
                   transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30
                   group"
          >
            <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>Discuter de mon projet</span>
          </a>
        </div>

        <!-- Bouton vers projets -->
        <div class="mt-12 p-8 bg-zinc-900 border border-zinc-700 border-l-4 border-l-purple-400">
          <h3 class="text-xl font-medium text-zinc-100 mb-3">Découvrir mes réalisations concrètes</h3>
          <p class="text-zinc-400 mb-6">
            Quelques projets que j'ai développés pour comprendre mon approche.
          </p>
          <router-link 
            to="/projects"
            class="btn-primary inline-flex"
          >
            <svg class="w-5 h-5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span class="font-medium">Projets sélectionnés</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import DashboardHeader from '../components/DashboardHeader.vue'
import Section from '../components/Section.vue'
import { contactInfo as contact } from '../data/contact'

const mailtoLink = computed(() => {
  const subject = encodeURIComponent('Discussion projet')
  const body = encodeURIComponent('Bonjour,\n\nJ\'aimerais discuter d\'un projet avec vous.\n\nVoici mon besoin :\n\n')
  return `mailto:${contact.email}?subject=${subject}&body=${body}`
})
</script>