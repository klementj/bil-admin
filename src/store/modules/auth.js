import router from '@/router.js'
import AuthService from '@/services/auth.service.js'
import axios from 'axios'

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
        
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

        localStorage.setItem('token', token)
        localStorage.setItem('user', '5caf58cbdae9733668b9881c')
        router.push({ name: 'home'})
        // router.go(1)
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
    const token = localStorage.getItem('token')
    if (!token) {
      return
    }
    commit('AUTHENTICATE_USER', token)
  }
}

export const getters = {
  isLoggedIn: state => !!state.apiToken
}