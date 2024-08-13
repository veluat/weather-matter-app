import React, {useContext, useState} from 'react'
import {SearchBar} from '../../shared/search-bar'
import {CurrentWeather} from './current-weather'
import s from './Layout.module.scss'
import {FiveDaysWeather} from './5-days-weather'
import data from '../../../locale-data/ui-common-data/UiCommonData'
import {LocaleContext} from '../../../utils'
import {CommonButton} from '../../shared/common-button'
import {ResponseWeatherDataType} from '../../../services'
import {HourlyWeather} from './hourly-weather'

type Props = {
  handleSearch: (value: string) => void;
  weatherData: ResponseWeatherDataType
}

export const Layout: React.FC<Props> = ({handleSearch, weatherData}) => {
  const [activeComponent, setActiveComponent] = useState<'current' | 'forecast-api' | 'hourly'>('current')
  const {locale} = useContext(LocaleContext)

  const handleButtonClick = (component: 'current' | 'forecast-api' | 'hourly') => {
    setActiveComponent(component)
  }
  return (
    <div className={s.root}>
      <div className={s.details}>
        <SearchBar
          handleSearch={handleSearch}
        />
        <div className={s.block}>
          <CommonButton width={35} height={35} sprId={'current'} title={`${data[locale].current}`}
                        handleButtonClick={() => handleButtonClick('current')}/>
          <CommonButton width={35} height={35} sprId={'hourly'} title={`${data[locale].hourly}`}
                        handleButtonClick={() => handleButtonClick('hourly')}/>
          <CommonButton width={35} height={35} sprId={'5-day'} title={`${data[locale].fiveDay}`}
                        handleButtonClick={() => handleButtonClick('forecast-api')}/>
        </div>
      </div>
      <div className={s.dataContainer}>
        {activeComponent === 'current' && <CurrentWeather weatherData={weatherData}/>}
        {activeComponent === 'hourly' && <HourlyWeather/>}
        {activeComponent === 'forecast-api' && <FiveDaysWeather/>}
      </div>
    </div>
  )
}