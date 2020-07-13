<template>
    <div id="home" class="main">
        <v-container>
            <v-row>
                <v-col cols='12' sm='4'>
                    <Sidebar/>
                </v-col>

                <v-col cols='12' sm='8'>
                    <CarouselAricles/>

                    <v-container>
                        <v-row v-for='article in articleList' :key='article.id'>
                            <v-card tile class="my-5">
                                <v-img :src='article.thumbnail' height='300'></v-img>
                                <v-card-title>{{ article.title }}</v-card-title>

                                <v-card-text>{{ article.content }}</v-card-text>

                                <v-card-actions class="article_list_btn_wrap pa-10">
                                    <v-btn
                                        outlined
                                        tile
                                        color='blue-grey darken-1'
                                        :to='{ name: "DetailArticle", params: { title: article.title, id: article.id }}'
                                    >
                                        ReadMore
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Sidebar from '@/components/common/Sidebar'
import CarouselAricles from '@/components/parts/CarouselArticles'

export default {
    name: 'Home',
    components: {
        Sidebar,
        CarouselAricles,
    },
    data: () => ({

    }),
    computed: {
        ...mapGetters([
            'articleList',
            'latestArticleList',
        ])
    },
    methods: {
        ...mapActions([
            'updateArticles',
            'updateLatestArticles',
        ])
    },
    created () {
        this.$axios({
            url: '/api/article/',
            method: 'GET',
        })
        .then(res => {
            console.log(res)
            this.updateArticles(res.data)
            this.updateLatestArticles(res.data)
        })
        .catch(e => {
            console.log(e)
        })
    }
}
</script>

<style lang="scss">
    #home {
        .article_list_btn_wrap {
            justify-content: center;
            align-items: center;
        }
    }
</style>
