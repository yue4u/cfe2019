<template>
  <main class="chapter">
    <nav class="nav">
      <nuxt-link to="/">
        <img class="return" src="@/assets/return.png" alt="about" />
      </nuxt-link>
    </nav>
    <nav class="chapter-menu">
      <h1 class="title">チャプター</h1>
      <ul class="chapter-list">
        <li
          v-for="(chapter, n) in chapters"
          :key="chapter"
          class="chapter-item"
        >
          <nuxt-link :to="`chapter-${n + 1}`" class="chapter-link">
            <img
              :src="require(`@/assets/chapter-${n + 1}.png`)"
              class="chapter-img"
              alt=""
              srcset=""
            />
            <span class="chapter-title">{{ chapter }}</span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </main>
</template>

<script>
export default {
  data() {
    return {
      chapters: [
        '誕生', // 1
        '日常', // 2
        '好奇心', // 3
        '緑の結晶', // 4
        '宇宙', // 5
        '海', // 6
        '埋める', // 7
        '未来' // 8
      ]
    }
  }
}
</script>

<style lang="scss">
.title {
  margin-bottom: 2rem;
  text-align: center;
  font-size: 3rem;
}

.chapter {
  max-width: 640px;
  margin: 0 auto;
  display: block;
  &-list {
    padding: 0;
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  &-item {
    transition: 0.3s all cubic-bezier(0.165, 0.84, 0.44, 1);
    width: 100%;
    position: relative;
    padding: 10px;
    padding-left: 5rem;
    &:hover {
      background-color: rgba($color: #000000, $alpha: 0.1);
    }
  }
  &-img {
    position: absolute;
    left: 0;
    top: 5px;
    width: 3rem;
  }
  &-menu {
    padding: 3rem;
    background-color: var(--bg);
    border-radius: 2rem;
    width: fit-content;
    margin: 0 auto;
    //  display: flex;
    //  align-items: flex-start;
    //  flex-direction: column;
  }
  &-title {
    font-size: 2rem;
    display: inline-block;
  }
}

.nav {
  margin: 1rem 0;
  height: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
}
.return {
  height: 100%;
  object-fit: contain;
  width: 40%;
}
</style>
