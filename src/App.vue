<template>
  <div id="app">
    <RegistrationModal v-if="authStore.showRegistrationForm" />
    <LoginModal v-if="authStore.showLoginForm" />
    <TheHeader />
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import LoginModal from './components/sections/login/LoginModal.vue'
import TheHeader from '@/components/base/navigation/TheHeader.vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth/auth'
import RegistrationModal from '@/components/sections/registration/RegisterModal.vue'

const authStore = useAuthStore()
</script>
