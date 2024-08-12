import React, {useContext} from 'react'
import s from './TimeSwitcher.module.scss'
import {ThemeContext} from '../../../utils'

type Props = {
  setIsModalActive: (active: boolean) => void;
};

export const ThemeSwitcher: React.FC<Props> = ({setIsModalActive}) => {
  const {setTheme} = useContext(ThemeContext)

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme)
    setIsModalActive(false)
  }

  return (
    <div className={s.switcherContainer}>
      <button className={s.switcherBtn} onClick={() => handleThemeChange('light')}>
        Light
      </button>
      <button className={s.switcherBtn} onClick={() => handleThemeChange('dark')}>
        Dark
      </button>
    </div>
  )
}