<template>
    <div id="create" class="main">
        <v-container>
            <v-row>
                <h1>記事作成</h1>
            </v-row>

            <v-form>
                <v-text-field
                    v-model='article.title'
                ></v-text-field>

                <v-textarea
                    v-model='article.content'
                ></v-textarea>

                <v-select
                    v-model="article.category"
                    :items="categorys"
                    item-text='name'
                    item-value='id'
                    filled
                ></v-select>

                <v-btn
                    text
                    @click='create'
                >投稿</v-btn>
            </v-form>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'CreateArticle',

    data: () => ({
        article: {},
        categorys: [],
    }),
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
