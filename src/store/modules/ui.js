export const namespaced = true

export const state = {
  drawer: null,
  isDark: null
}

export const mutations = {
  // Toogle navigation drawer
  SET_DRAWER(state, bool) {
    state.drawer = bool
  },
  // Toggle dark color theme 
  SET_COLOR_THEME(state, bool) {
    state.isDark = bool
    localStorage.setItem('darkTheme', bool)
  }
}
