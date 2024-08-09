type HourlyWeatherItem = {
  icon: string;
};

type ListArray = {
  dt: number;
  main: {
    temp: number;
  };
  weather: HourlyWeatherItem[];
  pop: number;
}

export type ResponseHourlyWeatherDataType = {
  cod: string;
  message: number;
  cnt: number;
  list: ListArray[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
};

export type getHourlyWeatherArgs = {
  location: string,
  apiKey: string,
  degrees: string,
  locale: string,
}