import React, { useEffect } from "react";
import RouteTable from "./components/RouteTable";
import Map from "./components/Map";
import ErrorMessage from "./components/ErrorMessage";

import { FETCH_POLYlINE_START } from "./reducers"
import { useDispatch } from 'react-redux'
const App = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    console.log(process.env.API_KEY)
    const NODE_ENV = process.env.NODE_ENV;
    const dispatch = useDispatch();
    const [route_number, setRoute_number] = React.useState(0)

    useEffect(() => {
        dispatch({ type: FETCH_POLYlINE_START, route_number: route_number })
    }, [dispatch, route_number]);

    return <main>
        <div>  <RouteTable route_number={route_number} setRoute_number={setRoute_number} />
            <ErrorMessage />API_KE {API_KEY} NODE_ENV {NODE_ENV}
        </div>
        <Map route_number={route_number} />
    </main>
}

export default App