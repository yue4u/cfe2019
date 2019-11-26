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
      <g id="stage-4">
        <image
          id="bg"
          x="89"
          y="88"
          width="1065"
          height="2017"
          :xlink:href="require('@/assets/chapter-6/bg.png')"
        />
        <image
          id="green-light-2"
          x="249"
          y="602"
          width="777"
          height="815"
          :xlink:href="require('@/assets/chapter-6/green-light-2.png')"
        />
        <image
          id="green-light"
          y="406"
          width="1215"
          height="1207"
          :xlink:href="require('@/assets/chapter-6/green-light.png')"
        />
        <image
          id="crystal"
          x="580"
          y="892"
          width="119"
          height="250"
          :xlink:href="require('@/assets/chapter-6/crystal.png')"
        />
        <g id="bubble">
          <image
            id="bubble-2"
            data-name="bubble"
            x="394"
            y="751"
            width="446"
            height="508"
            :xlink:href="require('@/assets/chapter-6/bubble-2.png')"
          />
          <image
            id="w4"
            x="457"
            y="751"
            width="54"
            height="59"
            :xlink:href="require('@/assets/chapter-6/w4.png')"
          />
          <image
            id="w3"
            x="663"
            y="716"
            width="36"
            height="35"
            :xlink:href="require('@/assets/chapter-6/w3.png')"
          />
          <image
            id="w2"
            x="426"
            y="1193"
            width="58"
            height="60"
            :xlink:href="require('@/assets/chapter-6/w2.png')"
          />
          <image
            id="w1"
            x="840"
            y="892"
            width="43"
            height="59"
            :xlink:href="require('@/assets/chapter-6/w1.png')"
          />
          <rect
            :id="clickable?'crystal-mask':'crystal-mask-disabled'"
            @click="sway"
            fill="transparent"
            x="394"
            y="751"
            width="446"
            height="508"
          />
        </g>
        <nuxt-link to="chapter-7-heading">
          <image
            id="next"
            x="933"
            y="1953"
            width="126"
            height="102"
            :xlink:href="require('@/assets/chapter-6/next.png')"
          />
        </nuxt-link>
      </g>
    </svg>
  </main>
</template>



<script>
import { gsap, Back, Linear } from 'gsap'
import { fadeIn, appear, moving } from '@/helpers'
export default {
  data() {
    return {
      next: false,
      clickable: true,
      count: 0
    }
  },
  mounted() {
    setTimeout(() => {
      gsap
        .timeline({ delay: 0 })
        .fromTo('#stage-4', appear.time, fadeIn.from, fadeIn.to)
        .fromTo(
          ['#bubble', '#crystal', '#green-light-2'],
          appear.time,
          fadeIn.from,
          fadeIn.to
        )

      setTimeout(() => {
        gsap.to('#green-light', 1, {
          repeat: -1,
          yoyo: true,
          opacity: 1
        })
      }, 2000)

      gsap.to(['#w1', '#w2', '#w3', '#w4'], 4, {
        repeat: -1,
        y: -30,
        scale: 1.2,
        opacity: 1
      })
      //.fromTo('#next', appear.time, fadeIn.from, fadeIn.to)
    }, 1500)
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

      const timeoutId = setTimeout(() => {
        this.clickable = true
      }, 1000)

      gsap
        .timeline()
        .to('#crystal', 0.1, {
          rotate: 5,
          transformOrigin: 'center center'
        })
        .to('#crystal', 0.1, {
          rotate: -5,
          scale: this.count + 1.5,
          transformOrigin: 'center center'
        })
        .to('#crystal', 0.1, {
          rotate: 5,
          scale: 1 + this.count,
          transformOrigin: 'center center'
        })
        .to('#crystal', 0.1, {
          rotate: 0,
          scale: 1 + this.count,
          transformOrigin: 'center center'
        })
      this.count += 0.4

      if (this.count >= 1.2) {
        gsap.to('#crystal', 0.1, {
          rotate: 5,
          yoyo: true,
          repeat: -1,
          transformOrigin: 'center center'
        })

        clearTimeout(timeoutId)
        gsap.fromTo('#next', appear.time, fadeIn.from, fadeIn.to)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
#stage-4,
#bubble,
#crystal,
#green-light,
#green-light-2,
#w1,
#w2,
#w3,
#w4,
#next {
  opacity: 0;
}
#crystal-mask {
  cursor: pointer;
}
</style>

