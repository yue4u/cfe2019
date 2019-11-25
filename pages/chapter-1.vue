<template>
  <main class="chapter">
    <cfe-chapter-1-svg class="cfe-svg" />
  </main>
</template>

<script>
import CfeChapter1Svg from '@/components/chpter-1-svg'
export default {
  components: {
    CfeChapter1Svg
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.chapter {
  max-width: 640px;
  margin: 0 auto;
  display: block;
}
</style>
