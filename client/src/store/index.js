import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        articles: [],
        latestArticles: [],
        categorys: {},
        searchText: '',
        searchResult: [],
    },
    getters: {
        articleList: state => state.articles,
        latestArticleList: state => state.latestArticles,
        categoryList: state => state.categorys,
        searchText: state => state.searchText,
        searchResultList: state => state.searchResult,
    },
    mutations: {
        setArticles (state, payload) {
            state.articles = payload
        },
        setLatestArticles (state, payload) {
            state.latestArticles = payload
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
    },
    actions: {
        updateArticles (ctx, kwargs) {
            this.commit('setArticles', kwargs)
        },
        updateLatestArticles (ctx, kwargs) {
            this.commit('setLatestArticles', kwargs)
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
    },
    modules: {
    }
})
