import { NuxtConfig } from '@nuxt/types'

/** サイト名 */
const siteName = 'Yoshihiko'
/** Description */
const desc = 'Yoshihiko tech siteです。技術ブログ兼ポートフォリオにもなっています。'

export default ():NuxtConfig => ({
  // srcDir: 'src/',
  head: {
    title: siteName,
    titleTemplate: `%s | ${siteName}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: desc },
      { hid: 'og:site_name', property: 'og:site_name', content: siteName },
      { hid: 'og:title', property: 'og:title', content: siteName },
      { hid: 'og:description', property: 'og:description', content: desc },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: process.env.ORIGIN || 'http://localhost:3000' },
      { hid: 'og:image', property: 'og:image', content: `${process.env.ORIGIN}/ogp-default.jpeg` },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', property: 'twitter:title', content: 'Yoshihiko' },
      { hid: 'twitter:site', property: 'twitter:site', content: '@yoshihiko5555' },
      { hid: 'twitter:description', property: 'twitter:description', content: desc },
      { hid: 'twitter:image', property: 'twitter:image', content: `${process.env.ORIGIN}/ogp-default.jpeg` },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180×180', href: '/apple-touch-icon.png'},
    ],
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#',
    }
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
  components: true,
  plugins: [
    '~/plugins/vuesax',
    '~/plugins/apollo',
    '~/plugins/prism',
    '~/plugins/utils',
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxt/image',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit',
    '@nuxtjs/moment',
    '@nuxtjs/google-gtag',
  ],
  pwa: {
    manifest: {
      name: 'yoshihiko',
      lang: 'ja'
    }
  },
  build: {
    parallel: true,
    cache: true,
    // hardSource: true,
  },
  // *******************
  // DevServerの設定
  // *******************
  server: {
    host: '0.0.0.0',
  },
  watchers: {
    webpack: {
      poll: true,
      ignored: /node_modules/,
    }
  },
  // *******************
  // 環境変数の設定
  // *******************
  publicRuntimeConfig: {
    origin: process.env.ORIGIN || 'http://localhost:3000'
  },
  // *******************
  // 各モジュールの設定
  // *******************
  googleFonts: {
    families: {
      Roboto: [100, 400, 500],
      Inconsolata: [200, 500],
      'Noto+Sans+JP': [100, 400, 700],
    },
    display: 'swap'
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.CTF_ENDPOINT,
        httpLinkOptions: {
          headers: {
            Authorization: `Bearer ${process.env.CTF_CDA_TOKEN}`
          }
        }
      }
      // default: '~/utils/apollop.config.ts'
      // default: {
      //   // GraphQL検証用エンドポイント
      //   // 参考記事：https://zenn.dev/kimkiyong/articles/b92b1029093741#reference
      //   // httpEndpoint: 'https://graphql-pokemon2.vercel.app/'
      // }
    }
  },
  // tailwindcss: {
  //   configPath: '~/config/tailwind.config.js',
  //   purgeCSSInDev: false,
  // }
  markdownit: {
    injected: true,
    breaks: true, // Convert '\n' in paragraphs into <br>
    use: [
      'markdown-it-anchor',
      'markdown-it-table-of-contents',
      'markdown-it-collapsible',
    ]
  },
  'google-gtag': {
    id: process.env.GTAG_ID
  },
})
