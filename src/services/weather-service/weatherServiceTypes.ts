export type GetCurrentWeatherResponse = {
	weather: RootObjectWeather[];
	main: RootObjectMain;
	wind: RootObjectWind;
	dt: number;
  sys: RootObjectSys;
	timezone: number;
	name: string;
	cod: number
}

export type RootObjectWeather = {
	main: string;
	icon: string;
}
export type RootObjectMain = {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
}
export type RootObjectWind = {
	speed: number;
}

export type RootObjectSys = {
	country: string;
	sunrise: number;
	sunset: number;
}


export type getCurrentWeatherArgs = {
	location: string,
	apiKey: string,
	degrees: string,
	locale: string
}