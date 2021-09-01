<template>
  <div class="container px-4">
    <Header />
    <transition name='fade'>
      <Nuxt class="main" />
    </transition>
    <Footer />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Header from '~/components/organisms/header.vue'
import Footer from '~/components/organisms/footer.vue'

export default Vue.extend({
  components: {
    Header,
    Footer,
  },
  transition: {
    name: 'fade'
  }
})
</script>

<style lang="scss" scoped>
  @include animation($tran-name: 'fade', $anime-name: ('fade'))
</style>
