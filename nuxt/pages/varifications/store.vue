<template>
  <div>
    <h1>Store</h1>
    <button @click.prevent='click'>click</button>
    <div class="mb-5" v-for="sample in samples" :key="sample.id">
      <p>{{ sample.id }}</p>
      <p>{{ sample.name }}</p>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { sampleStore } from '~/utils/store-accessor'
export default defineComponent({
  setup () {
    console.log('vue sampleStore:', sampleStore)
    const samples = computed(() => sampleStore.samples)
    console.log('samples:', samples)
    const click = () => {
      console.log('click')
      const newSample = { id: 1, name: 'hoge' }
      sampleStore.add(newSample)
    }
    return {
      samples,
      click,
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
