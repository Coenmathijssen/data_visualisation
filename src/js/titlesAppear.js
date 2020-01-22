import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import * as ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'

// Chapter intro text
const tlChapterIntro = new TimelineMax({})
const controllerChapterIntro = new ScrollMagic.Controller({})

tlChapterIntro
  .to('.pollution-adam', 1, { y: -100, ease: Power4.easeOut })
  .to('.explain-text-appear-1', 1, { top: 0, ease: Power4.easeOut }, 'second')
  .to('.explain-text-appear-2', 1, { delay: 0.5, top: 0, ease: Power4.easeOut }, 'second')

const sceneChapterIntro = new ScrollMagic.Scene({
  triggerElement: '.chapter-trigger-intro'
})
  .setTween(tlChapterIntro)
  .addTo(controllerChapterIntro)


// Chapter Amsterdam - fill in your details
const tlChapterAmsterdam = new TimelineMax({})
const controllerChapterAmsterdam = new ScrollMagic.Controller({})

tlChapterAmsterdam
  .to('.adam', 1, { y: -100, ease: Power4.easeOut })

const sceneChapterAmsterdam = new ScrollMagic.Scene({
  triggerElement: '.chapter-trigger-amsterdam'
})
  .setTween(tlChapterAmsterdam)
  .addTo(controllerChapterAmsterdam)


// Chapter air pollution
const tlChapterPollution = new TimelineMax({})
const controllerChapterPollution = new ScrollMagic.Controller({})

tlChapterPollution
  .to('.pollution', 1, { y: -100, ease: Power4.easeOut })

const sceneChapterPollution = new ScrollMagic.Scene({
  triggerElement: '.chapter-trigger-pollution'
})
  .setTween(tlChapterPollution)
  .addTo(controllerChapterPollution)


// Chapter effects
const tlChapterEffects = new TimelineMax({})
const controllerChapterEffects = new ScrollMagic.Controller({})

tlChapterEffects
  .to('.effects', 1, { y: -100, ease: Power4.easeOut })

const sceneChapterEffects = new ScrollMagic.Scene({
  triggerElement: '.chapter-trigger-effects'
})
  .setTween(tlChapterEffects)
  .addTo(controllerChapterEffects)
