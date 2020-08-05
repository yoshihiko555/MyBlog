<template>
    <div id="detail" class="main">
        <v-container v-show='isShow'>
            <v-row>
                <v-col cols='12' sm='4'>
                    <Sidebar/>
                </v-col>

                <v-col cols='12' sm='8'>
                    <v-card
                        tile
                        flat
                        id="detail_article_wrap"
                        class="mb-5"
                    >
                        <v-img :src='article.thumbnail' :alt='article.title' height=400></v-img>
                        <v-card-title>
                            {{ article.title }}
                        </v-card-title>

                        <v-card-subtitle>{{ article.created_at }}</v-card-subtitle>

                        <v-card-text id='article_main' v-html='article.conversion_content'/>

                    </v-card>

                    <AroundArticles
                    	:previous='article.previous'
                    	:next='article.next'
                    />

                    <RelatedArticles
                    	:articles='article.related_articles'
                    />

                    <Comment
                        :comments='article.comment'
                        :is-comment='isComment'
                    />
                    <SendComment
                        :article='article'
                    />
                </v-col>
            </v-row>
        </v-container>
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
    }),
    created () {
        this.getArticle(this.$route.params.title)
    },
    beforeRouteUpdate (to, form, next) {
        this.getArticle(to.params.title)
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
                res.data.created_at = res.data.created_at.substr(0, 10).replace(/-/g, '/')
                this.article = res.data
                this.isShow = true
                // コメントが存在するか判定
                this.isComment = (res.data.comment.length) ? true : false
                this.setTitle(res.data.title)
                this.updateDetailArticle(res.data)
            })
            .catch(e => {
                console.log(e)
                this.isShow = false
            })
        }
    },
}
</script>

<style lang="scss">
</style>
