import s from '../language-switcher/LanguageSwitcher.module.scss'
import {setDegrees} from '../../../features/current-weather/model/slice/degreesSlice'
import {useAppDispatch} from '../../../hooks'
import {Icon} from '../icon'
import React from 'react'

type Props = {
  setIsModalActive: (active: boolean) => void
}
export const WeatherSwitcher: React.FC<Props> = ({setIsModalActive}) => {
  const dispatch = useAppDispatch()

  const handleLanguageChange = (newDegrees: 'metric' | 'imperial') => {
    dispatch(setDegrees(newDegrees))
    setIsModalActive(false)
  }

  return (
    <div className={s.switcherContainer}>
      <button
        className={s.switcherBtn}
        onClick={() => handleLanguageChange('metric')}
      >
        <Icon sprId={'metric'} width={50} height={50} />
      </button>
      <button
        className={s.switcherBtn}
        onClick={() => handleLanguageChange('imperial')}
      >
        <Icon sprId={'imperial'} width={50} height={50} viewBox={'0 0 24 24'}/>
      </button>
    </div>
  )
}