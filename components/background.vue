<template>
  <div class="bg">
    <div v-for="row in Array(10).keys()" :key="`bg-row-${row}`" class="bg-row" />
  </div>
</template>

<style lang="scss" scoped>
.bg {
  position: fixed;
  top: -6vw;
  left: 0;
  z-index: -1;
  width: 110vw;
  height: 110vh;
  opacity: 0.3;
  &-row {
    background: url('../assets/svg/bg-face.svg');
    height: 14vh;
    width: 120vw;
    //animation: move 60s linear infinite;
    &:nth-child(2n) {
      margin-left: -4vw;
      //  animation: move 60s linear infinite reverse;
    }
  }
}
@keyframes move {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0;
  }
}
</style>
