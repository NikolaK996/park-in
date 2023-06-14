import { createI18n } from 'vue-i18n'

import { en } from './en'
import { sl } from './sl'
import { sr } from './sr'

import { DEFAULT_LANGUAGE } from '@/stores/languages/constants/defaultLanguage'

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
