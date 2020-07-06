export default {
  state: {
    userId: 0,
    firstName: '',
    lastName: '',
    favorites: [],
    defaultSearchLocation: {
      city: null,
      latLng: []
    },
    savedSearches: [],
    userAuthenticated: false
  },
  mutations: {
    setUserData(state, payload) {
      state = Object.assign(state,payload)
    },
    updateFavorites(state, payload) {
      state.favorites = payload
    },
    updateSavedSearches(state, payload) {
      state.savedSearches = payload
    },
    userAuthenticated(state, payload){
      state.userAuthenticated = payload
    },
  },
  actions: {
    setUserData({ commit }, payload){
      commit('setUserData', payload)
    },
    setFavorites({ commit }, payload) {
      /*
        Once api is ready, have an ajax call patching new favorites for user
        if successful, run commit
        if error, alert user that favorite did not save
      */
      commit('updateFavorites', payload)
    },
    setSavedSearches({ commit, state }, payload) {
      /*
        Once api is ready, have an ajax call patching new saved searches for user
        if successful, run commit
        if error, alert user that search did not save
      */
      const newSearch = {
        id: state.savedSearches.length,
        query: payload
      }
      commit('updateSavedSearches', [...state.savedSearches, newSearch])
    },
    userAuthenticated({ commit }, payload){
      commit('userAuthenticated', payload)
    }
  },
  getters: {
    userId(state) {
      return state.userId
    },
    userName(state) {
      return {
        firstName: state.firstName,
        lastName: state.lastName
      }
    },
    defaultSearchLocation(state) {
      return state.defaultSearchLocation
    },
    getSavedSearches(state) {
      return state.savedSearches
    },
    favorites(state) {
      return state.favorites
    },
    userAuthenticated(state) {
      return state.userAuthenticated
    }
  },
  namespaced: true,
}