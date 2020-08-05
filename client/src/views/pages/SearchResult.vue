<template>
    <div id='search_result_wrap' class="main">
        <v-container>
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
                        <h2 class="mb-3 text-subtitle-1">Search Result For</h2>
                        <h3 class="mb-3 search_text">{{ searchText }}</h3>
                        <v-divider></v-divider>
                    </v-col>
                </v-row>

                <div v-if="searchResultList.length > 0">
                    <!-- 検索結果:あり -->
                    <v-card
                        v-for='article in searchResultList'
                        :key='article.id'
                        class="search_article_wrap py-4"
                        link
                        flat
                        tile
                        outlined
                        :to='{ name: "DetailArticle", params: { title: article.title }}'
                    >
                        <v-row>
                            <v-col cols='4' class="pa-0 search_result_img_wrap">
                                <v-img :src='article.thumbnail' alt='article.title' height=200></v-img>
                                <span class="search_result_category pa-1">{{ article.category_name }}</span>
                            </v-col>
                            <v-col cols='8' class="pl-4">
                                <h4 class="search_result_title">{{ article.title }}</h4>
                                <p class="search_result_created mb-3">{{ article.created_at}}</p>
                                <p class="search_result_content">{{ article.content}}</p>
                            </v-col>
                        </v-row>
                    </v-card>

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
                    <!-- 検索結果:なし -->
                    <h2>記事が見つかりません</h2>
                </div>
            </div>

            <!-- ロード中画面表示 -->
            <div v-else>
                <Loading/>
            </div>
        </v-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import _ from 'lodash'

import Loading from '@/components/parts/Loading'

export default {
    name: 'SearchResult',
    components: {
        Loading,
    },
    data: () => ({
        searchRetryText: '',
        loading: false,
        pagination: {},
    }),
    created () {
    	console.log('検索開始')
		 this.$axios.get('api/article/', {
		    params: {
		        searchText: this.searchText
		    }
		})
		.then(res => {
		    console.log('検索結果一覧', res.data)
		    this.pagination = res.data
		    this.updateSearchResult(res.data.results)
		})
		.catch(e => {
		    console.log(e)
		})
    },
    watch: {
        searchRetryText (val) {
            this.loading = true
            this.search(val)
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
        search: _.debounce(function search (searchText) {
            // 空白削除し、カンマ区切りの文字列で送る
            var trimedText = this.trim(searchText)
            this.updateSearchText(trimedText)
            var trimedTextList = [...new Set(trimedText.split(/\s+/))]
            var searchWord = trimedTextList.join(',')
            console.log('検索文字列 : ' + searchWord)
            this.$axios.get('api/article/', {
                params: {
                    searchText: searchWord
                }
            })
            .then(res => {
                console.log('検索結果一覧', res.data)
                this.loading = false
                this.pagination = res.data
                this.updateSearchResult(res.data.results)
            })
            .catch(e => {
                console.log(e)
            })
        }, 1000),
    	changePage (page) {
            this.$axios({
    			url: '/api/article/',
                method: 'GET',
                params: {
                    page: page,
                    searchText: this.searchText,
                }
    		})
    		.then(res => {
                console.log(res)
                this.pagination = res.data
    			this.updateSearchResult(res.data.results)
    		})
    		.catch(e => {
    			console.log(e)
    		})
    	},
    },
}
</script>

<style lang="scss">
#search_result_wrap {
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
}
</style>
