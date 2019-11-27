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
      <g id="Artboard_1" data-name="Artboard 1">
        <image
          id="bg"
          x="39"
          y="39"
          width="1131"
          height="1236"
          :xlink:href="require('@/assets/chapter-7/bg.png')"
        />
        <g id="soil">
          <image
            id="base"
            x="136"
            y="211"
            width="892"
            height="619"
            :xlink:href="require('@/assets/chapter-7/base.png')"
          />
          <image
            id="soil-1"
            x="442"
            y="455"
            width="248"
            height="97"
            :xlink:href="require('@/assets/chapter-7/soil-1.png')"
          />
          <image
            id="soil-2"
            x="261"
            y="411"
            width="542"
            height="130"
            :xlink:href="require('@/assets/chapter-7/soil-2.png')"
          />
          <image
            id="soil-3"
            x="214"
            y="394"
            width="667"
            height="221"
            :xlink:href="require('@/assets/chapter-7/soil-3.png')"
          />
          <image
            id="soil-4"
            x="123"
            y="360"
            width="748"
            height="233"
            :xlink:href="require('@/assets/chapter-7/soil-4.png')"
          />
          <image
            id="soil-5"
            x="315"
            y="421"
            width="541"
            height="171"
            :xlink:href="require('@/assets/chapter-7/soil-5.png')"
          />
          <image
            id="soil-6-crystal"
            x="409"
            y="3"
            width="480"
            height="704"
            :xlink:href="require('@/assets/chapter-7/soil-6-crystal.png')"
          />
          <image
            id="soil-7-crystal"
            x="395"
            y="70"
            width="467"
            height="702"
            :xlink:href="require('@/assets/chapter-7/soil-7-crystal.png')"
          />
          <image
            id="soil-8-crystal"
            x="397"
            y="143"
            width="473"
            height="703"
            :xlink:href="require('@/assets/chapter-7/soil-8-crystal.png')"
          />
          <image
            id="soil-9"
            x="148"
            y="351"
            width="734"
            height="213"
            :xlink:href="require('@/assets/chapter-7/soil-9.png')"
          />
          <image
            id="soil-10"
            x="137"
            y="356"
            width="747"
            height="239"
            :xlink:href="require('@/assets/chapter-7/soil-10.png')"
          />
        </g>
        <image
          id="right-hand"
          x="364"
          y="668"
          width="1065"
          height="678"
          :xlink:href="require('@/assets/chapter-7/right-hand.png')"
        />
        <image
          id="left-hand"
          x="-204"
          y="740"
          width="1357"
          height="739"
          :xlink:href="require('@/assets/chapter-7/left-hand.png')"
        />
        <g id="square">
          <image
            id="rectangle"
            data-name="rectangle "
            x="133"
            y="1158"
            width="990"
            height="869"
            :xlink:href="require('@/assets/chapter-7/Rectangle.png')"
          />
          <rect x="182" y="1054" width="860" height="47" fill="#fff" />
          <image
            id="progress-full"
            x="182"
            y="1054"
            width="0"
            height="47"
            preserveAspectRatio="none"
            :xlink:href="require('@/assets/chapter-7/progress-full.png')"
          />
          <image
            id="bar"
            x="171"
            y="1043"
            width="879"
            height="69"
            :xlink:href="require('@/assets/chapter-7/bar.png')"
          />
          <image
            id="crystal"
            x="237"
            y="677"
            width="899"
            height="1346"
            :xlink:href="require('@/assets/chapter-7/crystal.png')"
          />
          <image
            id="spade"
            x="370"
            y="1302"
            width="517"
            height="608"
            :xlink:href="require('@/assets/chapter-7/spade.png')"
          />
          <rect
            @click="sway"
            id="spade-mask"
            x="370"
            y="1302"
            width="517"
            height="608"
            fill="transparent"
          />
        </g>
      </g>
    </svg>
    <cfe-next to="/chapter-8-heading" v-if="next" />
  </main>
</template>



