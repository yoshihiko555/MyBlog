<template>
  <div class="home">
      <v-container>
          <v-row v-for='article in articleList' :key='article.id'>
              {{ article.title }}
              {{ article.content }}
          </v-row>
      </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Home',
    components: {
    },
    data: () => ({
        articleList: [],
    }),
    mounted () {
        axios({
            url: 'http://localhost:8000/api/article/',
            method: 'GET',
        })
        .then(res => {
            console.log(res)
            this.articleList = res.data
        })
        .catch(e => {
            console.log(e)
        })
    }
}
</script>
