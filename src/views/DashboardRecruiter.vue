<template>
  <div class="min-h-screen text-zinc-200" style="background: linear-gradient(135deg, #0B0F14 0%, #1a1625 100%);">
    <DashboardHeader />
    
    <div class="max-w-5xl mx-auto px-6 py-16 relative">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 hero-gradient pointer-events-none"></div>
      
      <div class="relative z-10">
        <h1 class="text-5xl md:text-6xl font-display font-light mb-6 text-zinc-50 fade-in leading-tight">
          Développeur web orienté <span style="
            background: linear-gradient(135deg, #22D3EE 0%, #A855F7 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          ">produit et architecture.</span>
        </h1>

        <div class="prose prose-invert prose-zinc max-w-none mb-12 fade-in">
          <p class="text-zinc-300 text-xl leading-relaxed mb-4">
            Je conçois et développe des applications web modernes, avec une attention 
            particulière portée à la clarté du code, à la maintenabilité et à l'utilité 
            réelle du produit.
          </p>
          <p class="text-zinc-400 text-lg leading-relaxed">
            Je travaille sur des projets concrets, souvent contraints, et je privilégie 
            des solutions simples, solides et évolutives.
          </p>
        </div>

        <!-- Section À propos -->
        <Section title="À propos">
          <div class="p-6 sm:p-8 bg-zinc-900 border border-zinc-700">
            <p class="text-zinc-300 text-lg leading-relaxed mb-4">
              Développeur web formé au front-end et aux bases du back-end, je m'intéresse particulièrement à la création d'interfaces claires, accessibles et bien structurées.
            </p>
            <p class="text-zinc-300 text-lg leading-relaxed mb-4">
              Je travaille principalement avec JavaScript et Vue.js, mais je sais aussi concevoir des projets complets allant de l'intégration UI à la logique applicative, y compris des interfaces d'administration et des projets e-commerce.
            </p>
            <p class="text-zinc-300 text-lg leading-relaxed mb-4">
              J'accorde une grande importance à la compréhension du besoin réel, à la lisibilité du code et à l'expérience utilisateur, aussi bien sur mobile que sur desktop.
            </p>
            <p class="text-zinc-400 text-lg leading-relaxed">
              À travers mes projets personnels, je cherche aussi à créer des produits ayant du sens, au-delà de l'aspect purement technique.
            </p>
          </div>
        </Section>

        <Section title="Ce que je fais">
          <ul class="space-y-4 text-zinc-300 text-lg">
            <li class="flex items-start group">
              <span class="mr-4 text-cyan-400 group-hover:scale-110 transition-transform">—</span>
              <span class="group-hover:text-zinc-100 transition-colors">Applications web modernes (Vue / Nuxt)</span>
            </li>
            <li class="flex items-start group">
              <span class="mr-4 text-cyan-400 group-hover:scale-110 transition-transform">—</span>
              <span class="group-hover:text-zinc-100 transition-colors">Architectures claires et maintenables</span>
            </li>
            <li class="flex items-start group">
              <span class="mr-4 text-cyan-400 group-hover:scale-110 transition-transform">—</span>
              <span class="group-hover:text-zinc-100 transition-colors">Interfaces sobres et efficaces</span>
            </li>
            <li class="flex items-start group">
              <span class="mr-4 text-cyan-400 group-hover:scale-110 transition-transform">—</span>
              <span class="group-hover:text-zinc-100 transition-colors">Collaboration avec des équipes produit ou techniques</span>
            </li>
          </ul>
        </Section>

        <Section title="Stack">
          <div class="flex flex-wrap gap-3">
            <span v-for="tech in stack" :key="tech" 
                  class="px-4 py-2 bg-zinc-900 text-zinc-300 text-sm border border-zinc-700 
                         hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 
                         transition-all duration-300 cursor-default">
              {{ tech }}
            </span>
          </div>
        </Section>

        <!-- Bouton vers projets -->
        <div class="mt-12 p-8 bg-zinc-900 border border-zinc-700 border-l-4 border-l-cyan-400">
          <h3 class="text-xl font-medium text-zinc-100 mb-3">Découvrir mes réalisations</h3>
          <p class="text-zinc-400 mb-6">
            Une sélection volontairement réduite de projets représentatifs de ma manière de travailler.
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

        <div class="flex flex-wrap gap-4 mt-12">
          <a 
            :href="cvPath" 
            :download="cvFilename"
            @click="handleDownloadCV"
            class="btn-primary"
          >
            <svg class="w-5 h-5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span class="font-medium">Télécharger le CV</span>
          </a>
          
          <a 
            :href="mailtoLink"
            class="btn-primary"
          >
            <svg class="w-5 h-5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span class="font-medium">Me contacter</span>
          </a>
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

const stack = ['Vue.js', 'Nuxt', 'JavaScript', 'Supabase', 'PostgreSQL', 'Git', 'Vercel']

const mailtoLink = computed(() => {
  const subject = encodeURIComponent(contact.emailSubject)
  const body = encodeURIComponent(contact.emailBody)
  return `mailto:${contact.email}?subject=${subject}&body=${body}`
})

const cvPath = contact.cvPath
const cvFilename = contact.cvFilename

const handleDownloadCV = () => {
  console.log('Téléchargement du CV...')
}
</script>