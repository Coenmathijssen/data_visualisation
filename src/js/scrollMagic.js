import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import * as ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'

// ASTMA
const tlAstma = new TimelineMax({})
const controllerAstma = new ScrollMagic.Controller({})

tlAstma
  .staggerFrom('.letter-astma', 0.3, { y: -20, opacity: 0, ease: Power1.easeIn }, 0.1)
  .to('.spray-container', { opacity: 1 })
  .to('.spray', { opacity: 1 })
  .staggerFrom('.body-text-astma', 0.8, { x: '-100vw', ease: Power1.easeIn }, 0.3, 'second')
  .to('.inhaler-container', 0.8, { delay: 0.5, x: -500, y: 235, scale: 1.1, rotate: '-30deg', ease: Power2.easeIn }, 'second')
  .to('.inhaler-top', 0.8, { left: '10px', top: '36px', ease: Power2.ease }, 'third')
  .to('.spray-reveal', 0.8, { x: '101%', ease: Power1.ease }, 'third')
  .to('.text-block-astma', 0, { opacity: 1 }, 'fourth')
  .to('.spray', 0.8, { opacity: 0 }, 'fifth')

const sceneAstma = new ScrollMagic.Scene({
  triggerElement: '.astma',
  triggerHook: 'onLeave',
  duration: '100%'
})
  .setPin('.astma')
  .setTween(tlAstma)
  .addTo(controllerAstma)


// HEART
const tlHeart = new TimelineMax({})
const controllerHeart = new ScrollMagic.Controller()

tlHeart
  .staggerFrom('.letter-heart', 0.3, { y: -20, opacity: 0, ease: Power1.easeIn }, 0.1)
  .staggerFrom('.body-text-heart', 0.8, { x: '100vw', ease: Power1.easeIn }, 0.3)
  .fromTo('.heart-full', 2, { opacity: 1 }, { opacity: 0 })
  .to('.heart-in-2', 1, { scale: 1.2, opacity: 1 }, 'first')
  .to('.heart-in-3', 1, { scale: 1.2, opacity: 1 }, 'first')
  .to('.heart-container', 1, { opacity: 0 }, 'second')
  .to('.text-block-heart', 1, { delay: 0.5, opacity: 1 }, 'second')

const sceneHeart = new ScrollMagic.Scene({
  triggerElement: '.heart',
  triggerHook: 'onLeave',
  duration: '100%'
})
  .setPin('.heart')
  .setTween(tlHeart)
  .addTo(controllerHeart)


// HEART
const tlLung = new TimelineMax({})
const controllerLung = new ScrollMagic.Controller()

tlLung
  .staggerFrom('.letter-lung', 0.3, { y: -20, opacity: 0, ease: Power1.easeIn }, 0.1)
  .staggerFrom('.body-text-lung', 1.6, { x: '100vw', ease: Power1.easeIn }, 0.3)
  .to('.horizontal', 3, { x: '-100vw', ease: Power1.easeIn })
  .to('.lung-color', 1, { delay: 0.5, opacity: 0 })
  .to('.lung-color', 1, { visibility: 'hidden' })
  .to('.lungs-container', 3, { scale: 8, x: '-75vw' })
  .to('.lung', 1, { backgroundColor: '#ee5d8b' })
  .to('.lungs-container', 2, { visibility: 'hidden' })
  .to('.no2', 1, { opacity: 1 }, 'first')
  .to('#bubble', 1, { opacity: 1 }, 'first')
  .to('.no2', 2, { delay: 1, x: '58vw', top: '22vh', rotate: '-15deg' })
  .set('#bubble', { className: 'infected' })
  .to('.text-block-lung', 1, { delay: 0.5, opacity: 1 })

const sceneLung = new ScrollMagic.Scene({
  triggerElement: '.lung',
  triggerHook: 'onLeave',
  duration: '200%'
})
  .setPin('.lung')
  .setTween(tlLung)
  .addTo(controllerLung)


// COPD
let tlCopd = new TimelineMax({})
const controllerCopd = new ScrollMagic.Controller({})

tlCopd
  .staggerFrom('.letter-copd', 0.3, { y: -20, opacity: 0, ease: Power1.easeIn }, 0.1)
  .staggerFrom('.body-text-copd', 0.8, { x: '100vw', ease: Power1.easeIn }, 0.3)

const sceneCopd = new ScrollMagic.Scene({
  triggerElement: '.copd',
  triggerHook: 'onLeave',
  duration: '100%'
})
  .setPin('.copd')
  .setTween(tlCopd)
  .addTo(controllerCopd)

let tlCopd2 = new TimelineMax({})
const controllerCopd2 = new ScrollMagic.Controller({})

tlCopd2
  .to('.running-man-container', { opacity: 1 }, 'first')
  .to('.running-man-container', 7, { left: '60vw' }, 'first')
  .to('.text-block-copd', 1, { delay: 3, opacity: 1 }, 'first')

const sceneCopd2 = new ScrollMagic.Scene({
  offset: 950,
  triggerElement: '.copd'
})
  .setTween(tlCopd2)
  .addTo(controllerCopd2)
  .setClassToggle('#running-man', 'play')
  .on('start', function (event) {
    tlCopd2.time(0)
  })
