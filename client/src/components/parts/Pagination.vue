<template>
	<v-pagination
		v-model='pagination.current_page'
		:page='pagination.current_page'
		:length='pagination.total_pages'
		total-visible=5
		@input='sample'
		@previous='previous'
		@next='next'
	/>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Paginarion',
    props: {
    	pagination: {
    		required: true,
    	}
    },
    mounted () {
    },
    methods: {
        ...mapActions([
            'updateSearchResult',
        ]),
    	sample (i) {
    		console.log(i)
    	},
    	previous () {
    		console.log('previous')
    		this.$axios({
    			url: this.pagination.links.previous,
    			method: 'GET'
    		})
    		.then(res => {
    			console.log(res)
    			this.updateSearchResult(res.data.results)
    		})
    		.catch(e => {
    			console.log(e)
    		})
    	},
    	next () {
    		console.log('next')
    		this.$axios({
    			url: this.pagination.links.next,
    			method: 'GET'
    		})
    		.then(res => {
    			console.log(res)
    			this.updateSearchResult(res.data.results)
    		})
    		.catch(e => {
    			console.log(e)
    		})
    	}
    }
}
</script>

<style lang='scss'>
</style>
