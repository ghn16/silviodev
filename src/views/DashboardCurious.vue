<template>
  <div class="min-h-screen text-zinc-200" style="background: linear-gradient(135deg, #0B0F14 0%, #1a1625 100%);">
    <DashboardHeader />
    
    <div class="max-w-5xl mx-auto px-6 py-16 relative">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 hero-gradient pointer-events-none"></div>
      
      <div class="relative z-10">
        <h1 class="text-5xl md:text-6xl font-display font-light mb-6 text-zinc-50 fade-in leading-tight">
          Explorer le projet <span style="
            background: linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          ">derrière le portfolio.</span>
        </h1>

        <div class="prose prose-invert prose-zinc max-w-none mb-12 fade-in">
          <p class="text-zinc-300 text-xl leading-relaxed mb-4">
            Ce site est conçu comme un projet à part entière.
          </p>
          <p class="text-zinc-400 text-lg leading-relaxed">
            Il reflète ma manière de penser l'expérience utilisateur, la structure 
            d'une application et l'adaptation du contenu selon le contexte.
          </p>
        </div>

        <div class="space-y-4 mt-16">
          <router-link
            to="/projects"
            class="btn-primary w-full justify-between group text-lg py-5"
          >
            <div class="flex items-center gap-4">
              <svg class="w-6 h-6 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              <div class="text-left">
                <div class="font-medium">Explorer les projets</div>
                <div class="text-sm text-zinc-400 font-normal">Découvrir les réalisations concrètes</div>
              </div>
            </div>
            <svg class="w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
          
          <a 
            :href="contact.github" 
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary w-full justify-between group text-lg py-5"
          >
            <div class="flex items-center gap-4">
              <svg class="w-6 h-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <div class="text-left">
                <div class="font-medium">Accéder au code</div>
                <div class="text-sm text-zinc-400 font-normal">Code source sur GitHub</div>
              </div>
            </div>
            <svg class="w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <!-- Section méta -->
        <div class="mt-16 p-8 bg-zinc-900 border border-zinc-700 border-l-4 border-l-violet-500">
          <h2 class="text-xl font-medium text-zinc-100 mb-4">À propos de ce portfolio</h2>
          <div class="space-y-3 text-zinc-400">
            <p class="flex items-start gap-3">
              <svg class="w-5 h-5 text-violet-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Adapte son contenu selon le profil de l'utilisateur</span>
            </p>
            <p class="flex items-start gap-3">
              <svg class="w-5 h-5 text-violet-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Construit avec Vue.js 3, Composition API et Tailwind CSS</span>
            </p>
            <p class="flex items-start gap-3">
              <svg class="w-5 h-5 text-violet-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Stockage local du profil sans cookies ni tracking</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DashboardHeader from '../components/DashboardHeader.vue'
import { contactInfo as contact } from '../data/contact'
</script>