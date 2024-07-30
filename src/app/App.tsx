import React from 'react'
import {WeatherApp} from '../components/shared/weather-app'
import s from './App.module.scss'
import {LocaleProvider} from '../utils'
import {ThemeProvider} from '../utils'
import {LanguageHandler} from './LanguageHandler'

function App() {
  return (
    <LocaleProvider>
      <LanguageHandler />
      <ThemeProvider>
        <div className={s.app}>
          <WeatherApp/>
        </div>
      </ThemeProvider>
    </LocaleProvider>
  )
}

export default App
