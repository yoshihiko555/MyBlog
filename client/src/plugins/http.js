import Vue from 'vue'
import axios from 'axios'
import router from '@/router'

export default {
	install: function (Vue, options) {
		// デフォルト定義
		const http = axios.create({
			baseURL: 'http://localhost:8000/',
			xsrfCookieName: 'csrftoken',
			xsrfHeaderName: 'X-CSRFTOKEN',
			timeout: 10000,
		})
		// リクエストのデフォルト定義
		// http.interceptors.request.use((config) => {
		// 	// ヘッダーに認証済みのToken埋め込み
		// 	if (Vue.prototype.$store.state.isAuth) {
		// 		config.headers = {
		// 			Authorization: `JWT ${Vue.prototype.$store.state.token}`,
		// 			'Content-Type': 'application/json'
		// 		}
		// 		if (!('params' in config)) config.params = {}
		// 		if (config.method === 'get') config.params.loginUser = Vue.prototype.$store.state.loginUser
		// 	}
		// 	return config
		// })
		 // レスポンスのデフォルト定義
		 http.interceptors.response.use(
				res => {
					// リクエストデータのJSON解析
					try {
						var requestData = (res.config.data !== undefined) ? JSON.parse(res.config.data) : null
						res.requestData = requestData
					} catch (e) {
						console.log(e)
					} finally {
					}
					return res
				},
				e => {
					// エラーコードのページに遷移
					console.log('HTTP ERROR RESPONSE:', e.response)
					// router.push(`/${e.response.status}`) // 本番になったらコメントアウトを外す
					return Promise.reject(e)
				}
		 	)
		Vue.prototype.$axios = http
	}
}
