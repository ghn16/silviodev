<template>
  <div class="portfolio-home" @wheel.passive="handleWheel">

    <!-- Curseur custom -->
    <div class="custom-cursor" :style="{ transform: `translate(${cursor.x - 10}px, ${cursor.y - 10}px)` }"></div>

    <!-- Overlay bruit de fond -->
    <div class="noise-overlay"></div>

    <!-- Tunnel 3D -->
    <TunnelBackground :section-index="currentSection" :scroll-intensity="scrollIntensity" />

    <!-- Nav latérale - indicateurs de section -->
    <nav class="side-nav">
      <div
        v-for="(_, i) in sections"
        :key="i"
        class="nav-step"
        :class="{ active: i <= currentSection }"
        @click="goToSection(i)"
      >
        <div class="nav-fill"></div>
      </div>
    </nav>

    <!-- Label section courante -->
    <div class="section-label">
      <span>{{ String(currentSection + 1).padStart(2, '0') }} / {{ String(sections.length).padStart(2, '0') }}</span>
    </div>

    <!-- Sections de contenu -->
    <div class="sections-wrapper">

      <!-- Section 0 : INTRO / Profil -->
      <section class="content-section" :class="{ active: currentSection === 0 }">
        <div class="section-inner hero-layout">

          <!-- Colonne gauche -->
          <div class="hero-left">
            <p class="eyebrow">Portfolio Adaptatif</p>
            <h1 class="mega-title">
              <span class="line">SILVIO</span>
              <span class="line accent-grad">GBÉHOUENOU</span>
            </h1>
            <p class="subtitle">Développeur web · Interfaces modernes · Expériences mémorables</p>
            <div class="profile-grid">
              <button
                v-for="profile in profiles"
                :key="profile.id"
                class="profile-btn"
                :class="`profile-${profile.id}`"
                @click="selectProfile(profile.id)"
              >
                <span class="profile-label">{{ profile.label }}</span>
                <span class="profile-desc">{{ profile.desc }}</span>
                <svg class="profile-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Colonne droite : photo tilt 3D -->
          <div class="hero-right" @mousemove="handlePhotoTilt" @mouseleave="resetPhotoTilt">
            <div class="photo-wrapper" :style="photoTiltStyle">
              <div class="photo-glow"></div>
              <div class="photo-frame"></div>
              <img src="/silvio.jpeg" alt="Silvio Gbehouenou" class="photo-img" />
              <div class="photo-overlay"></div>
              <div class="photo-badge">
                <span class="badge-dot"></span>
                <span>Disponible</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- Section 1 : À PROPOS -->
      <section class="content-section" :class="{ active: currentSection === 1 }">
        <div class="section-inner">
          <p class="eyebrow">Section 02 · À propos</p>
          <h2 class="big-title">QUI<br>SUIS-JE</h2>
          <div class="about-content">
            <p class="about-text">
              Je suis <strong>Silvio Gbehouenou</strong>, développeur web spécialisé dans la création
              d'interfaces modernes et d'applications web claires et fonctionnelles.
            </p>
            <p class="about-sub">
              J'aide les porteurs de projets et les startups à transformer leurs idées
              en produits web concrets, avec une attention particulière à l'expérience utilisateur.
            </p>
            <div class="stack-chips">
              <span v-for="tech in stack" :key="tech" class="chip">{{ tech }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2 : PROJETS -->
      <section class="content-section" :class="{ active: currentSection === 2 }">
        <div class="section-inner">
          <p class="eyebrow">Section 03 · Réalisations</p>
          <h2 class="big-title">MES<br>PROJETS</h2>
          <div class="projects-grid">
            <div
              v-for="project in featuredProjects"
              :key="project.slug"
              class="project-card"
              @click="goToProject(project.slug)"
            >
              <div class="project-year">{{ project.year }}</div>
              <h3 class="project-title">{{ project.title }}</h3>
              <div class="project-tags">
                <span v-for="tag in project.tags.slice(0, 3)" :key="tag" class="tag">{{ tag }}</span>
              </div>
              <svg class="project-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </div>
          </div>
          <router-link to="/projects" class="see-all-link">
            Voir tous les projets →
          </router-link>
        </div>
      </section>

      <!-- Section 3 : CONTACT -->
      <section class="content-section" :class="{ active: currentSection === 3 }">
        <div class="section-inner">
          <p class="eyebrow">Section 04 · Contact</p>
          <h2 class="big-title">TRAVAIL<br>LONS</h2>
          <p class="contact-tagline">Vous avez un projet ? Parlons-en.</p>

          <div class="contact-links">
            <a :href="mailtoLink" class="contact-item">
              <span class="contact-type">Email</span>
              <span class="contact-value">gbehouenousilvio@gmail.com</span>
            </a>
            <a :href="contact.github" target="_blank" class="contact-item">
              <span class="contact-type">GitHub</span>
              <span class="contact-value">ghn16</span>
            </a>
            <a :href="contact.linkedin" target="_blank" class="contact-item">
              <span class="contact-type">LinkedIn</span>
              <span class="contact-value">silvio-gbehouenou</span>
            </a>
          </div>

          <a :href="contact.cvPath" :download="contact.cvFilename" class="cv-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="btn-icon">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Télécharger le CV
          </a>
        </div>
      </section>

    </div>

    <!-- Indicateur de scroll -->
    <div class="scroll-hint" :class="{ hidden: currentSection > 0 }">
      <div class="mouse-icon">
        <div class="mouse-dot"></div>
      </div>
      <span>Scrollez pour naviguer</span>
    </div>

    <!-- Overlay de transition -->
    <TransitionOverlay />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import TunnelBackground from '../components/TunnelBackground.vue'
import TransitionOverlay from '../components/TransitionOverlay.vue'
import { useProfile } from '../composables/useProfile'
import { projects } from '../data/projects'
import { contactInfo as contact } from '../data/contact'

const router = useRouter()
const { setProfile } = useProfile()

const currentSection = ref(0)
const scrollIntensity = ref(0)
const isAnimating = ref(false)
const cursor = ref({ x: 0, y: 0 })

const sections = [0, 1, 2, 3]

const profiles = [
  { id: 'recruiter', label: 'Recruteur', desc: 'Compétences & techno' },
  { id: 'client', label: 'Client', desc: 'Projets & collaboration' },
  { id: 'developer', label: 'Développeur', desc: 'Architecture & stack' },
  { id: 'curious', label: 'Explorer', desc: 'Découvrir le projet' }
]

const stack = ['Vue.js', 'Nuxt', 'JavaScript', 'Supabase', 'Tailwind CSS', 'Git', 'Vercel']

const featuredProjects = computed(() => projects.slice(0, 3))

const mailtoLink = computed(() => {
  const subject = encodeURIComponent(contact.emailSubject)
  const body = encodeURIComponent(contact.emailBody)
  return `mailto:${contact.email}?subject=${subject}&body=${body}`
})

function goToSection(index) {
  if (isAnimating.value || index === currentSection.value) return
  isAnimating.value = true
  currentSection.value = index
  setTimeout(() => { isAnimating.value = false }, 1200)
}

let lastScroll = 0
function handleWheel(e) {
  if (isAnimating.value) return
  const now = Date.now()
  if (now - lastScroll < 800) return
  lastScroll = now

  const direction = e.deltaY > 0 ? 1 : -1
  const next = Math.max(0, Math.min(currentSection.value + direction, sections.length - 1))
  if (next !== currentSection.value) {
    goToSection(next)
  }
}

function handleMouseMove(e) {
  cursor.value = { x: e.clientX, y: e.clientY }
}

// Touch support
let touchStartY = 0
function handleTouchStart(e) {
  touchStartY = e.touches[0].clientY
}
function handleTouchEnd(e) {
  const delta = touchStartY - e.changedTouches[0].clientY
  if (Math.abs(delta) > 50) {
    const direction = delta > 0 ? 1 : -1
    const next = Math.max(0, Math.min(currentSection.value + direction, sections.length - 1))
    if (next !== currentSection.value) goToSection(next)
  }
}

function selectProfile(profileId) {
  setProfile(profileId)
}

// Tilt 3D photo
const photoTilt = ref({ rotateX: 0, rotateY: 0, scale: 1 })

const photoTiltStyle = computed(() => ({
  transform: `perspective(800px) rotateX(${photoTilt.value.rotateX}deg) rotateY(${photoTilt.value.rotateY}deg) scale(${photoTilt.value.scale})`,
  transition: 'transform 0.15s ease-out'
}))

function handlePhotoTilt(e) {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5
  photoTilt.value = { rotateX: -y * 18, rotateY: x * 18, scale: 1.04 }
}

function resetPhotoTilt() {
  photoTilt.value = { rotateX: 0, rotateY: 0, scale: 1 }
}

function goToProject(slug) {
  router.push(`/projects/${slug}`)
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('touchstart', handleTouchStart, { passive: true })
  document.addEventListener('touchend', handleTouchEnd, { passive: true })
})

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('touchstart', handleTouchStart)
  document.removeEventListener('touchend', handleTouchEnd)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=DM+Sans:wght@200;300;400&display=swap');

