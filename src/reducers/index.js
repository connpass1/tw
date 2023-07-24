export const FETCH_POLYLINE_SUCCESS = 'FETCH_POLYLINE_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'
export const FETCH_POLYlINE_START = 'FETCH_POLYlINE_START'
export default function fetchReducer(state = { polyline: [] }, action) {
    switch (action.type) {
        case FETCH_POLYlINE_START:
            return state = { polyline: [] }
        case FETCH_POLYLINE_SUCCESS:
            for (const i in action.polyline)
                action.polyline[i] = action.polyline[i].reverse();
            return state = { polyline: action.polyline }
        case FETCH_ERROR:
            return state = { polyline: [], error: action.error }
        default:
            return state
    }
}