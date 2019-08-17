import i18n from './i18n'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Active link class for the router
   */
  router: {
    linkExactActiveClass: 'exact-active-link',
  },
  /*
   ** Generate dynamic pages
   */
  generate: {
    fallback: true, // fallback to spa mode - default is 200.html
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/vue-carousel', ssr: false },
    '~/plugins/lazy-load-images.js',
    '~/plugins/filters.js',
    '~/plugins/currency.js',
    '~/plugins/vuelidate.js',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    ['nuxt-i18n', i18n],
  ],

  // globally load all our sass variables
  // styleResources: {
  //   scss: ['./assets/scss/variables.scss'],
  // },
  purgeCSS: {
    mode: 'postcss',
    whitelistPatterns: [/cookie-consent/],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js',
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
