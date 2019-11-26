<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="1242"
    height="2208"
    viewBox="0 0 1242 2208"
  >
    <g id="stage-2">
      <image
        id="s2-pearl"
        x="28"
        y="642"
        width="1272"
        height="1443"
        :xlink:href="require('@/assets/chapter-6/s2-pearl.png')"
      />
      <image
        id="s2-surprise"
        x="401"
        y="1493"
        width="193"
        height="253"
        :xlink:href="require('@/assets/chapter-6/s2-surprise.png')"
      />
      <image
        id="s2-body"
        x="87"
        y="659"
        width="1058"
        height="648"
        :xlink:href="require('@/assets/chapter-6/s2-body.png')"
      />
      <image
        id="s2-head"
        x="87"
        y="149"
        width="1058"
        height="1317"
        :xlink:href="require('@/assets/chapter-6/s2-head.png')"
      />
    </g>
  </svg>
</template>


<script>
import { gsap, Back, Elastic } from 'gsap'
import { fadeIn, appear } from '@/helpers'
export default {
  mounted() {
    gsap
      .timeline({ delay: 0 })
      .fromTo('#s2-head', appear.time, fadeIn.from, fadeIn.to)
      .fromTo('#s2-body', appear.time, fadeIn.from, fadeIn.to)
      .fromTo('#s2-pearl', appear.time, fadeIn.from, fadeIn.to)

      .to('#s2-surprise', 0.2, {
        opacity: 1,
        rotate: 10,
        transformOrigin: 'center center'
      })
      .to('#s2-surprise', 0.2, {
        rotate: -5,
        scale: 1.1,
        transformOrigin: 'center center'
      })
      .to('#s2-surprise', 0.2, {
        rotate: 0,
        transformOrigin: 'center center'
      })
  }
}
</script>

<style lang="scss" scoped>
#s2-pearl,
#s2-surprise,
#s2-body,
#s2-head {
  opacity: 0;
}
</style>