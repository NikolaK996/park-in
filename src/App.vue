<template>
  <div id="app">
    <RegistrationModal v-if="authStore.showRegistrationForm" />
    <LoginModal v-if="authStore.showLoginForm" />
    <TheHeader />
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth/authStore'
import { useLanguagesStore } from '@/stores/languages/languagesStore'
import { useI18n } from 'vue-i18n'
import LoginModal from './components/sections/auth/login/LoginModal.vue'
import TheHeader from '@/components/base/navigation/TheHeader.vue'
import RegistrationModal from '@/components/sections/auth/registration/RegisterModal.vue'
import { onBeforeMount } from 'vue'

const authStore = useAuthStore()
const languagesStore = useLanguagesStore()
const i18n = useI18n()

onBeforeMount(() => {
  i18n.locale.value = languagesStore.currentLanguage
})
</script>
