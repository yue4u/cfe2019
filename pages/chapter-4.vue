<template>
  <main>
    <svg
      class="cfe-svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="1242"
      height="2208"
      viewBox="0 0 1242 2208"
    >
      <g id="stage-1">
        <g id="kodama">
          <image
            id="cry"
            x="86"
            y="659"
            width="1063"
            height="1399"
            :xlink:href="require('@/assets/chapter-4/cry.png')"
          />
          <image
            id="green-light"
            x="303"
            y="1366"
            width="687"
            height="626"
            :xlink:href="require('@/assets/chapter-4/green-light.png')"
          />
          <image
            id="crystal"
            x="320"
            y="259"
            width="862"
            height="1908"
            :xlink:href="require('@/assets/chapter-4/crystal.png')"
          />
        </g>
        <image
          id="chat-bubble-1"
          x="755"
          y="870"
          width="317"
          height="202"
          :xlink:href="require('@/assets/chapter-4/chat-bubble-1.png')"
        />
        <image
          id="chat-bubble-2"
          x="81"
          y="249"
          width="1065"
          height="897"
          :xlink:href="require('@/assets/chapter-4/chat-bubble-2.png')"
        />
        <image
          id="tree"
          x="330"
          y="604"
          width="605"
          height="357"
          :xlink:href="require('@/assets/chapter-4/tree.png')"
        />
        <image
          id="chat-crystal"
          x="382"
          y="262"
          width="384"
          height="398"
          :xlink:href="require('@/assets/chapter-4/chat-crystal.png')"
        />
        <image
          id="tree-dead"
          x="373"
          y="771"
          width="506"
          height="198"
          :xlink:href="require('@/assets/chapter-4/tree-dead.png')"
        />
        <image
          id="space"
          x="369"
          y="371"
          width="423"
          height="526"
          :xlink:href="require('@/assets/chapter-4/space.png')"
        />
      </g>
    </svg>
  </main>
</template>

<script>
import { gsap, Back, Linear } from 'gsap'
import { fadeIn, appear, moving } from '@/helpers'

export default {
  data() {
    return {
      click: 0,
      clickable: true
    }
  },
  mounted() {
    setTimeout(() => {
      gsap
        .timeline({ delay: 0 })
        .fromTo('#stage-1', appear.time, fadeIn.from, fadeIn.to)
        .fromTo('#chat-bubble-1', appear.time, fadeIn.from, fadeIn.to)

      setTimeout(() => {
        gsap.to('#green-light', 0.5, {
          repeat: -1,
          yoyo: true,
          opacity: 1
        })
      }, 1000)
    }, 1500)
    const cb = () => {
      if (!this.clickable) return

      setTimeout(() => {
        this.clickable = true
      }, 1000)

      this.click++
      this.clickable = !this.clickable

      if (this.click === 1) {
        gsap
          .timeline({ delay: 0 })
          .fromTo('#chat-bubble-1', appear.time, fadeIn.to, fadeIn.from)
          .fromTo(
            ['#tree', '#chat-bubble-2'],
            appear.time,
            fadeIn.from,
            fadeIn.to
          )
        return
      }

      if (this.click === 2) {
        gsap.fromTo('#chat-crystal', appear.time, fadeIn.from, fadeIn.to)
        return
      }

      if (this.click === 3) {
        gsap
          .timeline({ delay: 0 })
          .fromTo('#tree', 0.5, fadeIn.to, fadeIn.from)
          .fromTo('#tree-dead', 0.5, fadeIn.from, fadeIn.to)
        return
      }

      if (this.click === 4) {
        gsap
          .timeline({ delay: 0 })
          .fromTo(
            ['#tree-dead', '#chat-crystal'],
            appear.time,
            fadeIn.to,
            fadeIn.from
          )
          .fromTo('#space', appear.time, fadeIn.from, fadeIn.to)
        return
      }

      if (this.click === 5) {
        this.$router.push('/chapter-5-heading')
      }
    }
    document.addEventListener('click', cb)
    //document.addEventListener('touchstart', cb)
  }
}
</script>

<style lang="scss" scoped>
#green-light,
#chat-bubble-1,
#chat-bubble-2,
#tree,
#chat-crystal,
#tree-dead,
#space,
#stage-1 {
  opacity: 0;
}
</style>
