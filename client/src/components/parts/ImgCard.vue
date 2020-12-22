<template>
	<div>
		<slot name='img' />
		<p><slot name='title'>Title</slot></p>
		<p><slot name='description'>Description</slot></p>
	</div>
</template>

<script>
export default {
    data: () => ({
    }),
    methods: {
    }
}
</script>

<style lang="scss" scoped>
</style>
