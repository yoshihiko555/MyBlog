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

                        <v-divider></v-divider>

                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Sidebar from '@/components/common/Sidebar'

export default {
    name: 'DetailArticle',
    components: {
        Sidebar,
    },
    data: () => ({
        article: {},
    }),
    created () {
        this.$axios({
            url: `/api/article/${this.$route.params.id}/`,
            method: 'GET'
        })
        .then(res => {
            console.log(res)
            res.data.created_at = res.data.created_at.substr(0, 10).replace(/-/g, '/')
            console.log(res)
            this.article = res.data
            console.log(this.article)
        })
        .catch(e => {
            console.log(e)
        })
    }
}
</script>

<style lang="scss">
</style>
