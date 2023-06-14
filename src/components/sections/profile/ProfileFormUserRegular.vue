<template>
  <div class="flex justify-start items-start px-2 md:px-12 mt-8">
    <div class="bg-white p-8 border border-gray-300 rounded-md max-w-md">
      <h1 class="text-2xl mb-6">{{ $t('profile.title') }}</h1>
      <div class="mb-6">
        <h2 class="text-md font-bold mb-2">{{ $t('profile.userInfo.title') }}</h2>
        <p>{{ $t('profile.userInfo.name') }} {{ usersStore.user?.displayName ?? '' }}</p>
        <p>{{ $t('profile.userInfo.email') }} {{ usersStore.user?.email ?? '' }}</p>
        <p>{{ $t('profile.userInfo.memberSince') }} {{ usersStore.user?.joinDate ?? '' }}</p>
      </div>
      <div class="mb-6">
        <h2 class="text-md font-bold mb-2">{{ $t('profile.settings.title') }}</h2>
        <div>
          <label class="mr-4" for="language">{{ $t('profile.settings.language') }}:</label>
          <div class="relative inline-block mt-2">
            <input-language />
          </div>
        </div>
      </div>
      <div class="mt-6">
        <button
          class="py-2 px-4 rounded-md bg-white border border-primary text-primary font-semibold hover:bg-primary-dark"
          @click="logout"
        >
          {{ $t('profile.settings.logOut') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

import InputLanguage from '../../base/inputs/InputLanguage.vue'

import { useAuthStore } from '@/stores/auth/authStore'
import { useUsersStore } from '@/stores/users/usersStore'

const router = useRouter()
const authStore = useAuthStore()
const usersStore = useUsersStore()

async function logout() {
  await authStore.logout()
  await router.push('/')
}
</script>
