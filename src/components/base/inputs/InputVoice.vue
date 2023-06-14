<template>
  <div class="relative">
    <button
      :class="{ 'record-active': isRecording }"
      class="pulse-button ml-4 recording-button"
      @mousedown="startRecording"
      @touchstart="startRecording"
    >
      <icon-voice-search v-if="microphonePermission === 'granted'" />
      <icon-voice-search-off v-else />
    </button>
    <span v-if="isRecording" class="absolute top-5 -right-12">
      {{ formattedRecordingTime }}
    </span>
  </div>
</template>

<script setup>
import { computed, defineEmits, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

import { useInterval, usePermission } from '@vueuse/core'
import { toast } from 'vue3-toastify'

import IconVoiceSearchOff from '@/components/base/icons/IconsVoiceSearchOff.vue'
import IconVoiceSearch from '@/components/base/icons/IconVoiceSearch.vue'

const emits = defineEmits(['input'])

const microphonePermission = usePermission('microphone')
const { counter, reset, pause, resume } = useInterval(1000, { controls: true })
const recorder = ref(null)
const chunks = ref([])
const isRecording = ref(false)

const formattedRecordingTime = computed(() => {
  const minutes = Math.floor(counter.value / 60)
  const seconds = counter.value % 60
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
})

const startRecording = () => {
  if (!isRecording.value) {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        recorder.value = new MediaRecorder(stream)
        recorder.value.addEventListener('dataavailable', (event) => {
          chunks.value.push(event.data)
        })
        recorder.value.start()
        resume()
        isRecording.value = true
      })
      .catch((error) => {
        console.error('Failed to get users media:', error)
      })
  }
}

const resetTimer = () => {
  reset()
  pause()
}

const stopRecording = async () => {
  if (isRecording.value) {
    recorder.value.stop()
    recorder.value.stream.getTracks().forEach((track) => track.stop())
    recorder.value = null
    isRecording.value = false
    chunks.value = []
    resetTimer()
    await nextTick()
    setTimeout(() => {
      createAudioFile()
    }, 100)
  }
}

const createAudioFile = () => {
  const blob = new Blob(chunks.value, { type: 'audio/wav' })

  if (blob?.size) {
    const audioFile = new File([blob], 'recording.wav')

    emits('input', audioFile)
  } else {
    toast.error(
      'You need to hold the button in order to record your voice. As soon as you release the button, recording will stop.'
    )
  }
}

const onMouseUp = () => {
  if (isRecording.value) {
    stopRecording()
  }
}

const onTouchEnd = (event) => {
  if (isRecording.value && !event.touches.length) {
    stopRecording()
  }
}

onMounted(() => {
  document.addEventListener('mouseup', onMouseUp)
  document.addEventListener('touchend', onTouchEnd, { passive: false })
  resetTimer()
})

onBeforeUnmount(() => {
  document.removeEventListener('mouseup', onMouseUp)
  document.removeEventListener('touchend', onTouchEnd)
})
</script>

<style lang="scss" scoped>
.pulse-button {
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 0 0 rgba(0, 122, 255, 0.4);
  }

  &.record-active {
    animation: pulse-wave 1s ease-in-out infinite;
  }
}

@keyframes pulse-wave {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 122, 255, 0.4);
  }
  25% {
    box-shadow: 0 0 0 16px rgba(0, 122, 255, 0.3), 0 0 0 0 rgba(0, 122, 255, 0.4);
  }
  50% {
    box-shadow: 0 0 0 32px rgba(0, 122, 255, 0.2), 0 0 0 8px rgba(0, 122, 255, 0.4);
  }
  75% {
    box-shadow: 0 0 0 16px rgba(0, 122, 255, 0.3), 0 0 0 0 rgba(0, 122, 255, 0.4);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 122, 255, 0.4);
  }
}
</style>
