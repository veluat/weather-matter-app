import React, {createContext, ReactNode} from 'react'
import {useLocalStorage} from '../hooks'

export type SupportedThemes = 'light' | 'dark';

type ThemeContextType = {
  theme: SupportedThemes;
  setTheme: (theme: SupportedThemes) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {
  },
})

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [theme, setTheme] = useLocalStorage<SupportedThemes>('theme', 'light')

  const value = {theme, setTheme}

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}