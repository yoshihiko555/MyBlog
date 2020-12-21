import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - nuxt-app',
    title: 'nuxt-app',
    htmlAttrs: {
        lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
      '@/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
      '@/plugins/filter.js',
    //   { src: '@/plugins/storeStorage.js', ssr: false },
      { src: '@/plugins/cookieStorage.js' },
      '@/plugins/http.js',
      '@/plugins/mixin.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/auth',
    '@nuxtjs/proxy',
  ],
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
     baseURL: process.browser ? 'http://localhost:8000' : 'http://localhost:3000',
    // proxy: true,
    // get: {
    //     xsrfCookieName: 'csrftoken',
    //     xsrfHeaderName: 'X-CSRFTOKEN',
    // }
  },
  proxy: {
	  '/api': {
		  // serverはDockerの名前空間を指定
		  target: 'http://server:8000',
		  pathRewrite: {
			  '^/api/': '/api/'
		  }
      },
      '/media': {
        target: 'http://localhost:8000',
        pathRewrite: {
            '^/media/': '/media/'
        }
      }
  },
  styleResources: {
    scss: [
        '@/assets/scss/prepends.scss',
    ]
  },
  auth: {
    redirect: {
        login: '/',
        logout: '/',
        callback: false,
        home: '/admin'
    },
    strategies: {
        local: {
            endpoints: {
                login: { url: '/auth/', method: "POST", propertyName: 'token' },
                user: { url: '/api/user/', method: 'GET', propertyName: false },
                logout: false
            }
        }
    }
  },
  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  server: {
      host: '0.0.0.0',
      port: 3000
  },
  router: {
      middleware: ['global']
  },
  watchers: {
	  webpack: {
		  poll: true
	  }
  },
  loading: '~/components/LoadingPage'
}
