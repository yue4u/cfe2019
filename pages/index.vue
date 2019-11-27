<template>
  <main class="container">
    <div class="title-wrapper">
      <h1 class="title cfe-orange">
        <span>ケサリの</span>
        <span class="cfe-green">旅</span>
      </h1>

      <nuxt-link class="start-link" to="/chapter-1">
        <span class="start">スタート</span>
      </nuxt-link>

      <nuxt-link to="/chapter">
        <span class="menu">チャプター選択</span>
      </nuxt-link>
      <nuxt-link to="/about">
        <span class="menu">ケサリの旅とは</span>
      </nuxt-link>
    </div>
    <cfe-entrance-svg class="cfe-svg" />
    <cfe-logo />
  </main>
</template>

<script>
import CfeEntranceSvg from '@/components/entrance-svg'
import CfeLogo from '@/components/logo'

export default {
  components: {
    CfeLogo,
    CfeEntranceSvg
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.container {
  max-width: 640px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  position: relative;

  background: #312823;
}

.title {
  font-size: 6rem;
  margin-top: 5rem;
  text-shadow: 0 0 5px #000;
  &-wrapper {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    text-align: center;
  }
}

.start {
  font-size: 3rem;
  padding: 20px 1rem;
  background-image: url('../assets/start-button.png');
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  color: #494b0e;
  &-link {
    display: block;
    margin: 2rem auto;
  }
}

.menu {
  font-size: 2rem;
  display: block;
  margin-bottom: 1rem;
  color: #e1d73d;
}
</style>
