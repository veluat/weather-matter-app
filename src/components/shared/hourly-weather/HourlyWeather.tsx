import React, {useContext} from 'react'
import s from './HourlyWeather.module.scss'
import data from './../../../data/ui-common-data/UiCommonData'
import {LocaleContext} from '../../../utils'

export const HourlyWeather = () => {
const {locale} = useContext(LocaleContext)

  return (
    <div className={s.root}>
      <h3>{data[locale].hourlyDetails}
        <br/>
        {data[locale].dev}</h3>
    </div>
  )
}