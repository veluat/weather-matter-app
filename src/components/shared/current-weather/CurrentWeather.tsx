import React from 'react'
import s from './CurrentWeather.module.scss'
import {Humidity} from './humidity'
import {WindSpeed} from './wind-speed'
import {ResponseWeatherDataType} from '../../../hooks'
import {WeatherImage} from '../weather-image'
import {useAppSelector} from '../../../hooks'
import metric from '../../../assets/weather/metric.svg'
import imperial from '../../../assets/weather/imperial.svg'
import {degreesSelector} from '../../../services/weather-service/model/degreesSelector'

type Props = {
  weatherData: ResponseWeatherDataType
}

export const CurrentWeather: React.FC<Props> = ({weatherData}) => {

  const {main, wind, name, weather} = weatherData
  const {temp, humidity} = main
  const {speed} = wind
  const {icon} = weather
  const {degrees} = useAppSelector(degreesSelector)
  const degreesImg = degrees === 'metric' ? metric : imperial

  return (
    <>
      <WeatherImage icon={icon}/>
      <div className={s.weatherTemp}>{Math.round(temp)}
        <img src={`${degreesImg}`} alt={degrees}/>
      </div>
      <div className={s.weatherLocation}>{name}</div>
      <div className={s.iconDataContainer}>
        <Humidity humidity={humidity}/>
        <WindSpeed speed={speed}/>
      </div>
    </>
  )
}