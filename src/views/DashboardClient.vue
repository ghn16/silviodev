<template>
  <PageLayout>
    <DashboardHeader />
    <div class="page">
      <div class="hero">
        <p class="eyebrow">Profil · Client</p>
        <h1 class="page-title">Transformer une idée en <span class="grad-purple">application utilisable.</span></h1>
        <p class="page-sub">Mon rôle est de traduire un besoin réel en solution technique fonctionnelle. Je privilégie les produits simples, compréhensibles et adaptés à leur contexte d'utilisation.</p>
      </div>

      <div class="two-col">
        <section class="section">
          <h2 class="section-label">Types de projets</h2>
          <ul class="list">
            <li v-for="t in types" :key="t" class="list-item"><span class="dash">—</span><span>{{ t }}</span></li>
          </ul>
        </section>
        <section class="section">
          <h2 class="section-label">Mon approche</h2>
          <ol class="list">
            <li v-for="(s,i) in steps" :key="s" class="list-item"><span class="dash num">{{ i+1 }}.</span><span>{{ s }}</span></li>
          </ol>
        </section>
      </div>

      <section class="section">
        <h2 class="section-label">Résultat attendu</h2>
        <div class="result-card">
          <p>Un produit stable, compréhensible et utilisable, pas une démonstration technique inutile.</p>
        </div>
      </section>

      <div class="cta-block">
        <h3 class="cta-heading">Vous avez un projet en tête ?</h3>
        <p class="cta-sub">Discutons de vos besoins et trouvons ensemble la meilleure solution technique.</p>
        <div class="cta-row">
          <a :href="mailtoLink" class="cta-btn accent">Discuter de mon projet</a>
          <router-link to="/projects" class="cta-btn">Voir mes réalisations</router-link>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<script setup>
import { computed } from 'vue'
import PageLayout from '../components/PageLayout.vue'
import DashboardHeader from '../components/DashboardHeader.vue'
import { contactInfo as contact } from '../data/contact'
const types = ['Application web sur mesure','MVP pour startup ou projet interne','Tableau de bord et outils métiers','Automatisation de processus']
const steps = ['Comprendre le besoin et le contexte','Proposer une solution réaliste','Développer de manière itérative','Livrer et ajuster']
const mailtoLink = computed(() => `mailto:${contact.email}?subject=${encodeURIComponent('Discussion projet')}`)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&family=DM+Sans:wght@200;300;400&display=swap');
.page { max-width:860px;margin:0 auto;padding:80px 48px 120px;display:flex;flex-direction:column;gap:72px; }
.hero { display:flex;flex-direction:column;gap:24px; }
.eyebrow { font-family:'DM Sans',sans-serif;font-size:10px;letter-spacing:5px;text-transform:uppercase;color:rgba(255,255,255,0.25); }
.page-title { font-family:'Syncopate',sans-serif;font-size:clamp(2rem,4.5vw,4rem);font-weight:700;line-height:1.1;letter-spacing:-0.03em;color:#fff; }
.grad-purple { background:linear-gradient(135deg,#a855f7,#6366f1);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text; }
.page-sub { font-family:'DM Sans',sans-serif;font-size:clamp(1rem,1.6vw,1.1rem);font-weight:300;line-height:1.85;color:rgba(255,255,255,0.4);max-width:580px; }
.two-col { display:grid;grid-template-columns:1fr 1fr;gap:48px; }
@media(max-width:640px){ .two-col { grid-template-columns:1fr;gap:48px; } }
.section { display:flex;flex-direction:column;gap:24px; }
.section-label { font-family:'DM Sans',sans-serif;font-size:10px;letter-spacing:5px;text-transform:uppercase;color:rgba(255,255,255,0.2); }
.list { display:flex;flex-direction:column;list-style:none;padding:0;margin:0; }
.list-item { display:flex;align-items:flex-start;gap:20px;font-family:'DM Sans',sans-serif;font-size:clamp(0.95rem,1.4vw,1.05rem);font-weight:300;color:rgba(255,255,255,0.55);transition:color 0.2s;padding:18px 0;border-bottom:1px solid rgba(255,255,255,0.05); }
.list-item:last-child { border-bottom:none; }
.list-item:hover { color:rgba(255,255,255,0.9); }
.dash { color:#a855f7;flex-shrink:0; }
.num { font-weight:400; }
.result-card { background:rgba(168,85,247,0.04);border:1px solid rgba(168,85,247,0.15);border-left:2px solid rgba(168,85,247,0.5);padding:40px;font-family:'DM Sans',sans-serif;font-size:clamp(1rem,1.6vw,1.15rem);font-weight:300;line-height:1.85;color:rgba(255,255,255,0.6); }
.cta-block { background:rgba(168,85,247,0.04);border:1px solid rgba(168,85,247,0.12);padding:48px; }
.cta-heading { font-family:'Syncopate',sans-serif;font-size:clamp(1.2rem,2.5vw,1.8rem);font-weight:700;color:#fff;margin-bottom:16px;letter-spacing:-0.02em; }
.cta-sub { font-family:'DM Sans',sans-serif;font-size:clamp(0.9rem,1.4vw,1rem);color:rgba(255,255,255,0.35);margin-bottom:32px;font-weight:300;line-height:1.7; }
.cta-row { display:flex;flex-wrap:wrap;gap:14px; }
.cta-btn { display:inline-flex;align-items:center;gap:12px;padding:16px 32px;border:1px solid rgba(255,255,255,0.12);color:rgba(255,255,255,0.65);text-decoration:none;font-family:'DM Sans',sans-serif;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;transition:all 0.3s;cursor:none; }
.cta-btn:hover { border-color:rgba(255,255,255,0.35);color:#fff;background:rgba(255,255,255,0.04); }
.cta-btn.accent { border-color:rgba(168,85,247,0.4);color:#a855f7; }
.cta-btn.accent:hover { border-color:#a855f7;background:rgba(168,85,247,0.06); }
@media(max-width:768px){ .page { padding:48px 24px 80px;gap:48px; } .cta-block { padding:32px; } }
</style>