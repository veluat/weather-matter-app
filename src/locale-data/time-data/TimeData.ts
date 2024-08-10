import {TimeDataType} from './TimeDataType'

const TimeData: TimeDataType = {
  en: {
    timeZones: [
      {label: 'Europe/Moscow', utcOffset: 3, display: '(UTC +03:00)'},
      {label: 'America/Los_Angeles', utcOffset: -8, display: '(UTC -08:00)'},
      {label: 'Europe/London', utcOffset: 0, display: '(UTC +00:00)'},
      {label: 'Europe/Paris', utcOffset: 1, display: '(UTC +01:00)'},
      {label: 'Asia/Tokyo', utcOffset: 9, display: '(UTC +09:00)'},
      {label: 'Australia/Sydney', utcOffset: 10, display: '(UTC +10:00)'},
      {label: 'Canada/Eastern', utcOffset: -5, display: '(UTC -05:00)'},
      {label: 'Brazil/East', utcOffset: -3, display: '(UTC -03:00)'},
      {label: 'Mexico/General', utcOffset: -6, display: '(UTC -06:00)'},
      {label: 'Australia/NSW', utcOffset: 10, display: '(UTC +10:00)'},
      {label: 'Asia/Shanghai', utcOffset: 8, display: '(UTC +08:00)'},
    ],
  },
  ru: {
    timeZones: [
      {label: 'Europe/Moscow', utcOffset: 3, display: '(UTC +03:00)'},
      {label: 'America/Los_Angeles', utcOffset: -8, display: '(UTC -08:00)'},
      {label: 'Europe/London', utcOffset: 0, display: '(UTC +00:00)'},
      {label: 'Europe/Paris', utcOffset: 1, display: '(UTC +01:00)'},
      {label: 'Asia/Tokyo', utcOffset: 9, display: '(UTC +09:00)'},
      {label: 'Australia/Sydney', utcOffset: 10, display: '(UTC +10:00)'},
      {label: 'Canada/Eastern', utcOffset: -5, display: '(UTC -05:00)'},
      {label: 'Brazil/East', utcOffset: -3, display: '(UTC -03:00)'},
      {label: 'Mexico/General', utcOffset: -6, display: '(UTC -06:00)'},
      {label: 'Australia/NSW', utcOffset: 10, display: '(UTC +10:00)'},
      {label: 'Asia/Shanghai', utcOffset: 8, display: '(UTC +08:00)'},
    ],
  },
}
export const getUtcOffsetByLabel = (label: string): number => {
  const timeZoneOption = Object.values(TimeData).flatMap((data) => data.timeZones)
    .find((option) => option.label === label)
  return timeZoneOption?.utcOffset || 0
}

export const getTimeZoneDisplayByLabel = (label: string): string => {
  const timeZoneOption = Object.values(TimeData).flatMap((data) => data.timeZones)
    .find((option) => option.label === label)
  return timeZoneOption?.display || ''
}

export default TimeData