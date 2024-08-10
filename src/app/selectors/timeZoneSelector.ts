import {RootState} from '../index'
import {TimeState} from '../slices'

export const currentTimeSelector = (state: RootState): TimeState => state.timeZone