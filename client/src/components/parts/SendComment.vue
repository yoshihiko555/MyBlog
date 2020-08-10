<template>
	<v-container>
        <v-card
            id="send_comment_wrap"
            flat
        >
            <v-card-title>コメントを送信する</v-card-title>

            <v-card-actions>
                <v-form v-model="valid" ref="form" id='send_comment_form'>
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
                        class='float-right'
                        :disabled='!valid'
                        @click="sendComment"
                    >
                        Submit
                    </v-btn>
                </v-form>
            </v-card-actions>
        </v-card>
    </v-container>
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
                    content: '',
                }
                this.$vs.notification({
                    color: 'dark',
                    classNotification: 'send_comment_notify',
                    title: 'コメントを送信しました。',
                    text: '承認されるまでしばらくお待ちください。',
                })
            })
            .catch(e => {
                console.log(e)
            })
        }
    }
}
</script>

<style lang="scss">
	#send_comment_form {
		width: 100%;
	}
    .send_comment_notify{
        h4, p {
            color: #fff !important;
        }
    }
</style>
