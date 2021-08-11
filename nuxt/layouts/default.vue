<template>
    <v-app>
        <Header />
        <Nuxt />
        <Footer />
    </v-app>
</template>

<script>
    import Header from '@/components/common/Header.vue'
    import Footer from '@/components/common/Footer.vue'

    import { mapActions } from 'vuex'
    export default {
        components: {
            Header,
            Footer
        },
        // こっちではasyncDataは使えない
        // layout or componentsディレクトリ下では、asyncDataとfetchは使えないらしい
        // 使用する為には、mountedでAPIを叩く(これはSSRとして実行されない)か、
        // propsで渡してあげる必要がある
        // asyncData (ctx) {
        	// console.log('defalut test')
        	// console.log('CTX', ctx)
        	// const { data } = await ctx.$axios.get('http://localhost:8000/api/article/recent_articles/')
        	// console.log('Data', data)
        	// return { test: 'test' }
        // },
        // fetchはthisが使えるらしいので、ctxを受け取る必要はない？
        // Nuxtのfetchには、引数にcontext有(推奨)と無(非推奨)のfetchが存在する
        // context無の場合は、createdの後に実行されるために、thisでVueインスタンスを取得できる
        // また、context無の場合は、layoutやcomponentsディレクトリ下でも使用可能になる
        // fetch () {
        	// console.log('default fetch!!')
        	// console.log('default this:', this)
        // },
        // async fetch () {
        // 	// console.log(this)
        // 	console.log('テスト')
        // 	// console.log('Axios:', this)
        // 	// await this.updateRecentArticles()
        // 	const { data } = await this.$axios.get('http://localhost:8000/api/article/recent_articles/')
        // 	console.log('最新記事：', data)
        // 	// await this.updateCategoryies()
        // },
        data () {
            return {
                clipped: false,
                drawer: false,
                fixed: false,
                items: [
                    {
                        icon: 'mdi-apps',
                        title: 'Welcome',
                        to: '/'
                    },
                    {
                        icon: 'mdi-chart-bubble',
                        title: 'Inspire',
                        to: '/inspire'
                    }
                ],
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'Vuetify.js'
            }
        },
        created () {
        	// this.updateRecentArticles()
        	// this.updateCategoryies()
        },
        methods: {
        	...mapActions([
        		'updateRecentArticles',
        		'updateCategories',
        	])
        }
    }
</script>

<style lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s
    }
    .fade-enter, .fade-leave-to {
        opacity: 0
    }
</style>
