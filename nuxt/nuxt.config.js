export default {
  head: {
    title: 'yoshihiko',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/assets/scss/styles',
  ],
  styleResources: {
    scss: [
      '~/assets/scss/prepends.scss'
    ]
  },
  plugins: [
    { src: '~/plugins/vuesax.js' }
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],
  axios: {},
  pwa: {
    manifest: {
      name: 'yoshihiko',
      lang: 'ja'
    }
  },
  build: {
    parallel: true,
    cache: true,
    hardSource: true,
  },
  server: {
    host: '0.0.0.0',
  },
  watchers: {
    webpack: {
      poll: true,
      ignored: /node_modules/,
    }
  }
}
