<template>
  <div>
    <cfe-background />
    <nuxt />
  </div>
</template>

<script>
import CfeBackground from '@/components/background'
export default {
  name: 'Home',
  components: {
    CfeBackground
  }
}
</script>

<style>
@font-face {
  font-family: 'kks';
  src: url('../assets/UDDigiKyokashoN-B.woff') format('woff');
}

html {
  --tree: #89311f;
  --bg: #fde4be;
  --txt-green: #0bba00;
  --txt-orange: #e7904c;
  font-family: 'kks', sans-serif;
  color: var(--tree);
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

@media screen and (max-width: 1400px) {
  html {
    font-size: 12px;
  }
}
body {
  margin: 0;
}

a {
  text-decoration: inherit;
  color: inherit;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
