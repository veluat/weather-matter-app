import {baseAPI} from '../../../services/baseAPI'
import {getCurrentWeatherArgs, ResponseWeatherDataType} from './weatherServiceTypes'

export const weatherApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentWeather: builder.query<ResponseWeatherDataType, getCurrentWeatherArgs>({
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