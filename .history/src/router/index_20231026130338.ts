import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'home',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/components/Register.vue')
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
