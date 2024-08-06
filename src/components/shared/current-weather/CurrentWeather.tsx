import React, {useContext} from 'react'
import s from './CurrentWeather.module.scss'
import {ResponseWeatherDataType, useAppSelector} from '../../../hooks'
import {WeatherImage} from '../weather-image'
import metric from '../../../assets/current-weather-img/metric.svg'
import imperial from '../../../assets/current-weather-img/imperial.svg'
import {degreesSelector} from '../../../services/weather-service/model/degreesSelector'
import data from '../../../data/ui-common-data/UiCommonData'
import {LocaleContext} from '../../../utils'
import {CommonBlock} from './common-block/CommonBlock'
import location_img from '../../../assets/details/location.svg'
import weather_img from '../../../assets/wheater.svg'
import {Icon} from '../icon'

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
  const degreesID = degrees === 'metric' ? 'metric' : 'imperial'

  const sunsetTime = useTime(sunset)
  const sunriseTime = useTime(sunrise)

  return (
    <div className={s.root}>
      <div className={s.basic}>
        <WeatherImage icon={icon}/>
        <div className={s.description}>
          <Icon height={30} sprId={'details'} width={30}/>
          <div className={s.weatherDescription}>{description.charAt(0).toUpperCase() + description.slice(1)}
          </div>
        </div>
        <div className={s.weatherTemp}>{Math.round(temp)}
          <Icon height={72} width={72} sprId={degreesID}/>
        </div>
        <div className={s.options}>
          <div className={s.temp}>
            <CommonBlock value={`${Math.round(temp_min)}`} title={data[locale].temp_min} sprId={'min'} degreesID={degreesID}
                         />
            <CommonBlock value={`${Math.round(temp_max)}`} title={data[locale].temp_max} sprId={'max'} degreesID={degreesID}
                         />
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
        <div className={s.weatherLocation}>
          <Icon sprId={'location'} height={35} width={35}/>{`${name}, ${country}`}
        </div>
        <div className={s.iconDataContainer}>
          <CommonBlock title={data[locale].feels} value={`${Math.round(feels_like)}`} sprId={'feels'} degreesID={degreesID} viewBox="0 0 32 32"/>
          <CommonBlock title={data[locale].humidity} value={`${humidity} %`} sprId={'humidity'} viewBox={'0 0 24 24'}/>
          <CommonBlock title={data[locale].wind} value={`${Math.round(speed)} ${data[locale].speed}`} sprId={'wind'} viewBox={'0 0 24 24'}/>
          <CommonBlock title={data[locale].pressure} value={`${Math.round(pressure)} ${data[locale].hPa}`} sprId={'pressure'}/>
        </div>
      </div>
    </div>
  )
}

function useTime(value: number) {
  let date = new Date(value * 1000)

  let hours = date.getHours()
  let minutes = date.getMinutes()

  return `${hours}:${minutes}`

}