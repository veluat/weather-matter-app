import {RootState} from '../../../../app/store'
import {DegreesStateType} from '../slice/degreesSlice'

export const degreesSelector = (state: RootState): DegreesStateType => state.degrees