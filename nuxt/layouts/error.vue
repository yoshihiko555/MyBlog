<template>
    <div class="main error_page">
        <h1 v-if="error.statusCode === 404">{{ pageNotFound }}</h1>
        <h1 v-else>{{ otherError }}</h1>
    </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style lang='scss' coped>
    .error_page {
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            padding-right: 15px;
            animation: type .5s alternate infinite;
        }
    }

    @keyframes type {
        from{box-shadow: inset -3px 0px 0px #333;}
        to{box-shadow: inset -3px 0px 0px transparent;}
    }
</style>
