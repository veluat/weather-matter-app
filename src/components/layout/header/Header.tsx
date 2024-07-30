import React, {useContext} from 'react'
import s from './Header.module.scss'
import {LoadingIndicator} from '../../shared/loading-indicator'
import {ErrorMessage} from '../../shared/error-message'
import {Settings} from '../../shared/settings'
import {LocaleContext} from '../../../utils'
import data from './../../../data/ui-common-data/UiCommonData'

type Props = {
  isLoading: boolean
  error: string | null
}
export const Header: React.FC<Props> = ({isLoading, error}) => {
  const {locale} = useContext(LocaleContext)

  return (
    <div className={s.root}>
      <Settings/>
      {isLoading && <LoadingIndicator/>}
      {!isLoading && error && <ErrorMessage message={error}/>}
      <div className={s.timeBox}>
        {data[locale].time}<br/>{data[locale].dev}
      </div>
    </div>
  )
}