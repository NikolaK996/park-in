<template>
  <div>
    <InputOpenAI />
  </div>
</template>

<script>
import InputOpenAI from '@/components/base/inputs/InputOpenAI.vue'

class webkitSpeechRecognition {}

export default {
  components: { InputOpenAI },
  data() {
    return {
      recognition: null,
      listening: false
    }
  },
  beforeUnmount() {
    if (this.recognition) {
      this.recognition.stop()
    }
  },
  methods: {
    searchHandler(searchQuery) {
      // TODO handle the search
      console.log('Searching for:', searchQuery)
    },
    startListening() {
      if (!('webkitSpeechRecognition' in window)) {
        alert('Your browser does not support speech recognition. Please try Google Chrome.')
        return
      }

      if (!this.listening) {
        this.listening = true
        this.recognition = new webkitSpeechRecognition()
        this.recognition.continuous = false
        this.recognition.interimResults = false
        this.recognition.lang = 'en-US'

        this.recognition.onresult = (event) => {
          const searchQuery = event.results[0][0].transcript
          this.searchHandler(searchQuery)
        }

        this.recognition.onerror = (event) => {
          console.error('Speech recognition error:', event)
          this.listening = false
        }

        this.recognition.onend = () => {
          this.listening = false
        }

        this.recognition.start()
      } else {
        this.recognition.stop()
        this.listening = false
      }
    }
  }
}
</script>