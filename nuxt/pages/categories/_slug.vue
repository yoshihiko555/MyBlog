<template>
  <div>
    <div v-if="category">
      <h1 class="page-title">{{ category.name }}</h1>
      <div v-if="articles">
        <article-list :articles="articles"/>
        <p>pagenation</p>
        <categories />
        <tags />
      </div>
      <div v-else>
        <p class="mb-20 text-center text-xl">記事がありません</p>
        <categories />
        <tags />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, useContext, useMeta } from '@nuxtjs/composition-api'
import { useResult } from '@vue/apollo-composable'
import { useGetArticleByCategoryQuery } from '~/generated/graphql'
import ArticleList from '~/components/molecules/article-list.vue'
import Categories from '~/components/organisms/categories.vue'
import Tags from '~/components/organisms/tags.vue'
export default defineComponent({
  components: {
    ArticleList,
    Categories,
    Tags,
  },
  head: {},
  setup () {
    const { route, $config, error } = useContext()
    const { result, onResult } = useGetArticleByCategoryQuery({ slug: route.value.params.slug })
    const category = useResult(result, null, data => data?.categoriesCollection?.items[0])
    const articles = useResult(result, [], data => data?.categoriesCollection?.items[0]?.linkedFrom?.articlesCollection?.items)

    onResult(res => {
      if (!res.data.categoriesCollection?.items.length)
        error({ statusCode: 404 })
      else
        setHead()
    })

    // **********************
    // Headタグ設定
    // **********************
    const { title, meta } = useMeta()
    const setHead = () => {
      const _title = category.value?.name || 'Category'
      const _content = `${_title}の記事一覧です。`
      title.value = _title
      meta.value = [
        { hid: 'description', name: 'description', content: _content },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:title', property: 'og:title', content: `${_title} | Yoshihiko` },
        { hid: 'og:description', property: 'og:description', content: _content },
        { hid: 'og:url', property: 'og:url', content: `${$config.origin}${route.value.path}` },
        { hid: 'twitter:title', property: 'twitter:title', content: `${_title} | Yoshihiko` },
        { hid: 'twitter:description', property: 'twitter:description', content: _content },
      ]
    }

    return {
      category,
      articles,
    }
  }
})
</script>

<style lang='scss' scoped>

</style>
