<template>
  <v-app>
        <Header/>
            <router-view/>
        <Footer/>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',

  components: {
    // HelloWorld,
    Header,
    Footer,

  },

  data: () => ({
    //
  })
}
</script>
