<template>
	<div>
		<input type='range' v-model='speed' min='0.00' max='0.1' step='0.005'/>{{ speed }}
		<canvas ref='canvas' id='canvas' width='600' height='400' />
	</div>
</template>

<script>
import * as Three from 'three'
export default {
    data () {
    	// 描画領域
    	const renderer = null
    	// 3D空間の定義
    	const scene = new Three.Scene()
    	// どの視点から撮影するか定義
    	const camera =  new Three.PerspectiveCamera(75, 600 / 400, 0.1, 1000) // 引数：画角・アスペクト比・描画開始距離・描画終了距離

    	// ******************
    	// 立方体の作成
    	// ******************
    	// 立方体はメッシュという表示オブジェクトを使用して作成する
    	// メッシュを作成するにはジオメトリ(形状)とマテリアル(素材)の2種類を用意する

    	// ジオメトリの作成
    	// 頂点情報や面情報などを保持している。
    	const geometry = new Three.BoxGeometry(1, 1, 1) // 引数：幅・高さ・奥行き
    	// マテリアルの作成
    	// 色や質感の情報を保持している
    	const material = new Three.MeshNormalMaterial()
    	// メッシュに作成したジオメトリとマテリアルを追加
    	const cube =  new Three.Mesh(geometry, material)
    	// ライトを定義
    	const light =  new Three.DirectionalLight(0xFFFFFF)

    	return {
    		scene,
    		renderer,
    		camera,
    		light,
    		geometry,
    		material,
    		cube,
    		speed: 0.02,
    	}
    },
    mounted () {
    	const $canvas = this.$refs.canvas
    	// 描画領域の確保
    	this.renderer = new Three.WebGLRenderer({
    		antialias: true,
    		canvas: $canvas
    	})

    	// 描画領域のリサイズ
    	// this.renderer.setSize(300, 540)

    	this.camera.position.set(0, 0, 2)
    	this.light.position.set(1, 1, 1)
    	// シーンに作成したメッシュを追加
    	this.scene.add(this.cube)
    	this.scene.add(this.light)

    	this.animate()
    },
    methods: {
    	animate () {
    		// 引数で渡した関数をマイフレーム実行する
    		// 今回は再帰的に実行している
			requestAnimationFrame(this.animate)

    		// 回転する処理
			this.cube.rotation.x += Number(this.speed)
			this.cube.rotation.y += Number(this.speed)

			// レンダリング処理
			this.renderer.render(this.scene, this.camera)
    	}
    }
}
</script>

<style lang="scss" scoped>
</style>
