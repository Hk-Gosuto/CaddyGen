import { createI18n } from 'vue-i18n'
import en from './locales/en'
import zh from './locales/zh'

const getBrowserLanguage = () => {
  const lang = navigator.language
  if (lang.startsWith('zh')) return 'zh'
  return 'en'
}

export const i18n = createI18n({
  legacy: false,
  locale: getBrowserLanguage(),
  fallbackLocale: 'en',
  messages: {
    en,
    zh
  }
})