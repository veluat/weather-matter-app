import React, {useContext} from 'react'
import s from './Humidity.module.scss'
import humidity_icon from '../../../../assets/humidity.png'
import data from './../../../../data/ui-common-data/UiCommonData'
import {LocaleContext} from '../../../../utils'

type Props = {
  humidity: number
}
export const Humidity: React.FC<Props> = ({humidity}) => {
  const {locale} = useContext(LocaleContext)

  return (
    <div className={s.element}>
      <div className={s.data}>
        <img src={humidity_icon} alt='humidity' className={s.icon}/>
        <span>{humidity} %</span>
      </div>
      <div className={s.text}>{data[locale].humidity}</div>
    </div>
  )
}