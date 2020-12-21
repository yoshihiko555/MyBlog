<template>
	<v-container id='related_articles_wrap'>
        <h3>関連記事</h3>
        <v-card
            v-for='article in articles'
            :key='article.id'
            class="related_article_wrap py-4"
            link
            flat
            tile
            :to='{ name: "post-title", params: { title: article.title }}'
        >
            <v-row>
                <v-col cols='4' class="">
                    <v-img :src='article.thumbnail_url' :alt='article.title' />
                </v-col>
                <v-col cols='8' class="pl-4">
                    <h4>{{ article.title }}</h4>
                    <p>{{ article.created_at }}</p>
                    <p>{{ article.lead_text }}</p>
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
            type: Array,
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
