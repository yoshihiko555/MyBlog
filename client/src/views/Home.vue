<template>
    <div id="home" class="main">
        <v-container>
            <v-row>
                <v-col cols='12 py-0 px-sm-4 px-md-0'>
                    <section class="home_main_wrap">
                        <div class="home_main_content">
                            <h2>Hello<br>Welcome to my blog</h2>
                            <p>Sending useful information centered on programming</p>
                            <v-btn to='/about' x-large outlined tile class="home_about_btn">About Me</v-btn>
                        </div>
                        <div class="guide_blog_wrap text-center">
                            <p class="mb-0">My Articles</p>
                            <v-btn
                                text
                                class="mb-5"
                                @click="$vuetify.goTo('.home_articles_wrap', { easing: 'easeInOutCubic', duration: 600 })"
                            >
                                <v-icon>mdi-chevron-down</v-icon>
                            </v-btn>
                        </div>
                    </section>
                </v-col>
            </v-row>

            <v-row class="home_articles_wrap">
                <v-col cols='12' sm='4' v-for='article in articleList' :key='article.id'>
                    <v-card tile class="my-5">
                        <v-img :src='article.thumbnail' height='200'></v-img>
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
                </v-col>
            </v-row>
        </v-container>

        <transition name="fade">
            <v-btn
                v-scroll='onScroll'
                v-show='fab'
                fixed
                bottom
                right
                icon
                x-large
                color='blue-grey darken-1'
                @click='$vuetify.goTo(0)'
            >
            <v-icon>mdi-chevron-up</v-icon>
            </v-btn>
        </transition>
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
        fab: false,
    }),
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
    },
    computed: {
        ...mapGetters([
            'articleList',
            'latestArticleList',
        ]),
    },
    methods: {
        ...mapActions([
            'updateArticles',
            'updateLatestArticles',
        ]),
        onScroll (e) {
            if (typeof window === 'undefined') return
            const top = window.pageYOffset || e.target.scrollTop || 0
            this.fab = top > 850
        }
    },
}
</script>

<style lang="scss">
    #home {
        .home_main_wrap {
            position: relative;
            display: flex;
            min-height: calc(100vh - (#{$header} + 12px));

            .home_main_content {
                align-self: center;

            }

            .guide_blog_wrap {
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
            }
        }

        .article_list_btn_wrap {
            justify-content: center;
            align-items: center;
        }
        .fade-enter-active, .fade-leave-active {
            transition: 0.5s;
        }
        .fade-enter, .fade-leave-to {
            opacity: 0;
            transform: scale(0);
        }
    }
</style>
