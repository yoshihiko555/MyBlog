import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { mapMutations, mapActions } from 'vuex'
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
import 'highlight.js/styles/a11y-dark.css'
require('@/static/scss/style.scss')

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
    async created () {
    	// 一度初期化フラグを折っておく
    	this.setInitFlg(false)

    	try {
    		// 最新記事取得処理
    		await this.updateRecentArticles()
    		// カテゴリー取得処理
    		await this.updateCategorys()

    		// 正常にデータが取得できたので、初期化フラグを立てる
    		this.setInitFlg(true)
    	} catch (e) {
    		console.error('初期化に失敗した')
    		console.error(e)
    	}
    },
    methods: {
    	...mapMutations([
    		'setInitFlg',
    	]),
        ...mapActions([
            'updateRecentArticles',
            'updateCategorys',
        ]),
    },
    render: h => h(App)
}).$mount('#app')
