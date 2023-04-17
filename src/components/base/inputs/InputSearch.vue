<template>
  <div class="flex items-center justify-center p-2 bg-gray-50">
    <input v-model="searchTerm" class="p-2 border-2 border-black" type="text" />
    <button class="p-2 my-2 border-2 border-green-700 bg-green-700" @click="search">Search</button>
    <button v-if="props.enableVoiceSearch" class="ml-4" @mousedown="startSpeechRecognition">
      <icon-voice-search :class="{ 'text-green-500': isListening }" />
    </button>
  </div>
</template>

<script setup>
import { defineEmits, defineProps, onMounted, onUnmounted, ref } from 'vue'
import { useSpeechRecognition } from '@vueuse/core'
import IconVoiceSearch from '@/components/base/icons/IconVoiceSearch.vue'

const props = defineProps({
  enableVoiceSearch: {
    type: Boolean,
    required: false,
    default: false
  }
})

const emits = defineEmits(['search'])

const searchTerm = ref('')
const { isSupported, isListening, result, start, stop } = useSpeechRecognition()

const search = () => {
  emits('search', searchTerm.value)
}
const startSpeechRecognition = () => {
  if (isSupported) {
    start()
  }
}
const handleVoiceSearch = () => {
  if (isSupported.value && isListening.value) {
    stop()
    emits('search', result.value)
  }
}
onMounted(() => {
  document.querySelector('body').addEventListener('mouseup', handleVoiceSearch)
})
onUnmounted(() => {
  document.querySelector('body').removeEventListener('mouseup', handleVoiceSearch)
})
</script>

<style scoped></style>