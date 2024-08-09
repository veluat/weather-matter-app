import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type LocationStateType = {
  location: string;
}

const initialState: LocationStateType = {
  location: 'Minsk',
}

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload
    },
  },
})

export const {setLocation} = locationSlice.actions
export const locationReducer = locationSlice.reducer