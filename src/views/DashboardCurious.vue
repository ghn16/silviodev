<template>
  <PageLayout>
    <DashboardHeader />
    <div class="page">
      <div class="hero">
        <p class="eyebrow">Profil · Explorer</p>
        <h1 class="page-title">Explorer le projet <span class="grad-violet">derrière le portfolio.</span></h1>
        <p class="page-sub">Ce site est conçu comme un projet à part entière. Il reflète ma manière de penser l'expérience utilisateur, la structure d'une application et l'adaptation du contenu selon le contexte.</p>
      </div>

      <section class="section">
        <h2 class="section-label">À propos de ce portfolio</h2>
        <ul class="list">
          <li v-for="m in meta" :key="m" class="list-item">
            <svg class="check" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7"/>
            </svg>
            <span>{{ m }}</span>
          </li>
        </ul>
      </section>

      <section class="section">
        <h2 class="section-label">Explorer les projets</h2>
        <router-link to="/projects" class="cta-full">
          <div class="cta-full-left">
            <svg class="ico" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
            </svg>
            Découvrir les réalisations concrètes
          </div>
          <svg class="ico" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"/>
          </svg>
        </router-link>
      </section>
    </div>
  </PageLayout>
</template>

<script setup>
import PageLayout from '../components/PageLayout.vue'
import DashboardHeader from '../components/DashboardHeader.vue'
const meta = [
  "Adapte son contenu selon le profil de l'utilisateur",
  'Tunnel 3D immersif avec navigation par scroll',
  'Construit avec Vue.js 3, Composition API et Tailwind CSS',
  'Stockage local du profil sans cookies ni tracking'
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&family=DM+Sans:wght@200;300;400&display=swap');
.page { max-width:860px;margin:0 auto;padding:80px 48px 120px;display:flex;flex-direction:column;gap:72px; }
.hero { display:flex;flex-direction:column;gap:24px; }
.eyebrow { font-family:'DM Sans',sans-serif;font-size:10px;letter-spacing:5px;text-transform:uppercase;color:rgba(255,255,255,0.25); }
.page-title { font-family:'Syncopate',sans-serif;font-size:clamp(2rem,4.5vw,4rem);font-weight:700;line-height:1.1;letter-spacing:-0.03em;color:#fff; }
.grad-violet { background:linear-gradient(135deg,#8b5cf6,#22d3ee);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text; }
.page-sub { font-family:'DM Sans',sans-serif;font-size:clamp(1rem,1.6vw,1.1rem);font-weight:300;line-height:1.85;color:rgba(255,255,255,0.4);max-width:580px; }
.section { display:flex;flex-direction:column;gap:24px; }
.section-label { font-family:'DM Sans',sans-serif;font-size:10px;letter-spacing:5px;text-transform:uppercase;color:rgba(255,255,255,0.2); }
.list { display:flex;flex-direction:column;list-style:none;padding:0;margin:0; }
.list-item { display:flex;align-items:flex-start;gap:20px;font-family:'DM Sans',sans-serif;font-size:clamp(0.95rem,1.4vw,1.05rem);font-weight:300;color:rgba(255,255,255,0.55);padding:20px 0;border-bottom:1px solid rgba(255,255,255,0.05); }
.list-item:last-child { border-bottom:none; }
.check { width:16px;height:16px;color:#8b5cf6;flex-shrink:0;margin-top:2px; }
.cta-full { display:flex;align-items:center;justify-content:space-between;padding:24px 32px;border:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.6);text-decoration:none;font-family:'DM Sans',sans-serif;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;transition:all 0.3s;cursor:none; }
.cta-full:hover { border-color:rgba(255,255,255,0.25);color:#fff;background:rgba(255,255,255,0.03); }
.cta-full-left { display:flex;align-items:center;gap:14px; }
.ico { width:16px;height:16px;flex-shrink:0; }
@media(max-width:768px){ .page { padding:48px 24px 80px;gap:48px; } }
</style>