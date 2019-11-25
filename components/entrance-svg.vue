<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    height="100%"
    viewBox="0 0 1242 2208"
  >
    <g id="Artboard_1" data-name="Artboard 1">
      <image
        id="top-bg"
        :xlink:href="require('@/assets/top-bg.png')"
        x="-280"
        width="1840"
        height="2208"
      />
      <image
        id="brush-right"
        :xlink:href="require('@/assets/brush-right.png')"
        x="855"
        y="1304"
        width="372"
        height="509"
      />
      <image
        id="brush-left"
        :xlink:href="require('@/assets/brush-left.png')"
        x="9"
        y="1332"
        width="374"
        height="550"
      />
      <g id="kean">
        <image
          id="clinenn"
          :xlink:href="require('@/assets/clinenn.png')"
          x="372"
          y="853"
          width="491"
          height="1127"
        />
        <image
          id="glass"
          :xlink:href="require('@/assets/glass.png')"
          x="305"
          y="1249"
          width="1149"
          height="242"
        />
        <image
          id="light"
          :xlink:href="require('@/assets/light.png')"
          x="405"
          y="1116"
          width="764"
          height="479"
        />
        <image
          id="crystal"
          :xlink:href="require('@/assets/crystal.png')"
          x="552"
          y="1323"
          width="83"
          height="80"
        />
      </g>
      <image
        id="top-tree"
        :xlink:href="require('@/assets/top-tree.png')"
        x="-105"
        width="1434"
        height="2217"
      />
      <g id="leaf">
        <image
          id="l1"
          :xlink:href="require('@/assets/l1.png')"
          x="-40"
          y="1923"
          width="485"
          height="360"
        />
        <image
          id="l2"
          :xlink:href="require('@/assets/l2.png')"
          x="-81"
          y="1723"
          width="427"
          height="553"
        />
        <image
          id="l3"
          :xlink:href="require('@/assets/l3.png')"
          x="-102"
          y="1594"
          width="335"
          height="540"
        />
        <image
          id="r3"
          :xlink:href="require('@/assets/r3.png')"
          x="781"
          y="1887"
          width="448"
          height="447"
        />
        <image
          id="r2"
          :xlink:href="require('@/assets/r2.png')"
          x="897"
          y="1715"
          width="409"
          height="533"
        />
        <image
          id="r1"
          :xlink:href="require('@/assets/r1.png')"
          x="1070"
          y="1585"
          width="220"
          height="602"
        />
      </g>
    </g>
  </svg>
</template>

<script>
import { gsap, Back, Elastic } from 'gsap'

export default {
  mounted() {
    const tl = gsap.timeline({ delay: 0 })
    const appear = {
      time: 1,
      from: { opacity: 0, y: 1000 },
      to: { opacity: 1, y: 0, ease: Elastic.easeOut.config(1, 0.8) }
    }
    const fadeIn = {
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    }
    const moving = {
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
    tl.fromTo('#Artboard_1', appear.time, fadeIn.from, fadeIn.to)
      .fromTo(['#leaf'], appear.time, fadeIn.from, fadeIn.to)
      .fromTo('#kean', appear.time, fadeIn.from, fadeIn.to)

    gsap.to(['#brush-right'], 1, moving.bush)
    gsap.to(['#brush-left'], 1, {
      ...moving.bush,
      rotation: -5
    })

    gsap.to(['#l1', '#l3', '#r2'], 2, moving.leaf)
    gsap.to(['#l2', '#l3', '#r3', '#r1'], 2, {
      ...moving.leaf,
      rotation: 5
    })

    gsap.to(['#light'], 1.5, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      ease: Back.ease
    })
  }
}
</script>

<style lang="scss">
#Artboard_1,
#kean,
#leaf {
  opacity: 0;
}
</style>
