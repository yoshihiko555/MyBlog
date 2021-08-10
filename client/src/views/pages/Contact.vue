<template>
    <v-container class="main">
		<v-row>
			<v-col cols='12'>
				<h1>Contact</h1>
				<p>当サイトへのご質問などのお問い合わせはフォームよりどうぞ</p>
				<v-card
					class="pa-3"
				>
					<v-form v-model="valid">
						<v-text-field
							v-model="contact.name"
							placeholder='Name'
							:rules="rules.name"
							counter=100
						/>
						<v-text-field
							v-model="contact.email"
							placeholder='Your Email'
							:rules="rules.email"
						/>
						<v-text-field
							v-model="contact.title"
							placeholder='Title'
							:rules="rules.title"
							counter=100
						/>
						<v-textarea
							v-model="contact.content"
							placeholder='Content'
							:rules="rules.content"
						/>
					</v-form>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn
							:disabled='!valid'
							color='blue-grey lighten-1'
							@click="sendContact"
						>
							<v-icon left>mdi-send</v-icon>Send Form
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { metaInfo } from '@/mixins'

export default {
	mixins: [metaInfo],
    data: () => ({
        valid: false,
        contact: {
            name: '',
            email: '',
            title: '',
            content: '',
        },
        rules: {
            name: [
                v => !!v || '必須項目です',
                v => (v && v.length <= 100) || '100文字以内で入力してください',
            ],
            email: [
                v => !!v || '必須項目です',
                v => /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(v) || 'メールアドレスの形式で入力してください'
            ],
            title: [
                v => !!v || '必須項目です',
                v => (v && v.length <= 100) || '100文字以内で入力してください',
            ],
            content: [
                v => !!v || '必須項目です',
            ],
        }
    }),
    methods: {
        sendContact () {
            const loading = this.$vs.loading({
                type: 'border',
                text: 'Send Form Now...',
            })
            this.$axios({
                url: '/api/contact/',
                method: 'POST',
                data: this.contact,
            })
            .then(res => {
                console.log(res)
                this.contact = {
                            name: '',
                            email: '',
                            title: '',
                            content: '',
                        }
                loading.close()
                this.$router.push('/contact_complete')
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
