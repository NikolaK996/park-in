import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'

import { useAuthModals } from '@/stores/auth/composables/useAuthModals'
import { useUsersStore } from '@/stores/users/usersStore'

export const useAuthStore = defineStore('auth', () => {
  const auth = getAuth()
  const usersStore = useUsersStore()

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

      await usersStore.fetchUser(auth.currentUser.uid)

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

  async function register({ email, password, displayName, userType }) {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      await usersStore.createUser(auth.currentUser.uid, {
        email,
        password,
        displayName,
        userType,
        uid: auth.currentUser.uid
      })
      closeRegistrationModal()
      toast.success('Created a new users successfully.', {
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
      usersStore.reset()
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
