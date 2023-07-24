import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import route_points from '../data/route_points.json'
import { FETCH_POLYLINE_SUCCESS, FETCH_ERROR, FETCH_POLYlINE_START } from "../reducers"


function* fetchDataSaga(action) {

    try {
        const points = route_points[action.route_number]
        const req = `http://router.project-osrm.org/route/v1/driving/${points[0]};${points[1]};${points[2]}?steps=true&geometries=geojson&overview=full`

        const response = yield call(axios.get, req)
        let polyline = []
        const routes = response.data.routes;


        for (let i in routes) {
            polyline = polyline.concat(routes[i].geometry.coordinates)
        }
        //console.log(polyline);
        yield put({ type: FETCH_POLYLINE_SUCCESS, polyline: polyline });

    } catch (error) {
        //console.error(error);

        yield put({ type: FETCH_ERROR, error: error.message });

    }
}

export default function* rootSaga() {
    yield takeLatest(FETCH_POLYlINE_START, fetchDataSaga);
}


