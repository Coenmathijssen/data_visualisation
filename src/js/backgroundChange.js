import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import * as ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'

// Chapter intro text
const tlIntroChange = new TimelineMax({})
const controllerIntroChange = new ScrollMagic.Controller({})

tlIntroChange
  .to('.body', 0.3, { backgroundColor: '#80A2D0' })
  .call(changeNumber, ['01', '#223984'])

const sceneIntroChange = new ScrollMagic.Scene({
  triggerElement: '.intro'
})
  .setTween(tlIntroChange)
  .addTo(controllerIntroChange)


// Chapter Amsterdam
const tlAmsterdamChange = new TimelineMax({})
const controllerAmsterdamChange = new ScrollMagic.Controller({})

tlAmsterdamChange
  .to('.body', 0.3, { backgroundColor: '#ED6A63' })
  .call(changeNumber, ['02', '#000000'])


const sceneAmsterdamChange = new ScrollMagic.Scene({
  triggerElement: '.amsterdam'
})
  .setTween(tlAmsterdamChange)
  .addTo(controllerAmsterdamChange)

// Chapter air pollution
const tlAirPollutionChange = new TimelineMax({})
const controllerAirPollutionChange = new ScrollMagic.Controller({})

tlAirPollutionChange
  .to('.body', 0.3, { backgroundColor: '#ECBFD8' })
  .call(changeNumber, ['03', '#3F4A9A'])

const sceneAirPollutionChange = new ScrollMagic.Scene({
  triggerElement: '.air-pollution'
})
  .setTween(tlAirPollutionChange)
  .addTo(controllerAirPollutionChange)

// Chapter effects
const tlEffectsChange = new TimelineMax({})
const controllerEffectsChange = new ScrollMagic.Controller({})

tlEffectsChange
  .to('.body', 0.3, { backgroundColor: '#EEE8D7' })
  .call(changeNumber, ['04', '#E73A4D'])

const sceneEffectsChange = new ScrollMagic.Scene({
  offset: -100,
  triggerElement: '.decease'
})
  .setTween(tlEffectsChange)
  .addTo(controllerEffectsChange)


  function changeNumber(num, color) {
    document.getElementById('number-change').textContent = num
    document.getElementById('count').style.color = color
  }
