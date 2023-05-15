<template>
  <div class="relative">
    <input-search
      :results="results"
      :value="value"
      enable-voice-search
      @input="$emit('input', $event)"
      @search="$emit('search')"
      @select="$emit('select', $event)"
      @voice-search="submit"
    />
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'
import { useSpeechSynthesis } from '@vueuse/core'
import { Configuration, OpenAIApi } from 'openai'
import InputSearch from '@/components/base/inputs/InputSearch.vue'
import { toast } from 'vue3-toastify'

defineProps({
  value: { type: String, required: true },
  results: { type: Array, required: true }
})
defineEmits(['input', 'search', 'select'])

// solves following issue: https://github.com/openai/openai-node/issues/75
class MockedFormData extends FormData {
  getHeaders() {
    return {}
  }
}

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  formDataCtor: MockedFormData
})
const openai = new OpenAIApi(configuration)

async function submit(audioFile) {
  if (!audioFile) {
    return
  }

  try {
    toast.loading('AI is processing your input', {
      autoClose: false
    })

    const {
      data: { text }
    } = await openai.createTranscription(audioFile, 'whisper-1', null, 'json', 0, 'en')

    const { data } = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt:
        'answer short like a futuristic speech assistance for car drivers. Please only answer about electrical cars!' +
        'User input is: ' +
        text,
      max_tokens: 1000,
      temperature: 0.9,
      top_p: 1,
      n: 1,
      stream: false,
      logprobs: null
    })

    const firstChoice = data.choices[0]
    const answer = firstChoice?.text ?? 'invalid text'

    toast.remove()
    toast.success(answer)
    const speech = useSpeechSynthesis(answer, { lang: 'en-US' })

    if (speech.isSupported.value) {
      speech.speak()
    }
  } catch (error) {
    toast.remove()
    toast.error(error.response?.data?.error?.message ?? 'An error occurred processing your input')
  }
}
</script>