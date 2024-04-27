import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/tabs/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path:"/login",
    component :()=>import("@/views/login/Login.vue")
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: '/tabs/home',
        component: () => import('@/views/tabs/home/Home.vue')
      },
      {
        path: '/tabs/search',
        component: () => import('@/views/tabs/search/Search.vue')
      },
      {
        path: '/tabs/newpost',
        component: () => import('@/views/tabs/newpost/NewPost.vue')
      },
      {
        path: '/tabs/profile/:username',
        component: () => import('@/views/tabs/profile/Profile.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
