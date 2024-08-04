import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';

type TimeZoneWidgetProps = {
  timezone: number;
};

export const TimeZoneWidget: React.FC<TimeZoneWidgetProps> = ({ timezone }) => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="time-zone-widget">
      <p>{moment.tz(currentTime, moment.tz.guess()).format('HH:mm:ss (UTCz)')}</p>
    </div>
  );
};

// type TimeZoneSelectProps = {}
//
// export const TimeZoneWidget: React.FC<TimeZoneSelectProps> = () => {
//   const dispatch = useAppDispatch()
//
//   const handleTimeZoneChange = (event: ChangeEvent<HTMLSelectElement>) => {
//     dispatch(setTimeZone(event.target.value))
//   }
//
//   return (
//     <select id='time-zone-select' onChange={handleTimeZoneChange}>
//       <option value='gmt'>GMT (Greenwich Mean Time)</option>
//       <option value='est'>EST (Eastern Standard Time)</option>
//       <option value='pst'>PST (Pacific Standard Time)</option>
//       <option value='cet'>CET (Central European Time)</option>
//       <option value='jst'>JST (Japan Standard Time)</option>
//       <option value='aest'>AEST (Australian Eastern Standard Time)</option>
//       <option value='ist'>IST (Indian Standard Time)</option>
//     </select>
//   )
// }