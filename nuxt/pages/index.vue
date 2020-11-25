<template>
    <div id='sample' class="main">
        <h1>Sample</h1>
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
  created () {
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
