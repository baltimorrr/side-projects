import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { allLanguages, defaultLanguages } from 'config'

export default function useLocales() {
  const { i18n, t: translate } = useTranslation()

  const languageStorage = localStorage.getItem('i18nextLng')

  const currentLang =
    allLanguages.find((lang) => lang.value === languageStorage) ||
    defaultLanguages

  const handleChangeLanguage = useCallback(
    (newLanguage) => {
      i18n.changeLanguage(newLanguage)
    },
    [i18n]
  )

  const handleTranslate = useCallback(
    (text, options) => translate(text, options),
    [translate]
  )

  return {
    onChangeLang: handleChangeLanguage,
    translate: handleTranslate,
    currentLang,
    allLanguages,
  }
}
