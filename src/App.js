import React, { useEffect } from "react";
import RouteTable from "./components/RouteTable";
import Map from "./components/Map";
import ErrorMessage from "./components/ErrorMessage";
import { FETCH_POLYlINE_START } from "./reducers"
import { useDispatch } from 'react-redux'
const App = () => {
    console.log(process.env.NODE_ENV);
    const dispatch = useDispatch();
    const [route_number, setRoute_number] = React.useState(null)
    useEffect(() => {
        if (route_number !== null) dispatch({ type: FETCH_POLYlINE_START, route_number: route_number })
    }, [dispatch, route_number]);
    return <main>
        <div>  <RouteTable route_number={route_number} setRoute_number={setRoute_number} />
            <ErrorMessage />
        </div>
        <Map route_number={route_number} />
    </main>
}
export default App