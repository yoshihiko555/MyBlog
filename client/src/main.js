import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import http from '@/plugins/http'
import { globalMixins } from '@/mixins'
import Vuesax from 'vuesax'
import VueSession from 'vue-session'
import 'vuesax/dist/vuesax.css'
require('@/static/scss/main.scss')

Vue.config.productionTip = false

Vue.use(http)
Vue.use(Vuesax)
Vue.use(VueSession)
Vue.mixin(globalMixins)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