<script>
import { gsap, Back, Linear } from 'gsap'
import { fadeIn, appear, moving } from '@/helpers'
import CfeNext from '@/components/next'
export default {
  components: {
    CfeNext
  },
  data() {
    return {
      next: false,
      clickable: true,
      count: 0,
      id: '#spade'
    }
  },
  mounted() {
    setTimeout(() => {
      gsap
        .timeline({ delay: 0 })
        .fromTo(['#bg', '#base'], appear.time, fadeIn.from, fadeIn.to)
        .fromTo(
          ['#right-hand', '#left-hand'],
          appear.time,
          fadeIn.from,
          fadeIn.to
        )
        .fromTo('#square', appear.time, fadeIn.from, fadeIn.to)
    }, 1500)
  },
  methods: {
    sway() {
      if (!this.clickable) return
      this.clickable = !this.clickable
      //      this.clickCount++

      //      if (this.clickCount === 3) {
      //        this.showOpen()
      //        return
      //      }

      const timeoutId = setTimeout(() => {
        this.clickable = true
      }, 1000)

      gsap
        .timeline()
        .to(this.id, 0.1, {
          rotate: 5,
          transformOrigin: 'center center'
        })
        .to(this.id, 0.1, {
          rotate: -5,
          transformOrigin: 'center center'
        })
        .to(this.id, 0.1, {
          rotate: 5,
          transformOrigin: 'center center'
        })
        .to(this.id, 0.1, {
          rotate: 0,
          transformOrigin: 'center center'
        })
      this.count += 1

      gsap.timeline().to('#progress-full', 1, {
        width: (857 / 10) * this.count,
        height: 47
      })

      gsap
        .timeline({ delay: 0 })
        .to('#left-hand', 0.3, {
          x: 50
        })
        .to('#left-hand', 0.3, {
          x: 0
        })

      gsap
        .timeline({ delay: 0 })
        .to('#right-hand', 0.3, {
          x: -50
        })
        .to('#right-hand', 0.3, {
          x: 0
        })

      if (this.count < 6 || this.count > 8) {
        gsap
          .timeline({ delay: 0 })
          .fromTo([`#soil-${this.count}`], appear.time, fadeIn.from, fadeIn.to)
      } else {
        gsap
          .timeline({ delay: 0 })
          .fromTo(
            [`#soil-${this.count - 1}-crystal`],
            0.2,
            fadeIn.to,
            fadeIn.from
          )

          .fromTo([`#soil-${this.count}-crystal`], 0.2, fadeIn.from, fadeIn.to)
      }

      if (this.count === 5) {
        gsap
          .timeline({ delay: 0 })
          .fromTo(this.id, 0.2, fadeIn.to, fadeIn.from)
          .fromTo('#crystal', 0.2, fadeIn.from, fadeIn.to)

        this.id = '#crystal'
        return
      }

      if (this.count === 8) {
        gsap
          .timeline({ delay: 0 })
          .fromTo(this.id, 0.2, fadeIn.to, fadeIn.from)
          .fromTo('#spade', 0.2, fadeIn.from, fadeIn.to)

        this.id = '#spade'
        return
      }

      if (this.count === 10) {
        setTimeout(() => {
          gsap
            .timeline({ delay: 0 })
            .fromTo('#square', appear.time, fadeIn.to, fadeIn.from)
            .to('svg', 1, {
              y: '20vh'
            })
          setTimeout(() => {
            this.next = true
          }, 1000)
        }, 1000)
      }

      //      if (this.count >= 1.2) {
      //        gsap.to('#crystal', 0.1, {
      //          rotate: 5,
      //          yoyo: true,
      //          repeat: -1,
      //          transformOrigin: 'center center'
      //        })

      //        clearTimeout(timeoutId)
      //        gsap.fromTo('#next', appear.time, fadeIn.from, fadeIn.to)
      //     }
    }
  }
}
</script>


<style lang="scss" scoped>
#bg,
#base,
#soil-1,
#soil-2,
#soil-3,
#soil-4,
#soil-5,
#soil-6-crystal,
#soil-7-crystal,
#soil-8-crystal,
#soil-9,
#soil-10,
#right-hand,
#left-hand,
// #rectangle,
// #bar,
#square,
//#spade 
#crystal {
  opacity: 0;
}
#spade-mask {
  cursor: pointer;
}
#progress-full {
  width: 0;
}
</style>

