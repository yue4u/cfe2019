<template>
  <div>
    <div @click="toggleMenu">
      <img class="home" :src="require('@/assets/home.png')" />
    </div>

    <transition name="fade">
      <div class="menu" v-if="open">
        <h1>ホームページへ戻る</h1>
        <div class="options">
          <span class="link link-yes" @click="toggleMenu">
            <nuxt-link to="/">はい</nuxt-link>
          </span>
          <span class="link" @click="toggleMenu">いいえ</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="js">
export default {
  data(){
    return{
      open: false
    }
  },
  methods:{
    toggleMenu(){
  this.open = !this.open
  }
  }
}
</script>
<style lang="scss" scoped>
.home {
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 999;
  width: 20rem;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
}
.menu {
  position: absolute;
  z-index: 100;
  color: #006637;
  padding: 3rem;
  background-color: #fff;
  left: 10%;
  top: 30vh;
  width: 80%;
  font-size: 1.5rem;
  text-align: center;
  border: 3px solid #006637;
  box-shadow: 0 0 1rem #666;
  border-radius: 2px;
}
.link {
  cursor: pointer;
  &-yes {
    background: yellow;
    border-radius: 5px;
    padding: 5px;
  }
}
.options {
  display: flex;
  width: 60%;
  font-size: 2rem;
  margin: 3rem auto;
  justify-content: space-between;
}

.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  transform: translateY(-10vh);
  opacity: 0;
}
</style>
