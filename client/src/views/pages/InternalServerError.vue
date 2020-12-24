<template>
    <div id="error_500" class="main d-flex justify-center align-center">
        <h1>500 Internal Server Error</h1>
    </div>
</template>

<script>
export default {
    name: 'Internal Server Error',
    data: () => ({
    }),
    created () {
    }
}
</script>

<style lang="scss" scoped>
	h1 {
		@include r-line-blink;
	}
</style>
