<template>
  <transition name="overlay">
    <div v-if="isTransitioning" class="transition-overlay">
      <div class="overlay-content">
        <div class="loader">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { usePageTransition } from '../composables/usePageTransition'

const route = useRoute()
const { isTransitioning, startTransition } = usePageTransition()

watch(
  () => route.path,
  () => {
    startTransition()
  }
)
</script>

<style scoped>
.transition-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0B0F14 0%, #1a1625 100%);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay-enter-active {
  animation: slideInRight 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.overlay-leave-active {
  animation: slideOutLeft 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideOutLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.overlay-content {
  text-align: center;
}

.loader {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.dot {
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #22D3EE 0%, #A855F7 100%);
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out both;
}

.dot:nth-child(1) {
  animation-delay: -0.32s;
}

.dot:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>