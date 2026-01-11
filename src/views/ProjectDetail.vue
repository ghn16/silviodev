<template>
  <div class="min-h-screen bg-dark-950 text-zinc-200">
    <!-- Header avec retour -->
    <div class="bg-dark-900 border-b border-dark-700 px-6 py-4">
      <div class="max-w-5xl mx-auto">
        <router-link 
          :to="profile ? `/dashboard/${profile}` : '/'"
          class="text-zinc-400 hover:text-accent-cyan text-sm transition-all duration-300 flex items-center gap-2 w-fit hover:-translate-x-1"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour
        </router-link>
      </div>
    </div>

    <!-- Contenu du projet -->
    <div v-if="project" class="max-w-5xl mx-auto px-6 py-16 relative">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 hero-gradient pointer-events-none"></div>
      
      <div class="relative z-10">
        <!-- En-tête -->
        <div class="mb-16 fade-in">
          <div class="flex flex-wrap justify-between items-start gap-4 mb-6">
            <h1 class="text-5xl md:text-6xl font-display font-light text-zinc-50 leading-tight max-w-3xl">
              {{ project.title }}
            </h1>
            <span class="text-zinc-500 text-lg px-4 py-2 bg-dark-900 border border-dark-700 rounded-full">
              {{ project.year }}
            </span>
          </div>
          
          <div class="flex flex-wrap gap-3 mt-6">
            <span 
              v-for="tag in project.tags" 
              :key="tag"
              class="px-4 py-2 bg-dark-900 text-accent-cyan text-sm border border-accent-cyan/30 
                     hover:bg-accent-cyan/10 hover:border-accent-cyan/60 transition-all duration-300"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Sections du projet -->
        <div class="space-y-12">
          <Section title="Contexte du projet">
            <p class="text-zinc-300 text-lg leading-relaxed">{{ project.context }}</p>
          </Section>

          <Section title="Problème identifié">
            <div class="p-6 bg-dark-900 border-l-4 border-l-accent-indigo">
              <p class="text-zinc-300 text-lg leading-relaxed">{{ project.problem }}</p>
            </div>
          </Section>

          <Section title="Solution mise en place">
            <p class="text-zinc-300 text-lg leading-relaxed">{{ project.solution }}</p>
          </Section>

          <Section title="Choix techniques">
            <div class="p-6 bg-dark-900 border border-dark-700">
              <p class="text-zinc-300 text-lg leading-relaxed">{{ project.tech }}</p>
            </div>
          </Section>

          <Section title="Résultat">
            <div class="p-6 bg-dark-900 border-l-4 border-l-accent-cyan">
              <p class="text-zinc-300 text-lg leading-relaxed">{{ project.result }}</p>
            </div>
          </Section>

          <Section title="Limites et améliorations possibles">
            <p class="text-zinc-400 text-lg leading-relaxed mb-6">{{ project.limits }}</p>
            <p class="text-zinc-600 text-sm italic flex items-start gap-2">
              <svg class="w-4 h-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
             
            </p>
          </Section>
        </div>

        <!-- Navigation -->
        <div class="mt-16 pt-8 border-t border-dark-700">
          <router-link 
            :to="profile ? `/dashboard/${profile}` : '/'"
            class="btn-primary inline-flex"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span class="font-medium">Retour aux projets</span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Message si projet non trouvé -->
    <div v-else class="max-w-5xl mx-auto px-6 py-24 text-center">
      <div class="inline-block">
        <div class="relative mb-8">
          <svg class="w-24 h-24 mx-auto text-accent-cyan/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div class="absolute inset-0 bg-accent-cyan/10 blur-2xl rounded-full"></div>
        </div>
        <p class="text-zinc-400 text-xl mb-6">Projet non trouvé.</p>
        <router-link 
          :to="profile ? `/dashboard/${profile}` : '/'"
          class="btn-primary inline-flex"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span class="font-medium">Retour au dashboard</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProfile } from '../composables/useProfile'
import { getProjectBySlug } from '../data/projects'
import Section from '../components/Section.vue'

const route = useRoute()
const { profile } = useProfile()

const project = computed(() => getProjectBySlug(route.params.slug))
</script>