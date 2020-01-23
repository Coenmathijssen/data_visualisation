import * as d3 from 'd3'

// Importing whole files
import './openingAnimation.js'
import './intro.js'
import './backgroundChange.js'
import './titlesAppear.js'
import './scrollMagic.js'
import './eyeballs.js'
import './maps.js'

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

async function calcAnaValues (streets, name, avgAmsterdam) {
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

        // Formula based on WHO. Which says 40 ug/m3 no2 is the guideline, bringing that to a 5.5
        let score = 10 - (locationAverageDay / 8.888)
        score = Math.round(score * 100) / 100
        let scoreHolder = document.getElementsByClassName('score-number')
        for (let i = 0; i < scoreHolder.length; i++) {
          scoreHolder[i].textContent = score
        }

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
        calculateScore(streets, locationAverageDay, name, dayAverageAmsterdam)
      })
    })
  })
}

function calculateScore (streets, no2, name, avgAmsterdam) {
  no2 = Math.round(no2 * 100) / 100
  avgAmsterdam = Math.round(avgAmsterdam * 100) / 100

  let nameHolder = document.getElementsByClassName('name-holder')
  for (let i = 0; i < nameHolder.length; i++) {
    nameHolder[i].textContent = name
  }

  let no2Holder = document.getElementsByClassName('no2-holder')
  no2Holder.textContent = no2
  for (let i = 0; i < no2Holder.length; i++) {
    no2Holder[i].textContent = no2
  }

  let avgHolder = document.getElementsByClassName('avg-holder')
  for (let i = 0; i < avgHolder.length; i++) {
    avgHolder[i].textContent = avgAmsterdam
  }

  document.getElementsByClassName('route-1-holder')[0].textContent = streets[0]
  document.getElementsByClassName('route-2-holder')[0].textContent = streets[1]
  document.getElementsByClassName('route-3-holder')[0].textContent = streets[2]
}

// Run functions with form data
document.getElementById('form-button').addEventListener('click', calculateData)

function calculateData () {
  let inputField1 = document.getElementById('street-1')
  let inputField2 = document.getElementById('street-2')
  let inputField3 = document.getElementById('street-3')
  let name = document.getElementById('name').value

  let streets = [inputField1.value, inputField2.value, inputField3.value]

  calcAnaValues(streets, name)
}
