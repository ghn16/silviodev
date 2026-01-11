<template>
  <div class="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden" style="background: linear-gradient(135deg, #0B0F14 0%, #1a1625 100%);">
    <!-- Gradient multi-couleurs -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none" 
         style="background: 
           radial-gradient(ellipse 600px 400px at 15% 15%, rgba(34, 211, 238, 0.12) 0%, transparent 50%),
           radial-gradient(ellipse 500px 400px at 85% 20%, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
           radial-gradient(ellipse 600px 400px at 50% 80%, rgba(99, 102, 241, 0.06) 0%, transparent 50%);">
    </div>
    
    <div class="w-full max-w-[720px] lg:max-w-[860px] relative z-10">
      <!-- Hero Section avec présentation -->
      <div class="mb-12 sm:mb-16 lg:mb-20">
        <h1 class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-light leading-tight text-left mb-6 sm:mb-8">
          <span class="block text-zinc-50">
            Bienvenue.
          </span>
          <span class="block mt-2" style="color: #E5E7EB;">
            Ce portfolio s'adapte à 
            <span style="
              background: linear-gradient(135deg, #22D3EE 0%, #A855F7 50%, #6366F1 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            ">ton point de vue.</span>
          </span>
        </h1>
        
        <!-- Présentation Silvio -->
        <div class="mb-8 sm:mb-10 p-6 sm:p-8 bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm">
          <p class="text-zinc-200 text-lg sm:text-xl leading-relaxed mb-4">
            Je suis <span class="text-zinc-50 font-medium">Silvio Gbehouenou</span>, développeur web spécialisé dans la création d'interfaces modernes et d'applications web claires et fonctionnelles.
          </p>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">
            J'aide les porteurs de projets et les startups à transformer leurs idées en produits web concrets.
          </p>
        </div>

        <p class="text-left text-base sm:text-lg lg:text-xl leading-relaxed max-w-[600px]" style="color: #9CA3AF;">
          Le contenu change selon ce que tu viens chercher.
          <br class="hidden sm:block" />
          Choisis ton profil pour continuer.
        </p>
      </div>

      <!-- Boutons de sélection de profil -->
      <div class="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
        <ProfileSelector label="Recruteur" color="cyan" @select="setProfile('recruiter')" />
        <ProfileSelector label="Client" color="purple" @select="setProfile('client')" />
        <ProfileSelector label="Développeur" color="indigo" @select="setProfile('developer')" />
        <ProfileSelector label="Explorer" color="violet" @select="setProfile('curious')" />
      </div>

      <!-- Note sécurité -->
      <div class="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm" style="color: #6B7280;">
        <svg class="w-4 h-4 flex-shrink-0" style="color: #22D3EE;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <span>Aucun cookie. Le choix est stocké localement.</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProfile } from '../composables/useProfile'
import ProfileSelector from '../components/ProfileSelector.vue'

const { setProfile } = useProfile()
</script>