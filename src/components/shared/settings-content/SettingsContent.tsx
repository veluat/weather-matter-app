import React, {useContext, useState} from 'react'
import s from './SettingsContent.module.scss'
import data from '../../../data/settings-data/SettingsData'
import {LocaleContext} from '../../../utils'
import {LanguageSwitcher} from '../language-switcher'
import {WeatherSwitcher} from '../weather-switcher'
import {TimeZoneWidget} from '../time-zone-widget/TimeZoneWidget'

export const SettingsContent = () => {
  const {locale} = useContext(LocaleContext)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const settingsHandler = (index: number) => {
    setSelectedIndex(index)
  }

  return (
    <div className={s.root}>
      {data[locale].label.map((label, index) => {
        return (
          <ul
            key={index}
            className={selectedIndex ? `${s.option} ${s.active}` : s.option}
            onClick={() => settingsHandler(index)}
          >
            {label}
            {selectedIndex === index && (
              <>
                {index === 0 &&
                  <li className={`${s.value} ${selectedIndex === index ? s.active : ''}`}><LanguageSwitcher/></li>}
                {index === 1 &&
                  <li className={`${s.value} ${selectedIndex === index ? s.active : ''}`}><WeatherSwitcher/></li>}
                {index === 2 &&
                  <li className={`${s.value} ${selectedIndex === index ? s.active : ''}`}>{data[locale].label[2]}</li>}
                {index === 3 &&
                  <li className={`${s.value} ${selectedIndex === index ? s.active : ''}`}>{data[locale].label[3]}</li>}

              </>
            )}
          </ul>
        )
      })}
    </div>
  )
}