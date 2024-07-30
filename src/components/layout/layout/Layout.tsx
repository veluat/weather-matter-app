import React from 'react'
import {SearchBar} from '../../shared/search-bar'
import {WeatherInfo} from '../../shared/weather-info'
import s from './Layout.module.scss'
import {HourlyWeather} from '../../shared/hourly-weather'
import {SevenDays} from '../../shared/seven-days'
import {ResponseWeatherDataType} from '../../../hooks'

type Props = {
  location: string
  handleInputChange: (value: React.ChangeEvent<HTMLInputElement>) => void,
  handleSearch: () => void
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
  weatherData: ResponseWeatherDataType
}

export const Layout: React.FC<Props> = ({location, handleInputChange, handleSearch, handleKeyDown, weatherData}) => {

  return (
    <div className={s.root}>
      <div className={s.details}>
        <SearchBar value={location}
                   handleInputChange={handleInputChange}
                   handleSearch={handleSearch}
                   onKeyDown={handleKeyDown}/>
        <div className={s.block}>
          <HourlyWeather/>
          <SevenDays/>
        </div>
      </div>
      <WeatherInfo weatherData={weatherData}/>
    </div>
  )
}