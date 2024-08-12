import React, {useContext} from 'react'
import s from './HourlyWeather.module.scss'
import {LocaleContext, UseErrorHandler} from '../../../../utils'
import {useAppSelector} from '../../../../hooks'
import UiCommonData from '../../../../locale-data/ui-common-data/UiCommonData'
import {degreesSelector, locationSelector} from '../../../../app'
import {LoadingIndicator} from '../../../shared/loading-indicator'
import {WeatherImage} from '../../../shared/weather-image'
import {Icon} from '../../../shared/icon'
import moment from 'moment'
import Slider from 'react-slick'
import {useGetForecastWeatherQuery} from '../../../../services'

export const HourlyWeather = () => {
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
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          slidesPerRow: 1,
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