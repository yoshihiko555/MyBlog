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
				カテゴリー作成
			</v-btn>
		</template>

		<v-card
			class='pa-3'
		>
			<v-card-title>カテゴリー作成</v-card-title>

			<v-text-field
				v-model='category'
				placeholder='Category Name'
			/>
			<v-card-actions>
				<v-spacer/>
				<v-btn
					@click='create'
				>作成</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
    name: 'CreateCategory',
    data: () => ({
    	dialog: false,
    	category: '',
    }),
    methods: {
        create () {
            this.$axios({
                url: '/api/category/',
                method: 'POST',
                data: {
                	name: this.category,
                }
            })
            .then(res => {
                console.log(res)
                this.clear()
                this.$emit('createCategory', res.data)
            })
            .catch(e => {
                console.log(e.response)
            })
        },
        clear () {
        	this.dialog = false
        	this.category = ''
        }
    }
}
</script>

<style lang="scss">

</style>
