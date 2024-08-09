import React from 'react'
import s from './Header.module.scss'
import {LoadingIndicator} from '../../shared/loading-indicator'
import {ErrorMessage} from '../../shared/error-message'
import {Settings} from '../../shared/settings'
import {TimeZoneWidget} from '../../shared/time-zone-widget'

type Props = {
  isLoading: boolean
  error: string | null
  timezone: number
  dt: number
}
export const Header: React.FC<Props> = ({isLoading, error, timezone, dt}) => {

  return (
    <div className={s.root}>
      <Settings/>
      {isLoading && <LoadingIndicator/>}
      {!isLoading && error && <ErrorMessage message={error}/>}
      <TimeZoneWidget timezone={timezone} dt={dt}/>
    </div>
  )
}