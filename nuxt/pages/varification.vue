<template>
  <div>
    Varification
    <child />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api'
import Child from '~/components/varification/child.vue'
export default defineComponent({
  components: { Child },
  setup () {
    return {

    }
  }
})
</script>

<style lang='scss' scoped>

</style>
