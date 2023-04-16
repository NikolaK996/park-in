<template>
  <div id="app">
    <LoginModal />
    <TheHeader />
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import LoginModal from './components/sections/login/LoginModal.vue'
import TheHeader from '@/components/base/navigation/TheHeader.vue'
import { RouterView } from 'vue-router'
</script>