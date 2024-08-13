import React, {useContext, useState} from 'react'
import s from './SettingsContent.module.scss'
import {LocaleContext} from '../../../utils'
import {LanguageSwitcher} from '../language-switcher'
import {WeatherSwitcher} from '../weather-switcher'
import {CloseButton} from '../close-button'
import {TimeZoneSelect} from '../time-zone-select'
import SettingsData from '../../../locale-data/settings-data/SettingsData'
import {ThemeSwitcher} from '../theme-switcher'

type SettingsContentProps = {
  setIsModalActive: (isModalActive: boolean) => void
}

export const SettingsContent: React.FC<SettingsContentProps> = ({setIsModalActive}) => {
  const {locale} = useContext(LocaleContext)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const settingsHandler = (index: number) => {
    setSelectedIndex(index)
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
                    <TimeZoneSelect
                      setIsModalActive={setIsModalActive}
                    />
                  </li>
                )}
                {index === 1 && (
                  <li className={`${s.value} ${selectedIndex === index ? s.active : ''}`}>
                    <LanguageSwitcher setIsModalActive={setIsModalActive}/>
                  </li>
                )}
                {index === 2 && (
                  <li className={`${s.value} ${selectedIndex === index ? s.active : ''}`}>
                    <WeatherSwitcher setIsModalActive={setIsModalActive}/>
                  </li>
                )}
                {index === 3 && (
                  <li className={`${s.value} ${selectedIndex === index ? s.active : ''}`}>
                    <ThemeSwitcher setIsModalActive={setIsModalActive}/>
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