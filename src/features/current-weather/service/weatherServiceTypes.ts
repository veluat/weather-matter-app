type WeatherItem = {
	description: string;
	icon: string;
};
export type ResponseWeatherDataType = {
	weather: WeatherItem[]
	main: {
		temp: number
		feels_like: number
		temp_min: number
		temp_max: number
		pressure: number
		humidity: number
	}
	wind: {
		speed: number
	}
	dt: number
	sys: {
		country: string
		sunrise: number
		sunset: number
	}
	timezone: number
	name: string
	cod: number
}

export type ResponseWeatherError = {
	cod: string
	message: string
}

export type getCurrentWeatherArgs = {
	location: string,
	apiKey: string,
	degrees: string,
	locale: string
}