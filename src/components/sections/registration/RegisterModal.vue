<template>
  <ModalContainer @close="authStore.closeRegistrationModal()">
    <div class="p-12">
      <h2 class="text-2xl mb-4">Registration</h2>

      <RegistrationForm @submit="register" />
    </div>
  </ModalContainer>
</template>

<script setup>
import ModalContainer from '@/components/base/modal/ModalContainer.vue'
import RegistrationForm from '@/components/sections/registration/RegisterForm.vue'

import { useAuthStore } from '@/stores/auth/auth'

function register(name, email, password, userType) {
  // TODO: Implement your registration logic here
  console.log('Name:', name)
  console.log('Email:', email)
  console.log('Password:', password)
  console.log('User Type:', userType)
}

const authStore = useAuthStore()
</script>

<style scoped></style>