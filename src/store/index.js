import { createStore } from 'vuex'

const store = createStore({
    state: {
        app: true,
        web: true,
        card: true,
    },
    mutations: {
        allFilter(state) {
            ;(state.app = true), (state.web = true), (state.card = true)
        },
        appFilter(state) {
            ;(state.app = true), (state.web = null), (state.card = null)
        },
        webFilter(state) {
            ;(state.web = true), (state.app = null), (state.card = null)
        },
        cardFilter(state) {
            ;(state.card = true), (state.app = null), (state.web = null)
        },
    },
})

export default store
