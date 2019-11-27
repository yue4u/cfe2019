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
      <g id="stage-2">
        <g id="now">
          <image
            id="nowaday"
            x="241"
            y="1047"
            width="820"
            height="1076"
            :xlink:href="require('@/assets/chapter-2/nowaday.png')"
          />
          <image
            id="worry"
            x="427"
            y="807"
            width="218"
            height="499"
            :xlink:href="require('@/assets/chapter-2/worry.png')"
          />
        </g>
        <g id="childhood">
          <image
            id="line"
            x="333"
            y="1092"
            width="636"
            height="970"
            :xlink:href="require('@/assets/chapter-2/line.png')"
          />
          <image
            id="love"
            x="336"
            y="1078"
            width="575"
            height="293"
            :xlink:href="require('@/assets/chapter-2/love.png')"
          />
        </g>
        <image
          id="book-5"
          x="362"
          y="207"
          width="531"
          height="427"
          :xlink:href="require('@/assets/chapter-2/book-5.png')"
        />
        <image
          id="book-4"
          x="362"
          y="207"
          width="531"
          height="427"
          :xlink:href="require('@/assets/chapter-2/book-4.png')"
        />
        <image
          id="book-3"
          x="362"
          y="207"
          width="531"
          height="427"
          :xlink:href="require('@/assets/chapter-2/book-3.png')"
        />
        <image
          id="book-2"
          x="362"
          y="207"
          width="531"
          height="427"
          :xlink:href="require('@/assets/chapter-2/book-2.png')"
        />
        <image
          id="book-1"
          x="362"
          y="207"
          width="531"
          height="427"
          :xlink:href="require('@/assets/chapter-2/book-1.png')"
        />
        <g id="button">
          <image
            id="button-img"
            data-name="button"
            x="362"
            y="747"
            width="512"
            height="151"
            :xlink:href="require('@/assets/chapter-2/button.png')"
          />
          <rect
            @click="read"
            id="button-mask"
            data-name="button"
            x="362"
            y="747"
            width="512"
            height="151"
            fill="transparent"
          />
        </g>
      </g>
    </svg>
    <cfe-next to="/chapter-3-heading" v-if="next" />
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
      count: 1
    }
  },
  mounted() {
    setTimeout(() => {
      gsap
        .timeline({ delay: 0 })
        .fromTo('#stage-2', appear.time, fadeIn.from, fadeIn.to)

      gsap.to('#love', 1, {
        repeat: -1,
        y: -30,
        x: -10,
        //scale: 1.2,
        opacity: 1
      })
    }, 1500)
  },
  methods: {
    read() {
      this.count++

      if (this.count === 4) {
        gsap
          .timeline({ delay: 0 })
          .fromTo(`#childhood`, 0.3, fadeIn.to, fadeIn.from)
          .fromTo(`#now`, 0.3, fadeIn.from, fadeIn.to)
      }

      if (this.count === 5) {
        gsap
          .timeline({ delay: 0 })
          .fromTo(`#button`, 0.3, fadeIn.to, fadeIn.from)
          .to('#worry', 1, {
            y: -5,
            //scale: 1.2,
            opacity: 1
          })
        setTimeout(() => {
          this.next = true
        }, 1500)
      }
      gsap
        .timeline({ delay: 0 })
        .fromTo(`#book-${this.count - 1}`, 0.3, fadeIn.to, {
          x: -100,
          ...fadeIn.from
        })
        .fromTo(
          `#book-${this.count}`,
          0.3,
          { x: 100, ...fadeIn.from },
          { x: 0, ...fadeIn.to }
        )
    }
  }
}
</script>


<style lang="scss" scoped>
#worry,
#now,
//#line,
#love,
//#childhood,
//#button
#book-5,
#book-4,
#book-3,
#book-2,
//#book-1,
#stage-2 {
  opacity: 0;
}
#button-mask {
  cursor: pointer;
}
</style>

