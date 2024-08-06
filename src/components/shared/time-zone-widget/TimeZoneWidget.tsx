import React, {useEffect, useState} from 'react'
import moment from 'moment-timezone'
import s from './TimeZoneWidget.module.scss'
import {Icon} from '../icon'

type TimeZoneWidgetProps = {
  timezone: number;
  dt: number
};

export const TimeZoneWidget: React.FC<TimeZoneWidgetProps> = ({timezone, dt}) => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date())
  const currentDate = useUnixTimestampToDate(dt)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [timezone])

  return (
    <div className={s.timeBox}>
      <div className={s.time}>
        <Icon sprId={'date'} viewBox={'0 0 24 24'} width={25} height={25}/>
        <span>{currentDate}</span>
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
    })
    setDate(dateString)
  }, [unixTimestamp])

  return date
}
