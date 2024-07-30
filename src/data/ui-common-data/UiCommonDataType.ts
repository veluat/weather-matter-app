type UiCommonDataEntry = {
  time: string,
  search: string,
  humidity: string,
  wind: string,
  speed: string,
  hourly: string,
  next: string,
  feedback: string,
  footer: string,
  dev: string
};

export type UiCommonDataType = {
  en: UiCommonDataEntry;
  ru: UiCommonDataEntry;
};