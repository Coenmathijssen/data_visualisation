export { transformData, calcMaximumAverage, calcAverage, getAvg }

function transformData (data) {
  let transformedDataArray = []

  data.forEach(dataItem => {
    const chunck = 42128

    let concChunkArray = []

    for (let i = 1; i <= 24; i++) {
      let concChunk = dataItem.conc_ana.slice(i - 1, chunck * i)
      concChunkArray.push(concChunk)
    }

    let day = []

    for (let i = 1; i <= 24; i++) {
      let hour = {
        'id': i,
        'time': dataItem.time[i - 1],
        'temperature': dataItem.temperature[i - 1],
        'uWind': dataItem.uWind[i - 1],
        'vWind': dataItem.vWind[i - 1],
        'dataArray': []
      }

      dataItem.lon.forEach((item, index) => {
        let obj = {
          'id': index + 1,
          'long': item,
          'lat': dataItem.lat[index],
          'concAna': concChunkArray[i - 1][index]
        }
        hour.dataArray.push(obj)
      })

      day.push(hour)
    }

    transformedDataArray.push(day)
  })

  return transformedDataArray
}

function calcMaximumAverage (transformedData, index) {
  // Calculate the highest value in the array
  // transformedData[0].forEach(hour => {
  //   console.log('hour: ', hour)
  //   let maxValue = Math.max.apply(Math, hour.dataArray.map(function(o) { return o.concAna }))
  //   let index = hour.dataArray.indexOf(maxValue)
  //   console.log('value: ', maxValue)
  // })

  let maximumArray = []

  if (transformedData.length === 24) {
    let maximumDay = transformedData.map(hour => {
      return hour.dataArray[index - 1].concAna
    })
    return getAvg(maximumDay)
  } else {
    transformedData.forEach(dataDay => {
      let maximumDay = dataDay.map(hour => {
        return hour.dataArray[index - 1].concAna
      })
      maximumDay = getAvg(maximumDay)
      maximumArray.push(maximumDay)
    })
    return getAvg(maximumArray)
  }
}

function calcAverage (transformedData) {
  let averagePerHour = []

  if (transformedData.length === 24) {
    transformedData.forEach(hour => {
      let hourConcAna = hour.dataArray.map(item => {
        return item.concAna
      })
      let hourConcAnaAverage = getAvg(hourConcAna)
      averagePerHour.push(hourConcAnaAverage)
    })
  } else {
    transformedData.forEach(dayItem => {
      dayItem.forEach(hour => {
        let hourConcAna = hour.dataArray.map(item => {
          return item.concAna
        })
        let hourConcAnaAverage = getAvg(hourConcAna)
        averagePerHour.push(hourConcAnaAverage)
      })
    })
  }
  let totalAverage = getAvg(averagePerHour)
  return totalAverage
}
// const array = []
// callAsyncFunc().then(data => {
//   callAsyncFunc2().then(data2 => {
//     array.push(data, data2)
//   })
// })

function getAvg (array) {
  const total = array.reduce((acc, c) => acc + c, 0)
  return total / array.length
}
