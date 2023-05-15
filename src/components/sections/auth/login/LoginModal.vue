<template>
  <ModalContainer @close="authStore.closeLoginModal()">
    <div class="p-12 sm:min-w-[32rem]">
      <h2 class="text-2xl mb-4">Login</h2>

      <LoginForm @submit="login" />
    </div>
  </ModalContainer>
</template>

<script setup>
import ModalContainer from '@/components/base/modal/ModalContainer.vue'
import LoginForm from '@/components/sections/auth/login/LoginForm.vue'

import { useAuthStore } from '@/stores/auth/auth'

const authStore = useAuthStore()

function login(email, password) {
  authStore.login(email, password)
}
</script>

<style scoped></style>