<template>
  <main>
    <chapter-6-stage-2 class="cfe-svg" />
  </main>
</template>

<script>
import Chapter6Stage2 from '@/components/chapter-6-stage-2-svg'

export default {
  components: {
    Chapter6Stage2
  },
  data() {
    return {
      next: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.$router.push('/chapter-6-3')
    }, 4000)
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
