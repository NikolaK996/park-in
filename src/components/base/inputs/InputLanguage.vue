<template>
  <select
    id="language"
    :value="languagesStore.currentLanguage"
    class="form-select p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
    @change="languagesStore.changeLanguage($event.target.value)"
  >
    <option
      v-for="item in languagesStore.availableLanguages"
      :key="item.code"
      :value="item.code"
      class="p-2"
    >
      {{ item.name }}
    </option>
  </select>
</template>

<script setup>
import { onMounted } from 'vue'

import { useLanguagesStore } from '@/stores/languages/languagesStore'

const languagesStore = useLanguagesStore()

onMounted(() => {
  languagesStore.checkIsCurrentLanguageValid()
})
</script>
