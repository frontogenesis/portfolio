import React, { useState } from 'react'

import { MapContainer, TileLayer } from 'react-leaflet'
import { DynamicMapLayer } from 'react-esri-leaflet'

import { SectionTitle } from "../components/ui/card";

export default function LeafletMap() {

    const [ zoom ] = useState(8)
    const [ maxZoom ] = useState(16)
    const [ minZoom ] = useState(4)
    const [ location ] = useState({ lat: 27.95, lon: -82.46 })

    if (typeof window !== 'undefined') {
        return (
            <div className="leaflet-map">
                <SectionTitle title='Interactive Weather' />
                <MapContainer style={{ height: '400px', zIndex: 0}}
                    center={[location.lat, location.lon]} zoom={zoom}
                    minZoom={minZoom} maxZoom={maxZoom}>
                    <DynamicMapLayer 
                        url='https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer' 
                        opacity={0.7} />
                    <TileLayer
                    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
                    />
                </MapContainer>
            </div>
        )
    }
    return null
}