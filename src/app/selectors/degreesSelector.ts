import {RootState} from '../index'
import {DegreesStateType} from '../slices'

export const degreesSelector = (state: RootState): DegreesStateType => state.degrees