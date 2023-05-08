<template>
  <ul class="flex text-primary items-center">
    <li class="mx-2 py-3 px-1">
      <RouterLink
        class="font-semibold hover:underline"
        exact
        exact-active-class="router-link-active"
        to="/"
      >
        Home
      </RouterLink>
    </li>
    <li v-if="user" class="mx-2 py-3 px-1">
      <RouterLink
        class="font-semibold hover:underline"
        exact
        exact-active-class="router-link-active"
        to="/map"
      >
        Map
      </RouterLink>
    </li>
    <li class="mx-2 py-3 px-1">
      <RouterLink
        class="font-semibold hover:underline"
        exact
        exact-active-class="router-link-active"
        to="/about"
      >
        About
      </RouterLink>
    </li>
    <li v-if="user" class="mx-2 py-3 px-1">
      <RouterLink
        class="font-semibold hover:underline"
        exact
        exact-active-class="router-link-active"
        to="/profile"
      >
        Profile
      </RouterLink>
    </li>
    <li v-if="!user" class="mx-2">
      <button
        class="font-semibold py-2 px-4 text-primary bg-white shadow-md"
        type="button"
        @click="authStore.openLoginModal()"
      >
        Sign in
      </button>
    </li>
  </ul>
</template>

<script setup>
import { defineEmits, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth/auth'
import { useCurrentUser } from 'vuefire'

const user = useCurrentUser()
const emits = defineEmits(['changed'])
const route = useRoute()
const authStore = useAuthStore()

watch(
  () => route,
  () => {
    emits('changed')
  },
  { deep: true }
)
</script>

<style scoped>
.router-link-active {
  text-decoration: underline !important;
}
</style>
