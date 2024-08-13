import React, {useContext} from 'react'
import s from './WeatherApp.module.scss'
import {Header} from '../../layout/header'
import {Layout} from '../../layout/layout'
import {Footer} from '../../layout/footer'
import {useGetCurrentWeatherQuery} from '../../../services'
import {LocaleContext} from '../../../utils'
import {useAppDispatch, useAppSelector} from '../../../hooks'
import {degreesSelector} from '../../../app'
import {locationSelector} from '../../../app'
import {setLocation} from '../../../app'
import {UseErrorHandler} from '../../../utils'
import {LoadingIndicator} from '../loading-indicator'

export const WeatherApp: React.FC = () => {
  const dispatch = useAppDispatch()
  const {locale} = useContext(LocaleContext)
  const {degrees} = useAppSelector(degreesSelector)
  const {location} = useAppSelector(locationSelector)

  const {data: weatherData, error, isLoading, refetch} = useGetCurrentWeatherQuery({
    location,
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    degrees,
    locale,
  })

  const errorNotification = UseErrorHandler(error)

  const handleSearch = async (value: string) => {
    try {
      dispatch(setLocation(value))
      await refetch()
    } catch (err) {
      console.error('Error fetching current-weather-img locale-data:', err)
    }
  }

  if (isLoading) {
    return <LoadingIndicator/>
  }

  if (!weatherData) {
    return null
  }

  return (
    <div className={s.root}>
      <Header
        isLoading={isLoading}
        error={errorNotification ? errorNotification : null}
        dt={weatherData.dt}
      />
      <Layout
        handleSearch={handleSearch}
        weatherData={weatherData}
      />
      <Footer/>
    </div>
  )
}