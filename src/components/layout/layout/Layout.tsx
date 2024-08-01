import React, {useContext, useState} from 'react'
import {SearchBar} from '../../shared/search-bar'
import {CurrentWeather} from '../../shared/current-weather'
import s from './Layout.module.scss'
import {HourlyWeather} from '../../shared/hourly-weather'
import {FiveDaysWeather} from '../../shared/5-days-weather'
import {ResponseWeatherDataType} from '../../../hooks'
import data from '../../../data/ui-common-data/UiCommonData'
import {LocaleContext} from '../../../utils'
import {CommonButton} from '../../shared/common-button'

type Props = {
  location: string
  handleInputChange: (value: React.ChangeEvent<HTMLInputElement>) => void,
  handleSearch: () => void
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
  weatherData: ResponseWeatherDataType
}

export const Layout: React.FC<Props> = ({location, handleInputChange, handleSearch, handleKeyDown, weatherData}) => {
  const [activeComponent, setActiveComponent] = useState<'current' | 'forecast' | 'hourly'>('current')
  const {locale} = useContext(LocaleContext)

  const handleButtonClick = (component: 'current' | 'forecast' | 'hourly') => {
    setActiveComponent(component)
  }
  return (
    <div className={s.root}>
      <div className={s.details}>
        <SearchBar value={location}
                   handleInputChange={handleInputChange}
                   handleSearch={handleSearch}
                   onKeyDown={handleKeyDown}/>
        <div className={s.block}>
          <CommonButton title={`${data[locale].current}`} handleButtonClick={() => handleButtonClick('current')}/>
          <CommonButton title={`${data[locale].hourly}`} handleButtonClick={() => handleButtonClick('hourly')}/>
          <CommonButton title={`${data[locale].fiveDay}`} handleButtonClick={() => handleButtonClick('forecast')}/>
        </div>
      </div>
      <div className={s.dataContainer}>
        {activeComponent === 'current' && <CurrentWeather weatherData={weatherData}/>}
        {activeComponent === 'hourly' && <HourlyWeather/>}
        {activeComponent === 'forecast' && <FiveDaysWeather/>}
      </div>
    </div>
  )
}