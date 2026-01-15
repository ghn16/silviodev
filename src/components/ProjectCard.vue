<template>
  <div 
    class="project-card-wrapper"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <div class="project-card" :style="cardStyle">
      <!-- Effet de glow qui suit la souris/doigt -->
      <div class="card-glow-effect" :style="glowStyle"></div>
      
      <div class="card-inner">
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
                   hover:bg-cyan-500/20 hover:border-cyan-500/60 hover:scale-105
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
                   hover:border-zinc-500 hover:text-zinc-200 hover:scale-105
                   transition-all duration-300 group/btn"
          >
            <span class="text-sm">Détails</span>
            <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const rotateX = ref(0)
const rotateY = ref(0)
const glowX = ref(50)
const glowY = ref(50)
const isHovering = ref(false)
const isMobile = ref(false)

onMounted(() => {
  // Détecter si on est sur mobile
  isMobile.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  
  // Sur mobile, ajouter un effet gyroscope si disponible
  if (isMobile.value && window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', handleDeviceOrientation)
  }
})

const handleMouseMove = (e) => {
  if (isMobile.value) return // Ignorer sur mobile
  
  isHovering.value = true
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  updateRotation(rect, x, y)
}

const handleMouseLeave = () => {
  if (isMobile.value) return
  resetRotation()
}

// Gestion du tactile
const handleTouchStart = (e) => {
  isHovering.value = true
}

const handleTouchMove = (e) => {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const touch = e.touches[0]
  const x = touch.clientX - rect.left
  const y = touch.clientY - rect.top
  
  updateRotation(rect, x, y)
}

const handleTouchEnd = () => {
  setTimeout(() => {
    resetRotation()
  }, 300)
}

// Gyroscope pour un effet encore plus cool sur mobile
const handleDeviceOrientation = (e) => {
  if (!isHovering.value) return
  
  const gamma = e.gamma // Inclinaison gauche-droite (-90 à 90)
  const beta = e.beta   // Inclinaison avant-arrière (-180 à 180)
  
  if (gamma !== null && beta !== null) {
    rotateY.value = (gamma / 90) * 10
    rotateX.value = ((beta - 90) / 90) * 10
  }
}

const updateRotation = (rect, x, y) => {
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  
  // Effet 3D (rotation plus prononcée pour être visible)
  rotateY.value = ((x - centerX) / centerX) * 15
  rotateX.value = ((centerY - y) / centerY) * 15
  
  // Position du glow
  glowX.value = (x / rect.width) * 100
  glowY.value = (y / rect.height) * 100
}

const resetRotation = () => {
  isHovering.value = false
  rotateX.value = 0
  rotateY.value = 0
  glowX.value = 50
  glowY.value = 50
}

const cardStyle = computed(() => {
  if (!isHovering.value) {
    return {
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
      transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
    }
  }
  
  return {
    transform: `perspective(1000px) rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg) scale(1.05)`,
    transition: 'transform 0.1s ease-out',
  }
})

const glowStyle = computed(() => ({
  background: `radial-gradient(circle 600px at ${glowX.value}% ${glowY.value}%, rgba(34, 211, 238, 0.4), transparent 40%)`,
  opacity: isHovering.value ? 1 : 0,
  transition: 'opacity 0.3s ease',
}))
</script>

<style scoped>
.project-card-wrapper {
  perspective: 1000px;
  cursor: pointer;
  height: 100%;
  -webkit-tap-highlight-color: transparent;
}

.project-card {
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(24, 24, 27, 0.95) 0%, rgba(39, 39, 42, 0.95) 100%);
  border: 1px solid #3f3f46;
  position: relative;
  transform-style: preserve-3d;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  touch-action: none;
}

.project-card:hover,
.project-card:active {
  border-color: rgba(34, 211, 238, 0.3);
  box-shadow: 0 20px 25px -5px rgba(34, 211, 238, 0.3), 0 10px 10px -5px rgba(34, 211, 238, 0.15);
}

.card-glow-effect {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  pointer-events: none;
  z-index: 0;
  border-radius: inherit;
}

.card-inner {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  height: 100%;
  transform: translateZ(30px);
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Amélioration pour mobile */
@media (hover: none) and (pointer: coarse) {
  .project-card {
    transition: all 0.3s ease !important;
  }
  
  .project-card:active {
    transform: scale(0.98);
  }
}
</style>