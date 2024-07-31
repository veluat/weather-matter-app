export {}
// import {weatherApi} from '../baseAPI'
// import {getCurrentWeatherArgs, GetCurrentWeatherResponse} from './weatherServiceTypes'
//
// export const weatherService = weatherApi.injectEndpoints({
//   endpoints: builder => {
//     return {
//       getCurrentWeather: builder.query<GetCurrentWeatherResponse, getCurrentWeatherArgs | void>({
//         providesTags: ['Weather'],
//         query: ({location, apiKey, degrees, locale}) => ({
//           url: `weather?q=${location}&units=${degrees}&appid=${apiKey}&lang=${locale}`,
//         }),
//       }),
//     }
//   },
//
//
// })