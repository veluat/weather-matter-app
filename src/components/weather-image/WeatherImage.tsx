import React from 'react'
import s from './WeatherImage.module.scss'
import {useWeatherIconSrc} from '../../hooks'

type Props = {
  icon: string
}
export const WeatherImage: React.FC<Props> = ({icon}) => {
  const weatherIconSrc = useWeatherIconSrc({icon});

  return (
    <div className={s.weatherImage}>
      <img src={weatherIconSrc} alt='weather'/>
    </div>
  )
}