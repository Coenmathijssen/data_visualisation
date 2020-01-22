import * as d3 from 'd3'

// Importing whole files
import './openingAnimation.js'
import './intro.js'
import './backgroundChange.js'
import './titlesAppear.js'
import './scrollMagic.js'
import './form.js'

// Importing polyfill to make async functions work in Parcel
import 'babel-polyfill'

// Importing functions
import { transformData, calcMaximumAverage, calcAverage } from './transformData.js'
import { matchData } from './fetchAndFind.js'
import { update1, update2, update3 } from './barChart.js'

async function fetchAndTransformData () {
  return Promise.all([
    d3.json('./data/amsterdam_NO2_20190101.json'),
    d3.json('./data/amsterdam_NO2_20190102.json'),
    d3.json('./data/amsterdam_NO2_20190103.json'),
    d3.json('./data/amsterdam_NO2_20190104.json'),
    d3.json('./data/amsterdam_NO2_20190105.json'),
    d3.json('./data/amsterdam_NO2_20190106.json'),
    d3.json('./data/amsterdam_NO2_20190107.json')
  ]).then((data) => {
    let transformedData = transformData(data)
    return transformedData
  }).catch((err) => {
    console.log('Error loading data!, ', err)
  })
}

let transformedData = fetchAndTransformData()

function calcAnaValues (streets) {
  transformedData.then(transformedData => {
    console.log('transformed data: ', transformedData)

    let foundData = matchData(streets, transformedData)

    let weekAverageAmsterdam = calcAverage(transformedData)
    console.log('week average Amsterdam', weekAverageAmsterdam)
    let dayAverageAmsterdam = calcAverage(transformedData[0])
    console.log('day average Amsterdam', dayAverageAmsterdam)

    let barChartFunctionArray = [update1, update2, update3]

    foundData.forEach((item, i) => {
      item.then(result => {
        console.log('matching data: ', result)

        let locationAverageWeek = calcMaximumAverage(transformedData, result.id)
        let locationAverageDay = calcMaximumAverage(transformedData[0], result.id)
        console.log('locationAverageWeek', locationAverageWeek)
        console.log('locationAverageDay', locationAverageDay)

        let myData = [
          {
            name: 'Amsterdams gemiddelde',
            avg: dayAverageAmsterdam
          },
          { name: `Locatie ${i + 1}`,
            avg: locationAverageDay
          }
        ]
        barChartFunctionArray[i](myData)
      })
    })
  })
}



// Run functions with form data
document.getElementById('form-button').addEventListener('click', calculateData)

function calculateData () {
  let inputField1 = document.getElementById('street-1')
  let inputField2 = document.getElementById('street-2')
  let inputField3 = document.getElementById('street-3')

  let streets = [inputField1.value, inputField2.value, inputField3.value]

  calcAnaValues(streets)
}

// EYES CODE
var balls = document.getElementsByClassName('ball')
document.onmousemove = function () {
  var x = event.clientX * 100 / window.innerWidth + '%'
  var y = event.clientY * 100 / window.innerHeight + '%'

  for (var i = 0; i < 2; i++) {
    balls[i].style.left = x
    balls[i].style.top = y
    balls[i].style.transform = 'translate(-' + x + ',-' + y + ')'
  }
}
