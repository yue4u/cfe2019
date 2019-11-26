<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="1242"
    height="2208"
    viewBox="0 0 1242 2208"
  >
    <g id="stage-1">
      <image
        id="kean"
        x="119"
        y="676"
        width="1050"
        height="1378"
        :xlink:href="require('@/assets/chapter-3/kean.png')"
      />
      <image
        id="what"
        x="381"
        y="567"
        width="96"
        height="73"
        :xlink:href="require('@/assets/chapter-3/what.png')"
      />
      <image
        id="butterfly-2"
        x="223"
        y="911"
        width="608"
        height="468"
        :xlink:href="require('@/assets/chapter-3/butterfly-2.png')"
      />
      <image
        id="butterfly-3"
        x="868"
        y="593"
        width="301"
        height="282"
        :xlink:href="require('@/assets/chapter-3/butterfly-3.png')"
      />
      <image
        id="butterfly-1"
        x="24"
        y="293"
        width="298"
        height="274"
        :xlink:href="require('@/assets/chapter-3/butterfly-1.png')"
      />
    </g>
  </svg>
</template>

<script>
import { gsap, Back } from 'gsap'
import { fadeIn, appear } from '@/helpers'

export default {
  mounted() {
    setTimeout(() => {
      gsap
        .timeline({ delay: 0 })
        .fromTo('#butterfly-1', 0.5, fadeIn.from, fadeIn.to)
        .fromTo('#butterfly-1', 0.5, fadeIn.to, fadeIn.from)
        .fromTo('#butterfly-2', appear.time, fadeIn.from, fadeIn.to)
      // use timeout beacause it might related to a bug in gasp
      setTimeout(() => {
        gsap
          .timeline({ delay: 0 })
          .fromTo('#what', 0.3, fadeIn.from, fadeIn.to)
          .fromTo('#butterfly-2', 0.5, fadeIn.to, fadeIn.from)
          .fromTo('#butterfly-3', 0.5, fadeIn.from, fadeIn.to)

        setTimeout(() => {
          console.log('???')
          this.$router.push('/chapter-3-stage-2')
        }, 1000)
      }, 2500)
    }, 1300)
  }
}
</script>

<style lang="scss" scoped>
#butterfly-1,
#butterfly-2,
#butterfly-3,
#what {
  opacity: 0;
}
</style>