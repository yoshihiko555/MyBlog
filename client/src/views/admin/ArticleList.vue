<template>
    <div id="article_list_wrap" class="main">
		<v-container v-show='isAuth'>
            <v-row>
                <h1>記事一覧</h1>
            </v-row>
            <div v-if="articles.length > 0">
            <v-row v-for="article in articles" :key='article.id'>
                <v-col cols='8'>
                    <router-link
                        :to='{ name: "DetailArticle", params: { title: article.title }}'
                    >
                        <p>Article: {{ article.title }}</p>
                    </router-link>
                </v-col>
            </v-row>
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
    			console.log(res)
    			this.articles = res.data.results
    		})
    		.catch(e => {
    			console.log(e)
    		})
    	}
    }
}
</script>

<style lang="scss">

</style>
