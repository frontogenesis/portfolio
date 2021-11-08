import * as esriGeo from 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js'

const userLocationInfo = {
    doesExist() {
        return localStorage.getItem('userDefaultLocaton') ? true : false
    },

    save(locationDetails) {
        localStorage.setItem('userDefaultLocation', JSON.stringify(locationDetails))
    },

    get() {
        const { lat, lon } = JSON.parse(localStorage.getItem('userDefaultLocation'))
        return { lat, lon }
    },

    reverseGeocode(lat, lon) {
        return new Promise((resolve, reject) => {
            esriGeo.reverseGeocode().latlng([lat, lon]).run((err, result) => {
                if (err) reject('No location found')

                let { City: city, Region: state, Match_addr: address, Postal: zip, Subregion: county } = result.address
                county = county.split(' County')[0]
                const cityStateZip = [ city, state, zip ]
                
                resolve({ lat, lon, address, cityStateZip, county })
            })
        })
    },

    async getLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                position => resolve(position.coords),
                error => reject(error.message),
                { enableHighAccuracy: false, timeout: 30000, maximumAge: 60000 * 60 * 24 }
            )
        })
    }
}

export default userLocationInfo