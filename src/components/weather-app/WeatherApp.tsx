import React, {useEffect, useState} from 'react'
import s from './WeatherApp.module.scss'
import useWeatherData from '../../hooks/useWeatherData'
import {LoadingIndicator} from '../loading-indicator'
import {SearchBar} from '../search-bar'
import {Header} from '../header'
import {WeatherInfo} from '../weather-info'
import {ErrorMessage} from '../error-message'
import {HourlyWeather} from '../hourly-weather'
import {SevenDays} from '../seven-days'

export const WeatherApp: React.FC = () => {
  const [location, setLocation] = useState('')
  const {weatherData, error, fetchWeatherData, isLoading} = useWeatherData()

  useEffect(() => {
    const initializeWeatherData = async () => {
      try {
        await fetchWeatherData('Minsk')
      } catch (err) {
        console.error('Error fetching weather data:', err)
      }
    }
    initializeWeatherData().catch((err) => {
      console.error('Error in initializeWeatherData:', err)
    })
  }, [fetchWeatherData])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.currentTarget.value)
  }

  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      try {
        await handleSearch()
      } catch (err) {
        console.error('Error fetching weather data:', err)
      }
    }
  }

  const handleSearch = async () => {
    try {
      await fetchWeatherData(location)
    } catch (err) {
      console.error('Error fetching weather data:', err)
    }
  }

  if (!weatherData) {
    return (
      <>
        {error ? <ErrorMessage message={error}/> : <LoadingIndicator/>}
      </>
    )
  }

  return (
    <div className={s.root}>
      <Header isLoading={isLoading} error={error}/>

      <SearchBar value={location}
                 handleInputChange={handleInputChange}
                 handleSearch={handleSearch}
                 onKeyDown={handleKeyDown}/>
      <WeatherInfo weatherData={weatherData}/>
      <div className={s.block}>
        <HourlyWeather/>
        <SevenDays/>
      </div>
    </div>
  )
}