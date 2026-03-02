<template>
  <PageLayout back-link="/" back-label="Accueil">
    <div class="projects-page">
      <div class="page-eyebrow">Réalisations</div>
      <h1 class="page-title">Projets <span class="grad-multi">sélectionnés.</span></h1>
      <p class="page-intro">Une sélection volontairement réduite de projets représentatifs de ma manière de travailler.</p>

      <div class="divider"></div>

      <!-- Grille projets -->
      <div class="projects-list">
        <div
          v-for="(project, i) in displayedProjects"
          :key="project.slug"
          class="project-row"
          @click="$router.push(`/projects/${project.slug}`)"
        >
          <div class="project-index">{{ String(i+1).padStart(2,'0') }}</div>
          <div class="project-info">
            <h3 class="project-name">{{ project.title }}</h3>
            <p class="project-context">{{ project.context.slice(0, 100) }}...</p>
          </div>
          <div class="project-meta">
            <span class="project-year">{{ project.year }}</span>
            <div class="project-tags">
              <span v-for="tag in project.tags.slice(0,3)" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
          <svg class="row-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 17l9.2-9.2M17 17V7H7"/>
          </svg>
        </div>
      </div>

      <!-- Observer pour infinite scroll -->
      <div v-if="hasMore" ref="observerTarget" class="load-more">
        <div v-if="isLoading" class="loader">
          <div class="loader-dot"></div><div class="loader-dot"></div><div class="loader-dot"></div>
        </div>
      </div>

      <div class="divider"></div>

      <!-- Stats -->
      <div class="stats-row">
        <div class="stat-box">
          <div class="stat-num grad-multi">{{ projects.length }}</div>
          <div class="stat-label">Projets</div>
        </div>
        <div class="stat-box">
          <div class="stat-num grad-multi">{{ realTechnologies.length }}</div>
          <div class="stat-label">Technologies</div>
        </div>
      </div>

      <!-- Technologies -->
      <section class="block">
        <h2 class="block-title">Technologies utilisées</h2>
        <div class="chips">
          <span v-for="tech in realTechnologies" :key="tech" class="chip">{{ tech }}</span>
        </div>
      </section>
    </div>
  </PageLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import PageLayout from '../components/PageLayout.vue'
import { useProfile } from '../composables/useProfile'
import { useInfiniteScroll } from '../composables/useInfiniteScroll'
import { projects, getAllTags } from '../data/projects'

const { profile } = useProfile()
const allProjects = ref([...projects])
const displayedProjects = ref([])
const currentPage = ref(0)
const projectsPerPage = 6

const loadMore = async () => {
  await new Promise(r => setTimeout(r, 600))
  const start = currentPage.value * projectsPerPage
  const newItems = allProjects.value.slice(start, start + projectsPerPage)
  if (newItems.length > 0) { displayedProjects.value.push(...newItems); currentPage.value++; return true }
  return false
}
const { observerTarget, isLoading, hasMore } = useInfiniteScroll(loadMore, { threshold: 0.5, rootMargin: '200px' })
loadMore()

const techKeywords = ['vue','nuxt','react','javascript','typescript','node','python','php','css','html','tailwind','bootstrap','supabase','firebase','mongodb','postgresql','mysql','express','git','docker','aws','vercel','netlify','responsive','design']
const realTechnologies = computed(() => getAllTags().filter(t => techKeywords.some(k => t.toLowerCase().includes(k))))
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=DM+Sans:wght@200;300;400&display=swap');
.projects-page{max-width:900px}
.page-eyebrow{font-size:10px;letter-spacing:5px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:20px}
.page-title{font-family:'Syncopate',sans-serif;font-size:clamp(2rem,5vw,4rem);font-weight:700;line-height:1.05;letter-spacing:-.03em;margin-bottom:24px;color:#fff}
.grad-multi{background:linear-gradient(135deg,#22d3ee,#a855f7,#6366f1);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.page-intro{font-size:clamp(1rem,1.5vw,1.1rem);color:rgba(255,255,255,.5);line-height:1.8;font-weight:300;max-width:600px}
.divider{height:1px;background:rgba(255,255,255,.07);margin:48px 0}
.block{margin-bottom:48px}
.block-title{font-size:10px;letter-spacing:4px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:20px}
.projects-list{display:flex;flex-direction:column}
.project-row{display:grid;grid-template-columns:48px 1fr auto 24px;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid rgba(255,255,255,.06);cursor:none;transition:all .25s}
.project-row:hover{background:rgba(255,255,255,.02);padding-left:12px;border-bottom-color:rgba(255,255,255,.15)}
.project-index{font-size:10px;letter-spacing:2px;color:rgba(255,255,255,.2);font-family:'DM Sans',sans-serif}
.project-name{font-size:16px;font-weight:400;color:rgba(255,255,255,.8);margin:0 0 6px;transition:color .2s;font-family:'DM Sans',sans-serif}
.project-row:hover .project-name{color:#fff}
.project-context{font-size:12px;color:rgba(255,255,255,.3);margin:0;line-height:1.5;font-weight:300}
.project-meta{text-align:right}
.project-year{display:block;font-size:10px;letter-spacing:2px;color:rgba(255,255,255,.25);margin-bottom:8px}
.project-tags{display:flex;gap:6px;justify-content:flex-end;flex-wrap:wrap}
.tag{font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,.25);border:1px solid rgba(255,255,255,.08);padding:3px 8px}
.row-arrow{width:16px;height:16px;color:rgba(255,255,255,.2);opacity:0;transition:opacity .2s,transform .2s;flex-shrink:0}
.project-row:hover .row-arrow{opacity:.7;transform:translate(2px,-2px)}
.stats-row{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:48px}
.stat-box{border:1px solid rgba(255,255,255,.07);padding:32px;text-align:center;background:rgba(255,255,255,.02)}
.stat-num{font-family:'Syncopate',sans-serif;font-size:3rem;font-weight:700;display:block;margin-bottom:8px}
.stat-label{font-size:10px;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,.3)}
.chips{display:flex;flex-wrap:wrap;gap:8px}
.chip{font-size:10px;letter-spacing:2px;text-transform:uppercase;padding:7px 16px;border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.45);transition:all .2s;cursor:none}
.chip:hover{border-color:#22d3ee;color:#22d3ee}
.load-more{padding:40px 0;display:flex;justify-content:center}
.loader{display:flex;gap:8px}
.loader-dot{width:8px;height:8px;background:rgba(255,255,255,.3);border-radius:50%;animation:dotBounce 1.4s infinite ease-in-out both}
.loader-dot:nth-child(1){animation-delay:-.32s}.loader-dot:nth-child(2){animation-delay:-.16s}
@keyframes dotBounce{0%,80%,100%{transform:scale(0);opacity:.5}40%{transform:scale(1);opacity:1}}
@media(max-width:768px){.project-row{grid-template-columns:36px 1fr 24px}.project-meta{display:none}}
</style>