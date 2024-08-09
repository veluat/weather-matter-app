type FiveDaysWeatherItem = {
  icon: string;
  description: string;
};

type ListArray = {
  dt: number;
  main: {
    temp: number;
  };
  weather: FiveDaysWeatherItem[];
  pop: number;
  dt_txt: string
}

export type ResponseFiveDaysDataType = {
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

export type getFiveDaysArgs = {
  location: string,
  apiKey: string,
  degrees: string,
  locale: string
}