<template>
  <TheHeader />
  <RouterView />
</template>

<script setup>
import TheHeader from '@/components/base/navigation/TheHeader.vue'
import { RouterView } from 'vue-router'
</script>