import {baseAPI} from '../base-api/baseAPI'
import {ResponseForecastDataType} from './forecastApiType'
import {WeatherRequestArgs} from '../current-weather-api'

export const forecastApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getForecastWeather: builder.query<ResponseForecastDataType, WeatherRequestArgs>({
      query: ({location, apiKey, degrees, locale}) => {
        return {
          url: `forecast?q=${location}&units=${degrees}&appid=${apiKey}&lang=${locale}`,
        }
      },
      providesTags: ['Forecast'],
    }),
  }),
})

export const {useGetForecastWeatherQuery} = forecastApi