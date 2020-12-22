<template>
	<div>
		<p>sample three</p>
		<canvas id='canvas' width='600' height='400' />
	</div>
</template>

<script>
import * as three from 'three'
export default {
    data () {
    	const scene = new three.Scene()
    	const renderer = null
    	const camera =  new three.PerspectiveCamera(75, 600 / 400, 0.1, 1000)
    	const light =  new three.DirectionalLight(0xffffff)
    	const geometry = new three.BoxGeometry(1, 1, 1)
    	const material = new three.MeshNormalMaterial()
    	const cube =  new three.Mesh(geometry, material)
    	return { scene, renderer, camera, light, geometry, material, cube }
    },
    mounted () {
    	const $canvas = document.getElementById('canvas')
    	this.renderer = new three.WebGLRenderer({
    		antialias: true,
    		canvas: $canvas
    	})
    	this.camera.position.set(0, 0, 2)
    	this.light.position.set(0, 0, 10)
    	this.scene.add(this.cube)
    	this.scene.add(this.light)

    	this.animate()
    },
    methods: {
    	animate () {
			requestAnimationFrame(this.animate)

			this.cube.rotation.x += 0.02
			this.cube.rotation.y += 0.02

			this.renderer.render(this.scene, this.camera)
    	}
    }
}
</script>

<style lang="scss" scoped>
</style>
