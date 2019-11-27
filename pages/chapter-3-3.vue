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
        <image
          id="kodama"
          x="181"
          y="521"
          width="802"
          height="899"
          :xlink:href="require('@/assets/chapter-3/kodama.png')"
        />
        <image
          id="crystal"
          x="589"
          y="996"
          width="205"
          height="227"
          :xlink:href="require('@/assets/chapter-3/crystal.png')"
        />
        <image
          id="green-light"
          x="317"
          y="519"
          width="1205"
          height="854"
          :xlink:href="require('@/assets/chapter-3/green-light.png')"
        />
        <image
          id="leaf-8"
          x="705"
          y="368"
          width="755"
          height="596"
          :xlink:href="require('@/assets/chapter-3/leaf-8.png')"
        />
        <image
          id="leaf-7"
          x="-219"
          y="516"
          width="773"
          height="729"
          :xlink:href="require('@/assets/chapter-3/leaf-7.png')"
        />
        <image
          id="leaf-6"
          x="-192"
          y="18"
          width="1064"
          height="1141"
          :xlink:href="require('@/assets/chapter-3/leaf-6.png')"
        />
        <image
          id="leaf-5"
          x="455"
          y="623"
          width="1644"
          height="974"
          :xlink:href="require('@/assets/chapter-3/leaf-5.png')"
        />
        <image
          id="leaf-4"
          x="475"
          y="-84"
          width="1115"
          height="1219"
          :xlink:href="require('@/assets/chapter-3/leaf-4.png')"
        />
        <image
          id="leaf-3"
          x="-190"
          y="320"
          width="1482"
          height="978"
          :xlink:href="require('@/assets/chapter-3/leaf-3.png')"
        />
        <image
          id="leaf-2"
          x="-478"
          y="823"
          width="1575"
          height="1635"
          :xlink:href="require('@/assets/chapter-3/leaf-2.png')"
        />
        <image
          id="leaf-1"
          x="340"
          y="817"
          width="1254"
          height="1668"
          :xlink:href="require('@/assets/chapter-3/leaf-1.png')"
        />
        <image
          id="s3-butterfly"
          x="0"
          y="689"
          width="608"
          height="468"
          :xlink:href="require('@/assets/chapter-3/s3-butterfly.png')"
        />
      </g>
    </svg>
    <cfe-next to="/chapter-4-heading" v-if="next" />
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
      leaves: 7,
      next: false
    }
  },
  mounted() {
    setTimeout(() => {
      gsap.to(['#green-light'], 1.5, {
        opacity: 1,
        repeat: -1,
        yoyo: true,
        ease: Back.ease
      })

      gsap.to(['#crystal'], 1, {
        y: -10,
        repeat: -1,
        yoyo: true,
        ease: Back.ease
      })

      gsap
        .timeline({ delay: 0 })
        .to('#s3-butterfly', appear.time, {
          x: 300,
          y: -200,
          opacity: 1
        })
        .to('#s3-butterfly', appear.time, {
          x: 600,
          y: 50,
          opacity: 0
        })
    }, 1500)
    window.addEventListener('click', () => {
      this.leaves--

      if (this.leaves < 2) {
        setTimeout(() => {
          this.next = true
        }, 1000)
      }

      if (this.leaves < 1) {
        return
      }
      gsap.timeline({ delay: 0 }).to(`#leaf-${7 - this.leaves}`, 0.3, {
        x: 20,
        y: -20,
        opacity: 0
      })
    })
  }
}
</script>


<style lang="scss" scoped>
//#kodama,
//#crystal,
#green-light,
//#leaf-8,
//#leaf-7,
//#leaf-6,
//#leaf-5,
//#leaf-4,
//#leaf-3,
//#leaf-2,
//#leaf-1,
#s3-butterfly {
  opacity: 0;
}
</style>

