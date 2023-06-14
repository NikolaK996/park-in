import { getCurrentUser } from 'vuefire'

export const useAuthGuard = () => {
  async function redirect(to) {
    // routes with `meta: { requiresAuth: true }` will check for a user, others won't
    if (to.meta.requiresAuth) {
      const currentUser = await getCurrentUser()

      // if a user is not logged in, redirect to home page
      if (!currentUser) {
        return '/'
      }
    }
  }

  return {
    redirect
  }
}
