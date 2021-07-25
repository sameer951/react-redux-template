import * as types from '../types/types'
// INITIAL TIMER STATE
const initialTimerState = {
    lastUpdate: 0,
    light: false,
}

// TIMER REDUCER
export const timerReducer = (state = initialTimerState, { type, payload }) => {
    switch (type) {
        case types.TICK:
            return {
                lastUpdate: payload.ts,
                light: !!payload.light,
            }
        default:
            return state
    }
}

