import { ref } from 'vue'

export function useAuthModals() {
  const showLoginForm = ref(false)
  const showRegistrationForm = ref(false)

  function openLoginModal() {
    showLoginForm.value = true
  }

  function closeLoginModal() {
    showLoginForm.value = false
  }

  function openRegistrationModal() {
    showRegistrationForm.value = true
  }

  function closeRegistrationModal() {
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
}
