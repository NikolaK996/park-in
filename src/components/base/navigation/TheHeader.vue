<template>
  <header class="px-5 py-4 shadow-md">
    <nav class="flex items-center justify-between">
      <RouterLink to="/">
        <img alt="Logo" class="w-32" src="/src/assets/logo.png" />
      </RouterLink>

      <TheHeaderLinks />
      <IconsHamburger class="cursor-pointer" @click="mobileMenuVisible = !mobileMenuVisible" />

      <TheHeaderLinks
        v-if="mobileMenuVisible"
        class="mobile-menu absolute w-full h-64 left-0 bg-red-400"
      />
    </nav>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'
import IconsHamburger from '@/components/base/icons/IconsHamburger.vue'
import TheHeaderLinks from '@/components/base/navigation/TheHeaderLinks.vue'

export default {
  components: {
    TheHeaderLinks,
    RouterLink,
    IconsHamburger
  },
  data() {
    return {
      mobileMenuVisible: false
    }
  }
}
</script>

<style lang="scss">
.router-link-active {
  color: #165b16 !important;
}

header {
  background-color: #f5f1f1;
}

.flex items-center justify-between {
  background-color: #fcfbfb;

  z-index: 2000;
}
</style>
.mobile-menu { top: 80px;