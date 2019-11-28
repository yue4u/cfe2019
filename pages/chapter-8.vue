<template>
  <main>
    <svg
      class="svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="1242"
      height="13248"
      viewBox="0 0 1242 13248"
    >
      <defs>
        <style>
  .cls-1 {
    opacity: 0.54;
  }
        </style>
      </defs>
      <g id="Artboard_1" data-name="Artboard 1">
        <image
          id="all-tree"
          class="cls-1"
          x="-519"
          y="-220"
          width="2346"
          height="13158"
          :xlink:href="require('@/assets/chapter-8/all-tree.png')"
        />
        <g id="crystal">
          <image
            id="crystal-5"
            x="463"
            y="11487"
            width="276"
            height="1110"
            :xlink:href="require('@/assets/chapter-8/crystal-5.png')"
          />
          <g id="crystal-4">
            <image
              id="green-light-4"
              x="471"
              y="10224"
              width="292"
              height="297"
              :xlink:href="require('@/assets/chapter-8/green-light-4.png')"
            />
            <image
              id="crystal-4-c"
              x="475"
              y="10222"
              width="471"
              height="1091"
              :xlink:href="require('@/assets/chapter-8/crystal-4-c.png')"
            />
          </g>
          <g id="crystal-3">
            <image
              id="green-light-3"
              x="359"
              y="8552"
              width="578"
              height="601"
              :xlink:href="require('@/assets/chapter-8/green-light-3.png')"
            />
            <image
              id="crystal-3-c"
              x="246"
              y="8549"
              width="883"
              height="1705"
              :xlink:href="require('@/assets/chapter-8/crystal-3-c.png')"
            />
          </g>
          <g id="crystal-2">
            <image
              id="green-light-2"
              x="296"
              y="6853"
              width="668"
              height="695"
              :xlink:href="require('@/assets/chapter-8/green-light-2.png')"
            />
            <image
              id="crystal-2-c"
              x="336"
              y="6849"
              width="850"
              height="1970"
              :xlink:href="require('@/assets/chapter-8/crystal-2-c.png')"
            />
          </g>
          <g id="crystal-1">
            <image
              id="green-light-1"
              x="128"
              y="5039"
              width="972"
              height="965"
              :xlink:href="require('@/assets/chapter-8/green-light-1.png')"
            />
            <image
              id="crystal-1-c"
              x="327"
              y="5196"
              width="622"
              height="651"
              :xlink:href="require('@/assets/chapter-8/crystal-1-c.png')"
            />
          </g>
        </g>
        <image
          id="mom"
          x="102"
          y="1226"
          width="1000"
          height="2390"
          :xlink:href="require('@/assets/chapter-8/mom.png')"
        />
        <g id="kean2">
          <image
            id="shine"
            x="137"
            y="1926"
            width="910"
            height="1845"
            :xlink:href="require('@/assets/chapter-8/shine.png')"
          />
          <image
            id="love"
            x="598"
            y="1936"
            width="120"
            height="95"
            :xlink:href="require('@/assets/chapter-8/love.png')"
          />
        </g>
        <image
          id="kodama"
          x="168"
          y="2724"
          width="1010"
          height="1192"
          :xlink:href="require('@/assets/chapter-8/kodama.png')"
        />
        <g id="grass">
          <image
            id="grass5"
            x="-7"
            y="3409"
            width="1242"
            height="1127"
            :xlink:href="require('@/assets/chapter-8/grass5.png')"
          />
          <image
            id="grass4-move"
            x="124"
            y="3068"
            width="1111"
            height="926"
            :xlink:href="require('@/assets/chapter-8/grass4-move.png')"
          />
          <image
            id="grass3"
            y="3230"
            width="1242"
            height="1398"
            :xlink:href="require('@/assets/chapter-8/grass3.png')"
          />
          <image
            id="grass1-move"
            x="170"
            y="3374"
            width="851"
            height="908"
            :xlink:href="require('@/assets/chapter-8/grass1-move.png')"
          />
        </g>
        <image
          id="butterfly"
          x="155"
          y="259"
          width="1023"
          height="1774"
          :xlink:href="require('@/assets/chapter-8/butterfly.png')"
        />
        <image
          id="Fin"
          x="205"
          y="12751"
          width="834"
          height="283"
          :xlink:href="require('@/assets/chapter-8/Fin.png')"
        />
      </g>
    </svg>
    <chapter-8-appendix />
  </main>
</template>



<script>
import { gsap, Back, Power4 } from 'gsap'
import { fadeIn, appear, moving } from '@/helpers'
import Chapter8Appendix from '@/components/chapter-8-appendix'
export default {
  components: {
    Chapter8Appendix
  },
  data() {
    return {
      y: 0,
      count: 0,
      butterfly: false
    }
  },
  mounted() {
    setTimeout(() => {
      gsap
        .timeline({ delay: 0 })
        .fromTo('#bg', appear.time, fadeIn.from, fadeIn.to)
        .fromTo(
          ['#all-tree', '#kodama', '#grass'],
          appear.time,
          fadeIn.from,
          fadeIn.to
        )
        .fromTo(['#mom', '#shine'], appear.time, fadeIn.from, fadeIn.to)

      gsap.to(
        [
          '#green-light-4',
          '#green-light-3',
          '#green-light-2',
          '#green-light-1'
        ],
        1,
        {
          repeat: -1,
          yoyo: true,
          opacity: 1
        }
      )

      document.addEventListener('scroll', () => {
        this.y = window.scrollY
        console.log(this.y)
        if (!this.butterfly) {
          gsap.fromTo(
            '#butterfly',
            appear.time,
            { y: 100, ...fadeIn.from },
            { y: 0, ...fadeIn.to }
          )
          this.butterfly = true
        }

        gsap.to(['#bg'], {
          y: -this.y / 30,
          ease: Power4.easeOut
        })

        gsap.to('#butterfly', {
          y: -this.y,
          ease: Power4.easeOut
        })

        gsap.to('#mon', {
          y: -this.y / 25,
          ease: Power4.easeOut
        })

        gsap.to('#shine', {
          y: -this.y / 20,
          ease: Power4.easeOut
        })

        gsap.to(['#kodama'], {
          y: -this.y / 10,
          ease: Power4.easeOut
        })

        gsap.to('#grass', {
          y: -this.y / 5,
          ease: Power4.easeOut
        })
        gsap.to('#all-tree', {
          y: -this.y / 15,
          ease: Power4.easeOut
        })
      })
    }, 1500)
  }
}
</script>


<style lang="scss" scoped>
main {
  background: linear-gradient(#fff, #a5ab6f 10%, #a5ab6f, #000, #000 30%);
  overflow: auto;
  color: #fff;
  zoom: 1;
}
#bg,
#all-tree,
//#crystal-5,
#green-light-4,
//#crystal-4-c,
#green-light-3,
//#crystal-3-c,
#green-light-2,
//#crystal-2-c,
#green-light-1,
//#crystal-1-c,
#love,
#kodama,
#mom,
#shine,
#grass,
#butterfly {
  opacity: 0;
}
.svg {
  width: 100%;
  height: auto;
}
</style>

