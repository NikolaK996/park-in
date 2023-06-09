<template>
  <header class="px-5 py-4 shadow-md">
    <nav class="flex items-center justify-between">
      <RouterLink to="/">
        <img alt="Logo" class="w-32" src="/src/assets/logo.png" />
      </RouterLink>

      <TheHeaderLinks class="sm:flex hidden" />

      <div class="flex">
        <input-language v-if="!usersStore.user" class="mr-4" />
        <IconsHamburger
          v-if="!mobileMenuVisible"
          class="w-[3rem] h-[3rem] p-2 cursor-pointer z-5"
          @click="mobileMenuVisible = !mobileMenuVisible"
        />
        <IconsClose
          v-else
          class="text-white w-[3rem] h-[3rem] cursor-pointer p-2 z-5 mr-4"
          @click="mobileMenuVisible = !mobileMenuVisible"
        />
      </div>
    </nav>

    <transition name="fade">
      <TheHeaderLinks
        v-show="mobileMenuVisible"
        class="z-4 fixed flex flex-col items-center justify-center text-2xl w-screen h-screen top-0 left-0 text-white bg-primary bg-opacity-90 backdrop-blur-sm"
        @changed="mobileMenuVisible = false"
      />
    </transition>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'

import { RouterLink } from 'vue-router'

import InputLanguage from '../inputs/InputLanguage.vue'

import IconsClose from '@/components/base/icons/IconsClose.vue'
import IconsHamburger from '@/components/base/icons/IconsHamburger.vue'
import TheHeaderLinks from '@/components/base/navigation/TheHeaderLinks.vue'
import { useUsersStore } from '@/stores/users/usersStore'

const usersStore = useUsersStore()
const mobileMenuVisible = ref(false)
// watcher that prevents browser scrolling when mobile menu is visible
watch(
  () => mobileMenuVisible.value,
  (value) => {
    if (value) {
      document.querySelector('#app').style.overflow = 'hidden' // prevents scrolling on desktop devices
      document.body.style.overflow = 'hidden' // prevents scrolling on mobile devices
    } else {
      document.querySelector('#app').style.overflow = 'auto' // reset back scrolling on desktop devices
      document.body.style.overflow = 'auto' // reset back scrolling on mobile devices
    }
  }
)
</script>

<style lang="scss">
header {
  background-color: #f5f1f1;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-100%) scale(0.5);
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.fade-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(100%) scale(0.5);
}
</style>
