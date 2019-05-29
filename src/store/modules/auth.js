import router from '@/router.js'
import AuthService from '@/services/auth.service.js'

const authService = new AuthService()

export const namespaced = true

export const state = {
  apiToken: null,
  signedIn: false
}

export const mutations = {
  AUTHENTICATE_USER(state, token) {
    state.apiToken = token
    state.signedIn = true
    router.push({ name: 'home'})
    localStorage.setItem('token', token)
  },

  CLEAR_AUTH_DATA(state) {
    state.apiToken = null
    state.signedIn = false
  }
}

export const actions = {
  // signup({ commit, dispatch }, payload){ ... }
  
  login({ commit, dispatch }, payload) {
    authService.login(payload)
      .then(response => {
        const token = response.data.data
        authService.setAxiosAuthHeaders(token)
        commit('AUTHENTICATE_USER', token)
        dispatch('user/fetchCurrentUser', null, {root: true})
      })
      .catch(error => {
        throw error
      })
  },

  logout({ commit }) {
    commit('CLEAR_AUTH_DATA')
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  },

  tryAutoLogin({ commit, dispatch }) {
    const token = localStorage.getItem('token')
    if (!token) {
      return
    }
    authService.setAxiosAuthHeaders(token)
    commit('AUTHENTICATE_USER', token)
    dispatch('user/fetchCurrentUser', null, {root: true})
  }
}

export const getters = {
  isLoggedIn: state => !!state.apiToken
}