<template>
    <div id='sidebar_wrap'>
        <!-- プロフィール部分 -->
        <h1 class="sidebar_logo mb-2">Yoshihiko</h1>
        <v-img src='@/static/img/pithuy.jpeg' alt='Acount Profile' class="mb-5"></v-img>
        <p>This is my personal blog where I share a lot of stuffs about life and work everything I do in between.</p>

		<!-- SNS系ボタン -->
        <div class="sns_wrap mb-5">
            <v-btn icon href='https://twitter.com/yoshihiko5555' target='blank'><v-icon>mdi-twitter</v-icon></v-btn>
            <v-btn icon href='https://www.instagram.com/yoshihiko.style/?hl=ja' target='blank'><v-icon>mdi-instagram</v-icon></v-btn>
            <v-btn icon href='https://github.com/shutotakizawa' target='blank'><v-icon>mdi-github</v-icon></v-btn>
            <v-btn icon href='https://www.linkedin.com/in/shuto-takizawa-a269b116b/' target='blank'><v-icon>mdi-linkedin</v-icon></v-btn>
        </div>

        <v-divider/>

        <!-- 最新記事一覧 -->
        <div class="recent_wrap my-3">
            <h2 class="recent_title mb-2">Recent Articles</h2>
            <div
                v-for='article in recentArticleList'
                :key='article.id'
                class="recent_article_wrap"
            >
                <router-link
                    :to='{ name: "DetailArticle", params: { title: article.title }}'
                >
                    <v-img
                        :src='article.thumbnail'
                        class="recent_thumbnail"
                        :alt='article.title'
                    ></v-img>
                    <h2 class="text-subtitle-1 recent_title">{{ article.title | truncate(14) }}</h2>
                    <p class="recent_create">{{ article.created_at }}</p>
                </router-link>
                <v-divider/>
            </div>

        </div>

        <!-- カテゴリー一覧 -->
        <div class="categorys_wrap mt-5">
            <h2 class="category_title mb-2">Categorys</h2>
            <v-chip-group
                column
            >
                <v-chip
                    v-for="category in categoryList"
                    :key="category.id"
                    label
                    outlined
                    @click='filterCategory(category)'
                >
                    {{ category.name }}
                </v-chip>
            </v-chip-group>

            <v-divider/>
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
            'recentArticleList',
            'categoryList',
        ])
    },
    methods: {
        ...mapActions([
            'updateSearchText',
            'updateSearchResult',
        ]),
        filterCategory (category) {
            // this.updateSearchText(category.name)
            this.$router.push({
                name: 'SearchResult',
                query: {
                    category: category.name
                }
            })
            // this.$axios({
            //     url: '/api/article/',
            //     method: 'GET',
            //     params: {
            //         category: category.id
            //     }
            // })
            // .then(res => {
            //     console.log(res)
            //     this.updateSearchResult(res.data)
            //     this.$router.push({
            //         name: 'SearchResult'
            //     })
            // })
            // .catch(e => {
            //     console.log(e)
            // })
        },
    },

}
</script>

<style lang="scss">
    #sidebar_wrap {
        .sns_wrap {
            margin-bottom: 0%;
        }

        .recent_wrap {

            .recent_title {
                font-family: 'Inconsolata', monospace;
                font-weight: 500;
            }

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
                    color: #333;
                    display: inline-block;
                    position: absolute;
                    top: 0;
                    margin-left: 3%;
                    font-size: 0.8em !important;
                }

                .recent_create {
                    color: #333;
                    display: inline-block;
                    position: absolute;
                    // top: 30%;
                    bottom: 0;
                    margin-bottom: 0;
                    margin-left: 3%;
                    font-size: 0.8em;
                }
            }
        }

        .categorys_wrap {
            .category_title {
                font-family: 'Inconsolata', monospace;
                font-weight: 500;
            }
        }
    }
</style>
