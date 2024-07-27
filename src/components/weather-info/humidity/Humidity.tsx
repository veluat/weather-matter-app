import React from 'react'
import s from './Humidity.module.scss'
import humidity_icon from './../../../assets/humidity.png'

type Props = {
  humidity: number
}
export const Humidity: React.FC<Props> = ({humidity}) => {
  return (
    <div className={s.element}>
      <div className={s.data}>
        <img src={humidity_icon} alt='humidity' className={s.icon}/>
        <span>{humidity} %</span>
      </div>
      <div className={s.text}>Humidity</div>
    </div>
  )
}