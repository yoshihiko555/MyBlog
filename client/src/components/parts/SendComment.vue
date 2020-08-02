<template>
    <v-card id="send_comment_wrap">
        <v-card-title>コメントを送信する</v-card-title>
        <v-form v-model="valid" ref="form">
            <v-text-field
                v-model="comment.name"
                placeholder='Name'
                :rules='[rules.required]'
            />
            <v-textarea
                v-model="comment.content"
                placeholder='Content'
                :rules='[rules.required]'
            />
            <v-btn
                :disabled='!valid'
                @click="sendComment"
            >
                Submit
            </v-btn>
        </v-form>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'SendComment',
    props: {
        article: {
            type: Object,
            required: true,
        }
    },
    data: () => ({
        valid: true,
        comment: {
            name: '',
            content: '',
        },
        rules: {
            required: v => !!v || '必須項目です',
        }
    }),
    methods: {
        ...mapActions([
            'addCommentDetailArticle',
        ]),
        sendComment () {
            this.comment.article = this.article.id
            this.$axios({
                url: 'api/comment/',
                method: 'POST',
                data: this.comment
            })
            .then(res => {
                console.log('コメント送信', res)
                this.$refs.form.reset()
                this.comment = {
                    name: '',
                    title: '',
                    content: '',
                }
                // this.addCommentDetailArticle(res.data)
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
