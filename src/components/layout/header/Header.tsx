import React from 'react'
import s from './Header.module.scss'
import {LoadingIndicator} from '../../shared/loading-indicator'
import {ErrorMessage} from '../../shared/error-message'
import {Settings} from '../../shared/settings'
import {TimeZoneWidget} from '../../shared/time-zone-widget'

type Props = {
  isLoading: boolean
  error: string | null
  dt: number
}
export const Header: React.FC<Props> = ({isLoading, error, dt}) => {

  return (
    <div className={s.root}>
      <div className={s.header}>
        <div className={s.settings}>
          <Settings/>
        </div>
        {isLoading && <LoadingIndicator/>}
        {!isLoading && error && <div className={s.errorMessage}><ErrorMessage message={error}/></div>}
        <div className={s.timeZoneWidget}>
          <TimeZoneWidget dt={dt}/>
        </div>
      </div>
    </div>
  )
}