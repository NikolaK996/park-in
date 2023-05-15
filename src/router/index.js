import { createRouter, createWebHistory } from 'vue-router'
import { useAuthGuard } from '@/router/composables/useAuthGuard'
import MapView from '../views/MapView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/map',
      name: 'map',
      component: MapView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {
        requiresAuth: true
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProfileView.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  const { redirect } = useAuthGuard()

  return await redirect(to)
})

export default router
