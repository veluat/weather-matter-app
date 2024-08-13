import React, {useContext, useEffect} from 'react'
import moment from 'moment-timezone'
import s from './TimeZoneWidget.module.scss'
import {Icon} from '../icon'
import {LocaleContext} from '../../../utils'
import {useAppDispatch, useAppSelector} from '../../../hooks'
import {currentTimeSelector} from '../../../app'
import {updateCurrentTime} from '../../../app'
import {getTimeZoneDisplayByLabel} from '../../../locale-data'

type TimeZoneWidgetProps = {
  dt: number;
};

export const TimeZoneWidget: React.FC<TimeZoneWidgetProps> = ({dt}) => {
  const {locale} = useContext(LocaleContext)
  const {timeZone, currentTime} = useAppSelector(currentTimeSelector)
  const currentDate = moment.unix(dt).tz(timeZone).format('DD.MM.YYYY')
  const dispatch = useAppDispatch()

  moment.updateLocale('ru', {
    weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  })
  moment.locale(locale)

  const currentTimeFormatted = moment.tz(currentTime, timeZone).format('HH:mm')
  const timeZoneDisplay = getTimeZoneDisplayByLabel(timeZone)

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateCurrentTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [dispatch])

  return (
    <div className={s.timeBox}>
      <div className={s.time}>
        <Icon sprId={'date'} viewBox={'0 0 24 24'} width={25} height={25}/>
        <span>{currentDate} {moment.unix(dt).tz(timeZone).format('ddd')}</span>
      </div>
      <div className={s.time}>
        <Icon sprId={'clock'} viewBox={'0 0 32 32'} width={25} height={25}/>
        <span>{currentTimeFormatted} {timeZoneDisplay}</span>
      </div>
    </div>
  )
}