/* ===== RESET & BASE ===== */
.portfolio-home {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #000;
  color: #fff;
  cursor: none;
  font-family: 'DM Sans', sans-serif;
}

/* ===== CURSEUR ===== */
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: transform 0.1s ease;
}

/* ===== BRUIT ===== */
.noise-overlay {
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  opacity: 0.04;
  pointer-events: none;
  z-index: 5;
}

/* ===== NAV LATÉRALE ===== */
.side-nav {
  position: fixed;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 100;
}

.nav-step {
  width: 2px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  position: relative;
  cursor: pointer;
  transition: background 0.3s;
}

.nav-step:hover {
  background: rgba(255, 255, 255, 0.2);
}

.nav-fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background: #fff;
  transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-step.active .nav-fill {
  height: 100%;
}

/* ===== LABEL SECTION ===== */
.section-label {
  position: fixed;
  bottom: 40px;
  left: 40px;
  font-size: 10px;
  letter-spacing: 4px;
  text-transform: uppercase;
  opacity: 0.35;
  z-index: 100;
  font-family: 'DM Sans', sans-serif;
}

/* ===== SECTIONS ===== */
.sections-wrapper {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100vh;
}

.content-section {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 max(60px, 6vw);
  opacity: 0;
  pointer-events: none;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.content-section.active {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.section-inner {
  max-width: 100%;
  width: 100%;
}

/* ===== TYPOGRAPHIE ===== */
.eyebrow {
  font-size: 10px;
  letter-spacing: 5px;
  text-transform: uppercase;
  opacity: 0.35;
  margin-bottom: 24px;
  font-family: 'DM Sans', sans-serif;
}

.mega-title {
  font-family: 'Syncopate', sans-serif;
  font-size: clamp(1.8rem, 5.5vw, 5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 0.9;
  margin-bottom: 24px;
  white-space: nowrap;
  font-size: clamp(1.2rem, 3.2vw, 3.5rem);
}

.mega-title .line {
  display: block;
}

.big-title {
  font-family: 'Syncopate', sans-serif;
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 0.85;
  margin-bottom: 32px;
  background: linear-gradient(to bottom, #fff, rgba(255, 255, 255, 0.25));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.accent-grad {
  background: linear-gradient(135deg, #22d3ee, #a855f7, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  color: rgba(255, 255, 255, 0.45);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 56px;
  font-weight: 300;
}

/* ===== PROFILS ===== */
.profile-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  max-width: 640px;
}

.profile-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  position: relative;
  overflow: hidden;
}

.profile-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s;
}

.profile-recruiter::before { background: linear-gradient(135deg, rgba(34,211,238,0.1), transparent); }
.profile-client::before { background: linear-gradient(135deg, rgba(168,85,247,0.1), transparent); }
.profile-developer::before { background: linear-gradient(135deg, rgba(99,102,241,0.1), transparent); }
.profile-curious::before { background: linear-gradient(135deg, rgba(139,92,246,0.1), transparent); }

.profile-btn:hover::before { opacity: 1; }
.profile-btn:hover { border-color: rgba(255, 255, 255, 0.2); transform: translateX(4px); }

.profile-btn:hover .profile-recruiter { border-color: rgba(34,211,238,0.4); }

.profile-label {
  display: block;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.profile-desc {
  display: block;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.35);
  letter-spacing: 1px;
}

.profile-arrow {
  width: 16px;
  height: 16px;
  opacity: 0.4;
  flex-shrink: 0;
  transition: transform 0.3s, opacity 0.3s;
}

.profile-btn:hover .profile-arrow {
  transform: translateX(4px);
  opacity: 0.8;
}

/* ===== ABOUT ===== */
.about-content {
  max-width: 580px;
}

.about-text {
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 16px;
  font-weight: 300;
}

.about-text strong {
  color: #fff;
  font-weight: 400;
}

.about-sub {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 32px;
  font-weight: 300;
}

.stack-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 6px 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.2s;
}

.chip:hover {
  border-color: rgba(255, 255, 255, 0.3);
  color: #fff;
}

/* ===== PROJETS ===== */
.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 32px;
}

