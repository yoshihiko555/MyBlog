import Vue from 'vue'
import { Logger } from '~/plugins/utils'

declare module 'vue/types/vue' {
  interface Vue {
    $truncate: (value: string, max: number, suffix?: string ) => string
  }
}

declare module '@nuxt/types' {
  interface Context {
    $truncate: (value: string, max: number, suffix?: string ) => string
    $log: Logger
  }
}

declare module 'vuex' {
  interface Store<S> {
    readonly $log: Logger
  }
}
