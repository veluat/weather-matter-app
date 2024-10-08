import React, {useContext} from 'react'
import s from './FiveDaysWeather.module.scss'
import {LocaleContext, UseErrorHandler} from '../../../../utils'
import {useGetForecastWeatherQuery} from '../../../../services'
import {useAppSelector} from '../../../../hooks'
import {degreesSelector} from '../../../../app'
import {locationSelector} from '../../../../app'
import {LoadingIndicator} from '../../../shared/loading-indicator'
import {WeatherImage} from '../../../shared/weather-image'
import {Icon} from '../../../shared/icon'
import moment from 'moment'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import UiCommonData from '../../../../locale-data/ui-common-data/UiCommonData'

export const FiveDaysWeather = () => {
  const {degrees} = useAppSelector(degreesSelector)
  const {location} = useAppSelector(locationSelector)
  const degreesID = degrees === 'metric' ? 'metric' : 'imperial'
  const {locale} = useContext(LocaleContext)

  const {data, error, isLoading} = useGetForecastWeatherQuery({
    location,
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    degrees,
    locale,
  })

  UseErrorHandler(error)

  if (isLoading) {
    return <LoadingIndicator/>
  }

  if (!data) {
    return null
  }
  moment.updateLocale('ru', {
    weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  })
  moment.locale(locale)

  return (
    <div className={s.root}>
      <p>{UiCommonData[locale].fiveDay}, {data.city.name}</p>
      <div className={s.container}>
        {data.list.filter(item => moment(item.dt_txt).format('HH:mm:ss') === '12:00:00').map((item, i) => {
          const formattedDateTime = moment(item.dt_txt).format('DD.MM.YYYY ddd')
          return (
            <div className={s.block} key={i}>
              <span className={s.largerSpan}>{formattedDateTime}</span>
              <WeatherImage icon={item.weather[0].icon}/>
              <div className={s.weatherTemp}>{Math.round(item.main.temp)}
                <Icon height={40} width={40} sprId={degreesID}/>
              </div>
              <span>{item.weather[0].description}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}