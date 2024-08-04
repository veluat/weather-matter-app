import { configureStore } from '@reduxjs/toolkit';
import {degreesReducer} from '../services/weather-service/model/degreesSlice'
import {timeZoneReducer} from '../services/time-zone-service/model/timeZoneSlice'

export const store = configureStore({
  reducer: {
    degrees: degreesReducer,
    timeZone: timeZoneReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>