import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DashboardRecruiter from '../views/DashboardRecruiter.vue'
import DashboardClient from '../views/DashboardClient.vue'
import DashboardDeveloper from '../views/DashboardDeveloper.vue'
import DashboardCurious from '../views/DashboardCurious.vue'
import AllProjects from '../views/AllProjects.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dashboard/recruiter',
    name: 'dashboard-recruiter',
    component: DashboardRecruiter,
    meta: { requiresProfile: true }
  },
  {
    path: '/dashboard/client',
    name: 'dashboard-client',
    component: DashboardClient,
    meta: { requiresProfile: true }
  },
  {
    path: '/dashboard/developer',
    name: 'dashboard-developer',
    component: DashboardDeveloper,
    meta: { requiresProfile: true }
  },
  {
    path: '/dashboard/curious',
    name: 'dashboard-curious',
    component: DashboardCurious,
    meta: { requiresProfile: true }
  },
  {
    path: '/projects',
    name: 'all-projects',
    component: AllProjects
  },
  {
    path: '/projects/:slug',
    name: 'project-detail',
    component: ProjectDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Guard pour vérifier le profil
router.beforeEach((to, from, next) => {
  if (to.meta.requiresProfile) {
    const profile = localStorage.getItem('userProfile')
    if (!profile) {
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router