<template>
    <div id="home" class="main">
        <v-container>
            <v-row>
                <v-col cols='12' sm='4'>
                    <Sidebar/>
                </v-col>

                <v-col cols='12' sm='8'>
                    <CarouselAricles
                        :latest-articles='latestArticles'
                    ></CarouselAricles>

                    <v-container>
                        <v-row v-for='article in articleList' :key='article.id'>
                            <v-card>
                                <v-img :src='article.thumbnail' height='300'></v-img>
                                <v-card-title>{{ article.title }}</v-card-title>

                                <v-card-text>{{ article.content }}</v-card-text>
                            </v-card>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Sidebar from '@/components/common/Sidebar'
import CarouselAricles from '@/components/parts/CarouselArticles'

export default {
    name: 'Home',
    components: {
        Sidebar,
        CarouselAricles,
    },
    data: () => ({
        articleList: [],
        latestArticles: [],
    }),
    created () {
        this.$axios({
            url: '/api/article/',
            method: 'GET',
        })
        .then(res => {
            console.log(res)
            this.articleList = res.data
            this.latestArticles = res.data
        })
        .catch(e => {
            console.log(e)
        })
    }
}
</script>
