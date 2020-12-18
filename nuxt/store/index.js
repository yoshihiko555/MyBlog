
export const state = () => ({
    recentArticles: [],
    categorys: {},
    searchText: '',
    searchResult: [],
    detailArticle: {},
    sample: 0,
})

export const getters = {
    recentArticleList: state => state.recentArticles,
    categoryList: state => state.categorys,
    searchText: state => state.searchText,
    searchResultList: state => state.searchResult,
    detailArticle: state => state.detailArticle,
}

export const mutations = {
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
    },
    addDetailCommentReply (state, payload) {
        const comment = state.detailArticle.comments.find(comment => comment.id === payload.comment)
        comment.reply.push(payload)
    },
    setCategory (state, payload) {
        const category = state.categorys.find(category => category.id === payload.id)
        category.name = payload.name
    },
    upSample (state, payload) {
        state.sample++
    }
}

export const actions = {
	// 初回アクセス時のみサーバサイドで実行される
	nuxtServerInit (param) {
		console.log('nuxtServerInit Start!!')
		this.$axios({
			url: '/api/article/recent_articles/',
			method: 'GET',
		})
		.then(res => {
			console.log(res)
			// ここでstoreに保存する
		})
		.catch(e => {
			console.log(e.response)
		})
	},
    // 最新記事更新
	updateRecentArticles (ctx, kwargs) {
    	console.log('最新記事取得開始')
//    	console.log('CTX', ctx)
//    	console.log('THIS', this)
//    	const { res } = await this.$axios({
//            url: '/api/article/recent_articles/',
//            method: 'GET'
//    	})
//    	console.log(res)
		this.$axios({
			url: '/api/article/recent_articles/',
			method: 'GET'
		})
		.then(res => {
			console.log('最新記事一覧', res)
			this.commit('setRecentArticles', res.data)
		})
		.catch(e => {
			console.log(e)
		})
	},
    // カテゴリー一覧更新
    updateCategorys (ctx, kwargs) {
    	console.log('最新カテゴリー取得開始')
    	console.log(ctx)
    	console.log(this)
        this.$axios({
            url: '/api/category/',
            method: 'GET',
        })
        .then(res => {
            console.log('カテゴリー一覧', res)
            this.commit('setCategorys', res.data)
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
