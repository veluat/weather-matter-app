import {RootState} from '../index'
import {LocationStateType} from '../slices'

export const locationSelector = (state: RootState): LocationStateType => state.location