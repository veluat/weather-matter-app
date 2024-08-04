import {RootState} from '../../../app/store'
import {TimeZoneState} from './timeZoneSlice'

export const timeZoneSelector = (state: RootState): TimeZoneState => state.timeZone