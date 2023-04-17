<template>
  <ul class="flex">
    <li class="mr-4 py-3 px-1">
      <RouterLink class="font-semibold hover:underline text-primary" to="/">Home</RouterLink>
    </li>
    <li class="py-3 px-1">
      <RouterLink class="font-semibold hover:underline text-primary" to="/about">About</RouterLink>
    </li>
    <li class="py-3 px-1">
      <a
        class="font-semibold hover:underline text-primary ml-4 cursor-pointer"
        @click="authStore.openLoginModal()"
      >
        Login
      </a>
    </li>
  </ul>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
</script>

<style scoped></style>