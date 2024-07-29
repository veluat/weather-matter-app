import React from 'react'
import s from './WeatherInfo.module.scss'
import {Humidity} from './humidity'
import {WindSpeed} from './wind-speed'
import {ResponseWeatherDataType} from '../../../hooks'
import {WeatherImage} from '../weather-image'

type Props = {
  weatherData: ResponseWeatherDataType
}

export const WeatherInfo: React.FC<Props> = ({weatherData}) => {

  const {main, wind, name, weather} = weatherData
  const {temp, humidity} = main
  const {speed} = wind
  const {icon} = weather

  return (
    <div className={s.dataContainer}>
      <WeatherImage icon={icon}/>
      <div className={s.weatherTemp}>{Math.round(temp)} °C</div>
      <div className={s.weatherLocation}>{name}</div>
      <div className={s.iconDataContainer}>
        <Humidity humidity={humidity}/>
        <WindSpeed speed={speed}/>
      </div>
    </div>
  )
}