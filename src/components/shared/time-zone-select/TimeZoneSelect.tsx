import React, {ChangeEvent, useContext} from 'react'
import TimeData from './../../../data/time-data/TimeData'
import {LocaleContext} from '../../../utils'
import s from './TimeZoneSelect.module.scss'
import {useAppDispatch} from '../../../hooks'
import {setCurrentTime, setTimeZone} from '../../../features/time-zone-service/model/timeZoneSlice'

export type TimeZoneOption = {
  label: string;
  utcOffset: number;
};

type TimeZoneSelectProps = {
  setIsModalActive: (active: boolean) => void
  onTimeZoneChange: (timeZoneOption: TimeZoneOption) => void;
};

export const TimeZoneSelect: React.FC<TimeZoneSelectProps> = ({onTimeZoneChange, setIsModalActive}) => {
  const {locale} = useContext(LocaleContext)
  const dispatch = useAppDispatch()
  const handleTimeZoneChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedTimeZone = TimeData[locale].timeZone.find(
      (tz) => tz.label === event.target.value
    )
    if (selectedTimeZone) {
      dispatch(setTimeZone(selectedTimeZone.utcOffset))
      setIsModalActive(false)
    }
  }

  return (
    <select className={s.root} id='time-zone-select' onChange={handleTimeZoneChange}>
      {TimeData[locale].timeZone.map((timeZone: TimeZoneOption) => (
        <option className={s.option} key={timeZone.label} value={timeZone.utcOffset}>
          {timeZone.label}
        </option>
      ))}
    </select>
  )
}