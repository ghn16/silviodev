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
              À travers mes projets personnels, notamment Royaumes d'Afrique, je cherche aussi à créer des produits ayant du sens, au-delà de l'aspect purement technique.
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
          
          <a 
            :href="contact.github"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary"
          >
            <svg class="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span class="font-medium">GitHub</span>
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