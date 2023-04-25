<template>
  <header class="px-5 py-4 shadow-md">
    <nav class="flex items-center justify-between">
      <RouterLink to="/">
        <img alt="Logo" class="w-32" src="/src/assets/logo.png" />
      </RouterLink>

      <TheHeaderLinks class="sm:flex hidden" />
      <IconsHamburger
        v-if="!mobileMenuVisible"
        class="w-[3rem] h-[3rem] p-2 cursor-pointer z-5"
        @click="mobileMenuVisible = !mobileMenuVisible"
      />
      <IconsClose
        v-else
        class="text-white w-[3rem] h-[3rem] cursor-pointer p-2 z-5"
        @click="mobileMenuVisible = !mobileMenuVisible"
      />
    </nav>

    <transition name="fade">
      <TheHeaderLinks
        v-show="mobileMenuVisible"
        class="z-4 fixed flex flex-col items-center justify-center text-2xl w-screen h-screen top-0 left-0 text-white bg-primary opacity-90 backdrop-blur-sm"
        @changed="mobileMenuVisible = false"
      />
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import IconsHamburger from '@/components/base/icons/IconsHamburger.vue'
import IconsClose from '@/components/base/icons/IconsClose.vue'
import TheHeaderLinks from '@/components/base/navigation/TheHeaderLinks.vue'

const mobileMenuVisible = ref(false)
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