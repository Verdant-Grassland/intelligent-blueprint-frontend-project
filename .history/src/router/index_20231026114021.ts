import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'home',
    component: HomeView
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/components/Index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
