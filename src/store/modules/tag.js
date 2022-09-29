export default {
    namespace: true,
    state: {
        isCollapse: false,
    },
    mutations: {
        COLLAPSEMENU(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}