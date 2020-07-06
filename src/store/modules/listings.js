export default {
  state: {
    listings: [],
    location: {
      city: '',
      state: '',
      zip: null,
      latLng: [0, 0]
    }
  },
  mutations: {
    setListings(state, payload) {
      state.listings = payload
    }
  },
  actions: {
    setListings({ commit }, payload) {
      commit('setListings', payload)
    }
  },
  getters: {
    listings(state) {
      return state.listings
    }
  },
  namespaced: true,
}