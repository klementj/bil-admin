export const namespaced = true

export const state = {
  drawer: null,
  toolbarTitle: ''
}

export const mutations = {
  // Toogle navigation drawer
  SET_DRAWER(state, bool) {
    state.drawer = bool
  },

  // Setting title on toolbar
  SET_TOOLBAR_TITLE(state, title) {
    state.toolbarTitle = title
  }
}