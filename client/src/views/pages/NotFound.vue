<template>
    <div id="error_404" class="main d-flex justify-center align-center">
        <h1>404 Not Found</h1>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
    data: () => ({
    }),
    created () {
    }
}
</script>

<style lang="scss" scoped>
	h1 {
		@include _r-line-blink;
	}
</style>
