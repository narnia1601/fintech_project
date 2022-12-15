import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import RiskAssessment from '../views/RiskAssessment.vue'
import LendingView from '../views/LendingView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LoginView
    },
    {
      path: '/home',
      component: HomeView
    },
    {
      path: '/risk',
      component: RiskAssessment,
      props: true
    },
    {
      path: '/lending',
      component: LendingView
    },
    {
      path: '/profile',
      component: ProfileView
    }
  ]
})

export default router
