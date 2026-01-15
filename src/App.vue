<template>
  <TransitionOverlay />
  <router-view v-slot="{ Component, route }">
    <transition
      :name="transitionName"
      mode="out-in"
      @before-leave="onBeforeLeave"
      @after-enter="onAfterEnter"
    >
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { usePageTransition } from './composables/usePageTransition'
import TransitionOverlay from './components/TransitionOverlay.vue'

const route = useRoute()
const { transitionName, startTransition, endTransition } = usePageTransition()

const onBeforeLeave = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const onAfterEnter = () => {
  endTransition()
}

// Choisir la transition selon la route
watch(
  () => route.path,
  (newPath) => {
    if (newPath.includes('/projects/') && !newPath.includes('/projects')) {
      startTransition('slide-up') // Détails d'un projet
    } else if (newPath.includes('/projects')) {
      startTransition('fade') // Liste des projets
    } else if (newPath === '/') {
      startTransition('zoom') // Page d'accueil
    } else {
      startTransition('scale') // Autres pages
    }
  },
  { immediate: false }
)
</script>

<style>
/* Transitions globales */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.scale-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

.zoom-enter-active,
.zoom-leave-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.zoom-enter-from {
  opacity: 0;
  transform: scale(0.85);
}

.zoom-leave-to {
  opacity: 0;
  transform: scale(1.15);
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(100%);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>