import {baseAPI} from '../../../services/baseAPI'
import {getHourlyWeatherArgs, ResponseHourlyWeatherDataType} from './hourlyServiceType'

export const hourlyApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getHourlyWeather: builder.query<ResponseHourlyWeatherDataType, getHourlyWeatherArgs>({
      query: ({location, apiKey, degrees, locale}) => {
        return {
          url: `weather?q=${location}&units=${degrees}&appid=${apiKey}&lang=${locale}`,
        }
      },
      providesTags: ['Hourly'],
    }),
  }),
})

export const {useGetHourlyWeatherQuery} = hourlyApi