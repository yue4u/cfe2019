<template>
  <main class="about">
    <nav class="nav">
      <nuxt-link to="/">
        <img class="return" src="@/assets/return.png" alt="about" />
      </nuxt-link>
    </nav>
    <img class="about-txt" src="@/assets/about.png" alt="about" />
  </main>
</template>

<style lang="scss">
.about {
  max-width: 640px;
  margin: 0 auto;
  display: block;
  &-txt {
    display: block;
    height: 85vh;
    margin: 0 auto;
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
  width: 20%;
}
</style>
