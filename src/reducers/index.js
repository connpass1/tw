import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    polyline: [], error: null, loading: false
};
const routerSlice = createSlice({
    name: 'router',
    initialState,
    reducers: {
        fetchRoute(state) {
            state.polyline = [];
            state.error = null;
            state.loading = true;
        },
        fetchRouteSuccess(state, action) {
            for (const i in action.payload)
                action.payload[i] = action.payload[i].reverse();
            state.polyline = action.payload;
            state.error = null;
            state.loading = false;
        },
        fetchRouteFailed(state, action) {
            state.polyline = [];
            state.error = action.payload;
            state.loading = false;
        },
    },
});
export const routerActions = routerSlice.actions;
export const routePolyline = (state) => state.polyline;
export const routeError = (state) => state.error;
export const routeLoading = (state) => state.loading;
export const routerReducer = routerSlice.reducer;
export default routerReducer;