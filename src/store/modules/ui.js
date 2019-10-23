import Vuetify from '@/plugins/vuetify'

export const namespaced = true

export const state = {
  drawer: null,
  isDark: null,
  modalVisible: false,
  modalComponent: null
}

export const mutations = {
  // Toogle navigation drawer
  SET_DRAWER(state, bool) {
    state.drawer = bool
  },
  // Toggle dark color theme 
  SET_COLOR_THEME(state, bool) {
    state.isDark = bool
    Vuetify.framework.theme.dark = bool
    localStorage.setItem('darkTheme', bool)
  },

  showModal( state, componentName){
    state.modalVisible = true
    state.modalComponent = componentName
  },
  hideModal(state){
    state.modalVisible = false
  }
}
