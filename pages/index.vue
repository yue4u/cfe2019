<template>
  <main class="container">
    <cfe-entrance-svg class="svg" />
  </main>
</template>

<script>
import CfeEntranceSvg from '@/components/entrance-svg'
export default {
  components: {
    CfeEntranceSvg
  }
}
</script>

<style>
.container {
  max-width: 640px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
}
.svg {
  margin: 0 auto;
}
</style>
