<template>
  <div id="game" />
</template>

<script lang="ts">
import Vue from "vue";
import { Application, Loader, Text, Sprite } from "pixi.js";

export default Vue.extend({
  data() {
    return {
      game: undefined as undefined | PIXI.Application,
      leaves: [
        require("@/assets/leaf-1.png"),
        require("@/assets/leaf-2.png"),
        require("@/assets/leaf-3.png")
      ]
    };
  },
  methods: {
    addText() {
      if (!this.game) return;
      let text = new Text("ケサリの旅");
      text.position.set(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight
      );
      this.game.stage.addChild(text);
    },
    setup() {
      const initWidth = window.innerWidth;
      this.game = new Application({
        width: initWidth,
        height: window.innerHeight,
        antialias: true
        //      transparent: true
      });
      if (this.$refs.container instanceof Element) {
        this.$refs.container.append(this.game.view);
      }

      const leavesTexture = this.leaves.map(
        leaf => new Sprite(Loader.shared.resources[leaf].texture)
      );
      leavesTexture.map(leaf => {
        // leaf.scale.x = 0.5;
        // leaf.scale.y = 0.5;
        // leaf.pivot.set(0, 0);
        // leaf.x = window.innerWidth - 200;
        // leaf.y = window.innerHeight - 300;
        (this.game as Application).stage.addChild(leaf);
      });
    }
  },
  mounted() {
    // if (Object.entries(Loader.shared.resources).length !== 0) {
    //   return;
    // }
    Loader.shared.add(this.leaves).load(this.setup);
  }
});
</script> 

<style lang="scss" scoped>
#container {
  //  position: relative;
  //  z-index: 100;
}
</style>