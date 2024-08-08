import {configureStore} from '@reduxjs/toolkit'
import {degreesReducer} from '../features/current-weather/model/slice/degreesSlice'
import {timeZoneReducer} from '../features/time-zone-service/model/timeZoneSlice'
import {weatherApi} from '../features/current-weather/service/weatherService'
import {locationReducer} from '../features/current-weather/model/slice/locationSlice'
import {fiveDaysApi} from '../features/5-days-weather/service/fiveDaysService'
import {baseAPI} from '../services/baseAPI'
import {hourlyApi} from '../features/hourly-weather/servise/hourlyService'

export const store = configureStore({
  reducer: {
    degrees: degreesReducer,
    timeZone: timeZoneReducer,
    location: locationReducer,
    baseAPI: baseAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware, fiveDaysApi.middleware, hourlyApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>