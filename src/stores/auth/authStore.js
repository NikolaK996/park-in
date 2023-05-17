import { defineStore } from 'pinia'

import { useAuthModals } from '@/stores/auth/composables/useAuthModals'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { toast } from 'vue3-toastify'

export const useAuthStore = defineStore('auth', () => {
  const auth = getAuth()
  const {
    showLoginForm,
    showRegistrationForm,
    openLoginModal,
    closeLoginModal,
    openRegistrationModal,
    closeRegistrationModal
  } = useAuthModals()

  async function login(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      closeLoginModal()
      toast.success('Logged in successfully.', {
        position: 'top-right'
      })
    } catch (error) {
      toast.error(error?.message ?? 'Invalid username or password. Please try again.', {
        position: 'top-right'
      })
    }
  }

  async function register(email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      closeRegistrationModal()
      toast.success('Created a new user successfully.', {
        position: 'top-right'
      })
    } catch (error) {
      toast.error(error?.message ?? 'Invalid username or password. Please try again.', {
        position: 'top-right'
      })
    }
  }

  async function logout() {
    try {
      await signOut(auth)
    } catch (error) {
      toast.error(error?.message ?? 'Please try again.', {
        position: 'top-right'
      })
    }
  }

  return {
    showLoginForm,
    showRegistrationForm,
    login,
    register,
    logout,
    openLoginModal,
    closeLoginModal,
    openRegistrationModal,
    closeRegistrationModal
  }
})
