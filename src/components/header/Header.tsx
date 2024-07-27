import React from 'react'
import settings_img from '../../assets/settings.png'
import s from './Header.module.scss'
import {LoadingIndicator} from '../loading-indicator'
import {ErrorMessage} from '../error-message'

type Props = {
  isLoading: boolean
  error: string | null
}
export const Header: React.FC<Props> = ({isLoading, error}) => {
  return (
    <div className={s.root}>
      <img src={settings_img} alt={'settings icon'} className={s.img}/>
      {isLoading && <LoadingIndicator/>}
      {!isLoading && error && <ErrorMessage message={error}/>}
      <div className={s.timeBox}>
        World Time<br/>Coming Soon
      </div>
    </div>
  )
}