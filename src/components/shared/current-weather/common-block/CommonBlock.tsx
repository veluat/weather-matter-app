import React from 'react'
import s from './CommonBlock.module.scss'
import {useWeatherBlockImg} from '../../../../hooks/useWeatherBlockImg'

type Props = {
  value: string
  title: string
  type: string
  degreesImg?: string
}
export const CommonBlock: React.FC<Props> = ({value, title, type, degreesImg}) => {
  const icon = useWeatherBlockImg({type})

  return (
    <div className={s.element}>
      <div className={s.text}>{title}</div>
      <div className={s.data}>
        <img src={icon} alt={`${title}`} className={s.icon}/>
        <div className={s.windRate}>{value}
          {degreesImg && <img src={degreesImg} alt={title} className={s.icon}/>}
        </div>
      </div>
    </div>
  )
}