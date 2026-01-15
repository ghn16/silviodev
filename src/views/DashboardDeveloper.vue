<template>
  <div class="min-h-screen text-zinc-200" style="background: linear-gradient(135deg, #0B0F14 0%, #1a1625 100%);">
    <DashboardHeader />
    
    <div class="max-w-5xl mx-auto px-6 py-16 relative">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 hero-gradient pointer-events-none"></div>
      
      <div class="relative z-10">
        <h1 class="text-5xl md:text-6xl font-display font-light mb-6 text-zinc-50 fade-in leading-tight">
          Le code est un <span style="
            background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          ">outil</span>, pas une fin.
        </h1>

        <div class="prose prose-invert prose-zinc max-w-none mb-12 fade-in">
          <p class="text-zinc-300 text-xl leading-relaxed mb-4">
            Je m'intéresse davantage à la lisibilité, à la structure et à la cohérence 
            qu'aux effets techniques inutiles.
          </p>
          <p class="text-zinc-400 text-lg leading-relaxed">
            Un bon projet est celui qu'un autre développeur peut comprendre et maintenir.
          </p>
        </div>

        <Section title="Principes">
          <ul class="space-y-4 text-zinc-300 text-lg">
            <li class="flex items-start group">
              <span class="mr-4 text-indigo-400 group-hover:scale-110 transition-transform">—</span>
              <span class="group-hover:text-zinc-100 transition-colors">Code lisible avant code complexe</span>
            </li>
            <li class="flex items-start group">
              <span class="mr-4 text-indigo-400 group-hover:scale-110 transition-transform">—</span>
              <span class="group-hover:text-zinc-100 transition-colors">Architecture explicite</span>
            </li>
            <li class="flex items-start group">
              <span class="mr-4 text-indigo-400 group-hover:scale-110 transition-transform">—</span>
              <span class="group-hover:text-zinc-100 transition-colors">Séparation claire des responsabilités</span>
            </li>
            <li class="flex items-start group">
              <span class="mr-4 text-indigo-400 group-hover:scale-110 transition-transform">—</span>
              <span class="group-hover:text-zinc-100 transition-colors">Choix techniques justifiés</span>
            </li>
          </ul>
        </Section>

        <Section title="Explorer mes projets">
          <div class="space-y-4">
            <router-link 
              to="/projects"
              class="btn-primary w-full justify-between group"
            >
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <span class="font-medium">Projets sélectionnés</span>
              </div>
              <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </Section>
      </div>
    </div>
  </div>
</template>

<script setup>
import DashboardHeader from '../components/DashboardHeader.vue'
import Section from '../components/Section.vue'
import { contactInfo as contact } from '../data/contact'
</script>