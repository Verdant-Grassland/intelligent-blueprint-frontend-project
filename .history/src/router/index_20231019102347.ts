import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
