<template>
    <div id='sample' class="main">
        <h1>Sample</h1>
        <p>count:{{ test }}</p>
        <button @click='up'>UP</button>
        <button @click='fetch'>FETCH</button>
    </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    // Logo,
    // VuetifyLogo
  },
  computed: {
      test () {
          return this.$store.getters.test
      }
  },
  created () {
    //   console.log(this.$store.getters)
  },
  methods: {
      up () {
          this.$store.commit('up')
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
            console.log(e)
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
