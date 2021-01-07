<template>
  <v-app>
        <div v-if="initFlg">
            <Header/>
                <transition name='top-fade' mode="out-in">
                    <router-view/>
                </transition>
            <Footer/>
        </div>
        <LoadingPage v-else/>
  </v-app>
</template>

<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import LoadingPage from '@/components/common/LoadingPage'

import { mapGetters } from 'vuex'
import luxy from 'luxy.js'

export default {
    name: 'App',

    components: {
        Header,
        Footer,
        LoadingPage,
    },
    data: () => ({
    }),
    mounted () {
        // スムーススクロールを実装するための記述
        // ただし、Vuetifyのスムーススクロールと相性が悪いみたいで、
        // スクロールの矢印ボタンを押下すると、微妙にボタンが見切れた位置で止まってしまう。。。
        // luxy.init({
        //     wrapper: '#app'
        // })
    },
    computed: {
    	...mapGetters([
    		'initFlg',
    	])
    }
}
</script>

<style lang="scss">
	@include vue-animation($tran-name: 'top-fade', $anime-name: ('fade'));
</style>
