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
                    text
                    class='mr-3'
                    @click='create'
                >投稿</v-btn>

                <CreateCategory/>
            </v-form>
        </v-container>
    </div>
</template>

<script>
import CreateCategory from '@/components/parts/CreateCategory'
export default {
    name: 'CreateArticle',
    components: {
    	CreateCategory,
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
        create () {
            console.log('投稿')
            console.log(this.article)
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
                console.log(e.response)
            })
        }
    }
}
</script>

<style lang="scss">

</style>
