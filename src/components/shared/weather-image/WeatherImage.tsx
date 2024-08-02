import React from 'react'
import s from './WeatherImage.module.scss'
import {useWeatherIcon} from '../../../hooks'

type Props = {
  icon: string
}
export const WeatherImage: React.FC<Props> = ({icon}) => {
  const weatherIconSrc = useWeatherIcon({icon})

  return (
    <div className={s.root}>
      <img className={s.weatherImage} src={weatherIconSrc} alt='weather'/>
    </div>
  )
}