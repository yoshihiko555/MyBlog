<template>
	<v-dialog
		v-model='dialog'
		width=300
	>
		<template #activator='{ on }'>
			<v-btn
				class='mr-3'
				v-on='on'
			>
				画像アップロード
			</v-btn>
		</template>

		<v-card
			class='pa-3'
		>
			<v-card-title>画像アップロード</v-card-title>

            <div v-show='isShow'>
                <v-img
                    :src='previewSrc'
                />
                <v-btn
                    icon
                    class='delete_image_btn grey darken-3 ma-2'
                    @click='clear'
                >
                    <v-icon color='white'>mdi-close</v-icon>
                </v-btn>
            </div>
            <v-file-input
                hide-input
                class='ml-2'
                ref='input'
                accept="image/*"
                prepend-icon="mdi-image"
                @change='inputFile'
            />

			<v-card-actions>
				<v-spacer />
				<v-btn
					@click='upload'
				>
                    Upload
                </v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
const reader = new FileReader()

export default {
    name: 'UploadImage',
    data: () => ({
        dialog: false,
        file: null,
        isShow: false,
        previewSrc: '',
    }),
    methods: {
        inputFile (e) {
            reader.readAsDataURL(e)
            reader.onload = e => {
                this.previewSrc = e.target.result
            }
            this.file = e
            this.isShow = true
        },
        clear () {
            this.file = null
            this.previewSrc = ''
            this.$refs.input.lazyValue = ''
            this.isShow = false
        },
        upload () {
            const data = new FormData()
            data.append('file', this.file)
            this.$axios({
                url: '/api/image/',
                method: 'POST',
                data: data,
            })
            .then(res => {
                console.log(res)
                this.dialog = false
                this.clear()
                this.$emit('upload', res.data)
            })
            .catch(e => {
                console.log(e)
            })
        },
    }
}
</script>

<style lang="scss">
</style>
