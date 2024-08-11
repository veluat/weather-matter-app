type ForecastWeatherItem = {
  icon: string;
  description: string;
};

type ListArray = {
  dt: number;
  main: {
    temp: number;
  };
  weather: ForecastWeatherItem[];
  pop: number;
  dt_txt: string
}

export type ResponseForecastDataType = {
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