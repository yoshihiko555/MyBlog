<template>
  <v-app>
        <div v-if="!loading">
            <Header/>
                <transition name='fade'>
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

export default {
    name: 'App',

    components: {
        Header,
        Footer,
        LoadingPage,
    },

    data: () => ({
        loading: true
    })
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
