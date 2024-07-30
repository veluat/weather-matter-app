import React, {createContext, ReactNode, useState} from 'react'

export type SupportedLocales = 'en' | 'ru';

type LocaleContextType = {
  locale: SupportedLocales;
  setLocale: (locale: SupportedLocales) => void;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: 'en',
  setLocale: () => {
  },
})

type LocaleProviderProps = {
  children: ReactNode;
};

const LocaleProvider = ({children}: LocaleProviderProps) => {
  const [locale, setLocale] = useState<SupportedLocales>('en')

  const value = {locale, setLocale}

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}

export {LocaleContext, LocaleProvider}
