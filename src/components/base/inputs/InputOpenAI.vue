<template>
  <div class="relative">
    <input-search enable-voice-search @search="submit" />
  </div>

  <span>
    {{ answer }}
  </span>
  <img :src="image" />
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Configuration, OpenAIApi } from 'openai'
import InputSearch from '@/components/base/inputs/InputSearch.vue'

export default defineComponent({
  name: 'InputOpenAI',
  components: { InputSearch },
  setup() {
    const configuration = new Configuration({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY
    })
    const openai = new OpenAIApi(configuration)

    const image = ref('')
    const answer = ref('')
    const submit = async (searchedValue) => {
      if (!searchedValue) {
        return
      }

      try {
        const { data } = await openai.createCompletion({
          model: 'text-davinci-003',
          prompt: searchedValue,
          max_tokens: 1000,
          temperature: 0.9,
          top_p: 1,
          n: 1,
          stream: false,
          logprobs: null
        })

        const response = await openai.createImage({
          prompt: searchedValue,
          n: 1,
          size: '256x256'
        })

        const firstChoice = data.choices[0]
        answer.value = firstChoice?.text ?? 'invalid text'
        image.value = response.data?.data[0]?.url ?? ''
      } catch (error) {
        console.warn(error)
      }
    }

    return {
      answer,
      image,
      submit
    }
  }
})
</script>