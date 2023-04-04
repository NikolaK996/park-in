<template>
  <InputSearch @search="searchHandler" />
</template>

<script>
import InputSearch from '@/components/base/inputs/InputSearch.vue'
// import { useMapStore } from '@/stores/counter'
// const { searchTerm } = useMapStore()

export default {
  components: { InputSearch },
  data() {
    return {
      searchTerm: ''
    }
  },
  methods: {
    searchHandler() {
      // TODO handle the search
    }
  }
}
</script>

<style scoped></style>