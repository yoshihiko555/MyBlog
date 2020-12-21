<template>
	<div v-if='loading' class="loading-page">
        <div>
            <p>loading...</p>
            <p>ローディングのパーセント：{{ sample }}</p>
        </div>
	</div>
</template>

<script>
	export default {
		data: () => ({
			loading: false
		}),
		computed: {
			sample () {
				return this.$nuxt.$loading.$percent
			}
		},
		methods: {
			start () {
				console.log('loading Start')
				this.loading = true
			},
			finish () {
				console.log('loading End')
				this.loading = false
			},
			increase (num) {
				console.log(num)
			}
		}
	}
</script>

<style lang='scss' scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(117 221 244);
    font-size: 30px;
    font-family: sans-serif;
    z-index: 100;

		div {
	        position: absolute;
		    top: 50%;
		    left: 50%;
		    transform: translate(-50%, -50%);
		}
	}
</style>
