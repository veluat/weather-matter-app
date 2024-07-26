import React from 'react'
import {WeatherApp} from '../components/weather-app'
import s from './App.module.scss'

function App() {
  return (
    <div className={s.app}>
      <WeatherApp/>
    </div>
  )
}

export default App
