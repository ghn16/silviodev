<template>
  <div class="min-h-screen text-zinc-200" style="background: linear-gradient(135deg, #0B0F14 0%, #1a1625 100%);">
    <!-- Background 3D -->
    <ThreeBackground />

    <!-- Header avec retour -->
    <div class="bg-zinc-900 border-b border-zinc-700 px-6 py-4 relative z-10">
      <div class="max-w-6xl mx-auto">
        <router-link 
          :to="profile ? `/dashboard/${profile}` : '/'"
          class="text-zinc-400 hover:text-cyan-400 text-sm transition-all duration-300 flex items-center gap-2 w-fit hover:-translate-x-1"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour
        </router-link>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-6 py-16 relative z-10">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 hero-gradient pointer-events-none"></div>
      
      <div class="relative z-10">
        <!-- Titre -->
        <div class="mb-12 fade-in">
          <h1 class="text-5xl md:text-6xl font-display font-light mb-4 text-zinc-50 leading-tight">
            Projets <span style="
              background: linear-gradient(135deg, #22D3EE 0%, #A855F7 50%, #6366F1 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            ">sélectionnés</span>
          </h1>
          <p class="text-zinc-400 text-lg">
            Une sélection volontairement réduite de projets représentatifs de ma manière de travailler.
          </p>
        </div>

        <!-- Grille de projets avec infinite scroll -->
        <div v-if="displayedProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard 
            v-for="(project, index) in displayedProjects" 
            :key="project.slug" 
            :project="project"
            :style="{ animationDelay: `${(index % 6) * 0.1}s` }"
            class="project-card-enter"
          />
        </div>

        <!-- Placeholder si pas de projets -->
        <div v-else class="text-center py-16">
          <ProjectsPlaceholder />
        </div>

        <!-- Observer target pour infinite scroll -->
        <div v-if="hasMore" ref="observerTarget" class="py-12 flex justify-center">
          <div v-if="isLoading" class="flex flex-col items-center gap-4">
            <div class="w-12 h-12 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
            <p class="text-zinc-400 text-sm">Chargement des projets...</p>
          </div>
        </div>

        <!-- Message de fin -->
        <div v-else-if="displayedProjects.length > 0" class="text-center py-12">
          <p class="text-zinc-500 text-sm">Tous les projets ont été chargés</p>
        </div>

        <!-- Stats rapides -->
        <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 bg-zinc-900 border border-zinc-700 text-center hover:border-cyan-400/30 transition-all duration-300">
            <div class="text-4xl font-bold text-cyan-400 mb-2">{{ projects.length }}</div>
            <div class="text-zinc-400">Projets</div>
          </div>
          <div class="p-6 bg-zinc-900 border border-zinc-700 text-center hover:border-purple-400/30 transition-all duration-300">
            <div class="text-4xl font-bold text-purple-400 mb-2">{{ realTechnologies.length }}</div>
            <div class="text-zinc-400">Technologies</div>
          </div>
        </div>

        <!-- Techno -->
        <div class="mt-12 p-8 bg-zinc-900 border border-zinc-700">
          <h2 class="text-2xl font-display font-light mb-6 text-zinc-200">Technologies utilisées</h2>
          <div class="flex flex-wrap gap-3">
            <span 
              v-for="tech in realTechnologies" 
              :key="tech"
              class="px-4 py-2 bg-zinc-800 text-zinc-300 text-sm border border-zinc-700 
                     hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 
                     transition-all duration-300 cursor-default"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useProfile } from '../composables/useProfile'
import { useInfiniteScroll } from '../composables/useInfiniteScroll'
import { projects, getAllTags } from '../data/projects'
import ProjectCard from '../components/ProjectCard.vue'
import ProjectsPlaceholder from '../components/ProjectsPlaceholder.vue'
import ThreeBackground from '../components/ThreeBackground.vue'

const { profile } = useProfile()

// Gérer les projets avec infinite scroll
const allProjects = ref([...projects])
const displayedProjects = ref([])
const currentPage = ref(0)
const projectsPerPage = 6 // Charger tous les projets d'un coup vu que vous en avez 3

const loadMoreProjects = async () => {
  // Simuler un délai de chargement
  await new Promise(resolve => setTimeout(resolve, 800))
  
  const start = currentPage.value * projectsPerPage
  const end = start + projectsPerPage
  const newProjects = allProjects.value.slice(start, end)
  
  if (newProjects.length > 0) {
    displayedProjects.value.push(...newProjects)
    currentPage.value++
    return true
  }
  
  return false // Plus de projets
}

const { observerTarget, isLoading, hasMore } = useInfiniteScroll(
  loadMoreProjects,
  { threshold: 0.5, rootMargin: '200px' }
)

// Charger les premiers projets
loadMoreProjects()

// Filtrer uniquement les vraies technologies
const realTechnologies = computed(() => {
  const allTags = getAllTags()
  const techKeywords = [
    'vue', 'nuxt', 'react', 'angular', 'javascript', 'typescript', 'node', 
    'python', 'php', 'java', 'css', 'html', 'tailwind', 'bootstrap',
    'supabase', 'firebase', 'mongodb', 'postgresql', 'mysql', 'redis',
    'express', 'fastify', 'django', 'flask', 'laravel',
    'git', 'docker', 'kubernetes', 'aws', 'vercel', 'netlify',
    'responsive', 'design'
  ]
  
  return allTags.filter(tag => {
    const tagLower = tag.toLowerCase()
    return techKeywords.some(keyword => tagLower.includes(keyword))
  })
})
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-card-enter {
  animation: fadeInUp 0.6s ease-out forwards;
}
</style>