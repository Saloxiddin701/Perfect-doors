export default {
    namespaced: true,

    state: {
        windowWidth: 0
    },
    getters: {
        GET_WINDOW_WIDTH: state => state.windowWidth
    },
    mutations: {
        SET_WW(state, size) {
            state.windowWidth = size
        }
    },
    actions: {
        CHANGE_WINDOW_WIDTH({commit}, size) {
            commit('SET_WW', size)
        }
    }
}