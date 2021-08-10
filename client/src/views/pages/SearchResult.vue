<template>
    <v-container class="main">
		<!-- 検索ワード入力 -->
		<v-row>
			<v-col cols='12'>
				<v-text-field
					v-model="searchRetryText"
					prepend-inner-icon='mdi-magnify'
					placeholder='Search...'
					color='blue-grey darken-1'
					outlined
					dense
					:loading='loading'
				></v-text-field>
			</v-col>
		</v-row>

		<!-- 検索完了画面 -->
		<div v-if="!loading">
			<!-- 検索ワード表示 -->
			<v-row>
				<v-col cols='12' class="text-center">
					<h2 class="text-subtitle-1">Search Result For</h2>
					<h3 class="mb-3 search_text">{{ searchText }}</h3>
				</v-col>
			</v-row>

			<div v-if="searchResultList.length > 0">
				<!-- 検索結果:あり -->
				<article-list :articles='searchResultList' />
				<!-- ページネーション -->
				<v-pagination
					v-model="pagination.current_page"
					:page='pagination.current_page'
					:length='pagination.total_pages'
					color='blue-grey lighten-1'
					class="pagination-wrap mt-5"
					total-visible=5
					@input='changePage'
				/>
			</div>

			<div v-else>
				<!-- 検索結果:なし -->
				<h2>記事が見つかりません</h2>
			</div>
		</div>

		<!-- ロード中画面表示 -->
		<div v-else>
			<Loading/>
		</div>
	</v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import _ from 'lodash'

import Loading from '@/components/parts/Loading'
import ArticleList from '@/components/parts/ArticleList'

export default {
    name: 'SearchResult',
    components: {
        Loading,
		ArticleList
    },
    data: () => ({
        searchRetryText: '',
        loading: false,
        pagination: {},
    }),
    created () {
        this.search()
    },
    beforeRouteUpdate (to, from, next) {
        this.search(to.query.searchText, to.query.page)
        next()
    },
    watch: {
        searchRetryText (val) {
            this.loading = true
            this.inSearch(val)
        }
    },
    computed: {
        ...mapGetters([
            'searchText',
            'searchResultList',
        ]),
    },
    methods: {
        ...mapActions([
            'updateSearchText',
            'updateSearchResult',
        ]),
        inSearch: _.debounce(function search (searchText) {
            this.$router.push({
                name: 'SearchResult',
                query: {
                    searchText: searchText
                }
            })
        }, 1000),
        search (word, page) {
            // 検索パラーメタ
            const params = {}

            // 検索発火箇所の特定
            if ('searchText' in this.$route.query || word) {
                // 検索フォームから
                let searchText
                if (word || word === '') {
                    searchText = word
                } else {
                    searchText = this.$route.query.searchText || ''
                }
                this.updateSearchText(searchText)

                // 検索ワードの整形
                var trimedTextList = [...new Set(searchText.split(/\s+/))]
                var searchWord = trimedTextList.join(',')
                params.searchText = searchWord
                console.log('検索文字列 : ' + searchWord)
            } else {
                // カテゴリーから
                params.category = this.$route.query.category || ''
                this.updateSearchText(this.$route.query.category)
            }

            // ページの設定
            if (page) {
                params.page = page
            } else {
                params.page = this.$route.query.page || 1
            }
            console.log('パラメータ', params)
            this.$axios({
                url: '/api/article/',
                method: 'GET',
                params: params
            })
            .then(res => {
                console.log('検索結果一覧', res)
                this.loading = false
                this.pagination = res.data
                this.updateSearchResult(res.data.results)
            })
            .catch(e => {
                console.log(e)
            })
        },
    	changePage (page) {
            console.log(this.$route.query)
            const query = {
                ...this.$route.query,
                page: page,
            }
            this.$router.push({
                name: 'SearchResult',
                query: query
            })
    	},
    },
}
</script>

<style lang="scss" scoped>

    .search_text {
        min-height: 30px;
    }

    .search_article_wrap {
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

	.pagination-wrap::v-deep {
		button { text-align: center; }
	}

</style>
