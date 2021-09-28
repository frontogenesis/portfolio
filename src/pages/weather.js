import React from 'react'

import Layout from '../components/layout'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Weatherstem from '../components/Weatherstem'

import useFetch from '../utils/useFetch'

export default function Weather({ location }) {

    const { loading, data, error } = useFetch('https://cdn.weatherstem.com/dashboard/data/dynamic/dashboard.json')
    const siteTitle = 'Live Weather'

    function getStation(stationId) {    
        return data?.find(station => stationId === station.id.split('@')[0])
    }

    return (
        <Layout location={location} title={siteTitle}>
            {loading && <Loading />}
            {!loading && error ? <Error /> : 
            <div>
                <div style={styles.weatherStemContainer}>
                    <div style={styles.weatherStemRow}>
                        <Weatherstem data={getStation('fprwusf')} />
                    </div>
                    <div style={styles.weatherStemRow}>
                        <Weatherstem data={getStation('fprwjct')} />
                        <Weatherstem data={getStation('fprwmfe')} />
                    </div>
                    <div style={styles.weatherStemRow}>
                        <Weatherstem data={getStation('fprwgcu')} />
                        <Weatherstem data={getStation('fprwxel')} />
                    </div>
                </div>
            </div>
            }
        </Layout>
    )
}

const styles = {
    weatherStemContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    weatherStemRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: '5px'
    }
}