.project-card {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  cursor: pointer;
  transition: all 0.3s;
}

.project-card:hover {
  padding-left: 16px;
  border-bottom-color: rgba(255, 255, 255, 0.2);
}

.project-year {
  font-size: 10px;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.25);
  min-width: 40px;
}

.project-title {
  font-size: clamp(0.875rem, 1.5vw, 1.05rem);
  font-weight: 300;
  flex: 1;
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.2s;
}

.project-card:hover .project-title { color: #fff; }

.project-tags {
  display: flex;
  gap: 6px;
}

.tag {
  font-size: 9px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 3px 8px;
}

.project-arrow {
  width: 16px;
  height: 16px;
  opacity: 0;
  color: rgba(255, 255, 255, 0.6);
  transition: opacity 0.3s, transform 0.3s;
  flex-shrink: 0;
}

.project-card:hover .project-arrow {
  opacity: 1;
  transform: translate(2px, -2px);
}

.see-all-link {
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  transition: color 0.2s;
}

.see-all-link:hover { color: #fff; }

/* ===== CONTACT ===== */
.contact-tagline {
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: 48px;
  font-weight: 300;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 48px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;
}

.contact-item:hover {
  padding-left: 16px;
  border-bottom-color: rgba(255, 255, 255, 0.2);
}

.contact-type {
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.3);
  min-width: 80px;
}

.contact-value {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.2s;
}

.contact-item:hover .contact-value { color: #fff; }

.cv-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  text-decoration: none;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  transition: all 0.3s;
}

.cv-btn:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.5);
}

