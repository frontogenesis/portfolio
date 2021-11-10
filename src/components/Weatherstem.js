import React, { useState } from 'react'

import { windDirToCardinal } from '../utils/unitConvert'

export default function Weatherstem({ data }) {
    const [ cameraImgLoaded, setcameraImgLoaded ] = useState(false)

    function round(value) {
        return Math.round(value)
    }

    function isColdEnoughForWindChill(ambientTemp) {
        return ambientTemp <= 65 ? true : false
    }

    const name = data?.name
    const temperature = round(data?.observation?.temperature)
    const heatIndex = round(data?.observation?.heat_index)
    const windChill = round(data?.observation?.wind_chill)
    const dewpoint = round(data?.observation?.dewpoint)
    const relativeHumidity = round(data?.observation?.humidity)
    const windDirection = windDirToCardinal(data?.observation?.wind_direction)
    const windSpeed = data?.observation?.wind_speed
    const windGust = data?.observation?.gust
    const feelsLike = isColdEnoughForWindChill(temperature) ? windChill : heatIndex
    const dailyRainfall = data?.observation?.daily_rainfall

    return (
        <div className="card" style={{ display: !cameraImgLoaded ? "none" : "block" }}>
            <img src={data?.photos[0].url} 
                alt="Cloud Camera" width="100%"
                onLoad={() => setcameraImgLoaded(true)}
                />
            <div className="container">
                <div className="city-name">{name}</div>
                Temperature: {temperature}&deg;<br />
                Feels Like: {feelsLike}&deg;<br />
                Dewpoint: {dewpoint}&deg; <br />
                Relative Humidity: {relativeHumidity}&#37;<br />
                Wind: {windDirection} {windSpeed} mph <br />
                Wind Gust: {windGust} mph <br />
                Daily Rainfall: {dailyRainfall}&Prime;
            </div>
        </div>
    )
}