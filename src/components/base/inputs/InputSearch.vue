<template>
  <div>
    <input v-model="searchTerm" type="text" />
    <button @click="search">Search</button>
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
