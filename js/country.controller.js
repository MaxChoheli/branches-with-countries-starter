'use strict'

function onGetCountryInfo(ev) {
    ev.preventDefault()

    const elInput = document.getElementById('country-input')
    const countryName = elInput.value.trim()
    if (!countryName) return

    showLoader()
    getCountryByName(countryName)
        .then(renderInfo)
        .catch(() => {
            document.getElementById('country-name').innerText = ''
            document.getElementById('country-flag').src = ''
            document.getElementById('country-flag').alt = ''
            document.getElementById('country-population').innerText = ''
            document.getElementById('country-area').innerText = ''
            alert('Country not found')
        })
        .finally(() => hideLoader())
}

function renderInfo(data) {
    document.getElementById('country-name').innerText = data.name.common
    document.getElementById('country-flag').src = data.flags.png
    document.getElementById('country-flag').alt = `${data.name.common} flag`
    document.getElementById('country-population').innerText = `Population: ${data.population.toLocaleString()}`
    document.getElementById('country-area').innerText = `Area: ${data.area.toLocaleString()} km²`
}

function onClearCache() {
    localStorage.removeItem('countryCache')
    alert('Cache cleared')
}

function showLoader() {
    document.getElementById('loader').style.display = 'block'
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none'
}
