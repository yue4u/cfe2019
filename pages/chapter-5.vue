<template>
  <main class="svg-mask">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="2484"
      height="2208"
      viewBox="0 0 2484 2208"
      class="svg"
    >
      <g id="stage-1">
        <image
          id="star"
          width="2484"
          height="2208"
          :xlink:href="require('@/assets/chapter-5/star.png')"
        />
        <image
          id="ticket-near-boy"
          x="1678"
          y="616"
          width="206"
          height="164"
          :xlink:href="require('@/assets/chapter-5/ticket-near-wang.png')"
        />
        <image
          id="boy"
          x="1473"
          y="239"
          width="778"
          height="1059"
          :xlink:href="require('@/assets/chapter-5/boy.png')"
        />
        <image
          id="kean-left"
          x="1064"
          y="1194"
          width="146"
          height="401"
          :xlink:href="require('@/assets/chapter-5/kean-left.png')"
        />
        <image
          id="kean-right"
          x="1383"
          y="1192"
          width="144"
          height="401"
          :xlink:href="require('@/assets/chapter-5/kean-right.png')"
        />
        <image
          id="chat-bubble"
          x="1583"
          y="318"
          width="243"
          height="176"
          :xlink:href="require('@/assets/chapter-5/chat-bubble.png')"
        />
        <g id="love">
          <image
            v-if="color === 'orange'"
            id="love-orange"
            x="256"
            y="219"
            width="676"
            height="549"
            :xlink:href="require('@/assets/chapter-5/love-orange.png')"
          />
          <image
            v-else-if="color === 'red'"
            id="love-red"
            x="256"
            y="219"
            width="676"
            height="549"
            :xlink:href="require('@/assets/chapter-5/love-red.png')"
          />
          <image
            v-else-if="color === 'blue'"
            id="love-blue"
            x="256"
            y="219"
            width="676"
            height="549"
            :xlink:href="require('@/assets/chapter-5/love-blue.png')"
          />
          <image
            v-else-if="color === 'white'"
            id="love-original"
            x="256"
            y="219"
            width="676"
            height="549"
            :xlink:href="require('@/assets/chapter-5/love-original.png')"
          />
          <image
            id="love-line"
            x="244"
            y="265"
            width="720"
            height="440"
            :xlink:href="require('@/assets/chapter-5/love-line.png')"
          />
        </g>
        <g id="question">
          <image
            id="q-white"
            x="299"
            y="920"
            width="235"
            height="171"
            :xlink:href="require('@/assets/chapter-5/q-white.png')"
          />

          <rect
            x="299"
            y="920"
            width="235"
            height="171"
            fill="transparent"
            @click="()=>changeColor('white')"
          />
          <image
            id="q-orange"
            x="301"
            y="1396"
            width="235"
            height="171"
            :xlink:href="require('@/assets/chapter-5/q-orange.png')"
          />

          <rect
            x="301"
            y="1396"
            width="235"
            height="171"
            fill="transparent"
            @click="()=>changeColor('orange')"
          />
          <image
            id="q-blue"
            x="300"
            y="1238"
            width="235"
            height="171"
            :xlink:href="require('@/assets/chapter-5/q-blue.png')"
          />

          <rect
            x="300"
            y="1238"
            width="235"
            height="171"
            fill="transparent"
            @click="()=>changeColor('blue')"
          />
          <image
            id="q-red"
            x="300"
            y="1078"
            width="235"
            height="171"
            :xlink:href="require('@/assets/chapter-5/q-red.png')"
          />

          <rect
            id="q-red"
            x="300"
            y="1078"
            width="235"
            fill="transparent"
            height="171"
            @click="()=>changeColor('red')"
          />
        </g>
        <image
          id="left"
          x="1464"
          y="1738"
          width="207"
          height="352"
          :xlink:href="require('@/assets/chapter-5/left.png')"
        />
        <rect
          @click="left"
          class="mask"
          x="1464"
          fill="transparent"
          y="1738"
          width="207"
          height="352"
        />

        <image
          id="right"
          x="900"
          y="1750"
          width="236"
          height="340"
          :xlink:href="require('@/assets/chapter-5/right.png')"
        />
        <rect
          @click="right"
          clas="mask"
          x="900"
          y="1750"
          width="236"
          height="340"
          fill="transparent"
        />
        <image
          id="ticket"
          x="1522"
          y="557"
          width="734"
          height="702"
          :xlink:href="require('@/assets/chapter-5/ticket.png')"
        />
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
      click: 0,
      seen: false,
      ok: false,
      color: 'white'
    }
  },
  mounted() {
    setTimeout(() => {
      gsap
        .timeline({ delay: 0 })
        .fromTo('#stage-1', appear.time, fadeIn.from, fadeIn.to)
      //.fromTo('#s2-body', appear.time, fadeIn.from, fadeIn.to)
      //.fromTo('#s2-pearl', appear.time, fadeIn.from, fadeIn.to)

      gsap.to(['#love-line'], 1, {
        y: 20,
        repeat: -1,
        yoyo: true,
        ease: Back.ease
      })

      gsap.to(['#love', '#boy', '#chat-bubble'], 1, {
        y: -20,
        repeat: -1,
        yoyo: true,
        ease: Back.ease
      })
    }, 1500)
  },
  methods: {
    right() {
      gsap.fromTo(['#right', '#kean-left'], appear.time, fadeIn.to, fadeIn.from)

      gsap
        .timeline({ delay: 0 })
        .to('.svg', 1, {
          x: '-50%'
        })
        .fromTo(['#left', '#kean-right'], appear.time, fadeIn.from, fadeIn.to)
        .to('#chat-bubble', {
          rotate: 5,
          transformOrigin: '100% 100%',
          opacity: 1
        })
      this.seen = true
    },
    left() {
      gsap.fromTo(['#left', '#kean-right'], appear.time, fadeIn.to, fadeIn.from)

      gsap
        .timeline({ delay: 0 })
        .fromTo(
          '.svg',
          1,
          {
            x: '-50%'
          },
          {
            x: 0
          }
        )
        .fromTo(['#right', '#kean-left'], appear.time, fadeIn.from, fadeIn.to)

      if (this.seen) {
        gsap.fromTo(['#question'], appear.time, fadeIn.from, fadeIn.to)
      }
    },
    changeColor(color) {
      this.color = color
      if (color === 'orange') {
        this.ok = true

        gsap.to(['#boy', '#left', '#chat-bubble'], 0, { display: 'none' })

        this.right()
        setTimeout(() => {
          gsap.fromTo('#ticket-near-boy', appear.time, fadeIn.from, fadeIn.to)

          gsap.to(['#ticket-near-boy'], 1, {
            y: -20,
            repeat: -1,
            yoyo: true,
            ease: Back.ease
          })
          window.addEventListener('click', () => {
            this.click++
            if (this.click === 1) {
              gsap
                .timeline({ delay: 0 })
                .fromTo('#ticket-near-boy', appear.time, fadeIn.to, fadeIn.from)

                .fromTo(['#ticket'], appear.time, fadeIn.from, fadeIn.to)
              return
            }
            if (this.click === 2) {
              this.$router.push('/chapter-6-heading')
            }
          })
        }, 1)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
//#star,
#ticket-near-boy,
//#boy,
//#kean-left,
//#kean-right,
#chat-bubble,
//#love-orange,
//#love-red,
//#love-blue,
//#love-original,
//#love-line,
//#q-white,
//#q-orange,
//#q-blue,
//#q-red,
//#left,
//#right,
#ticket,
#stage-1,
#question {
  opacity: 0;
}
.svg {
  height: 100vh;
  width: 200%;
  top: 0;
  margin: 0 auto;
  &-mask {
    height: 100vh;
    width: 100%;

    overflow: hidden;
    top: 0;
    background-color: #28141a;
    margin: 0 auto;
  }
}
</style>

