export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'ケサリの旅',
    meta: [
      { charset: 'utf-8' },
      { 'theme-color': '#ffffff' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { name: 'og:title', content: 'ケサリの旅' },
      { name: 'og:site_name', content: 'ケサリの旅' },
      { name: 'og:url', content: 'https://cfe.sakura.ne.jp/w_dhu/' },
      {
        name: 'og:description',
        content: process.env.npm_package_description || ''
      },
      { name: 'og:type', content: 'website' },
      { name: 'og:image', content: 'https://cfe.sakura.ne.jp/w_dhu/ogp.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'ケサリの旅' },
      { name: 'twitter:creator', content: '@nerd_yue' },
      {
        name: 'twitter:description',
        content: process.env.npm_package_description || ''
      }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    {
      src: './assets/scss/main.scss',
      lang: 'scss'
    }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    //  '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@bazzite/nuxt-optimized-images'],
  optimizedImages: {
    optimizeImages: true
  },
  /*
   ** Build configuration
   */
  router: {
    base: process.env.NODE_ENV === 'production' ? '/w_dhu/' : '/'
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
}
