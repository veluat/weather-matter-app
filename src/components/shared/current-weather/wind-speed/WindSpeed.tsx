import React, {useContext} from 'react'
import s from './WindSpeed.module.scss'
import wind_icon from '../../../../assets/wind.png'
import data from './../../../../data/ui-common-data/UiCommonData'
import {LocaleContext} from '../../../../utils'

type Props = {
  speed: number
}

export const WindSpeed: React.FC<Props> = ({speed}) => {
  const {locale} = useContext(LocaleContext)

  return (
    <div className={s.element}>
      <div className={s.data}>
        <img src={wind_icon} alt='wind' className={s.icon}/>
        <div className={s.windRate}>{Math.round(speed)} {data[locale].speed}</div>
      </div>
      <div className={s.text}>{data[locale].wind}</div>
    </div>
  )
}