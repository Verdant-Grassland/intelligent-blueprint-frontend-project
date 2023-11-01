import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'logins',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/Index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