.btn-icon {
  width: 18px;
  height: 18px;
}

/* ===== SCROLL HINT ===== */
.scroll-hint {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  opacity: 0.4;
  z-index: 100;
  transition: opacity 0.5s;
  pointer-events: none;
}

.scroll-hint.hidden { opacity: 0; }

.mouse-icon {
  width: 20px;
  height: 34px;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  position: relative;
}

.mouse-dot {
  width: 3px;
  height: 3px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 7px;
  left: 50%;
  transform: translateX(-50%);
  animation: scrollDot 2s infinite;
}

@keyframes scrollDot {
  0% { transform: translateX(-50%) translateY(0); opacity: 1; }
  100% { transform: translateX(-50%) translateY(14px); opacity: 0; }
}

.scroll-hint span {
  font-size: 8px;
  letter-spacing: 3px;
  text-transform: uppercase;
}


/* ===== HERO LAYOUT 2 COLONNES ===== */
.hero-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 48px;
  align-items: center;
  max-width: 1200px;
  width: 100%;
}

.hero-left {
  display: flex;
  flex-direction: column;
}

.hero-right {
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}

/* ===== PHOTO TILT 3D ===== */
.photo-wrapper {
  position: relative;
  width: min(380px, 38vw);
  height: min(520px, 52vw);
  cursor: none;
  will-change: transform;
}

.photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  filter: grayscale(20%) contrast(1.05);
  transition: filter 0.3s;
}

.hero-right:hover .photo-img {
  filter: grayscale(0%) contrast(1.1);
}

.photo-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(ellipse at center, rgba(34,211,238,0.15) 0%, rgba(168,85,247,0.1) 50%, transparent 70%);
  pointer-events: none;
  z-index: -1;
  animation: glowPulse 3s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
}

.photo-frame {
  position: absolute;
  inset: -1px;
  border: 1px solid rgba(255,255,255,0.1);
  pointer-events: none;
  z-index: 2;
}

.photo-frame::before {
  content: '';
  position: absolute;
  top: -8px;
  left: -8px;
  width: 24px;
  height: 24px;
  border-top: 1px solid rgba(34,211,238,0.6);
  border-left: 1px solid rgba(34,211,238,0.6);
}

.photo-frame::after {
  content: '';
  position: absolute;
  bottom: -8px;
  right: -8px;
  width: 24px;
  height: 24px;
  border-bottom: 1px solid rgba(168,85,247,0.6);
  border-right: 1px solid rgba(168,85,247,0.6);
}

.photo-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
  pointer-events: none;
  z-index: 1;
}

.photo-badge {
  position: absolute;
  bottom: 16px;
  left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0,0,0,0.6);
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(8px);
  padding: 6px 14px;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.8);
  z-index: 3;
}

.badge-dot {
  width: 6px;
  height: 6px;
  background: #22d3ee;
  border-radius: 50%;
  animation: dotPulse 2s ease-in-out infinite;
}

@keyframes dotPulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(34,211,238,0.4); }
  50% { opacity: 0.7; box-shadow: 0 0 0 4px rgba(34,211,238,0); }
}
/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .content-section { padding: 0 20px; }
  .side-nav { left: 12px; gap: 16px; }
  .side-nav .nav-step { height: 28px; }
  .section-label { left: 16px; bottom: 20px; font-size: 9px; }
  .project-tags { display: none; }

  /* Hero mobile : colonne unique, photo en haut */
  .hero-layout {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 24px;
    align-items: start;
    padding-top: 16px;
  }

  /* Photo en premier (row 1) */
  .hero-right {
    order: -1;
    display: flex;
    justify-content: center;
  }

  .photo-wrapper {
    width: 140px;
    height: 180px;
  }

  /* Nom + contenu en dessous */
  .hero-left { order: 1; }

  .mega-title {
    font-size: clamp(1.6rem, 8vw, 2.4rem);
    white-space: nowrap;
  }

  .subtitle {
    font-size: 9px;
    letter-spacing: 1.5px;
    margin-bottom: 24px;
  }

  .profile-grid {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .profile-btn { padding: 14px 16px; }
  .profile-label { font-size: 12px; }
}
</style>