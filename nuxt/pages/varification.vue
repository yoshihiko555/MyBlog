<template>
  <div>
    Varification
    <div v-for="article in articles" :key="article.sys.id">
      {{ article.sys.id }}
      {{ article.title }}
      {{ article.category.name }}
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api'
import { useQuery, useResult } from '@vue/apollo-composable'
import { GetArticlesDocument } from '~/generated/graphql'
// import query from '~/graphql/queries/articles.gql'
export default defineComponent({
  setup () {
    const { result } = useQuery(GetArticlesDocument)
    const articles = useResult(result, [], (data) => data?.articlesCollection?.items)

    return { articles }
  }
  // data: () => ({
  //   articles: null,
  // }),
  // apollo: {
  //   articles: {
  //     prefetch: true,
  //     query: articles,
  //     update: (data) => {
  //       console.log(data.articlesCollection.items)
  //       return data.articlesCollection.items
  //     }
  //   }
  // }
})
</script>
