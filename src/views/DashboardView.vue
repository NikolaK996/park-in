<template>
  <div class="relative antialiased">
    <dashboard-sidebar />

    <main class="p-4 md:ml-64 h-auto pt-20">
      <router-view />
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import DashboardSidebar from '../components/sections/dashboard/DashboardSidebar.vue'

export default defineComponent({
  components: { DashboardSidebar }
})
</script>

<style lang="scss" scoped></style>