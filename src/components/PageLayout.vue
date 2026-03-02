<template>
  <div class="page-layout">
    <div class="custom-cursor" :style="{ transform: `translate(${cursor.x - 10}px, ${cursor.y - 10}px)` }"></div>
    <div class="noise-overlay"></div>
    <TunnelBackground :section-index="colorIndex" :scroll-intensity="0" />

    <header class="page-header">
      <div class="header-inner">
        <router-link :to="backLink" class="back-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>{{ backLabel }}</span>
        </router-link>
        <router-link to="/" class="home-link">SG</router-link>
      </div>
    </header>

    <main class="page-content">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import TunnelBackground from './TunnelBackground.vue'
import { useProfile } from '../composables/useProfile'

defineProps({
  backLink: { type: String, default: '/' },
  backLabel: { type: String, default: 'Retour' }
})

const { profile } = useProfile()
const cursor = ref({ x: 0, y: 0 })

const colorIndex = computed(() => {
  const map = { recruiter: 0, client: 1, developer: 2, curious: 3 }
  return map[profile.value] ?? 0
})

function handleMouseMove(e) { cursor.value = { x: e.clientX, y: e.clientY } }
onMounted(() => document.addEventListener('mousemove', handleMouseMove))
onBeforeUnmount(() => document.removeEventListener('mousemove', handleMouseMove))
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=DM+Sans:wght@200;300;400&display=swap');

.page-layout {
  min-height: 100vh;
  background: #000;
  color: #fff;
  font-family: 'DM Sans', sans-serif;
  cursor: none;
  position: relative;
}

.custom-cursor {
  position: fixed; top: 0; left: 0;
  width: 20px; height: 20px;
  background: #fff; border-radius: 50%;
  pointer-events: none; z-index: 9999;
  mix-blend-mode: difference;
  transition: transform 0.1s ease;
}

.noise-overlay {
  position: fixed; inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  opacity: 0.03; pointer-events: none; z-index: 5;
}

.page-header {
  position: sticky; top: 0; z-index: 100;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(20px);
}

.header-inner {
  max-width: 1200px; margin: 0 auto;
  padding: 16px 40px;
  display: flex; align-items: center; justify-content: space-between;
}

.back-btn {
  display: flex; align-items: center; gap: 10px;
  color: rgba(255,255,255,0.45); text-decoration: none;
  font-size: 11px; letter-spacing: 3px; text-transform: uppercase;
  transition: all 0.25s;
}
.back-btn svg { width: 16px; height: 16px; transition: transform 0.25s; }
.back-btn:hover { color: #fff; }
.back-btn:hover svg { transform: translateX(-4px); }

.home-link {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px;
  border: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.5); text-decoration: none;
  font-family: 'Syncopate', sans-serif; font-size: 11px; font-weight: 700;
  transition: all 0.25s;
}
.home-link:hover { border-color: rgba(255,255,255,0.3); color: #fff; }

.page-content {
  position: relative; z-index: 10;
  max-width: 1200px; margin: 0 auto;
  padding: 60px 40px 80px;
}

@media (max-width: 768px) {
  .header-inner { padding: 14px 20px; }
  .page-content { padding: 40px 20px 60px; }
}
</style>