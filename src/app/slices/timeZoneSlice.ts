import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type TimeState = {
  timeZone: string;
  currentTime: number;
};

const initialState: TimeState = {
  timeZone: 'Europe/Moscow',
  currentTime: Date.now(),
}

const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setTimeZone: (state, action: PayloadAction<string>) => {
      state.timeZone = action.payload
      state.currentTime = Date.now()
    },
    updateCurrentTime: (state) => {
      state.currentTime = Date.now()
    },
  },
})
export const {setTimeZone, updateCurrentTime} = timeSlice.actions
export const timeZoneReducer = timeSlice.reducer