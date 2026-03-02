<template>
  <PageLayout>
    <DashboardHeader />

    <div class="page">
      <!-- Hero -->
      <div class="hero">
        <p class="eyebrow">Profil · Recruteur</p>
        <h1 class="page-title">
          Développeur web<br>
          <span class="grad-cyan">orienté produit & architecture.</span>
        </h1>
        <p class="page-sub">
          Je conçois et développe des applications web modernes, avec une attention
          particulière à la clarté du code, à la maintenabilité et à l'utilité réelle du produit.
        </p>
      </div>

      <!-- À propos -->
      <section class="section">
        <h2 class="section-label">À propos</h2>
        <div class="card">
          <p class="card-text">
            Développeur web formé au front-end et aux bases du back-end, je m'intéresse particulièrement
            à la création d'interfaces claires, accessibles et bien structurées.
          </p>
          <p class="card-text">
            Je travaille principalement avec JavaScript et Vue.js, mais je sais aussi concevoir des projets
            complets allant de l'intégration UI à la logique applicative, y compris des interfaces
            d'administration et des projets e-commerce.
          </p>
          <p class="card-text muted">
            À travers mes projets personnels, je cherche aussi à créer des produits ayant du sens,
            au-delà de l'aspect purement technique.
          </p>
        </div>
      </section>

      <!-- Ce que je fais -->
      <section class="section">
        <h2 class="section-label">Ce que je fais</h2>
        <ul class="list">
          <li v-for="item in skills" :key="item" class="list-item">
            <span class="dash">—</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </section>

      <!-- Stack -->
      <section class="section">
        <h2 class="section-label">Stack</h2>
        <div class="chips">
          <span v-for="tech in stack" :key="tech" class="chip">{{ tech }}</span>
        </div>
      </section>

      <!-- CTA -->
      <div class="cta-row">
        <router-link to="/projects" class="cta-btn">
          <svg class="ico" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
          </svg>
          Projets sélectionnés
        </router-link>
        <a :href="cvPath" :download="cvFilename" class="cta-btn">
          <svg class="ico" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          Télécharger le CV
        </a>
        <a :href="mailtoLink" class="cta-btn accent">
          <svg class="ico" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Me contacter
        </a>
      </div>
    </div>
  </PageLayout>
</template>

<script setup>
import { computed } from 'vue'
import PageLayout from '../components/PageLayout.vue'
import DashboardHeader from '../components/DashboardHeader.vue'
import { contactInfo as contact } from '../data/contact'

const skills = [
  'Applications web modernes (Vue / Nuxt)',
  'Architectures claires et maintenables',
  'Interfaces sobres et efficaces',
  'Collaboration avec des équipes produit ou techniques'
]
const stack = ['Vue.js', 'Nuxt', 'JavaScript', 'Supabase', 'PostgreSQL', 'Git', 'Vercel']
const cvPath = contact.cvPath
const cvFilename = contact.cvFilename
const mailtoLink = computed(() =>
  `mailto:${contact.email}?subject=${encodeURIComponent(contact.emailSubject)}&body=${encodeURIComponent(contact.emailBody)}`
)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&family=DM+Sans:wght@200;300;400&display=swap');

.page {
  max-width: 860px;
  margin: 0 auto;
  padding: 80px 48px 120px;
  display: flex;
  flex-direction: column;
  gap: 72px;
}

/* Hero */
.hero { display: flex; flex-direction: column; gap: 24px; }

.eyebrow {
  font-family: 'DM Sans', sans-serif;
  font-size: 10px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.25);
}

.page-title {
  font-family: 'Syncopate', sans-serif;
  font-size: clamp(2rem, 4.5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #fff;
}

.grad-cyan {
  background: linear-gradient(135deg, #22d3ee, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(1rem, 1.6vw, 1.1rem);
  font-weight: 300;
  line-height: 1.85;
  color: rgba(255,255,255,0.4);
  max-width: 580px;
}

/* Sections */
.section { display: flex; flex-direction: column; gap: 24px; }

.section-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 10px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.2);
}

/* Card */
.card {
  background: rgba(255,255,255,0.025);
  border: 1px solid rgba(255,255,255,0.07);
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: border-color 0.3s;
}
.card:hover { border-color: rgba(255,255,255,0.12); }

.card-text {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(0.95rem, 1.4vw, 1.05rem);
  font-weight: 300;
  line-height: 1.85;
  color: rgba(255,255,255,0.6);
}
.card-text.muted { color: rgba(255,255,255,0.3); }

/* Liste */
.list { display: flex; flex-direction: column; gap: 20px; list-style: none; padding: 0; margin: 0; }

.list-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(0.95rem, 1.4vw, 1.05rem);
  font-weight: 300;
  color: rgba(255,255,255,0.55);
  transition: color 0.2s;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.list-item:last-child { border-bottom: none; padding-bottom: 0; }
.list-item:hover { color: rgba(255,255,255,0.9); }
.dash { color: #22d3ee; flex-shrink: 0; }

/* Chips */
.chips { display: flex; flex-wrap: wrap; gap: 10px; }

.chip {
  font-family: 'DM Sans', sans-serif;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 8px 18px;
  border: 1px solid rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.4);
  transition: all 0.25s;
  cursor: default;
}
.chip:hover { border-color: rgba(34,211,238,0.4); color: #22d3ee; }

/* CTA */
.cta-row { display: flex; flex-wrap: wrap; gap: 14px; }

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.65);
  text-decoration: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  transition: all 0.3s;
  cursor: none;
}
.cta-btn:hover { border-color: rgba(255,255,255,0.35); color: #fff; background: rgba(255,255,255,0.04); }
.cta-btn.accent { border-color: rgba(34,211,238,0.3); color: #22d3ee; }
.cta-btn.accent:hover { border-color: #22d3ee; background: rgba(34,211,238,0.05); }
.ico { width: 16px; height: 16px; flex-shrink: 0; }

@media (max-width: 768px) {
  .page { padding: 48px 24px 80px; gap: 48px; }
  .card { padding: 28px; }
}
</style>