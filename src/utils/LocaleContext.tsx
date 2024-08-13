import React, {createContext, ReactNode, useState} from 'react'
import {useLocalStorage} from '../hooks'

export type SupportedLocales = 'en' | 'ru';

type LocaleContextType = {
  locale: SupportedLocales;
  setLocale: (locale: SupportedLocales) => void;
  time: Date;
  setTime: (time: Date) => void;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: 'en',
  setLocale: () => {
  },
  time: new Date(),
  setTime: () => {
  },
})

type LocaleProviderProps = {
  children: ReactNode;
};

const LocaleProvider = ({children}: LocaleProviderProps) => {
  const [locale, setLocale] = useLocalStorage<SupportedLocales>('locale', 'en')
  const [time, setTime] = useState<Date>(new Date())

  const value = {locale, setLocale, time, setTime}

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}

export {LocaleContext, LocaleProvider}