<template>
  <ul class="flex">
    <li class="mr-4 py-3 px-1">
      <RouterLink class="font-semibold hover:underline text-primary" to="/">Home</RouterLink>
    </li>
    <li class="py-3 px-1">
      <RouterLink class="font-semibold hover:underline text-primary" to="/about">About</RouterLink>
    </li>
  </ul>
</template>

<script>

export default {
  name: "TheHeaderLinks"
}
</script>

<style scoped>

</style>