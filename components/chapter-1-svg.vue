<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="1242"
    height="2208"
    viewBox="0 0 1242 2208"
  >
    <defs>
      <filter id="shadow">
        <feDropShadow
          id="shadow-data"
          dx="5"
          dy="5"
          stdDepathsviation="20"
          flood-color="#fff"
          flood-opacity=".2"
        />
      </filter>
      <filter id="blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
      </filter>
    </defs>
    <g id="Artboard_1" data-name="Artboard 1">
      <image
        id="bubble"
        :xlink:href="require('@/assets/chapter-1/bubble.png')"
        x="145"
        y="155"
        width="958"
        height="1971"
      />
      <image
        id="grass"
        :xlink:href="require('@/assets/chapter-1/grass.png')"
        x="165"
        y="181"
        width="1077"
        height="1795"
      />
      <g id="wood-close-wrapper">
        <g style="filter:url(#blur);" id="wood-close-shadow">
          <image
            :xlink:href="require('@/assets/chapter-1/wood-close.png')"
            data-name="wood close"
            x="329"
            y="617"
            width="515"
            height="795"
            style="filter:url(#shadow);"
          />
        </g>

        <image
          @click="sway"
          id="wood-close"
          :xlink:href="require('@/assets/chapter-1/wood-close.png')"
          data-name="wood close"
          x="329"
          y="617"
          width="515"
          height="795"
        />
        <rect
          id="wood-close-mask"
          stroke="transparent"
          fill-opacity="0"
          stroke-opacity="0"
          fill="transparent"
          x="329"
          y="617"
          width="515"
          height="795"
          @click="sway"
        />
      </g>
      <image
        id="wood-open"
        :xlink:href="require('@/assets/chapter-1/wood-open.png')"
        data-name="wood open"
        x="352"
        y="631"
        width="561"
        height="852"
      />
      <image
        id="baby"
        :xlink:href="require('@/assets/chapter-1/baby.png')"
        x="473"
        y="713"
        width="354"
        height="657"
      />
      <image
        id="star-1"
        :xlink:href="require('@/assets/chapter-1/star-1.png')"
        x="306"
        y="851"
        width="121"
        height="186"
      />
      <image
        id="star-2"
        :xlink:href="require('@/assets/chapter-1/star-2.png')"
        x="328"
        y="1151"
        width="138"
        height="196"
      />
      <image
        id="star-3"
        :xlink:href="require('@/assets/chapter-1/star-3.png')"
        x="828"
        y="1270"
        width="132"
        height="130"
      />
      <image
        id="star-4"
        :xlink:href="require('@/assets/chapter-1/star-4.png')"
        x="857"
        y="1026"
        width="97"
        height="143"
      />
      <image
        id="star-5"
        :xlink:href="require('@/assets/chapter-1/star-5.png')"
        x="817"
        y="724"
        width="137"
        height="132"
      />
      <image
        id="star-6"
        :xlink:href="require('@/assets/chapter-1/star-6.png')"
        x="374"
        y="635"
        width="207"
        height="178"
      />
    </g>
  </svg>
</template>

<script>
import { gsap, Back } from 'gsap'
import { fadeIn, appear } from '@/helpers'

export default {
  data() {
    return {
      clickable: true,
      clickCount: 0
    }
  },
  mounted() {
    gsap
      .timeline({ delay: 0 })
      .fromTo('#bubble', appear.time, fadeIn.from, fadeIn.to)
      // .fromTo('#grass', appear.time, fadeIn.from, fadeIn.to)
      .fromTo(
        ['#grass', '#wood-close', '#wood-close-shadow'],
        appear.time,
        fadeIn.from,
        fadeIn.to
      )

    gsap.to('#shadow-data', 1, {
      yoyo: true,
      repeat: -1,
      attr: {
        dx: 30,
        dy: 30,
        stdDepathsviation: 10,
        floodOpacity: 5
      }
    })

    gsap.to('#wood-close-shadow', 1, {
      yoyo: true,
      repeat: -1,
      scale: 1.01
    })
  },
  methods: {
    sway() {
      if (!this.clickable) return

      this.clickable = !this.clickable
      this.clickCount++

      if (this.clickCount === 3) {
        this.showOpen()
        return
      }

      setTimeout(() => {
        this.clickable = true
      }, 1000)

      gsap
        .timeline()
        .to('#wood-close-wrapper', 0.2, {
          rotate: 10,
          transformOrigin: 'center center'
        })
        .to('#wood-close-wrapper', 0.2, {
          rotate: -5,
          transformOrigin: 'center center'
        })
        .to('#wood-close-wrapper', 0.2, {
          rotate: 0,
          transformOrigin: 'center center'
        })
    },
    showOpen() {
      gsap
        .timeline({ delay: 0 })
        .fromTo('#wood-close-wrapper', 0.5, fadeIn.to, fadeIn.from)
        .fromTo('#wood-open', 0.5, fadeIn.from, fadeIn.to)
        .to('#wood-close-mask', { display: 'none' })
        .fromTo('#baby', 0.5, fadeIn.from, fadeIn.to)

      setTimeout(() => {
        new Array(6).fill(0).forEach((_, n) => {
          gsap.to(`#star-${n + 1}`, Math.random() + 1, {
            repeat: -1,
            yoyo: true,
            ease: Back.ease,
            translateX: n * 10 * Math.random(),
            translateY: n * 10 * Math.random(),
            opacity: 1
          })
        })
        this.$emit('stage-done')
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
#bubble,
#grass,
#wood-open,
#wood-close,
#wood-close-shadow,
#baby,
#star-1,
#star-2,
#star-3,
#star-4,
#star-5,
#star-6 {
  opacity: 0;
  pointer-events: none;
}
#wood-close {
  &-mask {
    cursor: pointer;
  }
  pointer-events: initial;
  &:hover {
    transform: scale(1.05);
  }
}
</style>
