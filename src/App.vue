<template>
  <div id="app">
    <app-loading v-if="globalStore.loading" />
    <RegistrationModal v-if="authStore.showRegistrationForm" />
    <LoginModal v-if="authStore.showLoginForm" />
    <TheHeader />
    <RouterView />
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'

import { getCurrentUser } from 'vuefire'

import { useI18n } from 'vue-i18n'
import { RouterView } from 'vue-router'

import LoginModal from './components/sections/auth/login/LoginModal.vue'

import TheHeader from '@/components/base/navigation/TheHeader.vue'
import AppLoading from '@/components/base/spinners/AppLoading.vue'
import RegistrationModal from '@/components/sections/auth/registration/RegisterModal.vue'
import { useAuthStore } from '@/stores/auth/authStore'
import { useGlobalStore } from '@/stores/global/globalStore'
import { useLanguagesStore } from '@/stores/languages/languagesStore'
import { useUsersStore } from '@/stores/users/usersStore'

const authStore = useAuthStore()
const languagesStore = useLanguagesStore()
const usersStore = useUsersStore()
const i18n = useI18n()
const globalStore = useGlobalStore()

function initCurrentLanguage() {
  i18n.locale.value = languagesStore.currentLanguage
}

async function initCurrentUser() {
  try {
    globalStore.setLoading(true)
    const currentUser = await getCurrentUser()

    if (currentUser?.uid) {
      await usersStore.fetchUser(currentUser.uid)
    }
  } catch (error) {
    console.warn(error)
  } finally {
    globalStore.setLoading(false)
  }
}

onBeforeMount(() => {
  initCurrentLanguage()
  initCurrentUser()
})
</script>
