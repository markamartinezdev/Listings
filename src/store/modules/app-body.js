export default {
  state: {
    appBodyheight: 0,
  },
  mutations: {
    setAppBodyHeight(state, payload) {
      state.appBodyheight = payload
    }
  },
  actions: {
    setAppBodyHeight({commit}, payload) {
      commit('setAppBodyHeight', payload)
    }
  },
  getters: {
    appBodyHeight(state) {
      return state.appBodyheight
    }
  },
  namespaced: true,
}