import {useContext, useEffect, useState} from 'react'
import {LocaleContext, SupportedLocales} from '../utils'

export const LanguageHandler = () => {
  const { setLocale } = useContext(LocaleContext)
  const [storedLocale, setStoredLocale] = useState<SupportedLocales | null>(null)

  useEffect(() => {
    const savedLocale: SupportedLocales | null = localStorage.getItem('preferredLocale') as SupportedLocales | null
    if (savedLocale) {
      setStoredLocale(savedLocale)
      setLocale(savedLocale)
    }
  }, [setLocale])

  useEffect(() => {
    if (storedLocale) {
      localStorage.setItem('preferredLocale', storedLocale)
    }
  }, [storedLocale])

  return null
}