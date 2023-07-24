import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import route_points from '../data/route_points.json'
import { FETCH_POLYLINE_SUCCESS, FETCH_ERROR, FETCH_POLYlINE_START } from "../reducers"
function* fetchDataSaga(action) {
    try {
        let points = route_points[action.route_number]
        points = `${points[0][1]},${points[0][0]};${points[1][1]},${points[1][0]};${points[2][1]},${points[2][0]}`
        const req = `http://router.project-osrm.org/route/v1/driving/${points}?steps=true&geometries=geojson&overview=full`
        //console.log(req);
        const response = yield call(axios.get, req)
        const routes = response.data.routes;
        // console.log(response.data);
        yield put({ type: FETCH_POLYLINE_SUCCESS, polyline: routes[0].geometry.coordinates });
    } catch (error) {
        //console.error(error);
        yield put({ type: FETCH_ERROR, error: error.message });
    }
}
export default function* rootSaga() {
    yield takeLatest(FETCH_POLYlINE_START, fetchDataSaga);
}
