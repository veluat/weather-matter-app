import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TimeZoneState = {
  currentTimeZone: number;
  currentTime: Date
}

const initialState: TimeZoneState = {
  currentTimeZone: 0,
  currentTime: new Date()
};

const timeZoneSlice = createSlice({
  name: 'timeZone',
  initialState,
  reducers: {
    setTimeZone: (state, action: PayloadAction<number>) => {
      state.currentTimeZone = action.payload;
    },
    setCurrentTime: (state, action: PayloadAction<Date>) => {
      state.currentTime = action.payload;
    },
  },
});

export const { setTimeZone, setCurrentTime } = timeZoneSlice.actions;
export const timeZoneReducer = timeZoneSlice.reducer;
