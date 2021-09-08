<template>
  <div>
    <h1 class="mb-5">composition-graphql</h1>

    <h2>AllArticles</h2>
    <div class="mb-5" v-for="article in allArticles" :key="article.sys.id">
      <small>{{ article.sys.id }}</small>
      <p>{{ article.title }}</p>
      <div v-html="$md.render(article.content)"></div>
    </div>

    <h2>OnceArticle</h2>
    <small>{{ onceArticle.sys.id }}</small>
    <p>{{ onceArticle.title }}</p>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api'
import { useQuery, useResult } from '@vue/apollo-composable'
import { GetArticlesDocument, AppInitDocument } from '~/generated/graphql'
export default defineComponent({
  setup () {
    // 記事情報をすべて取得する
    const { result: res1 } = useQuery(GetArticlesDocument)
    const allArticles = useResult(res1, [], data => data?.articlesCollection?.items)
    // 記事情報を１件取得する
    const { result: res2 } = useQuery(AppInitDocument, { limit: 1 })
    const onceArticle = useResult(res2, [], (data) => data?.articlesCollection?.items[0])
    return { allArticles, onceArticle }
  }
})
</script>
