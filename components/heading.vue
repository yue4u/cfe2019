<template>
  <main>
    <h1>チャプター {{index}}</h1>
    <p>{{name}}</p>
  </main>
</template>

<script>
export default {
  props: ['index', 'name'],
  data() {
    return { id: null }
  },
  mounted() {
    this.id = setTimeout(() => {
      this.$router.push(
        window.location.pathname.replace('-heading', '').replace('/w_dhu', '')
      )
    }, 1500)
  },
  beforeDestroy() {
    clearTimeout(this.id)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
main {
  text-align: center;
  height: 100vh;
  display: block;
}
h1 {
  font-size: 3rem;
  padding-top: 20vh;
}
p {
  margin-top: 2rem;
  font-size: 3rem;
}
</style>