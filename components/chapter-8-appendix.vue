<template>
  <div class="appendix-wrapper">
    <div class="links">
      <p class="member">
        <span class="title">デザイナー</span>
        <span class="name">テイ チャウホイ</span>
        <span class="en">Tay QiaoHui</span>
      </p>

      <p class="member">
        <span class="title">プログラマー</span>
        <span class="name">オウ ユエ</span>
        <span class="en">Wang Yue</span>
      </p>

      <div class="appendix">
        <img class="logo" :src="require('@/assets/logo.png')" />
      </div>

      <p class="link link-out">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.numo.or.jp/pr-info/pr/video/"
        >♦ 地層処分について</a>
      </p>

      <p class="link">
        <nuxt-link to="/">♦ ホームページに戻る</nuxt-link>
      </p>

      <p>
        <social-sharing
          url="https://cfe.sakura.ne.jp/w_dhu/"
          title="破壊的な力を持つ緑の結晶を安全な場所に閉じ込めましょう"
          description="破壊的な力を持つ緑の結晶を安全な場所に閉じ込めましょう"
          hashtags="地層処分"
          inline-template
        >
          <div class="social">
            <network network="twitter">
              <svg
                width="50"
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:cc="http://creativecommons.org/ns#"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:svg="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="svg3626"
                viewBox="0 0 300.00006 244.18703"
                height="95"
              >
                <g transform="translate(-539.17946,-568.85777)" id="layer1">
                  <path
                    id="path3611"
                    style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:none"
                    d="m 633.89823,812.04479 c 112.46038,0 173.95627,-93.16765 173.95627,-173.95625 0,-2.64628 -0.0539,-5.28062 -0.1726,-7.90305 11.93799,-8.63016 22.31446,-19.39999 30.49762,-31.65984 -10.95459,4.86937 -22.74358,8.14741 -35.11071,9.62551 12.62341,-7.56929 22.31446,-19.54304 26.88583,-33.81739 -11.81284,7.00307 -24.89517,12.09297 -38.82383,14.84055 -11.15723,-11.88436 -27.04079,-19.31655 -44.62892,-19.31655 -33.76374,0 -61.14426,27.38052 -61.14426,61.13233 0,4.79784 0.5364,9.46458 1.58538,13.94057 -50.81546,-2.55686 -95.87353,-26.88582 -126.02546,-63.87991 -5.25082,9.03545 -8.27852,19.53111 -8.27852,30.73006 0,21.21186 10.79366,39.93837 27.20766,50.89296 -10.03077,-0.30992 -19.45363,-3.06348 -27.69044,-7.64676 -0.009,0.25652 -0.009,0.50661 -0.009,0.78077 0,29.60957 21.07478,54.3319 49.0513,59.93435 -5.13757,1.40062 -10.54335,2.15158 -16.12196,2.15158 -3.93364,0 -7.76596,-0.38716 -11.49099,-1.1026 7.78383,24.2932 30.35457,41.97073 57.11525,42.46543 -20.92578,16.40207 -47.28712,26.17062 -75.93712,26.17062 -4.92898,0 -9.79834,-0.28036 -14.58427,-0.84634 27.05868,17.34379 59.18936,27.46396 93.72193,27.46396"
                  />
                </g>
              </svg>
            </network>
            <network network="facebook">
              <svg
                width="100"
                height="90"
                viewBox="0 0 560 400"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <g>
                  <path
                    d="M410.096 200.048c0-71.818-58.23-130.048-130.048-130.048-71.818 0-130.048 58.23-130.048 130.048 0 64.905 47.55 118.709 109.73 128.476v-90.875h-33.029v-37.601h33.029v-28.658c0-32.59 19.422-50.604 49.122-50.604 14.228 0 29.115 2.542 29.115 2.542v32.005h-16.405c-16.148 0-21.196 10.022-21.196 20.318v24.396h36.064l-5.761 37.601h-30.304v90.875c62.18-9.749 109.73-63.553 109.73-128.476z"
                    fill="#fff"
                  />
                  <path
                    d="M330.67 237.648l5.761-37.601h-36.064v-24.396c0-10.278 5.029-20.318 21.196-20.318h16.405v-32.005s-14.886-2.542-29.115-2.542c-29.7 0-49.122 17.996-49.122 50.604v28.658h-33.029v37.601h33.029v90.875c6.62 1.041 13.405 1.572 20.318 1.572 6.913 0 13.698-.549 20.318-1.572v-90.875h30.304z"
                    fill="transparent"
                  />
                </g>
              </svg>
            </network>
          </div>
        </social-sharing>
      </p>

      <p class="icon-wrapper">
        <img class="icon" src="/android-chrome-192x192.png" alt srcset />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.icon {
  width: 20%;
  max-width: 200px;
  display: block;
  margin: 0 auto;
  &-wrapper {
    margin-top: 5rem;
  }
}
.logo {
  width: 80%;
  max-width: 400px;
  display: block;
  margin: 0 auto;
}
.appendix {
  margin-top: 20rem;
  background-color: #000;
  &-wrapper {
    background-color: #000;
    padding-top: 20rem;
  }
}
.links {
  margin: 1rem 0 10rem;

  text-align: center;

  .link {
    transition: 0.3s all ease-in-out;
    color: #fff;

    font-size: 2.4rem;
    &-out {
      margin-top: 20rem;
      color: #fff;
    }
    &:hover {
      opacity: 0.5;
    }
    margin-bottom: 2rem;
  }
}
.social {
  padding-left: 4rem;
  margin-bottom: 20rem;
  display: flex;
  justify-content: center;
}
.title {
  display: inline-block;
  font-size: 2.4rem;
  color: orange;
}
.name {
  display: inline-block;
  font-size: 3rem;
}
.en {
  display: inline-block;
  font-size: 2rem;
}
.member {
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
}
</style>
