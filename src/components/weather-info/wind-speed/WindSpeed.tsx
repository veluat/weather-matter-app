import React from 'react'
import s from './WindSpeed.module.scss'
import wind_icon from './../../../assets/wind.png'

type Props = {
  speed: number
}

export const WindSpeed: React.FC<Props> = ({speed}) => {
  return (
    <div className={s.element}>
      <div className={s.data}>
        <img src={wind_icon} alt='wind' className={s.icon}/>
        <div className={s.windRate}>{Math.round(speed)} km/h</div>
      </div>
      <div className={s.text}>Wind Speed</div>
    </div>
  )
}