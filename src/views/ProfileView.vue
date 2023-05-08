<template>
  <div>
    <h1></h1>
    <div class="app-description">
      <p></p>
    </div>
    <p>User email: {{ user.email }}. User name: {{ user.displayName }}</p>
    <a class="cursor-pointer text-primary" @click="logout">Log out</a>
  </div>
</template>

<script setup>
import { getCurrentUser } from 'vuefire'
import { useAuthStore } from '@/stores/auth/auth'
import router from '@/router'

const user = getCurrentUser()
const authStore = useAuthStore()

async function logout() {
  await authStore.logout()
  await router.push('/')
}
</script>
