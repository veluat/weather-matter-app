import React, {useContext} from 'react'
import s from './FiveDaysWeather.module.scss'
import {LocaleContext} from '../../../utils'
import {useGetFiveDaysWeatherQuery} from '../service/fiveDaysService'
import {useAppSelector} from '../../../hooks'
import {degreesSelector} from '../../current-weather/model/selector/degreesSelector'
import {locationSelector} from '../../current-weather/model/selector/locationSelector'
import {LoadingIndicator} from '../../../components/shared/loading-indicator'
import {ResponseWeatherError} from '../../current-weather/service'
import {ErrorsData} from '../../../data'
import {ErrorMessage} from '../../../components/shared/error-message'
import {WeatherImage} from '../../../components/shared/weather-image'
import {Icon} from '../../../components/shared/icon'
import moment from 'moment'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import UiCommonData from '../../../data/ui-common-data/UiCommonData'

export const FiveDaysWeather = () => {
  const {degrees} = useAppSelector(degreesSelector)
  const {location} = useAppSelector(locationSelector)
  const degreesID = degrees === 'metric' ? 'metric' : 'imperial'
  const {locale} = useContext(LocaleContext)

  const {data, error, isLoading, refetch} = useGetFiveDaysWeatherQuery({
    location,
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    degrees,
    locale,
  })

  if (isLoading) {
    return <LoadingIndicator/>
  }

  if (error) {
    let errorMessage = 'An error occurred while fetching the weather data.'
    if (
      typeof error === 'object' &&
      'data' in error &&
      typeof error.data === 'object' &&
      error.data !== null &&
      'cod' in error.data
    ) {
      const errorData = error.data as ResponseWeatherError
      if (errorData.cod === '404') {
        errorMessage = ErrorsData[locale].mistake
      } else {
        errorMessage = ErrorsData[locale].try
      }
    }
    return <ErrorMessage message={errorMessage}/>
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