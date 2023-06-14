<template>
  <form @submit.prevent="search">
    <div class="relative flex p-2">
      <div class="relative">
        <input
          ref="inputDOM"
          :placeholder="$t('map.searchPlaceholder')"
          :value="value"
          class="p-2 rounded-md border-2 border-black md:w-[25rem] sm:w-[20rem] w-auto"
          type="text"
          @focus="showResults = true"
          @input="inputHandler"
        />
        <icons-search
          class="absolute top-1 right-1 text-gray-400 cursor-pointer hover:text-primary"
          @click="iconSearchHandler"
        />
      </div>

      <div v-if="showResults" class="absolute top-16 z-3 bg-white shadow-2xl min-w-[18rem]">
        <template v-if="value && results.length">
          <ul v-for="(item, index) in results" :key="index">
            <li
              class="p-2 cursor-pointer hover:bg-gray-200 border-b-1 border-gray-600 last:border-none"
              @click="$emit('select', item)"
            >
              {{ item.label }}
            </li>
          </ul>
        </template>
        <template v-else-if="value">
          <span class="block p-2">No results for location {{ value }}</span>
        </template>
      </div>
    </div>
  </form>
</template>

<script setup>
import { defineEmits, defineProps, nextTick, ref } from 'vue'

import { onClickOutside, useDebounceFn } from '@vueuse/core'

import IconsSearch from '@/components/base/icons/IconsSearch.vue'

const props = defineProps({
  value: {
    type: String,
    required: true
  },
  results: {
    type: Array,
    required: true
  },
  enableVoiceSearch: {
    type: Boolean,
    required: false,
    default: false
  },
  autoComplete: {
    type: Boolean,
    required: false,
    default: true
  }
})
const emits = defineEmits(['input', 'select', 'search', 'voice-search'])

const inputDOM = ref(null)
const showResults = ref(false)

onClickOutside(inputDOM, () => (showResults.value = false))

async function search(value) {
  emits('search', value)
  await nextTick()
  showResults.value = true
}

const autocompleteSearch = useDebounceFn(search, 1000)

function inputHandler(event) {
  emits('input', event.target.value)

  if (props.autoComplete) {
    autocompleteSearch(event.target.value)
  }
}

function iconSearchHandler() {
  search()
  inputDOM.value.focus()
}
</script>
