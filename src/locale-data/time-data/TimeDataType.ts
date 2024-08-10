export type TimeZoneOption = {
  label: string;
  utcOffset: number;
  display: string;
};

type TimeDataEntry = {
  timeZones: TimeZoneOption[];
};

export type TimeDataType = {
  en: TimeDataEntry;
  ru: TimeDataEntry;
};