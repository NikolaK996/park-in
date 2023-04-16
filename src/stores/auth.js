import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const showLoginForm = ref(false)
  const showRegistrationForm = ref(false)

  const toggleLogin = () => {
    showLoginForm.value = !showLoginForm.value
  }
  const toggleRegistration = () => {
    showRegistrationForm.value = !showRegistrationForm.value
  }

  return {
    showLoginForm,
    showRegistrationForm,
    toggleLogin,
    toggleRegistration
  }
})
