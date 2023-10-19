import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/acqu/acquHome.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
