<template>
    <div id='sidebar_wrap'>
        <h1 class="sidebar_logo">Yoshihiko</h1>

        <v-img src='@/static/img/pithuy.jpeg'></v-img>

        <p>This is my personal blog where I share a lot of stuffs about life and work everything I do in between.</p>

        <div class="sns_wrap">
            <v-btn icon href='https://twitter.com/yoshihiko5555' target='blank'><v-icon>mdi-twitter</v-icon></v-btn>
            <v-btn icon href='https://www.instagram.com/yoshihiko.style/?hl=ja' target='blank'><v-icon>mdi-instagram</v-icon></v-btn>
            <v-btn icon href='https://github.com/shutotakizawa' target='blank'><v-icon>mdi-github</v-icon></v-btn>
            <v-btn icon href='https://www.linkedin.com/in/shuto-takizawa-a269b116b/' target='blank'><v-icon>mdi-linkedin</v-icon></v-btn>
        </div>

        <v-divider></v-divider>

        <div class="recent_wrap">
            <h2>Recent Articles</h2>
            <div
                v-for='article in latestArticleList'
                :key='article.id'
                class="recent_article_wrap"
            >
                <v-img :src='article.thumbnail' class="recent_thumbnail"></v-img>
                <h2 class="text-subtitle-1 recent_title">{{ article.title }}</h2>
                <p class="recent_create">{{ article.created_at }}</p>
                <v-divider></v-divider>
            </div>

        </div>

        <div class="categorys_wrap">
            <h2>Categorys</h2>
            <v-chip-group
                column
            >
                <v-chip
                    v-for="category in categoryList"
                    :key="category.id"
                    label
                    outlined
                >
                    {{ category.name }}
                </v-chip>
            </v-chip-group>

            <v-divider></v-divider>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Sidebar',

    data: () => ({

    }),
    computed: {
        ...mapGetters([
            'latestArticleList',
            'categoryList',
        ])
    },
    methods: {
        ...mapActions([
            'updateCategorys',
        ])
    },
    created () {
        this.$axios({
            url: '/api/category/',
            method: 'GET',
        })
        .then(res => {
            console.log(res)
            this.updateCategorys(res.data)
        })
        .catch(e => {
            console.log(e)
        })
    }
}
</script>

<style lang="scss">
    #sidebar_wrap {

        .recent_article_wrap {
            position: relative;
            height: 80px;
            margin-bottom: 5%;

            .recent_thumbnail {
                width: 40%;
                height: 100%;
                display: inline-block;
            }

            .recent_title {
                display: inline-block;
                position: absolute;
                top: 0;
                margin-left: 3%;
            }

            .recent_create {
                display: inline-block;
                position: absolute;
                top: 30%;
                margin-left: 3%;
            }
        }
    }
</style>
