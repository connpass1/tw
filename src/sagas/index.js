import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import route_points from '../data/route_points.json'
import { routerActions } from '../reducers/reducer';
function* fetchData(action) {
    // console.log(action);
    try {
        let points = route_points[action.payload]
        points = `${points[0][1]},${points[0][0]};${points[1][1]},${points[1][0]};${points[2][1]},${points[2][0]}`
        const req = `http://router.project-osrm.org/route/v1/driving/${points}?steps=true&geometries=geojson&overview=full`
        //console.log(req);
        const response = yield call(axios.get, req)
        const routes = response.data.routes;
        console.log(response.data);

        yield put(routerActions.fetchRouteSuccess(routes[0].geometry.coordinates));
    } catch (error) {
        yield put(routerActions.fetchRouteFailed(error.message));
    }
}
export default function* routerSaga() {
    yield takeLatest(routerActions.fetchRoute.type, fetchData);
}
