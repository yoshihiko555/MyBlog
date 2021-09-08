import { Store } from 'vuex'
import { initialiseStores } from '~/utils/store-accessor'
const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export * from '~/utils/store-accessor'
// import { GetterTree, ActionTree, MutationTree } from 'vuex'
// import { Articles } from 'generated/graphql'
// export const state = () => ({
//   recentArticles: new Array<Articles>(),
//   hoge: 0 as number
// })

// export type RootState = ReturnType<typeof state>

// export const getters: GetterTree<RootState, RootState> = {
//   recentArticles: state => state.recentArticles,
//   hoge: state => state.hoge,
// }

// export const mutations: MutationTree<RootState> = {
//   setRecentArticles: (state, payload: Articles[]) => state.recentArticles = payload,
//   setHoge: (state, payload: number) => state.hoge = payload,
// }

// export const actions: ActionTree<RootState, RootState> = {
//   async nuxtServerInit ({ commit, dispatch }) {
//     console.log('nuxtServerInit State!')
//     commit('setHoge', 1)
//   }
// }
