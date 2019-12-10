<template>
  <main class="about">
    <h1 class="title cfe-orange">
      <span>ケサリの</span>
      <span class="cfe-green">旅</span>
      <span class="small">とは</span>
    </h1>
    <article class="about-txt">
      <p>これは木人のケサリが破壊的な力を持つ緑の結晶を安全な場所に閉じ込むストーリーである。</p>
      <p>
        ストーリー中の緑の結晶は原子力発電に利用された核燃料の廃棄物である<span class="cfe-orange">高レベル放射性廃棄物</span>を表している。
      </p>
      <p>ケサリの旅で出現した宇宙、海の底、そして地下は関連の研究機関が今までの研究で想定していた、その高レベル放射性廃棄物を閉じ込める場所だ。</p>
      <p>
        <span class="cfe-orange">その高レベル放射性廃棄物を閉じ込める場所だ。 高レベル放射性廃棄物の安全はケサリだけではなく、みんなにとって大事な問題である。</span>より詳しいコンテンツは以下のアイコンをクリック！
      </p>
      <p>
        <a
          class="numo-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.numo.or.jp/pr-info/pr/video/"
        >
          <img class="numo-icon" :src="require('@/assets/numo-icon.png')" alt="numo" />
        </a>
      </p>
    </article>
  </main>
</template>

<style lang="scss">
.about {
  overflow: auto;
  min-height: 100vh;
  &-txt {
    color: var(--txt-green);
    padding: 4rem;
    font-size: 2rem;
    line-height: 1.2;
    p {
      margin-bottom: 2rem;
    }
  }
  .numo {
    &-link {
      display: block;
    }
    &-icon {
      width: 80%;
      max-width: 200px;
      margin: 0 auto;
      display: block;
    }
  }
  .title {
    text-align: center;
    font-size: 4rem;
    margin-top: 5rem;
    display: flex;
    justify-content: center;

    align-items: baseline;
  }
  .small {
    color: var(--tree);
    font-size: 2rem;
  }
}
</style>
