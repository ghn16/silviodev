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