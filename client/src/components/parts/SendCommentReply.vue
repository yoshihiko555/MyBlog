<template>
	<v-dialog
		v-model='dialog'
		width=300
		@click:outside='clear'
	>
		<template #activator='{ on }'>
			<v-btn
				class='mr-3'
				v-on='on'
			>
				返信
			</v-btn>
		</template>

		<v-card
			class='pa-3'
		>
			<v-card-title>コメントに返信する</v-card-title>

			<v-text-field
				v-model='reply.name'
				placeholder='Name'
			/>
			<v-text-field
				v-model='reply.content'
				placeholder='Content'
			/>
			<v-card-actions>
				<v-spacer/>
				<v-btn
					@click='send'
				>作成</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'SendCommentReply',
    props: {
        comment: {
            type: Object,
            required: true,
        }
    },
    data: () => ({
        dialog: false,
        reply: {},
    }),
    methods: {
        send () {
            this.reply.comment = this.comment.id
            this.$axios({
                url: '/api/reply/',
                method: 'POST',
                data: this.reply,
            })
            .then(res => {
                console.log(res)
                this.clear()
                this.$emit('add-comment', res.data)
            })
            .catch(e => {
                console.log(e)
            })
        },
        clear () {
        	this.dialog = false
        	this.reply = {}
        }
    }
}
</script>

<style lang="scss">
</style>
