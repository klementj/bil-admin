import router from '@/router.js'
import AuthService from '@/services/auth.service.js'
// import moduleName from '@/services/user.service.js'

const authService = new AuthService()

export const namespaced = true

export const state = {
  apiToken: null,
  signedIn: false
}

export const mutations = {
  AUTHENTICATE_USER(state, payload) {
    state.apiToken = payload
    state.signedIn = true
  },
  CLEAR_AUTH_DATA(state) {
    state.apiToken = null
    state.signedIn = false
  }
}

export const actions = {
  // signup({ commit, dispatch }, payload){ ... }
  
  login({ commit }, payload) {
    authService.login(payload)
      .then(response => {
        const token = response.data.data
        commit('AUTHENTICATE_USER', token)
        localStorage.setItem('token', token)
        localStorage.setItem('user', '...')
        router.push({ name: 'home'})
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

  tryAutoLogin({ commit }) {
    const token = localStorage.getItem('NEW_TOKEN')
    if (!token) {
      return
    }
    commit('AUTHENTICATE_USER', token)
  }
}

export const getters = {
  isLoggedIn: state => !!state.apiToken
}