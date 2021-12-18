import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/features/home/routes'
import Auth from '@/features/auth/routes'

const routes = [
  ...Home,
  ...Auth
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
