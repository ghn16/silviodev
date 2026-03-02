<template>
  <PageLayout :back-link="profile ? `/dashboard/${profile}` : '/'" back-label="Retour">
    <div v-if="project" class="project-detail">
      <div class="page-eyebrow">{{ project.year }}</div>
      <h1 class="page-title">{{ project.title }}</h1>
      <div class="tags-row">
        <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>

      <div class="divider"></div>

      <div class="sections">
        <div class="detail-block">
          <h2 class="block-title">Contexte</h2>
          <p class="block-text">{{ project.context }}</p>
        </div>
        <div class="detail-block">
          <h2 class="block-title">Problème identifié</h2>
          <div class="card-accent"><p class="block-text">{{ project.problem }}</p></div>
        </div>
        <div class="detail-block">
          <h2 class="block-title">Solution mise en place</h2>
          <p class="block-text">{{ project.solution }}</p>
        </div>
        <div class="detail-block">
          <h2 class="block-title">Choix techniques</h2>
          <div class="card-neutral"><p class="block-text">{{ project.tech }}</p></div>
        </div>
        <div class="detail-block">
          <h2 class="block-title">Résultat</h2>
          <div class="card-cyan"><p class="block-text">{{ project.result }}</p></div>
        </div>
        <div class="detail-block">
          <h2 class="block-title">Limites & améliorations</h2>
          <p class="block-text muted">{{ project.limits }}</p>
        </div>
      </div>

      <!-- Liens -->
      <div v-if="project.links" class="cta-row">
        <a v-if="project.links.demo" :href="project.links.demo" target="_blank" class="cta-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          Voir le demo
        </a>
        <a v-if="project.links.github" :href="project.links.github" target="_blank" class="cta-btn cta-ghost">GitHub</a>
      </div>
    </div>

    <div v-else class="not-found">
      <p>Projet non trouvé.</p>
      <router-link to="/projects" class="cta-btn">Retour aux projets</router-link>
    </div>
  </PageLayout>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageLayout from '../components/PageLayout.vue'
import { useProfile } from '../composables/useProfile'
import { getProjectBySlug } from '../data/projects'
const route = useRoute()
const { profile } = useProfile()
const project = computed(() => getProjectBySlug(route.params.slug))
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=DM+Sans:wght@200;300;400&display=swap');
.project-detail{max-width:760px}
.page-eyebrow{font-size:10px;letter-spacing:5px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:20px}
.page-title{font-family:'Syncopate',sans-serif;font-size:clamp(1.5rem,4vw,3rem);font-weight:700;line-height:1.1;letter-spacing:-.02em;margin-bottom:24px;color:#fff}
.tags-row{display:flex;flex-wrap:wrap;gap:8px}
.tag{font-size:9px;letter-spacing:2px;text-transform:uppercase;padding:6px 14px;border:1px solid rgba(34,211,238,.2);color:rgba(34,211,238,.7)}
.divider{height:1px;background:rgba(255,255,255,.07);margin:40px 0}
.sections{display:flex;flex-direction:column;gap:40px}
.detail-block{}
.block-title{font-size:10px;letter-spacing:4px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:16px}
.block-text{font-size:15px;color:rgba(255,255,255,.65);line-height:1.85;font-weight:300;margin:0;font-family:'DM Sans',sans-serif}
.block-text.muted{color:rgba(255,255,255,.4)}
.card-accent{border:1px solid rgba(255,255,255,.06);border-left:2px solid rgba(99,102,241,.5);padding:20px 24px}
.card-neutral{border:1px solid rgba(255,255,255,.06);background:rgba(255,255,255,.02);padding:20px 24px}
.card-cyan{border:1px solid rgba(255,255,255,.06);border-left:2px solid rgba(34,211,238,.4);padding:20px 24px}
.cta-row{display:flex;flex-wrap:wrap;gap:12px;margin-top:48px}
.cta-btn{display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);color:#fff;text-decoration:none;font-size:11px;letter-spacing:2px;text-transform:uppercase;transition:all .25s;cursor:none;font-family:'DM Sans',sans-serif}
.cta-btn svg{width:15px;height:15px}
.cta-btn:hover{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.25)}
.cta-ghost{background:transparent}
.not-found{text-align:center;padding:80px 0;color:rgba(255,255,255,.4)}
.not-found p{margin-bottom:24px}
</style>