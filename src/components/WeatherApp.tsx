import React, {useEffect, useState} from 'react'
import s from './WeatherApp.module.scss'
import search_icon from '../assets/search.png'
import cloud_icon from '../assets/cloud.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'
import clear_icon from '../assets/clear.png'
import drizzle_icon from '../assets/drizzle.png'
import snow_icon from '../assets/snow.png'
import rain_icon from '../assets/rain.png'
import useWeatherData from '../hook/useWeatherData'

export const WeatherApp: React.FC = () => {
  const [location, setLocation] = useState('Minsk')
  const {weatherData, error, fetchWeatherData, isLoading} = useWeatherData()

  useEffect(() => {
    if (!weatherData && !isLoading) {
      const fetchData = async () => {
        await fetchWeatherData(location)
      }
      void fetchData()
    }
  }, [fetchWeatherData, location, weatherData, isLoading])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.currentTarget.value)
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
      <div className={s.container}>
        {error ? (
          <div className={s.errorMessage}>{error}</div>
        ) : (
          <div className={s.loadingMessage}>Loading...</div>
        )}
      </div>
    )
  }

  const {main, wind, name, weather} = weatherData
  const {temp, humidity} = main
  const {speed} = wind
  const [{icon}] = weather

  let weatherIconSrc
  switch (icon) {
    case '01d':
    case '01n':
      weatherIconSrc = clear_icon
      break
    case '02d':
    case '02n':
      weatherIconSrc = cloud_icon
      break
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      weatherIconSrc = drizzle_icon
      break
    case '09d':
    case '09n':
    case '10d':
    case '10n':
      weatherIconSrc = rain_icon
      break
    case '13d':
    case '13n':
      weatherIconSrc = snow_icon
      break
    default:
      weatherIconSrc = clear_icon
  }

  return (
    <div className={s.container}>
      <div className={s.topBar}>
        <input
          type='text'
          className={s.cityInput}
          placeholder='Search'
          value={location}
          onChange={handleInputChange}
        />
        <div className={s.seachIcon} onClick={handleSearch}>
          <img src={search_icon} alt='search'/>
        </div>
      </div>
      <div className={s.weatherImage}>
        <img src={weatherIconSrc} alt='weather'/>
      </div>
      <div className={s.weatherTemp}>{Math.round(temp)} °C</div>
      <div className={s.weatherLocation}>{name}</div>
      <div className={s.dataContainer}>
        <div className={s.element}>
          <img src={humidity_icon} alt='humidity' className={s.icon}/>
          <div className={s.data}>
            <div className={s.humidityPercent}>{humidity} %</div>
            <div className={s.text}>Humidity</div>
          </div>
        </div>
        <div className={s.element}>
          <img src={wind_icon} alt='wind' className={s.icon}/>
          <div className={s.data}>
            <div className={s.windRate}>{Math.round(speed)} km/h</div>
            <div className={s.text}>Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}