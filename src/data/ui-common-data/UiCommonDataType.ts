type UiCommonDataEntry = {
  time: string,
  search: string,
  feels: string,
  humidity: string,
  pressure: string,
  hPa: string,
  wind: string,
  speed: string,
  temp_min: string,
  temp_max: string,
  sunset: string,
  sunrise: string,
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