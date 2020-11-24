<template>
	<v-dialog
		v-model='dialog'
	>
		<template #activator='{ on }'>
			<v-btn
				class='mr-3'
				v-on='on'
			>
				画像選択
			</v-btn>
		</template>
            <v-card
                class='pa-3'
            >
                <v-container>
                    <v-card-title>画像選択</v-card-title>
                    <v-row>
                        <v-col v-for='img in images' :key='img.id' cols='4'>
                            <v-img
                                :src='img.file'
                                :alt='img.file_name'
                                @click="select(img)"
                            />
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
	</v-dialog>
</template>

<script>
export default {
    name: 'SelectImage',
    data: () => ({
        dialog: false,
        images: [],
    }),
    created () {
        this.$axios({
            url: '/api/image/',
            method: 'GET',
        })
        .then(res => {
            console.log(res)
            this.images = res.data
        })
        .catch(e => {
            console.log(e)
        })
    },
    methods: {
        select (image) {
            this.$emit('select', image)
            this.dialog = false
        }
    }
}
</script>

<style lang="scss">

</style>
