<template>
    <div id='sample' class="main">
        <h1>Sample</h1>
        <p>count:{{ test }}</p>
        <button @click='up'>UP</button>
        <button @click='fetch'>FETCH</button>
        <p>{{ text | truncate(10) }}</p>
    </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
import { mapActions } from 'vuex'
import { sample } from '@/middleware/local'

export default {
  middleware: ['local', sample],
  components: {
    // Logo,
    // VuetifyLogo
  },
  data: () => ({
      text: '01234567890123456789'
  }),
  computed: {
      test () {
          return this.$store.state.sample
      }
  },
  created () {
    //   console.log(this.$store.getters)
    this.updateRecentArticles()
  },
  methods: {
      ...mapActions(['updateRecentArticles']),
      up () {
          this.$store.commit('upSample')
      },
      fetch () {
        this.$axios({
            url: '/api/article/recent_articles/',
            method: 'GET'
        })
        .then(res => {
            console.log(res)
        })
        .catch(e => {
            console.log(e.response)
        })
      }
  }
}
</script>

<style lang='scss' scoped>
    #sample {
        margin-top: $header;
        background-color: #fff;

        h1 {
            font-size: 22px;
        }
    }
</style>
