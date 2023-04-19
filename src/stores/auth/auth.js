import { defineStore } from 'pinia'
import { useAuthModals } from '@/stores/auth/composables/useAuthModals'

export const useAuthStore = defineStore('auth', () => {
  const {
    showLoginForm,
    showRegistrationForm,
    openLoginModal,
    closeLoginModal,
    openRegistrationModal,
    closeRegistrationModal
  } = useAuthModals()

  return {
    showLoginForm,
    showRegistrationForm,
    openLoginModal,
    closeLoginModal,
    openRegistrationModal,
    closeRegistrationModal
  }
})
