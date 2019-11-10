<template>
  <div ref="container" />
</template>

<script lang="ts">
import Vue from "vue";
import * as PIXI from "pixi.js";

export default Vue.extend({
  data() {
    return {
      game: null as PIXI.Application | null,
      texts: [] as PIXI.Text[]
    };
  },
  methods: {
    addText() {
      if (!this.game) return;
      let text = new PIXI.Text("ケサリの旅");
      text.position.set(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight
      );
      this.texts.push(text);
      this.game.stage.addChild(text);
    },
    move(delta: number) {
      this.texts = this.texts.filter(text => {
        return text.x < window.innerWidth && text.y < window.innerHeight;
      });
      this.texts.map(text => {
        text.x += this.random(-5, 5);
        text.y += this.random(-5, 5);
        return text;
      });
    },
    random(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }
  },
  mounted() {
    // this.game = new PIXI.Application({
    //   width: window.innerWidth,
    //   height: window.innerHeight,
    //   antialias: true,
    //   transparent: true
    // });
    // if (this.$refs.container instanceof Element) {
    //   this.$refs.container.append(this.game.view);
    // }
    // this.game.ticker.add(delta => this.move(delta));
    // setInterval(() => this.addText(), 200);
  }
});
</script> 