import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bikes: [],
    users: [],
    bookings: [],

    status: '',
    token: localStorage.getItem('user-token') || '',
    user: {}
  },
  // Computations on store state 
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  },
  // Has to be sync
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token, user) {
      state.status = 'success',
      state.token = token,
      state.user = user
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    }
  },
  // Can be async 
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        api.login()
        axios({ url: 'http://localhost:3000/tokens/session', data: user, method: 'POST'})
        .then(response => {
          const token = response.data
          const user = response.data.user
          localStorage.setItem('user-token', token)
          // Set token to axios auth header
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, user)
          resolve(response)
        })
        .catch(error => {
          commit('auth_error')
          localStorage.removeItem('user-token')
          reject(error)
        })
      })
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('user-token')

        // eslint-disable-next-line
        console.log('calling logout');
        
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  }
})
