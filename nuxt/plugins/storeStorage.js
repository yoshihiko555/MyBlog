import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
    createPersistedState({
        paths: ['sample'],
    })(store)
}
