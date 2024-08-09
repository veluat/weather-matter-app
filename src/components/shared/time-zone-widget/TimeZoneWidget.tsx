import React, {useContext, useEffect, useState} from 'react'
import moment from 'moment-timezone'
import s from './TimeZoneWidget.module.scss'
import {Icon} from '../icon'
import {LocaleContext} from '../../../utils'
import {useAppDispatch, useAppSelector} from '../../../hooks'
import {setCurrentTime} from '../../../features/time-zone-service/model/timeZoneSlice'
import {timeZoneSelector} from '../../../features/time-zone-service/model/timeZoneSelector'

type TimeZoneWidgetProps = {
  timezone: number;
  dt: number
};

export const TimeZoneWidget: React.FC<TimeZoneWidgetProps> = ({timezone, dt}) => {
  const {locale} = useContext(LocaleContext)
  const dispatch = useAppDispatch()
  const currentTime = useAppSelector(timeZoneSelector)

  const currentDate = useUnixTimestampToDate(dt)
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setCurrentTime(new Date()))
    }, 1000)
    return () => clearInterval(interval)
  }, [dispatch, timezone])

  moment.updateLocale('ru', {
    weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  })
  moment.locale(locale)
  
  return (
    <div className={s.timeBox}>
      <div className={s.time}>
        <Icon sprId={'date'} viewBox={'0 0 24 24'} width={25} height={25}/>
        <span>{currentDate}{moment(dt).format(' ddd')}</span>
      </div>
      <div className={s.time}>
        <Icon sprId={'clock'} viewBox={'0 0 32 32'} width={25} height={25}/>
        <span>{moment.tz(currentTime, moment.tz.guess()).format('HH:mm (UTC z:00)')}</span>
      </div>
    </div>
  )
}

const useUnixTimestampToDate = (unixTimestamp: number): string => {
  const [date, setDate] = useState<string>('')

  useEffect(() => {
    const dateFromUnix = new Date(unixTimestamp * 1000)
    const dateString = dateFromUnix.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).replace(/\//g, '.')
    setDate(dateString)
  }, [unixTimestamp])

  return date
}
