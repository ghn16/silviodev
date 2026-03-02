<template>
  <transition name="overlay" @enter="onEnter" @leave="onLeave">
    <div v-if="isTransitioning" class="transition-overlay" ref="overlayEl">

      <!-- Lignes de scan horizontales -->
      <div class="scan-lines"></div>

      <!-- Contenu central -->
      <div class="overlay-center">
        <!-- Anneau tournant -->
        <div class="ring-outer">
          <div class="ring-inner"></div>
        </div>

        <!-- Texte glitch -->
        <div class="glitch-text" data-text="LOADING">LOADING</div>

        <!-- Barre de progression -->
        <div class="progress-bar">
          <div class="progress-fill" ref="progressEl"></div>
        </div>
      </div>

      <!-- Coins décoratifs -->
      <div class="corner corner-tl"></div>
      <div class="corner corner-tr"></div>
      <div class="corner corner-bl"></div>
      <div class="corner corner-br"></div>

      <!-- Noise -->
      <div class="noise"></div>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { usePageTransition } from '../composables/usePageTransition'

const route = useRoute()
const { isTransitioning, startTransition } = usePageTransition()
const progressEl = ref(null)

watch(() => route.path, () => {
  startTransition()
})

function onEnter(el) {
  // Animer la barre de progression
  if (progressEl.value) {
    progressEl.value.style.width = '0%'
    setTimeout(() => {
      if (progressEl.value) progressEl.value.style.width = '100%'
    }, 50)
  }
}

function onLeave(el) {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap');

/* ===== OVERLAY BASE ===== */
.transition-overlay {
  position: fixed;
  inset: 0;
  background: #000;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* ===== TRANSITIONS ENTER / LEAVE ===== */
.overlay-enter-active {
  animation: curtainDown 0.45s cubic-bezier(0.76, 0, 0.24, 1) forwards;
}

.overlay-leave-active {
  animation: curtainUp 0.45s cubic-bezier(0.76, 0, 0.24, 1) forwards;
  animation-delay: 0.1s;
}

@keyframes curtainDown {
  from { clip-path: inset(0 0 100% 0); }
  to   { clip-path: inset(0 0 0% 0); }
}

@keyframes curtainUp {
  from { clip-path: inset(0% 0 0 0); }
  to   { clip-path: inset(100% 0 0 0); }
}

/* ===== SCAN LINES ===== */
.scan-lines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(255, 255, 255, 0.015) 2px,
    rgba(255, 255, 255, 0.015) 4px
  );
  pointer-events: none;
  z-index: 1;
}

/* ===== NOISE ===== */
.noise {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  opacity: 0.06;
  pointer-events: none;
  z-index: 1;
}

/* ===== CENTRE ===== */
.overlay-center {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}

/* ===== ANNEAU ===== */
.ring-outer {
  width: 64px;
  height: 64px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: rotateSlow 4s linear infinite;
}

.ring-inner {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1.5px solid transparent;
  border-top-color: #22d3ee;
  border-right-color: rgba(168, 85, 247, 0.4);
  animation: rotateFast 0.8s linear infinite;
}

@keyframes rotateSlow {
  to { transform: rotate(360deg); }
}

@keyframes rotateFast {
  to { transform: rotate(360deg); }
}

/* ===== GLITCH TEXT ===== */
.glitch-text {
  font-family: 'Syncopate', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 8px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  position: relative;
  animation: glitchAnim 3s infinite;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-text::before {
  color: #22d3ee;
  clip-path: polygon(0 30%, 100% 30%, 100% 50%, 0 50%);
  animation: glitchTop 3s infinite;
  opacity: 0;
}

.glitch-text::after {
  color: #a855f7;
  clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%);
  animation: glitchBottom 3s infinite;
  opacity: 0;
}

@keyframes glitchAnim {
  0%, 90%, 100% { transform: translate(0); }
  91% { transform: translate(-2px, 1px); }
  93% { transform: translate(2px, -1px); }
  95% { transform: translate(-1px, 0); }
}

@keyframes glitchTop {
  0%, 89%, 100% { opacity: 0; transform: translate(0); }
  90% { opacity: 1; transform: translate(-3px, 0); }
  92% { opacity: 1; transform: translate(3px, 0); }
  94% { opacity: 0; }
}

@keyframes glitchBottom {
  0%, 91%, 100% { opacity: 0; transform: translate(0); }
  92% { opacity: 1; transform: translate(3px, 0); }
  94% { opacity: 1; transform: translate(-3px, 0); }
  96% { opacity: 0; }
}

/* ===== BARRE PROGRESSION ===== */
.progress-bar {
  width: 120px;
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #22d3ee, #a855f7);
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 8px rgba(34, 211, 238, 0.5);
}

/* ===== COINS ===== */
.corner {
  position: absolute;
  width: 20px;
  height: 20px;
  z-index: 5;
}

.corner-tl { top: 24px; left: 24px; border-top: 1px solid rgba(34,211,238,0.4); border-left: 1px solid rgba(34,211,238,0.4); }
.corner-tr { top: 24px; right: 24px; border-top: 1px solid rgba(168,85,247,0.4); border-right: 1px solid rgba(168,85,247,0.4); }
.corner-bl { bottom: 24px; left: 24px; border-bottom: 1px solid rgba(34,211,238,0.4); border-left: 1px solid rgba(34,211,238,0.4); }
.corner-br { bottom: 24px; right: 24px; border-bottom: 1px solid rgba(168,85,247,0.4); border-right: 1px solid rgba(168,85,247,0.4); }
</style>