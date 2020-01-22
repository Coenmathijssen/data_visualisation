export function matchData(streets, data) {
  let dataHour = data[0][0].dataArray

  let foundItems = streets.map(street => {
    return getAddress(street).then(data => {
      console.log('found address: ', data)

      let lat = Number(data.geometry.location.lat.toString().slice(0, -1))
      let long = Number(data.geometry.location.lng.toString().slice(0, -1))

      let foundItem = dataHour.filter((item, i) => {
        if (item.long > long - 0.001 && item.long < long + 0.001 && item.lat > lat - 0.001 && item.lat < lat) {
          return item
        }
      })

      return foundItem[0]
    })
  })
  return foundItems
}

// Google Geocoding async fetch
async function getAddress (address) {
  let response = await (await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address},Amsterdam&key=AIzaSyCuMys_inITPT8JGaKQ9SNaKS8EqD7ea2A
  `))
  let data = await response.json()
  let returnedData = data.results[0]
  if (!returnedData.address_components[6]) {
    window.alert('Adres niet gevonden. Zorg dat het adres goed is geschreven en zich binnen Amsterdam bevindt.')
    return null
  } else {
    return returnedData
  }
}
