<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="1242"
    height="2208"
    viewBox="0 0 1242 2208"
  >
    <g id="stage-2">
      <g id="p-3">
        <image
          id="kean-3"
          x="154"
          y="257"
          width="434"
          height="897"
          :xlink:href="require('@/assets/chapter-3/kean-3.png')"
        />
        <image
          id="s2-butterfly-3"
          x="80"
          y="101"
          width="125"
          height="134"
          :xlink:href="require('@/assets/chapter-3/s2-butterfly-3.png')"
        />
      </g>
      <g id="p-2">
        <image
          id="kean-2"
          x="558"
          y="201"
          width="617"
          height="1252"
          :xlink:href="require('@/assets/chapter-3/kean-2.png')"
        />
        <image
          id="s2-butterfly-2"
          x="1058"
          y="185"
          width="175"
          height="177"
          :xlink:href="require('@/assets/chapter-3/s2-butterfly-2.png')"
        />
      </g>
      <g id="p-1">
        <image
          id="kean-1"
          x="-100"
          y="800"
          width="1500"
          height="1992"
          :xlink:href="require('@/assets/chapter-3/kean-1.png')"
        />
        <image
          id="s2-butterfly-1"
          x="218"
          y="282"
          width="608"
          height="468"
          :xlink:href="require('@/assets/chapter-3/s2-butterfly-1.png')"
        />
      </g>
      <g id="bar">
        <image
          ref="bar"
          id="s2-bar"
          x="138"
          y="1560"
          width="995"
          height="374"
          :xlink:href="require('@/assets/chapter-3/s2-bar.png')"
        />
        <image
          id="s2-butterfly-sign"
          x="146"
          y="1790"
          width="179"
          height="150"
          :xlink:href="require('@/assets/chapter-3/s2-butterfly-sign.png')"
        />

        <rect
          ref="mask"
          fill="transparent"
          id="s2-butterfly-sign-mask"
          x="146"
          y="1790"
          width="179"
          height="150"
          @click="judge"
        />
      </g>
    </g>
  </svg>
</template>


<script>
import { gsap, Back, Linear } from 'gsap'
import { fadeIn, appear, moving } from '@/helpers'
import CfeNext from '@/components/next'

export default {
  data() {
    return {
      tl: null,
      stage: 3
    }
  },
  mounted() {
    setTimeout(() => {
      this.stage3()
    }, 1500)
  },
  methods: {
    stage3() {
      console.log('stage 1')

      gsap.to(['#s2-butterfly-3'], 2, {
        y: 10,
        x: 50,
        repeat: -1,
        opacity: 1
      })

      this.tl = gsap
        .timeline()
        .to(['#s2-butterfly-sign', '#s2-butterfly-sign-mask'], 2, {
          x: 800,
          repeat: -1
        })
    },
    stage2() {
      console.log('stage 2')

      gsap.to(['#s2-butterfly-2'], 2, {
        y: -10,
        x: -100,
        repeat: -1,
        opacity: 1
      })

      this.tl = gsap
        .timeline()
        .to(['#s2-butterfly-sign', '#s2-butterfly-sign-mask'], 2, {
          x: 800,
          repeat: -1
        })
    },
    stage1() {
      console.log('stage 3')
      gsap.to(['#s2-butterfly-1'], 2, {
        y: 500,
        z: 100,
        repeat: -1,
        opacity: 1
      })

      this.tl = gsap
        .timeline()
        .to(['#s2-butterfly-sign', '#s2-butterfly-sign-mask'], 2, {
          x: 800,
          repeat: -1
        })
    },
    judge() {
      //bar
      const { right } = this.$refs.bar.getBoundingClientRect()
      const { left } = this.$refs.mask.getBoundingClientRect()
      const delta = right - left
      if (delta < 100) {
        this.stage--
        console.log(this.stage)
        if (this.stage === 0) {
          this.$router.push('/chapter-4')
          return
        }

        this.tl.progress(0).kill()
        gsap
          .timeline()
          .to([`#p-${this.stage + 1}`], 1, {
            opacity: 0
          })
          .to([`#p-${this.stage}`], 1, {
            opacity: 1
          })

        console.log(this.stage)

        this[`stage${this.stage}`]()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#p-2,
#p-1,
#s2-butterfly-1,
#s2-butterfly-2,
#s2-butterfly-3 {
  opacity: 0;
}
</style>