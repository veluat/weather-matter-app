import React from 'react'
import {WeatherApp} from '../components/shared/weather-app'
import s from './App.module.scss'
import {LocaleProvider} from '../utils'
import {ThemeProvider} from '../utils'
import {LanguageHandler} from './LanguageHandler'
import {store} from './store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <LocaleProvider>
        <LanguageHandler/>
        <ThemeProvider>
          <div className={s.app}>
            <WeatherApp/>
          </div>
        </ThemeProvider>
      </LocaleProvider>
    </Provider>
  )
}

export default App
