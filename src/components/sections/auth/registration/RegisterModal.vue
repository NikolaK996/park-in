<template>
  <ModalContainer @close="authStore.closeRegistrationModal()">
    <div class="p-12 sm:min-w-[32rem]">
      <h2 class="text-2xl mb-4">Registration</h2>

      <RegistrationForm @submit="register" />
    </div>
  </ModalContainer>
</template>

<script setup>
import ModalContainer from '@/components/base/modal/ModalContainer.vue'
import RegistrationForm from '@/components/sections/auth/registration/RegisterForm.vue'

import { useAuthStore } from '@/stores/auth/auth'

const authStore = useAuthStore()

function register({ email, password }) {
  authStore.register(email, password)
}
</script>

<style scoped></style>