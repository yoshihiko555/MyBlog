
export const state = () => ({
    recentArticles: [],
    categories: {},
    searchText: '',
    searchResult: [],
    detailArticle: {},
    sample: 0,
})

export const getters = {
    recentArticleList: state => state.recentArticles,
    categoryList: state => state.categories,
    searchText: state => state.searchText,
    searchResultList: state => state.searchResult,
    detailArticle: state => state.detailArticle,
}

export const mutations = {
    setRecentArticles (state, payload) {
        state.recentArticles = payload
        // console.log('ここに来た', state)
    },
    setCategories (state, payload) {
        state.categories = payload
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
    addCategories (state, payload) {
        state.categories.push(payload)
    },
    addDetailCommentReply (state, payload) {
        const comment = state.detailArticle.comments.find(comment => comment.id === payload.comment)
        comment.reply.push(payload)
    },
    setCategory (state, payload) {
        const category = state.categories.find(category => category.id === payload.id)
        category.name = payload.name
    },
    setSample (state, payload) {
        state.sample = payload
    }
}

export const actions = {
	// 初回アクセス時のみサーバサイドで実行される
	async nuxtServerInit ({ commit, dispatch }) {
        console.log('nuxtServerInit Start!!')
        commit('setSample', 1)
        await dispatch('updateRecentArticles')
        await dispatch('updateCategories')
        console.log('最新記事処理終了後')
		// this.$axios({
		// 	url: '/api/article/recent_articles/',
		// 	method: 'GET',
		// })
		// .then(res => {
		// 	console.log(res)
		// 	// ここでstoreに保存する
		// })
		// .catch(e => {
		// 	console.log(e.response)
		// })
    },
    nuxtClientInit (param) {
        console.log('nuxtClientInit Start!!!')
        // console.log(param)
    },
    // 最新記事更新
	async updateRecentArticles (ctx, kwargs) {
    	console.log('最新記事取得開始')
       	// console.log('CTX', ctx)
//    	const { res } = await this.$axios({
//            url: '/api/article/recent_articles/',
//            method: 'GET'
//    	})
//    	console.log(res)
		await this.$axios({
			url: '/api/article/recent_articles/',
			method: 'GET'
		})
		.then(res => {
            // console.log('最新記事一覧', res)
            console.log('最新記事取得成功')
			ctx.commit('setRecentArticles', res.data)
		})
		.catch(e => {
			console.log(e)
		})
	},
    // カテゴリー一覧更新
    async updateCategories (ctx, kwargs) {
    	console.log('最新カテゴリー取得開始')
        await this.$axios({
            url: '/api/category/',
            method: 'GET',
        })
        .then(res => {
            // console.log('カテゴリー一覧', res)
            this.commit('setCategories', res.data)
        })
        .catch(e => {
            console.log(e)
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
        this.$axios({
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
}
