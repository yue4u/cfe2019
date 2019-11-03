<template>
  <div class="home">
    <h1>ケサリの旅</h1>
    <cfe-game />
  </div>
</template>

<script>
import CfeGame from "@/components/Game";
export default {
  name: "home",
  components: {
    CfeGame
  }
};
</script>
