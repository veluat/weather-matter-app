import React from 'react'
import {setDegrees} from '../../../app'
import {useAppDispatch} from '../../../hooks'
import s from './WeatherSwitcher.module.scss'

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
        °C
      </button>
      <button
        className={s.switcherBtn}
        onClick={() => handleLanguageChange('imperial')}
      >
        °F
      </button>
    </div>
  )
}