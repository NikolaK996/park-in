<template>
  <div class="flex items-center justify-center p-2 bg-gray-50">
    <input v-model="searchTerm" class="p-2 border-2 border-black" type="text" />
    <button class="p-2 my-2 border-2 border-green-700 bg-green-700" @click="search">Search</button>
  </div>
</template>

<script>
export default {
  name: 'InputSearch',
  emits: ['search'],
  data() {
    return {
      searchTerm: ''
    }
  },
  methods: {
    search() {
      this.$emit('search', this.searchTerm)
    }
  }
}
</script>

<style scoped></style>
