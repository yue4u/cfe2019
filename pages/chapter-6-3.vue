<template>
  <main>
    <chapter-6-stage-2 class="cfe-svg" />
    <cfe-next v-if="next" to="/chapter-6-3" />
  </main>
</template>

<script>
import Chapter6Stage2 from '@/components/chapter-6-stage-2-svg'

import CfeNext from '@/components/next'
export default {
  components: {
    CfeNext,
    Chapter6Stage2
  },
  data() {
    return {
      next: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.next = true
    }, 4000)
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
