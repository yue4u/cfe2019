<template>
  <main :class="['chapter',{'fix':fix}]">
    <cfe-chapter-1-svg v-on:stage-done="stageDone" :class="['cfe-svg','svg-1']" />
    <!-- :style="{width: `calc(100% - ${scrollY}px)`}"-->
    <!-- :style="{width: `calc(50% + ${scrollY  * 2})px`}"-->
    <cfe-chapter-mom-and-child-svg class="cfe-svg" />
  </main>
</template>

<script>
import CfeChapter1Svg from '@/components/chapter-1-svg'
import CfeChapterMomAndChildSvg from '@/components/mom-and-child-svg'
export default {
  components: {
    CfeChapter1Svg,
    CfeChapterMomAndChildSvg
  },
  data() {
    return {
      scrollY: 0,
      fix: true
    }
  },
  mounted() {
    window.addEventListener('scroll', (e) => {
      this.scrollY = window.scrollY
    })
  },
  methods: {
    stageDone() {
      this.fix = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.fixed {
  position: fixed;
  top: 2rem;
}
.fix {
  overflow: hidden;
  height: 100vh;
}
.svg-1 {
  transition: all 0.3s ease-in-out;
}
.chapter {
  max-width: 640px;
  margin: 0 auto;
  display: block;
  background-color: #fff;
}
</style>
