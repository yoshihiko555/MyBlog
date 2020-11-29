<template>
    <div id="comment_list_wrap" class="main">
        <v-container v-show='isAuth'>
            <v-row>
                <h1>コメント一覧</h1>
            </v-row>
            <div v-if="comments.length > 0">
            <v-row v-for="comment in comments" :key='comment.id'>
                <v-col cols='8'>
                    <Nuxt-link
                        :to='{ name: "DetailArticle", params: { title: comment.article_title }}'
                    >
                        <p>Article: {{ comment.article_title }}</p>
                    </Nuxt-link>
                    <p>Name: {{ comment.name }}</p>
                    <p>Content: {{ comment.content }}</p>
                </v-col>

                <v-col cols='4'>
                    <v-btn class='mx-2' @click="approval(comment)">
                        Approval
                    </v-btn>
                    <v-btn class='mx-2' @click="deleteComment(comment)">
                        Delete
                    </v-btn>
                </v-col>
            </v-row>
            </div>
            <div v-else>
                <p>コメントがありません</p>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'CommentList',

    data: () => ({
        isAuth: false,
        comments: [],
    }),
    created () {
        if (!this.$session.has('token')) {
            this.$router.push('/admin/signin')
        } else {
            this.isAuth = this.$session.has('token')
            this.getComments()
        }
    },
    methods: {
        getComments () {
            this.$axios({
                url: '/api/comment/',
                method: 'GET',
            })
            .then(res => {
                console.log('コメント一覧', res)
                this.comments = res.data
            })
            .catch(e => {
                console.log(e)
            })
        },
        approval (comment) {
            this.$axios({
                url: `/api/comment/${comment.id}/approval/`,
                method: 'PUT',
            })
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.log(e)
            })
        },
        deleteComment (comment) {
            this.$axios({
                url: `/api/comment/${comment.id}/delete/`,
                method: 'PUT',
            })
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.log(e)
            })
        }
    }
}
</script>

<style lang="scss">

</style>
