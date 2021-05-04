<template>
    <v-container class="main">
        <h1>Blog</h1>
		<v-card
			v-for='article in articles'
			:key='article.id'
			tile
			flat
			class='article_wrap my-2'
			:to='{ name: "DetailArticle", params: { title: article.title }}'
		>
			<v-row>
				<v-col cols='4' class='pa-0'>
					<v-img :src='article.thumbnail' alt='article.title' height=200 />
				</v-col>
				<v-col cols='8'>
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
	components: {
	},
    data: () => ({
    	articles: null,
    }),
    created () {
    	this.$axios({
    		url: '/api/article/',
    		method: 'GET',
    	})
    	.then(res => {
    		console.log(res)
    		this.articles = res.data.results
    	})
    	.catch(e => {

    	})
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>

    .article_wrap {
        position: relative;
        transition: all .3s;

        >.row {
            width: 100%;
            margin: 0;

            .search_result_img_wrap {
                position: relative;

                .search_result_category {
                    position: absolute;
                    top: 0;
                    right: 0;
                    font-size: 0.8em;
                    color: #fff;
                    background-color: #676767cc;
                }
            }

            .search_result_title {
                font-size: 1.4em;
            }

            .search_result_created {
                font-size: .8em;
                color: #555;
            }
        }

        &:hover {
            background-color: rgba(190, 190, 190, .2);
        }
    }

</style>
