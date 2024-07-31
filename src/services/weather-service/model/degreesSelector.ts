import {RootState} from '../../../app/store'
import {DegreesStateType} from './degreesSlice'

export const degreesSelector = (state: RootState): DegreesStateType => state.degrees