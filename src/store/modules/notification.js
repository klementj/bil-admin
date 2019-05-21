export const namespaced = true

export const state = {
  message: '',
  color: ''
}

export const mutations = {
  SET_NOTIFICATION(state, {message, color}) {
    state.message = message
    state.color = color
  }
}

export const actions = {
  notify({ commit }, payload) { 
    commit('SET_NOTIFICATION', payload)
  },
  reset({commit}) {
    commit('SET_NOTIFICATION', {message: '', color: ''})
  }
}