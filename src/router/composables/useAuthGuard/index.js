import { getCurrentUser } from 'vuefire'

export const useAuthGuard = () => {
  async function redirect(to) {
    // routes with `meta: { requiresAuth: true }` will check for the users, others won't
    if (to.meta.requiresAuth) {
      const currentUser = await getCurrentUser()

      // if the user is not logged in, redirect to the home page
      if (!currentUser) {
        return '/'
      }
    }
  }

  return {
    redirect
  }
}
