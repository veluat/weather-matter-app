import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TimeZoneState = {
  currentTimeZone: string;
}

const initialState: TimeZoneState = {
  currentTimeZone: 'utc',
};

const timeZoneSlice = createSlice({
  name: 'timeZone',
  initialState,
  reducers: {
    setTimeZone: (state, action: PayloadAction<string>) => {
      state.currentTimeZone = action.payload;
    },
  },
});

export const { setTimeZone } = timeZoneSlice.actions;
export const timeZoneReducer = timeZoneSlice.reducer;
