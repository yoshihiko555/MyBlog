<template>
    <div id="article_list_wrap" class="main">
		<v-container v-show='isAuth'>
            <v-row>
                <h1>記事一覧</h1>
            </v-row>
            <div v-if="articles.length > 0">
                <v-row v-for="article in articles" :key='article.id'>
                    <v-col cols='8'>
                        <Nuxt-link
                            :to='{ name: "DetailArticle", params: { title: article.title }}'
                        >
                            <p>Article: {{ article.title }}</p>
                        </Nuxt-link>
                    </v-col>

                    <v-col cols='4'>
                        <v-btn
                            :to='{ name: "EditArticle", params: {title: article.title }}'
                        >
                            編集
                        </v-btn>
                        <v-btn
                            @click="deleteArticle(article)"
                        >
                            削除
                        </v-btn>
                    </v-col>
                </v-row>

                <!-- ページネーション -->
                <v-pagination
                    v-model="pagination.current_page"
                    :page='pagination.current_page'
                    :length='pagination.total_pages'
                    color='blue-grey lighten-1'
                    class="mt-5"
                    total-visible=5
                    @input='changePage'
                />
            </div>

            <div v-else>
                <p>記事がありません</p>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'ArticleList',

    data: () => ({
    	isAuth: false,
        articles: [],
        pagination: {},
    }),
    created () {
        if (!this.$session.has('token')) {
            this.$router.push('/admin/signin')
        } else {
            this.isAuth = this.$session.has('token')
            this.getArticles()
        }
    },
    methods: {
    	getArticles () {
    		this.$axios({
    			url: '/api/article/',
    			method: 'GET',
    		})
    		.then(res => {
                console.log('記事一覧', res)
                this.pagination = res.data
    			this.articles = res.data.results
    		})
    		.catch(e => {
    			console.log(e)
    		})
        },
        deleteArticle (article) {
            this.$axios({
                url: `/api/article/${article.id}/`,
                method: 'DELETE',
            })
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.log(e)
            })
        },
        changePage (page) {
            this.$axios({
    			url: '/api/article/',
                method: 'GET',
                params: {
                    page: page,
                    // searchText: this.searchText,
                }
    		})
    		.then(res => {
                console.log(res)
                this.pagination = res.data
                this.articles = res.data.results
    		})
    		.catch(e => {
    			console.log(e)
    		})
    	},
    }
}
</script>

<style lang="scss">

</style>
