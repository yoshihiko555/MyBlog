<template>
  <div>
    <vs-navbar>
      <template #left>
        <nuxt-link to='/'>
          <img src='~/assets/img/logo.svg' alt="logo" width="30" height="30" />
        </nuxt-link>
      </template>
      <template #right>
        <div>
          <nuxt-link class='link' to='/about'>About</nuxt-link>
          <nuxt-link class='link' to='/blog'>Blog</nuxt-link>
          <nuxt-link class='link' to='/works'>Works</nuxt-link>
          <nuxt-link class='link' to='/contact'>Contact</nuxt-link>
        </div>
        <div class="sm:hidden">
          <vs-button @click='isOpen = !isOpen' icon transparent color="#333333">
            <i class='bx bx-menu' />
          </vs-button>
        </div>
      </template>
    </vs-navbar>
    <vs-sidebar
      v-model="active"
      :open.sync="isOpen"
      right
    >
      <vs-sidebar-item
        v-for="site in sites"
        :key="site.id"
        :id="site.id"
        :to="site.url"
      >
        {{ site.title }}
      </vs-sidebar-item>
    </vs-sidebar>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import Sidebar from '~/components/organisms/sidebar.vue'
import { SITE_MAPS, SiteType } from '~/utils/const'
export default defineComponent({
  components: {
    Sidebar,
  },
  setup () {
    const active = ref<string>('home')
    const isOpen = ref<boolean>(false)
    const sites = ref<SiteType[]>(SITE_MAPS)
    return {
      active,
      isOpen,
      sites,
    }
  }
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
</style>
