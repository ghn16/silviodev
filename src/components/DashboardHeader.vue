<template>
  <div class="bg-dark-900 border-b border-dark-700 px-6 py-4 backdrop-blur-sm">
    <div class="max-w-5xl mx-auto flex justify-between items-center">
      <button 
        @click="handleReset"
        class="text-zinc-400 hover:text-accent-cyan text-sm transition-all duration-300 flex items-center gap-2 hover:-translate-x-1"
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Changer de profil
      </button>
      <span class="text-zinc-500 text-sm capitalize px-3 py-1 bg-dark-800 border border-dark-700 rounded-full">
        {{ profile }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { useProfile } from '../composables/useProfile'

const { profile, resetProfile } = useProfile()

const handleReset = () => {
  console.log('Retour à la sélection de profil')
  resetProfile()
}
</script>