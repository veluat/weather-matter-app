import React, {useContext} from 'react'
import {setTimeZone, updateCurrentTime} from '../../../app'
import TimeData, {getUtcOffsetByLabel} from '../../../locale-data/time-data/TimeData'
import {useAppDispatch, useAppSelector} from '../../../hooks'
import s from './TimeZoneSelect.module.scss'
import {currentTimeSelector} from '../../../app'
import {LocaleContext} from '../../../utils'

type TimeZoneSelectProps = {
  setIsModalActive: (active: boolean) => void;
};

export const TimeZoneSelect: React.FC<TimeZoneSelectProps> = ({setIsModalActive}) => {
  const {timeZone} = useAppSelector(currentTimeSelector)
  const dispatch = useAppDispatch()
  const {locale} = useContext(LocaleContext)

  const handleTimeZoneChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTimeZoneLabel = event.target.value
    getUtcOffsetByLabel(selectedTimeZoneLabel)
    dispatch(setTimeZone(selectedTimeZoneLabel))
    dispatch(updateCurrentTime())
    setIsModalActive(false)
  }

  return (
    <div>
      <select id='time-zone-select' className={s.root} value={timeZone} onChange={handleTimeZoneChange}>
        {TimeData[locale].timeZones.map(({label}) => (
          <option className={s.option} key={label} value={label}>
            {label}
          </option>
        ))}
      </select>
    </div>
  )
}