<template>
  <div class="card block group cursor-pointer h-full flex flex-col">
    <!-- En-tête avec titre -->
    <div class="flex justify-between items-start mb-4">
      <h3 class="text-xl font-medium text-zinc-100 group-hover:text-cyan-400 transition-colors">
        {{ project.title }}
      </h3>
      <span class="text-sm text-zinc-500 px-2 py-1 bg-zinc-800 border border-zinc-700 rounded flex-shrink-0">
        {{ project.year }}
      </span>
    </div>
    
    <!-- Description avec hauteur fixe -->
    <p class="text-zinc-400 mb-6 leading-relaxed flex-grow line-clamp-3">
      {{ project.context }}
    </p>
    
    <!-- Tags -->
    <div class="flex flex-wrap gap-2 mb-6">
      <span 
        v-for="tag in project.tags" 
        :key="tag"
        class="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs border border-zinc-700 
               group-hover:border-cyan-400/30 group-hover:text-cyan-400
               transition-all duration-300"
      >
        {{ tag }}
      </span>
    </div>
    
    <!-- Liens d'action - toujours en bas -->
    <div class="flex gap-3 mt-auto">
      <!-- Lien Demo (prioritaire) -->
      <a 
        v-if="project.links.demo"
        :href="project.links.demo"
        target="_blank"
        rel="noopener noreferrer"
        @click.stop
        class="flex-1 flex items-center justify-center gap-2 px-4 py-2 
               bg-cyan-500/10 border border-cyan-500/30 text-cyan-400
               hover:bg-cyan-500/20 hover:border-cyan-500/60
               transition-all duration-300 group/btn"
      >
        <svg class="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        <span class="text-sm font-medium">Voir le site</span>
      </a>
      
      <!-- Lien vers détails (secondaire) -->
      <router-link 
        :to="`/projects/${project.slug}`"
        @click.stop
        class="flex items-center justify-center gap-2 px-4 py-2
               bg-zinc-800 border border-zinc-700 text-zinc-400
               hover:border-zinc-500 hover:text-zinc-200
               transition-all duration-300 group/btn"
      >
        <span class="text-sm">Détails</span>
        <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>