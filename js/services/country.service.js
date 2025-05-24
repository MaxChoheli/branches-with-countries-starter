'use strict'

const COUNTRY_CACHE_KEY = 'countryCache'
const gCountryCache = loadFromStorage(COUNTRY_CACHE_KEY) || {}

function getCountryByName(name) {
    const key = name.toLowerCase()
    if (gCountryCache[key]) return Promise.resolve(gCountryCache[key])

    return axios.get(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => {
            const country = res.data[0]
            gCountryCache[key] = country
            saveToStorage(COUNTRY_CACHE_KEY, gCountryCache)
            return country
        })
}

function getCountryByCode(code) {
    return axios.get(`https://restcountries.com/v3.1/alpha/${code}`)
        .then(res => res.data[0])
}
