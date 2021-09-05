<template>
  <div>
    Varification
    <div v-for="a in articles" :key="a.sys.id">
      {{ a.sys.id }}
      {{ a.title }}
      {{ a.category.name }}
    </div>
  </div>
</template>

<script>
import articles from '~/graphql/queries/articles.gql'
export default {
  data: () => ({
    articles: null,
  }),
  apollo: {
    articles: {
      prefetch: true,
      query: articles,
      update: (data) => {
        console.log(data.articlesCollection.items)
        return data.articlesCollection.items
      }
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
