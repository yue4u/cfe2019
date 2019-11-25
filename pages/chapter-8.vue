<template>
  <main class="chapter">
    <img class="img" :src="require('@/assets/chapter-8/main.jpg')" />
  </main>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.chapter {
  max-width: 640px;
  margin: 0 auto;
  display: block;
}
.img {
  width: 100%;
}
</style>
