<template>
  <ul class="flex text-primary items-center">
    <li class="mx-2 py-3 px-1">
      <RouterLink
        class="font-semibold hover:underline"
        exact
        exact-active-class="router-link-active"
        to="/"
      >
        {{ $t('header.home') }}
      </RouterLink>
    </li>
    <li v-if="user" class="mx-2 py-3 px-1">
      <RouterLink
        class="font-semibold hover:underline"
        exact
        exact-active-class="router-link-active"
        to="/map"
      >
        {{ $t('header.map') }}
      </RouterLink>
    </li>
    <li v-if="user" class="mx-2 py-3 px-1">
      <RouterLink
        class="font-semibold hover:underline"
        exact
        exact-active-class="router-link-active"
        to="/profile"
      >
        {{ $t('header.profile') }}
      </RouterLink>
    </li>
    <li v-if="user && false" class="mx-2 py-3 px-1">
      <RouterLink
        class="font-semibold hover:underline"
        exact
        exact-active-class="router-link-active"
        to="/dashboard"
      >
        Dashboard
      </RouterLink>
    </li>
    <li v-if="!user" class="mx-2">
      <button
        class="font-semibold py-2 px-4 text-primary bg-white shadow-md"
        type="button"
        @click="authStore.openLoginModal()"
      >
        {{ $t('header.signIn') }}
      </button>
    </li>
  </ul>
</template>

<script setup>
import { defineEmits, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth/authStore'
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