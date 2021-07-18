<template>
	<v-dialog
		v-model='dialog'
		width=300
		@click:outside='clear'
	>
		<v-card
			class='pa-3'
		>
			<v-card-title>カテゴリー編集</v-card-title>

			<v-text-field
				v-model='category.name'
				placeholder='Category Name'
			/>
			<v-card-actions>
				<v-spacer />
				<v-btn
					@click='update'
				>
                    更新
                </v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import { mapActions } from 'vuex'
import _ from 'lodash'

export default {
    name: 'CreateCategory',
    data: () => ({
        dialog: false,
        category: {},
    }),
    methods: {
        ...mapActions([
            'updateCategory',
        ]),
        showEdit (category) {
            this.category = _.cloneDeep(category)
            this.dialog = true
        },
        update () {
            this.updateCategory(this.category)
            this.clear()
            // this.$axios({
            //     url: `/api/category/${this.category.id}/`,
            //     method: 'PUT',
            //     data: {
            //     	name: this.category.name,
            //     }
            // })
            // .then(res => {
            //     console.log(res)
            //     // this.$store.commit('addCategoryies', res.data)
            //     this.clear()
            // })
            // .catch(e => {
            //     console.log(e.response)
            // })
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
