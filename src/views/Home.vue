<template>
  <div class="home">
    <cfe-game />
    <cfe-background />
  </div>
</template>

<script>
import CfeGame from "@/components/Game";
import CfeBackground from "@/components/Background";
export default {
  name: "home",
  components: {
    CfeGame,
    CfeBackground
  }
};
</script>
