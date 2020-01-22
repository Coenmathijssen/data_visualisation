import Smoke from 'smoke-effect'

var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')
var smoke = new Smoke(context, [34, 57, 132]) // context canvas, smoke color
smoke.start()
smoke.step(800)
addSmoke(smoke)

// Make run smoke run indefinitely
function addSmoke () {
  smoke.addSmoke(0, 400, 0)
  smoke.addSmoke(1300, 400, 0)
  setTimeout(() => {
    addSmoke()
  }, 1000)
}
