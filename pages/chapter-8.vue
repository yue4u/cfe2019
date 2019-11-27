<template>
  <main>
    <img class="img" :src="require('@/assets/chapter-8/main.png')" />
    <div class="appendx">
      <img class="logo" :src="require('@/assets/logo.png')" />
    </div>
    <div class="links">
      <p class="link">
        <nuxt-link to="/">地層処分について</nuxt-link>
      </p>
      <p class="link">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.numo.or.jp/pr-info/pr/video/"
          >ホームページに戻る</a
        >
      </p>
    </div>
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
@import '@/assets/scss/main.scss';

main {
  background: #000;
  overflow: auto;
  color: #fff;
}
.img {
  width: 100%;
}
.logo {
  width: 80%;
  max-width: 400px;
  display: block;
  margin: 0 auto;
}
.appendx {
  background-color: #000;
}
.links {
  font-size: 3rem;
  margin: 10rem 0;
  text-align: center;

  .link {
    transition: 0.3s all ease-in-out;
    &:hover {
      opacity: 0.5;
    }
    margin-bottom: 2rem;
  }
}
</style>
