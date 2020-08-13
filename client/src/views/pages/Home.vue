<template>
    <div id="home" class="main">
        <v-container>
        	<!-- メインコンテンツ -->
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

			<!-- 記事一覧 -->
            <v-row class="home_articles_wrap">
                <v-col cols='12' sm='4' v-for='article in recentArticleList' :key='article.id'>
                    <v-card tile class="my-5" height=410>
                        <v-img :src='article.thumbnail' :alt='article.title' height='200'></v-img>
                        <v-card-title>{{ article.title }}</v-card-title>

                        <v-card-text class="home_lead_text">{{ article.lead_text | truncate(60)}}</v-card-text>

                        <v-card-actions class="home_article_btn_wrap pa-5">
                            <v-btn
                                outlined
                                tile
                                color='blue-grey darken-1'
                                :to='{ name: "DetailArticle", params: { title: article.title }}'
                            >
                                ReadMore
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <!-- TOPへのボタン -->
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

export default {
    name: 'Home',
    components: {
        Sidebar,
    },
    data: () => ({
        fab: false,
    }),
    computed: {
        ...mapGetters([
            'recentArticleList',
        ]),
    },
    methods: {
        onScroll (e) {
            if (typeof window === 'undefined') return
            const top = window.pageYOffset || e.target.scrollTop || 0
            this.fab = top > 850
        },
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

        .home_articles_wrap {
            .home_lead_text {
                min-height: 60px;
            }

            .home_article_btn_wrap {
                justify-content: center;
                align-items: center;
            }
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
