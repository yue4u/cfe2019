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
      <g id="stage-1">
        <image
          id="book"
          y="961"
          width="1242"
          height="1247"
          :xlink:href="require('@/assets/chapter-2/book.png')"
        />
        <image
          id="square"
          x="149"
          y="264"
          width="972"
          height="636"
          :xlink:href="require('@/assets/chapter-2/square.png')"
        />
        <image
          id="top"
          x="191"
          y="212"
          width="756"
          height="938"
          :xlink:href="require('@/assets/chapter-2/top.png')"
        />
        <image
          id="square-front"
          x="149"
          y="264"
          width="802"
          height="636"
          :xlink:href="require('@/assets/chapter-2/square-front.png')"
        />
        <image
          id="white-box"
          x="98"
          y="896"
          width="1162"
          height="289"
          :xlink:href="require('@/assets/chapter-2/white-box.png')"
        />
      </g>
    </svg>
  </main>
</template>



<script>
import { gsap, Back, Linear } from 'gsap'
import { fadeIn, appear, moving } from '@/helpers'

export default {
  mounted() {
    setTimeout(() => {
      gsap
        .timeline({ delay: 0 })
        .fromTo('#stage-1', appear.time, fadeIn.from, fadeIn.to)
        .fromTo('#top', appear.time, fadeIn.from, { ...fadeIn.to, y: -100 })
        .fromTo('#book', appear.time, fadeIn.from, fadeIn.to)
      setTimeout(() => {
        this.$router.push('/chapter-2-2')
      }, 3500)
    }, 1500)
  }
}
</script>


<style lang="scss" scoped>
#stage-1,
#book,
//#square,
//#square-front,
#top {
  opacity: 0;
}
</style>

