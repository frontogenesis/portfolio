import React from 'react'

import Layout from '../components/layout'
import Error from '../components/error'
import Loading from '../components/loading'
import Weatherstem from '../components/weatherstem'

import useFetch from '../utils/useFetch'

export default function Weather({ location }) {

    const { loading, results, error } = useFetch('https://cdn.weatherstem.com/dashboard/data/dynamic/dashboard.json')
    const siteTitle = 'Live Weather'

    function getStation(stationId) {    
        return results?.find(station => stationId === station.id.split('@')[0])
    }

    return (
        <Layout location={location} title={siteTitle}>
            {loading && <Loading />}
            {!loading && error ? <Error /> : 
            <div>
                <div className='projects-container'>
                    <div className='projects-row'>
                        <Weatherstem data={getStation('fprwusf')} loading={loading} />
                    </div>
                    <div className='projects-row'>
                        <Weatherstem data={getStation('fprwjct')} />
                        <Weatherstem data={getStation('fprwmfe')} />
                    </div>
                    <div className='projects-row'>
                        <Weatherstem data={getStation('fprwgcu')} />
                        <Weatherstem data={getStation('fprwxel')} />
                    </div>
                </div>
            </div>
            }
        </Layout>
    )
}