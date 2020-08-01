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
                        :loading='loading'
                    ></v-text-field>
                </v-col>
            </v-row>

            <!-- 検索完了画面 -->
            <div v-if="!loading">
                <!-- 検索ワード表示 -->
                <v-row>
                    <v-col cols='12'>
                        <div>検索内容：{{ searchText }}</div>
                    </v-col>
                </v-row>

                <div v-if="searchResultList.length > 0">
                    <!-- 検索結果:あり -->
                    <v-row v-for='article in searchResultList' :key='article.id'>
                        <v-card
                            class="my-3"
                            link
                            hover
                            :to='{ name: "DetailArticle", params: { title: article.title, id: article.id }}'
                        >
                            <v-row>
                                <v-col cols='4'>
                                    <v-img :src='article.thumbnail' height=150></v-img>
                                </v-col>
                                <v-col cols='8'>
                                    <h3>{{ article.title }}</h3>
                                    <p>{{ article.created_at}}</p>
                                    <p>{{ article.content}}</p>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-row>
                </div>

                <div v-else>
                    <!-- 検索結果:なし -->
                    記事が見つかりません
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
    data: () => ({
        searchRetryText: '',
        loading: false,
    }),
    components: {
        Loading,
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
                console.log(res.data)
                this.loading = false
                this.updateSearchResult(res.data)
            })
            .catch(e => {
                console.log(e)
            })
        }, 1000),
    },
}
</script>

<style lang="scss">
</style>
