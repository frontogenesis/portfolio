import React, { useState } from 'react'

import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { DynamicMapLayer } from 'react-esri-leaflet'

import { SectionTitle } from "../components/ui/card";

export default function LeafletMap({ userLocation }) {
    const [ maxZoom ] = useState(16)
    const [ minZoom ] = useState(3)

    function CurrentLocation() {
        const map = useMap()
        if (userLocation) {
            map.setView([userLocation.geoplugin_latitude, userLocation.geoplugin_longitude], 8)
        } else {
            map.setView([39.83, -98.58], 3)
        }
        return null
      }

    if (typeof window !== 'undefined') {
        return (
            <div className="leaflet-map">
                <SectionTitle title='Interactive Weather' />
                <MapContainer style={{ height: '400px', zIndex: 0}}
                    
                    minZoom={minZoom} maxZoom={maxZoom}>
                    <CurrentLocation />
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