<template>
    <div id="detail" class="main">
        <v-container>
            <v-row>
                <v-col cols='12' sm='4'>
                    <Sidebar/>
                </v-col>

                <v-col cols='12' sm='8'>
                    <v-card
                        tile
                        id="detail_article_wrap"
                        class="mb-5"
                    >
                        <v-img :src='article.thumbnail' height=400></v-img>
                        <v-card-title>
                            {{ article.title }}
                        </v-card-title>

                        <v-card-subtitle>{{ article.created_at }}</v-card-subtitle>

                        <v-card-text>
                            {{ article.content }}
                        </v-card-text>

                    </v-card>

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
import Comment from '@/components/common/Comment'
import SendComment from '@/components/parts/SendComment'

import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'DetailArticle',
    components: {
        Sidebar,
        Comment,
        SendComment,
    },
    data: () => ({
        article: {},
        isComment: false,
    }),
    created () {
        const id = this.$route.params.id || this.detailArticle.id
        this.getArticle(id)
    },
    beforeRouteUpdate (to, form, next) {
        this.getArticle(to.params.id)
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
        getArticle (id) {
            this.$axios({
                url: `/api/article/${id}/`,
                method: 'GET'
            })
            .then(res => {
                console.log('記事詳細', res)
                res.data.created_at = res.data.created_at.substr(0, 10).replace(/-/g, '/')
                this.article = res.data
                // コメントが存在するか判定
                this.isComment = (res.data.comment.length) ? true : false
                this.setTitle(res.data.title)
                this.updateDetailArticle(res.data)
            })
            .catch(e => {
                console.log(e)
            })
        }
    },
}
</script>

<style lang="scss">
</style>
