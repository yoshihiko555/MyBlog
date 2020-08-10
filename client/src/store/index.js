import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        recentArticles: [],
        categorys: {},
        searchText: '',
        searchResult: [],
        detailArticle: {},
    },
    getters: {
        recentArticleList: state => state.recentArticles,
        categoryList: state => state.categorys,
        searchText: state => state.searchText,
        searchResultList: state => state.searchResult,
        detailArticle: state => state.detailArticle,
    },
    mutations: {
        setRecentArticles (state, payload) {
            state.recentArticles = payload
        },
        setCategorys (state, payload) {
            state.categorys = payload
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
        addCategorys (state, payload) {
            state.categorys.push(payload)
        }
    },
    actions: {
        updateRecentArticles (ctx, kwargs) {
            this.commit('setRecentArticles', kwargs)
        },
        updateCategorys (ctx, kwargs) {
            this.commit('setCategorys', kwargs)
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
    },
    modules: {
    },
    plugins: [
        VuexPersistedstate({
            storage: window.localStorage
        })
    ]
})
