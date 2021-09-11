<template>
  <div class="mx-auto mb-10 sm:mb-20 max-w-6xl grid grid-cols-12">
    <h2 class="mb-2 col-span-12 sm:col-span-4 lg:col-span-2 text-2xl">Categories</h2>
    <div class="col-span-12 sm:col-span-8 lg:col-span-10">
      <vs-button
        v-for="category in categories"
        :key="category.sys.id"
        class="category"
      >
        {{ category.name }}
      </vs-button>
    </div>
  </div>
</template>

<script lang='ts'>
/**
 * TODO : カテゴリーで絞り込んだページへの遷移
 */
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { categoriesModule } from '~/utils/store-accessor'
export default defineComponent({
  setup () {
    const categories = computed(() => categoriesModule.categories)
    return {
      categories
    }
  }
})
</script>

<style lang="scss" scoped>
  .category {
    @apply inline-block;
  }
</style>
