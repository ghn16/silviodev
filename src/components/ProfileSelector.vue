<template>
  <button 
    @click="handleSelect" 
    class="group w-full px-6 sm:px-8 py-5 sm:py-6 lg:py-7 
           text-left flex items-center justify-between
           transition-all duration-300 ease-out
           hover:scale-[1.01] active:scale-[0.99]
           focus:outline-none relative overflow-hidden"
    :style="buttonStyle"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Bordure gauche colorée -->
    <div 
      class="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300"
      :style="{ 
        backgroundColor: colors.accent,
        width: isHovered ? '4px' : '3px',
        opacity: isHovered ? '1' : '0.8'
      }"
    ></div>
    
    <!-- Gradient animé au hover -->
    <div 
      class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      :style="gradientStyle"
    ></div>
    
    <span class="text-lg sm:text-xl lg:text-2xl font-medium transition-colors duration-300 relative z-10"
          style="color: #E5E7EB;">
      {{ label }}
    </span>
    
    <svg 
      class="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 flex-shrink-0 relative z-10"
      :class="isHovered ? 'translate-x-2' : ''"
      :style="{ color: colors.accent }"
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'cyan'
  }
})

const emit = defineEmits(['select'])
const isHovered = ref(false)

const colorMap = {
  cyan: {
    accent: '#22D3EE',
    border: 'rgba(34, 211, 238, 0.5)',
    shadow: 'rgba(34, 211, 238, 0.3)',
    gradient: 'linear-gradient(135deg, rgba(34, 211, 238, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)'
  },
  purple: {
    accent: '#A855F7',
    border: 'rgba(168, 85, 247, 0.5)',
    shadow: 'rgba(168, 85, 247, 0.3)',
    gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(147, 51, 234, 0.1) 100%)'
  },
  indigo: {
    accent: '#6366F1',
    border: 'rgba(99, 102, 241, 0.5)',
    shadow: 'rgba(99, 102, 241, 0.3)',
    gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(79, 70, 229, 0.1) 100%)'
  },
  violet: {
    accent: '#8B5CF6',
    border: 'rgba(139, 92, 246, 0.5)',
    shadow: 'rgba(139, 92, 246, 0.3)',
    gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(124, 58, 237, 0.1) 100%)'
  }
}

const colors = computed(() => colorMap[props.color])

const buttonStyle = computed(() => ({
  backgroundColor: '#111827',
  border: `1px solid ${isHovered.value ? colors.value.border : '#374151'}`,
  color: '#E5E7EB',
  boxShadow: isHovered.value ? `0 0 24px ${colors.value.shadow}, 0 4px 12px rgba(0, 0, 0, 0.3)` : 'none'
}))

const gradientStyle = computed(() => ({
  background: colors.value.gradient
}))

const handleSelect = () => {
  console.log(`Profil sélectionné : ${props.label}`)
  emit('select')
}
</script>

<style scoped>
button {
  position: relative;
}

button:hover {
  transform: translateY(-2px);
}

button:active {
  transform: translateY(0);
}

@media (max-width: 640px) {
  button {
    min-height: 64px;
  }
}

@media (min-width: 641px) {
  button {
    min-height: 72px;
  }
}

@media (min-width: 1024px) {
  button {
    min-height: 80px;
  }
}
</style>