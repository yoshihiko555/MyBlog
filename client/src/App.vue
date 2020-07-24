<template>
  <v-app>
        <Header/>
            <transition name='fade'>
                <router-view/>
            </transition>
        <Footer/>
  </v-app>
</template>

<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

export default {
    name: 'App',

    components: {
        Header,
        Footer,
    },

    data: () => ({

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
