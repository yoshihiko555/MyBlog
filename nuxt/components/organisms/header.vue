<template>
  <div>
    <vs-navbar>
      <template #left>
        <nuxt-link to='/'>
          <img src='~/assets/img/logo.svg' alt="logo" width="30" height="30" />
        </nuxt-link>
      </template>
      <template #right>
        <div class='hidden sm:inline-block'>
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
import { defineComponent, ref, Ref } from '@nuxtjs/composition-api'
import Sidebar from '~/components/organisms/sidebar.vue'
import { SITE_MAPS, SiteType } from '~/utils/const'

type Data = {
  active: Ref<string>
  isOpen: Ref<boolean>
  sites: SiteType[]
}

export default defineComponent({
  components: {
    Sidebar,
  },
  setup (): Data {
    const active = ref<string>('home')
    const isOpen = ref<boolean>(false)
    return {
      active,
      isOpen,
      sites: SITE_MAPS,
    }
  }
})
</script>

<style lang="scss" scoped>
  .link {
    @apply mx-1 px-1;
    position: relative;
    transition: .3s;

    &::after {
      @apply absolute left-0 w-0 bg-gray-600 duration-300;
      content: '';
      height: 1.2px;
      bottom: -4px;
    }

    &:hover::after {
      width: 100%;
    }
  }
</style>
