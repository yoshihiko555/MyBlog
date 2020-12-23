<template>
    <div id='home_bg'>
   		<v-btn @click='hide = !hide'>show</v-btn>
    	<transition appear  @before-enter='beforeEnter' @after-enter='afterEnter'>
    		<h1 data-delay='0' v-if='hide'>back ground</h1>
   		</transition>

    	<transition appear @before-enter='beforeEnter' @after-enter='afterEnter'>
    		<h1 data-delay='100' v-if='hide'>back ground</h1>
   		</transition>
    </div>
</template>

<script>
export default {
    data: () => ({
    	hide: true,
    }),
    methods: {
    	beforeEnter (el) {
    		const msec = el.dataset.delay
    		el.style.transitionDelay = `${msec}ms`
    	},
    	afterEnter (el) {
    		el.style.transitionDelay = ''
    	}
    }
}
</script>

<style lang="scss" scoped>
	#home_bg {
	    position: fixed;
	    top: 0;
	    left: 0;
	    width: 100vw;
	    height: 100vh;
	    display: flex;
	    justify-content: center;
	    align-items: center;
		opacity: .3;
        pointer-events: none;
	}

	.v-enter-active, .v-leave-active {
		transition: all .5s ease-in-out;
	}

	.v-enter {
		opacity: 0;
		transform: translateY(-20px);
	}

	.v-leave-to {
		opacity: 0;
		transform: translateY(-20px) scale(0.97);
	}
</style>
