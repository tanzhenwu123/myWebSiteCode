import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homePage/indexx.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      key: '/',
      label: '首页',
      component: HomeView
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      key: '/aboutName',
      label: '关于我',
      component: () => import('../views/aboutMe/index.vue')
    }
  ]
})

export default router
