import * as d3 from 'd3'

// https://bl.ocks.org/TamayoValencia/996ca33b7d42d7dff4d69ed00a5fd571

// D3 code
// FIRST BAR CHART
let svg1 = d3.selectAll('.viz1'),
  margin1 = { top: 20, right: 20, bottom: 30, left: 50 },
  width1 = +svg1.attr('width') - margin1.left - margin1.right,
  height1 = +svg1.attr('height') - margin1.top - margin1.bottom,
  g1 = svg1.append('g').attr('transform', 'translate(' + margin1.left + ',' + margin1.top + ')')

g1.append('g')
  .attr('class', 'x axis')

g1.append('g')
  .attr('class', 'y axis')

let x1 = d3.scaleBand()
  .padding(0.1)
  .range([0, width1])

let y1 = d3.scaleLinear()
  .range([height1, 0])

export function update1 (myData) {
  x1.domain(myData.map(d => d.name))
  y1.domain([0, d3.max(myData, d => d.avg)])

  let points = g1.selectAll('.point')
    .data(myData) // Update

  let pointsEnter = points
    .enter()
    .append('rect')
    .attr('class', 'point')

  points.merge(pointsEnter) // Enter + Update
    .attr('x', d => x1(d.name))
    .attr('y', d => y1(d.avg))
    .attr('width', d => x1.bandwidth())
    .attr('height', d => height1 - y1(d.avg))

  points.exit()
    .remove()

  g1.select('.x.axis')
    .call(d3.axisBottom(x1))
    .attr('transform', 'translate(0, ' + height1 + ')')

  g1.select('.y.axis')
    .call(d3.axisLeft(y1))
  g1.append('text')
    .attr('y', -15)
    .attr('x', 7)
    .attr('dy', '0.5em')
    .attr('text-anchor', 'end')
    .attr('class', 'graph-text')
    .text('No2')
}

// SECOND BAR CHART
let svg2 = d3.selectAll('.viz2'),
  margin2 = { top: 20, right: 20, bottom: 30, left: 50 },
  width2 = +svg2.attr('width') - margin2.left - margin2.right,
  height2 = +svg2.attr('height') - margin2.top - margin2.bottom,
  g2 = svg2.append('g').attr('transform', 'translate(' + margin2.left + ',' + margin2.top + ')')

g2.append('g')
  .attr('class', 'x axis')

g2.append('g')
  .attr('class', 'y axis')

let x2 = d3.scaleBand()
  .padding(0.1)
  .range([0, width2])

let y2 = d3.scaleLinear()
  .range([height2, 0])

export function update2 (myData) {
  x2.domain(myData.map(d => d.name))
  y2.domain([0, d3.max(myData, d => d.avg)])

  let points2 = g2.selectAll('.point')
    .data(myData) // Update

  let pointsEnter2 = points2
    .enter()
    .append('rect')
    .attr('class', 'point')

  points2.merge(pointsEnter2) // Enter + Update
    .attr('x', d => x2(d.name))
    .attr('y', d => y2(d.avg))
    .attr('width', d => x2.bandwidth())
    .attr('height', d => height2 - y2(d.avg))

  points2.exit()
    .remove()

  g2.select('.x.axis')
    .call(d3.axisBottom(x2))
    .attr('transform', 'translate(0, ' + height2 + ')')

  g2.select('.y.axis')
    .call(d3.axisLeft(y2))
  g2.append('text')
    .attr('y', -15)
    .attr('x', 7)
    .attr('dy', '0.5em')
    .attr('text-anchor', 'end')
    .attr('class', 'graph-text')
    .text('No2')
}

// THIRD BAR CHART
let svg3 = d3.selectAll('.viz3'),
  margin3 = { top: 20, right: 20, bottom: 30, left: 50 },
  width3 = +svg3.attr('width') - margin3.left - margin3.right,
  height3 = +svg3.attr('height') - margin3.top - margin3.bottom,
  g3 = svg3.append('g').attr('transform', 'translate(' + margin3.left + ',' + margin3.top + ')')

g3.append('g')
  .attr('class', 'x axis')

g3.append('g')
  .attr('class', 'y axis')

let x3 = d3.scaleBand()
  .padding(0.1)
  .range([0, width3])

let y3 = d3.scaleLinear()
  .range([height3, 0])

export function update3 (myData) {
  x3.domain(myData.map(d => d.name))
  y3.domain([0, d3.max(myData, d => d.avg)])

  let points3 = g3.selectAll('.point')
    .data(myData) // Update

  let pointsEnter3 = points3
    .enter()
    .append('rect')
    .attr('class', 'point')

  points3.merge(pointsEnter3) // Enter + Update
    .attr('x', d => x3(d.name))
    .attr('y', d => y3(d.avg))
    .attr('width', d => x3.bandwidth())
    .attr('height', d => height3 - y3(d.avg))

  points3.exit()
    .remove()

  g3.select('.x.axis')
    .call(d3.axisBottom(x3))
    .attr('transform', 'translate(0, ' + height3 + ')')

  g3.select('.y.axis')
    .call(d3.axisLeft(y3))
  g3.append('text')
    .attr('y', -15)
    .attr('x', 7)
    .attr('dy', '0.5em')
    .attr('text-anchor', 'end')
    .attr('class', 'graph-text')
    .text('No2')
}
