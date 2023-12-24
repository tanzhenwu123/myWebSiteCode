import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homePage/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'blog',
      key: '/',
      label: '博客',
      component: HomeView
    },
    {
      path: '/studyRange',
      name: 'studyRange',
      key: '/studyRange',
      label: '小升初BO5计划',
      component: () => import('../views/aboutMe/index.vue')
    },
    {
      path: '/mySpace',
      name: 'mySpace',
      key: '/mySpace',
      label: '空间',
    },
    {
      path: '/message',
      name: 'message',
      key: 'message',
      label: '留言'
    },
    {
      path: '/Tel',
      name: 'Tel',
      key: 'Tel',
      label: '联系我'
    }
  ]
})

export default router
