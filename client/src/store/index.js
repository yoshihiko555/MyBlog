import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        articles: [],
        latestArticles: [],
        categorys: {},
        searchText: '',
        searchResult: [],
        detailArticle: {},
    },
    getters: {
        articleList: state => state.articles,
        latestArticleList: state => state.latestArticles,
        categoryList: state => state.categorys,
        searchText: state => state.searchText,
        searchResultList: state => state.searchResult,
        detailArticle: state => state.detailArticle,
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
        setDetailArticle (state, payload) {
            state.detailArticle = payload
        },
        // setCommentDetailArticle (state, payload) {
        //     state.detailArticle.comment.unshift(payload)
        // }
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
        updateDetailArticle (ctx, kwargs) {
            this.commit('setDetailArticle', kwargs)
        },
        // addCommentDetailArticle (ctx, kwargs) {
        //     this.commit('setCommentDetailArticle', kwargs)
        // },
    },
    modules: {
    },
    plugins: [
        VuexPersistedstate({
            storage: window.localStorage
        })
    ]
})
