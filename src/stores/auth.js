import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const showLoginForm = ref(false)
  const showRegistrationForm = ref(false)

  const openLoginModal = () => {
    showLoginForm.value = true
  }
  const closeLoginModal = () => {
    showLoginForm.value = false
  }
  const openRegistrationModal = () => {
    showRegistrationForm.value = true
  }
  const closeRegistrationModal = () => {
    showRegistrationForm.value = false
  }

  return {
    showLoginForm,
    showRegistrationForm,
    openLoginModal,
    closeLoginModal,
    openRegistrationModal,
    closeRegistrationModal
  }
})
