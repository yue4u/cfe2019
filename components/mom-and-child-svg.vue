<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="1242"
    height="2208"
    viewBox="0 0 1242 2208"
  >
    <g id="mom-and-child">
      <image
        id="grass-2"
        x="-44"
        y="1686"
        width="1286"
        height="522"
        :xlink:href="require('@/assets/chapter-1/grass-2.png')"
      />
      <image
        id="mom"
        x="284"
        y="343"
        width="794"
        height="1631"
        :xlink:href="require('@/assets/chapter-1/mom.png')"
      />
      <image
        id="child"
        x="156"
        y="1262"
        width="492"
        height="685"
        :xlink:href="require('@/assets/chapter-1/child.png')"
      />
      <image
        id="what"
        x="148"
        y="1207"
        width="66"
        height="73"
        :xlink:href="require('@/assets/chapter-1/what.png')"
      />
    </g>
  </svg>
</template>

<script>
import { gsap, Back } from 'gsap'
import { fadeIn, appear } from '@/helpers'

export default {
  mounted() {
    gsap.to('#what', 1, {
      repeat: -1,
      y: -30,
      x: -10,
      //scale: 1.2,
      opacity: 1
    })
  }
}
</script>

<style lang="scss" scoped>
#what {
  opacity: 0;
}
</style>
