import {RootState} from '../../../../app/store'
import {LocationStateType} from '../slice/locationSlice'

export const locationSelector = (state: RootState): LocationStateType => state.location