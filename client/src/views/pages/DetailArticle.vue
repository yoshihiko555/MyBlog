<template>
    <div id="detail" class="main">
        <v-container v-show='isShow'>
            <v-row>
                <v-col cols='12' sm='3' class="d-none d-sm-block sidebar_wrap">
                    <Sidebar/>
                </v-col>

                <v-col cols='12' sm='8' offset-md='1'>
                    <v-card
                        tile
                        flat
                        id="detail_article_wrap"
                        class="mb-5"
                    >
                        <v-btn
                            depressed
                            :to='{ name: "SearchResult", query: { category: article.category_name }}'
                        >
                            {{ article.category_name }}
                        </v-btn>
                        <v-card-subtitle class="text-center">
                            {{ article.created_at }}
                        </v-card-subtitle>

                        <v-card-title class="justify-center">
                            {{ article.title }}
                        </v-card-title>
                        <v-img :src='article.thumbnail' :alt='article.title' height=500></v-img>
                        <div id='toc_wrap' class='my-8 mx-4 pa-4' v-show='isToc'>
                            <h4 id="toc_title" class="text-center mb-4 pb-2">Contents</h4>
                            <nav
                                id='toc'
                                ref='toc'
                                @click='toScroll'
                            />
                        </div>

                        <v-card-text id='article_main' ref='main' v-html='article.conversion_content'/>

                    </v-card>

                    <AroundArticles
                    	:previous='article.previous'
                    	:next='article.next'
                    />

                    <RelatedArticles
                    	:articles='article.related_articles'
                    />

                    <Comment
                        :comments='article.comments'
                        :is-comment='isComment'
                    />
                    <SendComment
                        :article='article'
                    />
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
import Sidebar from '@/components/common/Sidebar'
import RelatedArticles from '@/components/parts/RelatedArticles'
import AroundArticles from '@/components/parts/AroundArticles'
import Comment from '@/components/common/Comment'
import SendComment from '@/components/parts/SendComment'

import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'DetailArticle',
    components: {
        Sidebar,
        RelatedArticles,
        AroundArticles,
        Comment,
        SendComment,
    },
    data: () => ({
        article: {},
        isShow: false,
        isComment: false,
        isToc: false,
        fab: false,
    }),
    created () {
        this.getArticle(this.$route.params.title)
    },
    beforeRouteUpdate (to, from, next) {
        if (to.params.title !== from.params.title) this.getArticle(to.params.title)
        next()
    },
    computed: {
        ...mapGetters([
            'detailArticle',
        ])
    },
    methods: {
        ...mapActions([
            'updateDetailArticle',
        ]),
        getArticle (title) {
            this.$axios({
                url: `/api/article/${title}/`,
                method: 'GET'
            })
            .then(res => {
                console.log('記事詳細', res)
                this.article = res.data
                this.updateDetailArticle(res.data)

                // コメントが存在するか判定
                this.isComment = (res.data.comments.length) ? true : false

                // Ttile & Description設定
                this.setTitle(res.data.title)
                this.setDescription(res.data.lead_text)

                // 目次関連の処理
                this.$nextTick(() => this.moveToc())

                this.isShow = true
            })
            .catch(e => {
                console.log(e)
                this.isShow = false
            })
        },
        moveToc () {
            this.isToc = false
            this.$refs.toc.innerHTML = ''
            const innerToc = this.$refs.main.querySelector('div.toc')
            if (innerToc !== null) {
                // 目次があれば処理する
                const cloneToc = innerToc.cloneNode(true)
                this.$refs.toc.appendChild(cloneToc)
                this.isToc = true
            }
        },
        onScroll (e) {
            if (typeof window === 'undefined') return
            const top = window.pageYOffset || e.target.scrollTop || 0
            this.fab = top > 850
        },
        toScroll (e) {
            this.$vuetify.goTo(e.target.hash)
        }
    },
}
</script>

<style lang="scss" scoped>
    #detail::v-deep {
        .sidebar_wrap {
            padding-bottom: 20px;
            height: calc(100vh - #{($header + $footer)});
            overflow-y: scroll;
            scrollbar-width: none;
            position: sticky;
            top: $header;
            &::-webkit-scrollbar {
                display: none;
            }
        }
        #toc_wrap {
            background-color: #f1f1f1;
            #toc_title {
                font-size: 24px;
                border-bottom: solid 0.5px #bbb;
            }
            #toc {
                ul {
                    list-style: none;

                    li {
                        a {
                            color: #555;
                            text-decoration: none;
                        }
                    }
                }
            }
        }
        #article_main {
            .toc {
                display: none;
            }
            img {
                width: 100%;
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
