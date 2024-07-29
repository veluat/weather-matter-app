import React, {useContext, useState} from 'react'
import s from './Header.module.scss'
import {LoadingIndicator} from '../../shared/loading-indicator'
import {ErrorMessage} from '../../shared/error-message'
import {Settings} from '../../shared/settings'

type Props = {
  isLoading: boolean
  error: string | null
}
export const Header: React.FC<Props> = ({isLoading, error}) => {

  return (
    <div className={s.root}>
      <Settings/>
      {isLoading && <LoadingIndicator/>}
      {!isLoading && error && <ErrorMessage message={error}/>}
      <div className={s.timeBox}>
        World Time<br/>Coming Soon
      </div>
    </div>
  )
}