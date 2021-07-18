import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        recentArticles: [],
        categoryies: {},
        searchText: '',
        searchResult: [],
        detailArticle: {},
        initFlg: false,
    },
    getters: {
        recentArticleList: state => state.recentArticles,
        categoryList: state => state.categoryies,
        searchText: state => state.searchText,
        searchResultList: state => state.searchResult,
        detailArticle: state => state.detailArticle,
        initFlg: state => state.initFlg
    },
    mutations: {
        setRecentArticles (state, payload) {
            state.recentArticles = payload
        },
        setCategoryies (state, payload) {
            state.categoryies = payload
        },
        setSearchText (state, payload) {
            state.searchText = payload
        },
        setSearchResult (state, payload) {
            state.searchResult = payload
        },
        setDetailArticle (state, payload) {
            state.detailArticle = payload
        },
        addCategoryies (state, payload) {
            state.categoryies.push(payload)
        },
        addDetailCommentReply (state, payload) {
            const comment = state.detailArticle.comments.find(comment => comment.id === payload.comment)
            comment.reply.push(payload)
        },
        setCategory (state, payload) {
            const category = state.categoryies.find(category => category.id === payload.id)
            category.name = payload.name
        },
        setInitFlg (state, payload) {
        	console.log('初期化完了フラグ', payload)
        	state.initFlg = payload
        }
    },
    actions: {
        // 最新記事更新
        updateRecentArticles (ctx, kwargs) {
            return new Promise((resolve, reject) => {
                Vue.prototype.$axios({
                    url: '/api/article/recent_articles/',
                    method: 'GET',
                })
                .then(res => {
                    console.log('最新記事一覧', res)
                    this.commit('setRecentArticles', res.data)
                    resolve(res)
                })
                .catch(e => {
                    reject(e)
                })
            })
        },
        // カテゴリー一覧更新
        updateCategoryies (ctx, kwargs) {
            return new Promise((resolve, reject) => {
                Vue.prototype.$axios({
                    url: '/api/category/',
                    method: 'GET',
                })
                .then(res => {
                    console.log('カテゴリー一覧', res)
                    this.commit('setCategoryies', res.data)
                    resolve(res)
                })
                .catch(e => {
                    reject(e)
                })
            })
        },
        updateSearchText (ctx, kwargs) {
            this.commit('setSearchText', kwargs)
        },
        updateSearchResult (ctx, kwargs) {
            this.commit('setSearchResult', kwargs)
        },
        updateDetailArticle (ctx, kwargs) {
            this.commit('setDetailArticle', kwargs)
        },
        // カテゴリー情報更新
        updateCategory (ctx, kwargs) {
            Vue.prototype.$axios({
                url: `/api/category/${kwargs.id}/`,
                method: 'PUT',
                data: {
                    name: kwargs.name,
                }
            })
            .then(res => {
                this.commit('setCategory', res.data)
            })
            .catch(e => {
                console.log(e)
            })
        }
    },
    modules: {
    },
    plugins: [
        VuexPersistedstate({
            storage: window.localStorage
        })
    ]
})
