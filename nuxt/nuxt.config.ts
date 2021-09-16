import { NuxtConfig } from '@nuxt/types'

export default ():NuxtConfig => ({
  // srcDir: 'src/',
  head: {
    title: 'Yoshihiko',
    titleTemplate: '%s | Yoshihiko',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: 'yoshihiko site' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Yoshihiko' },
      { hid: 'og:title', property: 'og:title', content: 'Yoshihiko' },
      { hid: 'og:description', property: 'og:description', content: 'yoshihiko site' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: process.env.ORIGIN || 'http://localhost:3000' },
      { hid: 'og:image', property: 'og:image', content: `${process.env.ORIGIN}/ogp-default.webp` },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', property: 'twitter:title', content: 'Yoshihiko' },
      { hid: 'twitter:site', property: 'twitter:site', content: '@yoshihiko5555' },
      { hid: 'twitter:description', property: 'twitter:description', content: 'yoshihiko site' },
      { hid: 'twitter:image', property: 'twitter:image', content: `${process.env.ORIGIN}/ogp-default.webp` },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
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
  plugins: [
    '~/plugins/vuesax',
    '~/plugins/apollo',
    '~/plugins/prism',
    '~/plugins/utils',
  ],
  components: true,
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
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit',
    '@nuxtjs/moment',
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
  publicRuntimeConfig: {
    origin: process.env.ORIGIN || 'http://localhost:3000'
  }
})
