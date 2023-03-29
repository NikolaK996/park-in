<template>
  <header class="container px-5 py-4 shadow-md">
    <nav class="flex items-center justify-between">
      <RouterLink to="/">
        <img alt="Logo" class="w-32" src="/src/assets/logo.png">
      </RouterLink>

      <ul class="flex">
        <li class="mr-4 py-3 px-1">
          <RouterLink class="font-semibold hover:underline text-primary" to="/">Home</RouterLink>
        </li>
        <li class="py-3 px-1">
          <RouterLink class="font-semibold hover:underline text-primary" to="/about">About</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import {RouterLink} from 'vue-router'</script>

<style lang="scss">
.router-link-active {
  color: black !important;
}
</style>