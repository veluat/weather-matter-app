import {baseAPI} from '../base-api/baseAPI'
import {ResponseWeatherDataType, WeatherRequestArgs} from './weatherServiceTypes'

export const weatherApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentWeather: builder.query<ResponseWeatherDataType, WeatherRequestArgs>({
      query: ({location, apiKey, degrees, locale}) => {
        return {
          url: `weather?q=${location}&units=${degrees}&appid=${apiKey}&lang=${locale}`,
        }
      },
      providesTags: ['Weather'],
    }),
  }),
})

export const {useGetCurrentWeatherQuery} = weatherApi