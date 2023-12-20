import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about', 
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: ()=> import ('@/views/resumeView.vue')
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: ()=> import ('@/views/testimonialsView.vue')
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: ()=> import ('@/views/ProjectsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: ()=> import ('@/views/contactView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
