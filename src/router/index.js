import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/Products/index.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/architecture/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
