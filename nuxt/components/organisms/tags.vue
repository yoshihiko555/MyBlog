<template>
  <div class="mx-auto mb-10 md:mb-20 max-w-6xl grid grid-cols-12">
    <h2 class="mb-2 col-span-12 sm:col-span-4 lg:col-span-2 text-2xl">Tags</h2>
    <div class="col-span-12 sm:col-span-8 lg:col-span-10">
      <span
        v-for="tag in tags"
        :key="tag.sys.id"
        class="tag"
        @click="$router.push('/')"
      >
        #{{ tag.name }}
      </span>
    </div>
  </div>
</template>

<script lang='ts'>
/**
 * TODO : タグで絞り込んだページへの遷移
 */
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { tagsModule } from '~/utils/store-accessor'
export default defineComponent({
  setup () {
    const tags = computed(() => tagsModule.tags)
    return {
      tags
    }
  }
})
</script>

<style lang="scss" scoped>
  .tag {
    @apply inline-block px-3 py-2 m-1 text-xs text-gray-500 border border-gray-300 rounded-2xl transition-colors ease-in-out cursor-pointer hover:bg-gray-100;
  }
</style>
