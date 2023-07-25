import React, { useMemo } from "react";
import { Marker, MapContainer, TileLayer, Popup, useMap, Polyline } from 'react-leaflet'
import { useSelector } from 'react-redux'
import route_points from '../data/route_points.json'
import PropTypes from 'prop-types';
function SetMarkers({ route_number }) {
    const polyline = useSelector(state => state.polyline);
    const map = useMap()
    const markers = useMemo(
        () => {
            const markers = route_points[route_number]
            if (polyline.length === 0) { map.fitBounds(markers) }
            else map.fitBounds(polyline)
            return markers
        },
        [map, route_number, polyline]
    );
    return (
        <>
            {markers.map((marker, index) => <Marker
                key={index}
                position={{
                    lat: marker[0],
                    lng: marker[1]
                }}
            >
                <Popup>
                    Точка {index + 1}
                </Popup>
            </Marker>
            )}
            {polyline.length && <Polyline pathOptions={{ color: '#0050b3' }} weight={8} opacity={0.5} positions={polyline} />}
        </>
    )
}
const Map = ({ route_number }) => {
    return (
        <MapContainer bounds={route_points}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {route_number !== null && <SetMarkers route_number={route_number} />}
        </MapContainer>
    )
}
export default Map
Map.propTypes = {
    route_number: PropTypes.number
};