<template>
	<v-container>
		<v-row>
			<v-col cols='6' class='text-start'>
				<h3>前の記事</h3>
				<div v-if='previous'>
                    <v-card
                        link
                        tile
                        flat
                        :to='{ name: "post-title", params: { title: previous.title }}'
                    >
						<v-img :src='previous.thumbnail_url' :alt='previous.title' />
						<p>{{ previous.title }}</p>
                    </v-card>
				</div>
				<div v-else>
					<p>記事無し</p>
				</div>
			</v-col>

			<v-col cols='6' class='text-end'>
				<h3>次の記事</h3>
				<div v-if='next'>
                    <v-card
                        link
                        flat
                        tile
                        :to='{ name: "post-title", params: { title: next.title }}'
                    >
						<v-img :src='next.thumbnail_url' :alt='next.title' />
						<p>{{ next.title }}</p>
                    </v-card>
				</div>
				<div v-else>
					<p>記事無し</p>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
    name: 'AroundArticles',
    props: {
    	previous: {
            type: Object,
    	},
    	next: {
            type: Object,
    	}
    },
    data: () => ({
    }),
    created () {
    },
    mounted () {
    },
    methods: {
    }
}
</script>

<style lang="scss">

</style>
