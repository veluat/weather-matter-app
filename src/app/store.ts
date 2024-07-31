import { configureStore } from '@reduxjs/toolkit';
import {degreesReducer} from '../services/weather-service/model/degreesSlice'

export const store = configureStore({
  reducer: {
    degrees: degreesReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>