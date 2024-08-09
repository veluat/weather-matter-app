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
      { label: 'EST (Восточное стандартное время)', utcOffset: -5 },
      { label: 'PST (Тихоокеанское стандартное время)', utcOffset: -8 },
      { label: 'CET (Центральноевропейское время)', utcOffset: 1 },
      { label: 'JST (Японское стандартное время)', utcOffset: 9 },
      { label: 'AEST (Австралийское восточное стандартное время)', utcOffset: 10 },
      { label: 'IST (Индийское стандартное время)', utcOffset: 5.5 }
    ]
  }
};

export default TimeData;