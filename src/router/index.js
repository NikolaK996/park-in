import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import MapView from '../views/MapView.vue'
import PageNotFound from '../views/PageNotFound.vue'

import { useAuthGuard } from '@/router/composables/useAuthGuard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)*', component: PageNotFound }, // 404 page
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
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: {
        requiresAuth: true
      },
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: '', // Empty path to match '/dashboard' itself
          redirect: '/dashboard/overview' // Redirect to the 'overview' child route
        },
        {
          path: 'overview',
          name: 'overview',
          meta: {
            requiresAuth: true
          },
          component: () => import('../components/sections/dashboard/DashboardOverview.vue')
        },
        {
          path: 'messages',
          name: 'messages',
          meta: {
            requiresAuth: true
          },
          component: () => import('../components/sections/dashboard/DashboardMessages.vue')
        }
      ]
    }
  ]
})

router.beforeEach(async (to) => {
  const { redirect } = useAuthGuard()

  return await redirect(to)
})

export default router
