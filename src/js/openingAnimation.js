// import { gsap } from "gsap/all"
import '../styles/_animation.scss'

let tl = new TimelineMax({})

tl
  .staggerTo('.hide', 1.5, { delay: 1, y: -120, ease: Power4.easeOut }, 0.3)
  .staggerTo('.hide', 1, { delay: 3, opacity: 0, ease: Power4.easeOut }, 0.3)
  .to('.reveal-first', 0.8, { delay: 1, width: '450px', ease: Power4.easeIn }, 1)
  .to('.reveal-second', 0.8, { delay: 1,  width: '195px', ease: Power4.easeIn }, 2)
  .to('.creators', 0, { delay: 1, visibility: 'visible', ease: Power1.easeIn }, 2)
  .to('.knmi', 0, { delay: 1, visibility: 'visible', ease: Power1.easeIn }, 3)
  .to('.reveal-first', 0.8, { delay: 1, x: '100%', ease: Power4.easeOut }, 2)
  .to('.reveal-second', 0.8, { delay: 1, x: '100%', ease: Power4.easeOut }, 3)
  .to('.body', { heigth: 'auto', overflow: 'visible' })
  .to('.page', 1.5, { y: '-100%', ease: Power3.easeIn }, 7.5) // 6.5
  .to('.second-color-slide-up', 1.6, {y: '-100%', ease: Power4.easeIn }, 8) // 8
  .to('.page', 1.5, { visibility: 'hidden', ease: Power3.easeIn }, 11) // 11
