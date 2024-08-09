import React, {useContext} from 'react'
import s from './HourlyWeather.module.scss'
import {LocaleContext} from '../../../utils'
import {useAppDispatch, useAppSelector} from '../../../hooks'
import UiCommonData from '../../../data/ui-common-data/UiCommonData'
import {degreesSelector} from '../../current-weather/model/selector/degreesSelector'
import {locationSelector} from '../../current-weather/model/selector/locationSelector'
import {LoadingIndicator} from '../../../components/shared/loading-indicator'
import {ResponseWeatherError} from '../../current-weather/service'
import {ErrorsData} from '../../../data'
import {ErrorMessage} from '../../../components/shared/error-message'
import {WeatherImage} from '../../../components/shared/weather-image'
import {Icon} from '../../../components/shared/icon'
import moment from 'moment'
import {useGetFiveDaysWeatherQuery} from '../../5-days-weather/service/fiveDaysService'
import Slider from 'react-slick'

export const HourlyWeather = () => {
  const dispatch = useAppDispatch()
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
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2, // Set rows to 1 to show only 3 items per row
    slidesPerRow: 1, // Ensure this is set to 1 to show only 3 items per row
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 1, // Adjust rows for responsive settings
          slidesPerRow: 1, // Adjust slides per row for responsive settings
        },
      },
    ],
  }


  return (
    <div className={s.root}>
      <p>{UiCommonData[locale].hourly}, {data.city.name}</p>
      <div className={s.carouselContainer}>
        <Slider {...settings}>
          {data.list.map((item, i) => {

            const formattedTime = moment(item.dt_txt).format('HH:mm')
            const formattedDateTime = moment(item.dt_txt).format('DD.MM.YYYY ddd')
            return (
              <div className={s.block} key={i}>
              <span>
                <Icon sprId={'clock'} viewBox={'0 0 32 32'} width={16} height={16} fill={'#FFFF00FF'}/>
                {formattedTime}
              </span>
                <span>{formattedDateTime}</span>
                <WeatherImage icon={item.weather[0].icon}/>
                <div className={s.weatherTemp}>{Math.round(item.main.temp)}
                  <Icon height={40} width={40} sprId={degreesID}/>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}