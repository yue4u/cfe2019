import { Back, Elastic } from 'gsap'

export const appear = {
  time: 1,
  from: { opacity: 0, y: 1000 },
  to: { opacity: 1, y: 0, ease: Elastic.easeOut.config(1, 0.8) }
}

export const fadeIn = {
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
}
export const moving = {
  bush: {
    rotation: 5,
    repeat: -1,
    transformOrigin: '50% 100%',
    yoyo: true,
    ease: Back.ease
  },
  leaf: {
    rotation: -5,
    repeat: -1,
    transformOrigin: '50% 100%',
    yoyo: true,
    ease: Back.ease
  }
}
