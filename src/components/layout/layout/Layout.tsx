import React, {useContext, useState} from 'react'
import {SearchBar} from '../../shared/search-bar'
import {CurrentWeather} from '../../../features/current-weather/ui'
import s from './Layout.module.scss'
import {FiveDaysWeather} from '../../../features/5-days-weather/ui'
import data from '../../../data/ui-common-data/UiCommonData'
import {LocaleContext} from '../../../utils'
import {CommonButton} from '../../shared/common-button'
import {ResponseWeatherDataType} from '../../../features/current-weather/service'
import {HourlyWeather} from '../../../features/hourly-weather/ui'

type Props = {
  handleInputChange: (value: React.ChangeEvent<HTMLInputElement>) => void,
  handleSearch: () => void
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
  weatherData: ResponseWeatherDataType
}

export const Layout: React.FC<Props> = ({ handleInputChange, handleSearch, handleKeyDown, weatherData}) => {
  const [activeComponent, setActiveComponent] = useState<'current' | 'forecast' | 'hourly'>('current')
  const {locale} = useContext(LocaleContext)

  const handleButtonClick = (component: 'current' | 'forecast' | 'hourly') => {
    setActiveComponent(component)
  }
  return (
    <div className={s.root}>
      <div className={s.details}>
        <SearchBar
                   handleInputChange={handleInputChange}
                   handleSearch={handleSearch}
                   onKeyDown={handleKeyDown}/>
        <div className={s.block}>
          <CommonButton width={35} height={35} sprId={'current'} title={`${data[locale].current}`}
                        handleButtonClick={() => handleButtonClick('current')}/>
          <CommonButton width={35} height={35} sprId={'hourly'} title={`${data[locale].hourly}`}
                        handleButtonClick={() => handleButtonClick('hourly')}/>
          <CommonButton width={35} height={35} sprId={'5-day'} title={`${data[locale].fiveDay}`}
                        handleButtonClick={() => handleButtonClick('forecast')}/>
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