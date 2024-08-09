import { baseAPI } from '../../../services/baseAPI'
import { getFiveDaysArgs, ResponseFiveDaysDataType } from './fiveDaysServiceType'

export const fiveDaysApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getFiveDaysWeather: builder.query<ResponseFiveDaysDataType, getFiveDaysArgs>({
      query: ({ location, apiKey, degrees, locale }) => {
        return {
          url: `forecast?q=${location}&units=${degrees}&appid=${apiKey}&lang=${locale}`,
        }
      },
      providesTags: ['Five Days'],
    }),
  }),
})

export const { useGetFiveDaysWeatherQuery } = fiveDaysApi;