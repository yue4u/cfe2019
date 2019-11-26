<template>
  <main>
    <svg
      class="cfe-svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="1242"
      height="2208"
      viewBox="0 0 1242 2208"
    >
      <g id="stage-3">
        <g id="s3-crystal">
          <image
            id="s3-p3"
            x="141"
            y="1481"
            width="964"
            height="590"
            :xlink:href="require('@/assets/chapter-6/s3-p3.png')"
          />
          <image
            id="s3-wind-2"
            x="422"
            y="1585"
            width="474"
            height="478"
            :xlink:href="require('@/assets/chapter-6/s3-wind-2.png')"
          />
        </g>
        <g id="s3-wind">
          <image
            id="s3-p2"
            x="141"
            y="823"
            width="964"
            height="596"
            :xlink:href="require('@/assets/chapter-6/s3-p-2.png')"
          />
        </g>
        <g id="s3-p1" data-name="s3-p1">
          <image
            id="s3-pearl"
            x="141"
            y="-269"
            width="1100"
            height="1298"
            :xlink:href="require('@/assets/chapter-6/s3-p1.png')"
          />
          <image
            id="s3-wind-2-2"
            data-name="s3-wind"
            x="333"
            y="296"
            width="302"
            height="249"
            :xlink:href="require('@/assets/chapter-6/s3-wind.png')"
          />
        </g>
      </g>
    </svg>
  </main>
</template>



<script>
import { gsap, Back, Linear } from 'gsap'
import { fadeIn, appear, moving } from '@/helpers'

export default {
  mounted() {
    setTimeout(() => {
      gsap
        .timeline({ delay: 0 })
        .fromTo('#s3-p1', appear.time, fadeIn.from, fadeIn.to)
        .fromTo('#s3-wind-2-2', appear.time, fadeIn.from, {
          ...fadeIn.to,
          x: -10
        })
        .fromTo('#s3-p2', appear.time, fadeIn.from, fadeIn.to)
        .fromTo('#s3-p3', appear.time, fadeIn.from, fadeIn.to)
        .fromTo('#s3-wind-2', appear.time, fadeIn.from, {
          ...fadeIn.to,
          x: -20
        })

      setTimeout(() => {
        this.$router.push('/chapter-6-4')
      }, 3000)
    }, 1500)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
#s3-p3,
#s3-p2,
#s3-p1,
#s3-wind-2,
#s3-wind-2-2 {
  opacity: 0;
}
</style>

