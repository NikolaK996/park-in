import { createI18n } from 'vue-i18n'
import { DEFAULT_LANGUAGE } from '@/stores/languages/constants/defaultLanguage'
import { en } from './en'
import { sr } from './sr'
import { sl } from './sl'

export function createLanguagePlugin() {
  return createI18n({
    legacy: false,
    globalInjection: true,
    locale: DEFAULT_LANGUAGE,
    fallbackLocale: DEFAULT_LANGUAGE,
    messages: {
      en,
      sr,
      sl
    }
  })
}
