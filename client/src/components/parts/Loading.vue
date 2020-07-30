<template>
    <vue-loading
        type="spiningDubbles"
        :size='{ width: "40px", height: "40px" }'
    ></vue-loading>
</template>

<script>
import { VueLoading } from 'vue-loading-template'

export default {
    name: 'Loading',
    components: {
        VueLoading,
    },
}
</script>

<style lang='scss'>
</style>
