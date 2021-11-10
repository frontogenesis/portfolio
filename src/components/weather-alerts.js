import React, { useState, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'

const GET_ALERTS = gql`
    query($data:Geography!) {
        alerts(data: $data) {
            properties {
            event
            areaDesc
            }
        }
    }
`

export default function WeatherAlerts({ userLocation }) {
    
    const { loading, error, data } = useQuery(GET_ALERTS, { 
        variables: {
            data: {
                point: {
                    lat: userLocation?.geoplugin_latitude,
                    lon: userLocation?.geoplugin_longitude
                }
            }
        }, 
        pollInterval: 60000 * 5
    }) 
    const [ show, setShow ] = useState(true)
    const [ alertsCount, setAlertsCount ] = useState(0)

    useEffect(() => {
        setAlertsCount(data?.alerts.length)
    }, [data])

    if (loading) return <Spinner animation='border' variant='danger'></Spinner>
    if (error) return ''

    const weatherAlerts = data.alerts.map((alert, id) => {
        if (id < alertsCount - 1) {
            return <span key={id}>{alert?.properties?.event},&nbsp;</span>
        } else {
            return <span key={id}>{alert?.properties?.event}</span>
        }
    })

    const alertVariantColor = alertsCount === 0 ? 'success' : 'danger'

    if (show && userLocation) {
        return (
            <Alert variant={alertVariantColor} onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Weather Hazards For {userLocation.geoplugin_city}, {userLocation.geoplugin_regionCode}</Alert.Heading>
                {alertsCount === 0 ? <div>No unusual hazards are forecast.</div> : weatherAlerts}
            </Alert>
        )
    } else {
        return <div></div>
    }
}