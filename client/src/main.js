import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from '@/plugins/http'
import truncate from '@/filters/truncate'
import { globalMixins } from '@/mixins'
import vuetify from './plugins/vuetify'
import Vuesax from 'vuesax'
import VueSession from 'vue-session'
import mavonEditor from 'mavon-editor'

// CSS
import 'vuesax/dist/vuesax.css'
import 'mavon-editor/dist/css/index.css'
require('@/static/scss/main.scss')

Vue.config.productionTip = false

Vue.use(http)
Vue.use(Vuesax)
Vue.use(VueSession)
Vue.use(mavonEditor)

Vue.mixin(globalMixins)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
