export default {
  srcDir: 'src/',
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
    'vuesax/dist/vuesax.css',
    'boxicons/css/boxicons.min.css',
    '~/assets/scss/styles',
  ],
  styleResources: {
    scss: [
      '~/assets/scss/prepends.scss'
    ]
  },
  plugins: [
    { src: '~/plugins/vuesax.js' },
    { src: '~/plugins/apollo' },
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxt/image',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/google-fonts',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/apollo',
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
  },
  googleFonts: {
    families: {
      Roboto: true,
      Inconsolata: [200, 500],
      'Noto+Sans+JP': [100, 400, 700],
    },
    display: 'swap'
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://graphql.contentful.com/content/v1/spaces/d3b1looh8iwg/environments/master',
        httpLinkOptions: {
          headers: {
            Authorization: `Bearer nWaUt3VsuH96y4wnrI3uu_JCLe6JG1eoI_k4SR1Zxl0`
          }
        }
      }
      // default: '~/apollo/config.ts'
      // default: {
      //   // GraphQL検証用エンドポイント
      //   // 参考記事：https://zenn.dev/kimkiyong/articles/b92b1029093741#reference
      //   // httpEndpoint: 'https://graphql-pokemon2.vercel.app/'
      // }
    }
  }
}
