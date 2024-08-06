import { TimeDataType } from './TimeDataType';

const TimeData: TimeDataType = {
  en: {
    timeZone: [
      { label: 'EST (Eastern Standard Time)', utcOffset: -5 },
      { label: 'PST (Pacific Standard Time)', utcOffset: -8 },
      { label: 'CET (Central European Time)', utcOffset: 1 },
      { label: 'JST (Japan Standard Time)', utcOffset: 9 },
      { label: 'AEST (Australian Eastern Standard Time)', utcOffset: 10 },
      { label: 'IST (Indian Standard Time)', utcOffset: 5.5 }
    ]
  },
  ru: {
    timeZone: [
      { label: 'MSK (Московское время)', utcOffset: 3 },
      { label: 'SAMT (Самарское время)', utcOffset: 4 },
      { label: 'YEKT (Екатеринбургское время)', utcOffset: 5 },
      { label: 'NOVT (Новосибирское время)', utcOffset: 7 },
      { label: 'VLAT (Владивостокское время)', utcOffset: 10 },
      { label: 'IRST (Иранское время)', utcOffset: 3.5 }
    ]
  }
};

export default TimeData;