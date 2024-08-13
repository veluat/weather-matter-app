import React from 'react'
import {WeatherApp} from '../components/shared/weather-app'
import s from './App.module.scss'
import {LocaleProvider, ThemeProvider} from '../utils'
import {store} from './store'
import {Provider} from 'react-redux'
import {AppWrapper} from './theme-provider'

function App() {
  return (
    <Provider store={store}>
      <LocaleProvider>
        <ThemeProvider>
          <div className={s.app}>
            <AppWrapper>
              <WeatherApp/>
            </AppWrapper>
          </div>
        </ThemeProvider>
      </LocaleProvider>
    </Provider>
  )
}

export default App
