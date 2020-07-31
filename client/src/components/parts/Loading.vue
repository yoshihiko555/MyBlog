<template>
	<div ref="content" id='loading' class="vs-con-loading__container" />
</template>

<script>
export default {
    name: 'Loading',
    mounted () {
		this.$vs.loading({
			container: this.$refs.content,
			type: 'border',
			color: '#333',
			scale: 0.6,
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
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
