import React, {useContext, useState} from 'react'
import s from './WeatherApp.module.scss'
import {LoadingIndicator} from '../loading-indicator'
import {Header} from '../../layout/header'
import {ErrorMessage} from '../error-message'
import {Layout} from '../../layout/layout'
import {Footer} from '../../layout/footer'
import {useGetCurrentWeatherQuery} from '../../../features/current-weather/service/weatherService'
import {LocaleContext} from '../../../utils'
import {useAppDispatch, useAppSelector} from '../../../hooks'
import {degreesSelector} from '../../../features/current-weather/model/selector/degreesSelector'
import {locationSelector} from '../../../features/current-weather/model/selector/locationSelector'
import {setLocation} from '../../../features/current-weather/model/slice/locationSlice'
import {ErrorsData} from '../../../data'
import {ResponseWeatherError} from '../../../features/current-weather/service'

export const WeatherApp: React.FC = () => {
  const dispatch = useAppDispatch()
  const {locale} = useContext(LocaleContext)
  const {degrees} = useAppSelector(degreesSelector)
  const {location} = useAppSelector(locationSelector)
  const [inputValue, setInputValue] = useState('');
  const {data: weatherData, error, isLoading, refetch} = useGetCurrentWeatherQuery({
    location,
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    degrees,
    locale,
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  }

const handleKeyDown = async () => {
    try {
      await refetch()
    } catch (err) {
      console.error('Error fetching current-weather-img data:', err)
    }

}

const handleSearch = async () => {
  try {
    dispatch(setLocation(inputValue));
    await refetch()
  } catch (err) {
    console.error('Error fetching current-weather-img data:', err)
  }
}

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

if (!weatherData) {
  return null
}

return (
  <div className={s.root}>
    <Header
      isLoading={isLoading}
      error={error ? error : null}
      timezone={weatherData.timezone}
      dt={weatherData.dt}
    />
    <Layout
      handleInputChange={handleInputChange}
      handleSearch={handleSearch}
      handleKeyDown={handleKeyDown}
      weatherData={weatherData}
    />
    <Footer/>
  </div>
)
}