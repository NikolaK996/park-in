import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'
import { DEFAULT_LANGUAGE } from '@/stores/languages/constants/defaultLanguage'
import { AVAILABLE_LANGUAGES } from '@/stores/languages/constants/availableLanguages'
import { useLocalStorage } from '@vueuse/core'

export const useLanguagesStore = defineStore('languages', () => {
  const currentLanguage = useLocalStorage('lang', DEFAULT_LANGUAGE)
  const availableLanguages = AVAILABLE_LANGUAGES
  const i18n = useI18n()

  function changeLanguage(languageCode) {
    currentLanguage.value = languageCode
    i18n.locale.value = languageCode
  }

  // since user can directly change value in local storage, it's good to validity check it first.
  function checkIsCurrentLanguageValid() {
    const isCurrentLanguageValid = availableLanguages.some(
      (item) => item.code === currentLanguage.value
    )

    if (!isCurrentLanguageValid) {
      currentLanguage.value = DEFAULT_LANGUAGE
    }
  }

  return {
    currentLanguage,
    availableLanguages,
    changeLanguage,
    checkIsCurrentLanguageValid
  }
})
