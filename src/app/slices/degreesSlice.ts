import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type DegreesStateType = {
  degrees: 'metric' | 'imperial';
}

const initialState: DegreesStateType = {
  degrees: 'metric',
}

const degreesSlice = createSlice({
  name: 'degrees',
  initialState,
  reducers: {
    setDegrees: (state, action: PayloadAction<'metric' | 'imperial'>) => {
      state.degrees = action.payload
    },
  },
})

export const {setDegrees} = degreesSlice.actions
export const degreesReducer = degreesSlice.reducer