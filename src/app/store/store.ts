import {configureStore} from '@reduxjs/toolkit'
import {degreesReducer} from '../slices'
import {timeZoneReducer} from '../slices'
import {weatherApi} from '../../services'
import {locationReducer} from '../slices'
import {forecastApi} from '../../services'
import {baseAPI} from '../../services'

export const store = configureStore({
  reducer: {
    degrees: degreesReducer,
    timeZone: timeZoneReducer,
    location: locationReducer,
    baseAPI: baseAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware, forecastApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>