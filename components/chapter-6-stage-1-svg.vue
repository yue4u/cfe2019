<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="1242"
    height="2208"
    viewBox="0 0 1242 2208"
  >
    <defs>
      <style>
  .cls-1 {
    opacity: 0.82;
  }
      </style>
    </defs>
    <g id="stage-1">
      <image
        id="bg"
        x="134"
        y="131"
        width="970"
        height="1933"
        :xlink:href="require('@/assets/chapter-6/bg.png')"
      />
      <image
        id="kesari"
        x="504"
        y="166"
        width="170"
        height="177"
        :xlink:href="require('@/assets/chapter-6/kesari.png')"
      />
      <image
        id="fish"
        class="cls-1"
        x="625"
        y="786"
        width="287"
        height="240"
        :xlink:href="require('@/assets/chapter-6/fish.png')"
      />
      <image
        id="coral-behind"
        x="180"
        y="879"
        width="993"
        height="1192"
        :xlink:href="require('@/assets/chapter-6/coral-behind.png')"
      />
      <image
        id="pearl"
        data-name="pearl "
        x="282"
        y="1115"
        width="879"
        height="967"
        :xlink:href="require('@/assets/chapter-6/pearl.png')"
      />
      <image
        id="coral-front"
        x="674"
        y="1515"
        width="507"
        height="565"
        :xlink:href="require('@/assets/chapter-6/coral-front.png')"
      />
      <image
        id="bubble"
        x="389"
        y="489"
        width="164"
        height="774"
        :xlink:href="require('@/assets/chapter-6/bubble.png')"
      />
    </g>
  </svg>
</template>


<script>
import { gsap, Back, Linear } from 'gsap'
import { fadeIn, appear, moving } from '@/helpers'

export default {
  mounted() {
    setTimeout(() => {
      gsap.fromTo('#stage-1', 0.5, fadeIn.from, fadeIn.to)

      gsap.to(['#fish'], 10, {
        repeat: -1,
        x: -50,
        opacity: 1
      })

      gsap.to(['#pearl'], 1, {
        repeat: -1,
        yoyo: true,
        y: -10,
        opacity: 1
      })

      gsap.to(['#bubble'], 4, {
        repeat: -1,
        y: -10,
        opacity: 1
      })

      gsap.to(['#coral-front'], 2, {
        ...moving.leaf,
        rotation: 5
      })

      gsap.to(['#kesari'], 8, {
        y: 1500,
        ease: Linear.easeNone,
        opacity: 0
      })
      setTimeout(() => {
        this.$router.push('/chapter-6-2')
      }, 6000)
    }, 1500)
  }
}
</script>


<style lang="scss" scoped>
#stage-1 {
  opacity: 0;
}
#bubble,
#fish {
  opacity: 0.2;
}
</style>