<template>
	<v-container>
		<v-row>
			<v-col cols='6' class='text-start'>
				<h3>前の記事</h3>
				<div v-if='previous'>
					<router-link
						:to='{ name: "DetailArticle", params: { title: previous.title }}'
					>
						<v-img :src='previous.thumbnail_url' :alt='previous.title' height='200'/>
						{{ previous.title }}
					</router-link>
				</div>
				<div v-else>
					<p>記事無し</p>
				</div>
			</v-col>

			<v-col cols='6' class='text-end'>
				<h3>次の記事</h3>
				<div v-if='next'>
					<router-link
						:to='{ name: "DetailArticle", params: { title: next.title }}'
					>
						<v-img :src='next.thumbnail_url' :alt='next.title' height='200'/>
						{{ next.title }}
					</router-link>
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
    		type: Object
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
