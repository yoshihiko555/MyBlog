<template>
	<v-container>
		<v-card
			flat
			id='related_articles_wrap'
		>
			<v-card-title>関連記事</v-card-title>
			<v-row v-for='article in articles' :key='article.id'>
				<v-col cols='12'>
					<router-link
						:to='{ name: "DetailArticle", params: { title: article.title }}'
					>
						<v-img :src='article.thumbnail_url' :alt='article.title'/>
						<v-card-text>Title:{{ article.title }}</v-card-text>
						<v-card-text>Content:{{ article.lead_text }}</v-card-text>
					</router-link>
				</v-col>
			</v-row>
		</v-card>
	</v-container>
</template>

<script>
export default {
    name: 'RelatedArticles',
    props: {
    	articles: {
    		required: true,
    	}
    },
    data: () => ({
    }),
    created () {
    },
    mounted () {
    },
    methods: {
    }
}
</script>

<style lang="scss">

</style>
