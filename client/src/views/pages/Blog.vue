<template>
    <v-container class="main">
        <h1>Blog</h1>
		<article-list :articles='articles' v-show='isShow'/>
		<!-- ページネーション -->
		<v-pagination
			v-model="pagination.current_page"
			v-show='isShow'
			:page='pagination.current_page'
			:length='pagination.total_pages'
			color='blue-grey lighten-1'
			class="pagination-wrap mt-5"
			total-visible=5
			@input='changePage'
		/>
    </v-container>
</template>

<script>
import ArticleList from '@/components/parts/ArticleList'
import { metaInfo } from '@/mixins'

export default {
	mixins: [metaInfo],
	components: {
		ArticleList
	},
    data: () => ({
		isShow: false,
    	articles: null,
		pagination: {},
    }),
    created () {
		this.getArticles()
    },
	beforeRouteUpdate (to, from, next) {
		this.getArticles(to.query.page)
		next()
	},
    methods: {
		getArticles (page) {
			const params = {}
			if (page) params.page = page
            else params.page = this.$route.query.page || 1
			this.$axios({
				url: '/api/article/',
				method: 'GET',
				params,
			})
			.then(res => {
				console.log('Blog一覧取得結果', res.data)
				this.isShow = true
				this.pagination = res.data
				this.articles = res.data.results
			})
			.catch(e => console.log(e))
		},
		changePage (page) {
            const query = {
                ...this.$route.query,
                page: page,
            }
            this.$router.push({
                name: 'Blog',
                query: query
            })
    	},
    }
}
</script>

<style lang="scss" scoped>
	.pagination-wrap::v-deep {
		button { text-align: center; }
	}
</style>
