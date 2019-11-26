<template>
  <nuxt-link class="next" :to="to">
    <img class="next-img" :src="require('@/assets/next.png')" />
  </nuxt-link>
</template>
<script>
export default {
  props: ['to']
}
</script>

<style lang="scss" scoped>
.next {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  &-img {
    animation: move 1s ease-in-out infinite;
    width: 5rem;
    height: 5rem;
    filter: drop-shadow(0 0 2px #666);
  }
}
@keyframes move {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>``