import React, {useContext} from 'react'
import s from './SevenDays.module.scss'
import data from './../../../data/ui-common-data/UiCommonData'
import {LocaleContext} from '../../../utils'

export const SevenDays = () => {
  const {locale} = useContext(LocaleContext)

  return (
    <div className={s.root}>
      <h3>{data[locale].next}
        <br/>
        {data[locale].dev}</h3>
    </div>
  )
}