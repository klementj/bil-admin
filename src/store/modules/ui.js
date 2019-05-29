export const namespaced = true

export const state = {
  drawer: null
}

export const mutations = {
  // Toogle navigation drawer
  SET_DRAWER(state, bool) {
    state.drawer = bool
  }
}