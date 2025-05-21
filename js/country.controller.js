'use strict'

function onGetCountryInfo() {
    const elInput = document.getElementById('country-input')
    const countryName = elInput.value.trim()
    if (!countryName) return

    getCountryByName(countryName)
        .then(renderInfo)
        .catch(() => {
            document.getElementById('country-output').innerText = 'Country not found'
        })
}

function renderInfo(data) {
    const output = `
Name: ${data.name.common}
Capital: ${data.capital}
Population: ${data.population.toLocaleString()}
Area: ${data.area.toLocaleString()} km²
Region: ${data.region}
  `
    document.getElementById('country-output').innerText = output
}
