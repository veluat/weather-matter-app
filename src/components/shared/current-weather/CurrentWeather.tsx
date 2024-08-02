import React, {useContext} from 'react'
import s from './CurrentWeather.module.scss'
import {ResponseWeatherDataType, useAppSelector} from '../../../hooks'
import {WeatherImage} from '../weather-image'
import metric from '../../../assets/weather/metric.svg'
import imperial from '../../../assets/weather/imperial.svg'
import {degreesSelector} from '../../../services/weather-service/model/degreesSelector'
import data from '../../../data/ui-common-data/UiCommonData'
import {LocaleContext} from '../../../utils'
import {CommonBlock} from './common-block/CommonBlock'

type Props = {
  weatherData: ResponseWeatherDataType
}

export const CurrentWeather: React.FC<Props> = ({weatherData}) => {

  const {main, wind, name, weather, sys} = weatherData
  const {temp, humidity, pressure, feels_like, temp_min, temp_max} = main
  const {speed} = wind
  const {country, sunrise, sunset} = sys
  const {icon, description} = weather[0]

  const {degrees} = useAppSelector(degreesSelector)

  const {locale} = useContext(LocaleContext)
  const degreesImg = degrees === 'metric' ? metric : imperial

  const sunsetTime = useTime(sunset)
  const sunriseTime = useTime(sunrise)

  return (
    <div className={s.root}>
      <div className={s.basic}>
        <WeatherImage icon={icon}/>
        <div className={s.weatherDescription}>{description.charAt(0).toUpperCase() + description.slice(1)}
        </div>
        <div className={s.weatherTemp}>{Math.round(temp)}
          <img src={`${degreesImg}`} alt={'degrees'}/>
        </div>
        <div className={s.options}>
          <div className={s.temp}>
            <CommonBlock value={`${Math.round(temp_min)}`} title={data[locale].temp_min} type={'min'}
                         degreesImg={degreesImg}/>
            <CommonBlock value={`${Math.round(temp_max)}`} title={data[locale].temp_max} type={'max'}
                         degreesImg={degreesImg}/>
          </div>
          <div className={s.temp}>
            <CommonBlock value={sunriseTime} title={data[locale].sunrise}
                         type={'sunrise'}/>
            <CommonBlock value={sunsetTime} title={data[locale].sunset}
                         type={'sunset'}/>
          </div>
        </div>
      </div>
      <div className={s.additional}>
        <div className={s.weatherLocation}>{`${name}, ${country}`}</div>
        <div className={s.iconDataContainer}>
          <CommonBlock title={data[locale].feels} value={`${Math.round(feels_like)}`} type={'feels'}
                       degreesImg={degreesImg}/>
          <CommonBlock title={data[locale].humidity} value={`${humidity} %`} type={'humidity'}/>
          <CommonBlock title={data[locale].wind} value={`${Math.round(speed)} ${data[locale].speed}`} type={'wind'}/>
          <CommonBlock title={data[locale].pressure} value={`${Math.round(pressure)} ${data[locale].hPa}`}
                       type={'pressure'}/>
        </div>
      </div>
    </div>
  )
}

function useTime(value: number) {
  let date = new Date(value * 1000)

  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()

  return `${hours}:${minutes}:${seconds}`

}