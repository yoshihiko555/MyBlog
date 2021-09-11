<template>
  <div class="container max-w-3xl">
    <div v-if="article">
      <h3 v-if="article.category">{{ article.category.name }}</h3>
      <div v-if="tags">
        <div v-for="(tag, i) in tags" :key="tag === null ? i :tag.name">
          <small v-if="tag">{{ tag.name }}</small>
        </div>
      </div>
      <h1>{{ article.title }}</h1>
      <nuxt-img v-if="article.thumbnail" :src='article.thumbnail.url' :alt='article.thumbnail.description'/>
      <div v-html="$md.render(article.content)" />
    </div>
  </div>
</template>

<script lang='ts'>
/**
 * TODO
 * - 目次
 * - 公開日・更新日
 * - デザイン
 * - 404ページへの遷移
 */
import { defineComponent, useContext } from '@nuxtjs/composition-api'
import { useResult } from '@vue/apollo-composable'
import { Articles, Tags, useGetArticleBySlugQuery } from '~/generated/graphql'
export default defineComponent({
  setup () {
    const { route } = useContext()
    const { result } = useGetArticleBySlugQuery({ slug: route.value.params.slug })
    const article = useResult(result, null, data => data?.articlesCollection?.items[0])
    const tags = useResult(result, [], data => data?.articlesCollection?.items[0]?.tagsCollection?.items)
    return {
      article,
      tags
    }
  }
})
</script>

<style lang='scss' scoped>

</style>
