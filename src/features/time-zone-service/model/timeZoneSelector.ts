import {RootState} from '../../../app/store'

export const timeZoneSelector = (state: RootState): Date => state.timeZone.currentTime