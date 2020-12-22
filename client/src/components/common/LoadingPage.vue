<template>
    <div id='loading_view'>
        <h1>Now Loading...</h1>
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

<style lang="scss">
	#loading_view {
		width: 100%;
	    height: 100%;
	    position: fixed;
	    top: 0;
	    left: 0;
	    display: flex;
	    justify-content: center;
	    align-items: center;
    }
</style>
