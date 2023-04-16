<template>
  <ModalContainer v-if="authStore.showLoginForm" @close="authStore.toggleLogin()">
    <div class="p-8">
      <h2 class="text-xl mb-4">Login</h2>

      <LoginForm @submit="login" />
    </div>
  </ModalContainer>
</template>

<script setup>
import ModalContainer from '@/components/base/modal/ModalContainer.vue'
import LoginForm from '@/components/sections/login/LoginForm.vue'

import { useAuthStore } from '@/stores/auth'

function login(email, password) {
  // TODO: Implement your login logic here
  console.log('Email:', email)
  console.log('Password:', password)
}

const authStore = useAuthStore()
</script>

<style scoped></style>