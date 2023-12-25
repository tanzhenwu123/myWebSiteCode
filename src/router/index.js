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
      path: '/blogPage',
      name: 'blogPage',
      key: '/blogPage',
      label: '博客',
      component: () => import('../views/blogPage/index.vue')
    }
  ]
})

export default router
