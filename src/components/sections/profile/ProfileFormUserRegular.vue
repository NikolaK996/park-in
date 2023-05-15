<template>
  <div class="profile-page">
    <h1 class="title">Profile</h1>
    <div class="profile-info">
      <h2 class="subtitle">User Information</h2>
      <p><strong>Name:</strong> {{ user?.displayName ?? '' }}</p>
      <p><strong>Email:</strong> {{ user?.email ?? '' }}</p>
      <!-- Replace 'joinDate' with the actual field name if available -->
      <p><strong>Member since:</strong> {{ user?.joinDate ?? '' }}</p>
    </div>
    <div class="settings">
      <h2 class="subtitle">Settings</h2>
      <!-- Add settings controls here -->
    </div>
    <a class="cursor-pointer text-primary" @click="logout">Log out</a>
  </div>
</template>

<script setup>
import { useCurrentUser } from 'vuefire'
import { useAuthStore } from '@/stores/auth/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = useCurrentUser()
const authStore = useAuthStore()

async function logout() {
  await authStore.logout()
  await router.push('/')
}
</script>

<style scoped>
.profile-page {
  padding: 2rem;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 2rem;
  margin-top: 2rem;
}

.profile-info,
.settings {
  margin-top: 1rem;
}
</style>