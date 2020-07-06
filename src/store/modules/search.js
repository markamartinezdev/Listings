export default {
  state: {
    query: '',
    savedSearches: []
  },
  mutations: {
    setQuery(state, payload) {
      state.query = payload
    },
  },
  actions: {
    setQuery({ commit }, payload) {
      commit('setQuery', payload)
    },
  },
  getters: {
    query(state) {
      return state.query
    },
  },
  namespaced: true,
}