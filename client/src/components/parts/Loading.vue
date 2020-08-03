<template>
	<div ref="content" id='loading' class="vs-con-loading__container" />
</template>

<script>
export default {
    name: 'Loading',
    mounted () {
		this.$vs.loading({
			target: this.$refs.content,
			type: 'gradient',
            color: '#333',
            text: 'Search Now...',
			scale: 0.8,
		})
    },
    methods: {
    }
}
</script>

<style lang='scss'>
#loading {
	width: 200px;
	height: 100px;
	margin: auto;
    position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
