import React from 'react'
import s from './CommonBlock.module.scss'
import {Icon} from '../icon'
import {useWeatherBlockImg} from '../../../hooks'

type Props = {
  value: string
  title: string
  type?: string
  degreesID?: string
  sprId?: string
  viewBox?: string
}
export const CommonBlock: React.FC<Props> = ({value, title, type, degreesID, sprId, viewBox = '0 0 512 512'}) => {
  const icon = useWeatherBlockImg({type})

  return (
    <div className={s.element}>
      <div className={s.text}>{title}</div>
      <div className={s.data}>
        {type ? <img src={icon} alt={`${title}`} className={s.icon}/> :
          <Icon sprId={sprId} viewBox={viewBox} height={35} width={35}/>}

        <div className={s.windRate}>{value}
          {degreesID && <Icon height={35} width={35} sprId={degreesID}/>}
        </div>
      </div>
    </div>
  )
}