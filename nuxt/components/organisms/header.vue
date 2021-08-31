<template>
  <div class='p-1'>
    <h1>Header</h1>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
interface Data {
  name?: string
  isAuth: boolean
  drawer: boolean
}
export default Vue.extend({
  data: (): Data => ({
    isAuth: false,
    drawer: false,
  }),
  watch: {

  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  methods: {

  },
})
</script>

<style lang="scss" scoped>
  .link {
    color: #333;
    text-decoration: none;
    position: relative;
    transition: .3s;

    &::after {
      position: absolute;
      bottom: 0;
      left: 2%;
      content: '';
      width: 0;
      height: 1px;
      background-color: #333;
      transition: .3s;
    }

    &:hover::after {
      width: 100%;
    }
  }
  .v-toolbar::v-deep .v-toolbar__content {
    justify-content: space-between;
  }
</style>
