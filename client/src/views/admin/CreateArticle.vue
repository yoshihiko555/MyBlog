<template>
    <div id="create_article_wrap" class="main">
        <v-container v-show="isAuth">
            <v-row>
                <h1>記事作成</h1>
            </v-row>

            <v-form>
                <v-text-field
                    v-model='article.title'
                    placeholder='title'
                    counter=255
                ></v-text-field>

                <v-textarea
                    v-model='article.lead_text'
                    placeholder='lead_text'
                    counter=60
                ></v-textarea>

                <mavon-editor v-model="article.content" language="en" />

                <v-select
                    v-model="article.category"
                    :items="categorys"
                    item-text='name'
                    item-value='id'
                    filled
                ></v-select>

                <v-btn
                    class='mr-3'
                    @click='create(true)'
                >投稿</v-btn>

                <v-btn
                    class='mr-3'
                    @click='create(false)'
                >下書き</v-btn>

                <CreateCategory
                    @createCategory='addCategory'
                />

                <UploadImage/>
            </v-form>
        </v-container>
    </div>
</template>

<script>
import CreateCategory from '@/components/parts/CreateCategory'
import UploadImage from '@/components/parts/UploadImage'

export default {
    name: 'CreateArticle',
    components: {
        CreateCategory,
        UploadImage,
    },
    data: () => ({
        isAuth: false,
        article: {},
        categorys: [],
    }),
    created () {
        if (!this.$session.has('token')) this.$router.push('/admin/signin')
        else this.isAuth = this.$session.has('token')
    },
    mounted () {
        this.$axios({
            url: '/api/category/',
            method: 'GET',
        })
        .then(res => {
            console.log(res)
            this.categorys = res.data
        })
        .catch(e => {
            console.log(e)
        })
    },
    methods: {
        create (flg) {
            console.log('投稿')
            console.log(this.article)
            this.article.is_public = flg
            this.$axios({
                url: '/api/article/',
                method: 'POST',
                data: this.article,
            })
            .then(res => {
                console.log(res)
                this.article = {}
                this.$router.push('/')
            })
            .catch(e => {
                console.log(e)
            })
        },
        addCategory (category) {
            this.categorys.push(category)
        },
    }
}
</script>

<style lang="scss" scoped>
    .v-note-wrapper {
        z-index: inherit !important;
    }
</style>