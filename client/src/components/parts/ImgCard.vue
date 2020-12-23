<template>
	<div class='card-wrap'>
		<a :href='url' target='blank' class='card-img'><slot name='img' /></a>
		<div>
			<p class='card-title'><slot name='title'>Title</slot></p>
			<p class='card-desc'><slot name='description'>Description</slot></p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		url: {
			type: String,
			default: '/works',
		}
	},
    data: () => ({
    }),
    methods: {
    }
}
</script>

<style lang="scss" scoped>
	.card-wrap {
		position: relative;

		.card-img {
			opacity: 1;
			transition: all .2s;

			&:hover {
				opacity: .5;
			}
		}

	}
</style>
