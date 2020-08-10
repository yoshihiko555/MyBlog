import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { mapActions } from 'vuex'
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
    created () {
        // 最新記事取得処理
        this.$axios({
            url: '/api/article/recent_articles/',
            method: 'GET',
        })
        .then(res => {
            console.log('最新記事一覧', res)
            this.updateRecentArticles(res.data)
        })
        .catch(e => {
            console.log(e)
        })

        // カテゴリー取得処理
        this.$axios({
            url: '/api/category/',
            method: 'GET',
        })
        .then(res => {
            console.log('カテゴリー一覧', res)
            this.updateCategorys(res.data)
        })
        .catch(e => {
            console.log(e)
        })
    },
    methods: {
        ...mapActions([
            'updateRecentArticles',
            'updateCategorys',
        ]),
    },
    render: h => h(App)
}).$mount('#app')
