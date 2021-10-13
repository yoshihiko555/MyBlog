<template>
  <div>
    <h1 class='page-title'>Blog</h1>
    <article-list :articles="articles" />
    <p class="mb-20 text-center">pagenation</p>
    <categories />
    <tags />
  </div>
</template>

<script lang='ts'>
/**
 * TODO : ページネーション
 */
import { defineComponent, useMeta } from '@nuxtjs/composition-api'
import { useGetArticlesQuery } from '~/generated/graphql'
import { useResult } from '@vue/apollo-composable'

import ArticleList from '~/components/molecules/article-list.vue'
import Categories from '~/components/organisms/categories.vue'
import Tags from '~/components/organisms/tags.vue'

export default defineComponent({
  components: {
    ArticleList,
    Categories,
    Tags,
  },
  head: {
    title: 'Blog',
    meta: [],
  },
  setup () {
    const { result } = useGetArticlesQuery()
    const articles = useResult(result, [], data => data?.articlesCollection?.items)
    return {
      articles
    }
  }
})
</script>

<style lang='scss' scoped>

</style>
