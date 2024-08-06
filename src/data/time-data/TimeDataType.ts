type TimeDataEntry = {
  timeZone: { label: string; utcOffset: number }[];
};

export type TimeDataType = {
  en: TimeDataEntry;
  ru: TimeDataEntry;
};