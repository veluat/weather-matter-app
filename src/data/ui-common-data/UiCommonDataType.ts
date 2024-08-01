type UiCommonDataEntry = {
  time: string,
  search: string,
  humidity: string,
  wind: string,
  speed: string,
  hourlyDetails: string,
  next: string,
  feedback: string,
  footer: string,
  dev: string,
  current: string,
  hourly: string,
  fiveDay: string,
};

export type UiCommonDataType = {
  en: UiCommonDataEntry;
  ru: UiCommonDataEntry;
};