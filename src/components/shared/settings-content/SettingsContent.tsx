import React, {useContext, useState} from 'react'
import s from './SettingsContent.module.scss'
import {LocaleContext} from '../../../utils'
import {LanguageSwitcher} from '../language-switcher'
import {WeatherSwitcher} from '../weather-switcher'
import {CloseButton} from '../close-button'
import {TimeZoneSelect} from '../time-zone-select'
import TimeData from './../../../data/time-data/TimeData'
import SettingsData from '../../../data/settings-data/SettingsData'
import {setTimeZone} from '../../../features/time-zone-service/model/timeZoneSlice'
import {useAppDispatch} from '../../../hooks'

type SettingsContentProps = {
  setIsModalActive: (isModalActive: boolean) => void
}

export const SettingsContent: React.FC<SettingsContentProps> = ({setIsModalActive}) => {
  const dispatch = useAppDispatch()
  const {locale} = useContext(LocaleContext)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  // const [selectedTimeZone, setSelectedTimeZone] = useState<{ label: string; utcOffset: number }>({
  //   label: 'UTC',
  //   utcOffset: 0
  // })
  const settingsHandler = (index: number) => {
    setSelectedIndex(index)
  }

  const handleTimeZoneChange = (timeZoneOption: { label: string; utcOffset: number }) => {
    dispatch(setTimeZone(timeZoneOption.utcOffset))
  }

  return (
    <div className={s.root}>
      <div className={s.close}>
        <CloseButton setIsModalActive={setIsModalActive}/>
      </div>
      {SettingsData[locale].label.map((label, index) => {
        return (
          <ul
            key={index}
            className={selectedIndex ? `${s.option} ${s.active}` : s.option}
            onClick={() => settingsHandler(index)}
          >
            {label}
            {selectedIndex === index && (
              <>
                {index === 0 && (
                  <li className={`${s.value} ${selectedIndex === index ? s.active : ''}`}>
                    <LanguageSwitcher setIsModalActive={setIsModalActive}/>
                  </li>
                )}
                {index === 1 && (
                  <li className={`${s.value} ${selectedIndex === index ? s.active : ''}`}>
                    <WeatherSwitcher setIsModalActive={setIsModalActive}/>
                  </li>
                )}
                {index === 2 && (
                  <li className={`${s.value} ${selectedIndex === index ? s.active : ''}`}>
                    <TimeZoneSelect
                      onTimeZoneChange={handleTimeZoneChange}
                      setIsModalActive={setIsModalActive}
                    />
                  </li>
                )}
                {index === 3 && (
                  <li className={`${s.value} ${selectedIndex === index ? s.active : ''}`}>
                    {TimeData[locale].timeZone[3].label}
                  </li>
                )}
              </>
            )}
          </ul>
        )
      })}
    </div>
  )
}