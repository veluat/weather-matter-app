import React, { ChangeEvent, useContext } from 'react';
import TimeData from './../../../data/time-data/TimeData';
import { LocaleContext } from '../../../utils';
import s from './TimeZoneSelect.module.scss';

export type TimeZoneOption = {
  label: string;
  utcOffset: number;
};

type TimeZoneSelectProps = {
  onTimeZoneChange: (timeZoneOption: TimeZoneOption) => void;
};

export const TimeZoneSelect: React.FC<TimeZoneSelectProps> = ({ onTimeZoneChange }) => {
  const { locale } = useContext(LocaleContext);

  const handleTimeZoneChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedTimeZone = TimeData[locale].timeZone.find(
      (tz) => tz.label === event.target.value
    );
    if (selectedTimeZone) {
      onTimeZoneChange(selectedTimeZone);
    }
  };

  return (
    <select className={s.root} id="time-zone-select" onChange={handleTimeZoneChange}>
      {TimeData[locale].timeZone.map((timeZone: TimeZoneOption) => (
        <option className={s.option} key={timeZone.label} value={timeZone.label}>
          {timeZone.label}
        </option>
      ))}
    </select>
  );
};