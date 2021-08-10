<template>
	<v-container>
		<v-card
			v-for='article in articles'
			:key='article.id'
			tile
			flat
			class='article-wrap my-2'
			:to='{ name: "DetailArticle", params: { title: article.title }}'
		>
			<v-row>
				<v-col cols='4' class='pa-0 img-wrap'>
					<v-img :src='article.thumbnail' alt='article.title' height=200 contain />
					<span class="category-name pa-1">{{ article.category_name }}</span>
				</v-col>
				<v-col cols='8' class="pl-10">
					<h4 class="title">{{ article.title }}</h4>
					<p class="created">{{ article.created_at }}</p>
					<p class="content">{{ article.lead_text }}</p>
				</v-col>
			</v-row>
		</v-card>
	</v-container>
</template>

<script>
export default {
	name: 'ArticleList',
	props: {
		articles: {
			required: true
		}
	}
}

</script>

<style lang="scss" scoped>
    .article-wrap {
        position: relative;
        transition: all .3s;

        >.row {
            width: 100%;
            margin: 0;

            .img-wrap {
                position: relative;

                .category-name {
                    position: absolute;
                    top: 0;
                    right: 0;
                    font-size: 0.8em;
                    color: #fff;
                    background-color: #676767cc;
                }
            }

            .title {
                font-size: 1.4em;
            }

            .created {
                font-size: .8em;
                color: #555;
            }
        }

        &:hover {
            background-color: rgba(190, 190, 190, .2);
        }
    }
</style>
