import React, { useState, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'

import userLocationInfo from '../utils/location'

const GET_ALERTS = gql`
    query {
        alerts(data: {
            point: {
            lat: 27.95
            lon: -82.45
            }
        }) {
            properties {
            event
            areaDesc
            onset
            ends
            }
        }
    }
`

export default function WeatherAlerts() {
    const { loading, error, data } = useQuery(GET_ALERTS, { pollInterval: 60000 * 5}) 
    const [ show, setShow ] = useState(true)
    const [ alertsCount, setAlertsCount ] = useState(0)

    useEffect(() => {
        setAlertsCount(data?.alerts.length)

    }, [data])

    if (loading) return <Spinner animation='border' variant='danger'></Spinner>
    if (error) return `Error! ${error.message}`

    const weatherAlerts = data.alerts.map((alert, id) => {
        if (id < alertsCount - 1) {
            return <span key={id}>{alert?.properties?.event},&nbsp;</span>
        } else {
            return <span key={id}>{alert?.properties?.event}</span>
        }
    })

    const alertVariantColor = alertsCount === 0 ? 'success' : 'danger'

    if (show) {
        return (
            <Alert variant={alertVariantColor} onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Weather Hazards For Tampa, FL</Alert.Heading>
                {alertsCount === 0 ? <div>No unusual hazards are forecast.</div> : weatherAlerts}
            </Alert>
        )
    } else {
        return <div></div>
    }
}