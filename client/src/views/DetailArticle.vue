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
                    >
                        <v-img :src='article.thumbnail'></v-img>
                        <v-card-title>
                            {{ article.title }}
                        </v-card-title>

                        <v-card-subtitle>{{ article.created_at }}</v-card-subtitle>

                        <v-card-text>
                            {{ article.content }}
                        </v-card-text>

                    </v-card>

                    <Comment/>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Sidebar from '@/components/common/Sidebar'
import Comment from '@/components/common/Comment'

import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'DetailArticle',
    components: {
        Sidebar,
        Comment,
    },
    data: () => ({
        article: {},
    }),
    created () {
        const id = this.$route.params.id || this.detailArticle.id
        this.$axios({
            url: `/api/article/${id}/`,
            method: 'GET'
        })
        .then(res => {
            console.log('記事詳細', res)
            res.data.created_at = res.data.created_at.substr(0, 10).replace(/-/g, '/')
            this.article = res.data
            this.setTitle(res.data.title)
            this.updateDetailArticle(res.data)
        })
        .catch(e => {
            console.log(e)
        })
    },
    beforeRouteUpdate (to, form, next) {
        this.$axios({
            url: `/api/article/${to.params.id}/`,
            method: 'GET'
        })
        .then(res => {
            console.log('記事詳細', res)
            res.data.created_at = res.data.created_at.substr(0, 10).replace(/-/g, '/')
            this.article = res.data
            this.setTitle(res.data.title)
            this.updateDetailArticle(res.data)
        })
        .catch(e => {
            console.log(e)
        })
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
        ])
    },
}
</script>

<style lang="scss">
</style>
