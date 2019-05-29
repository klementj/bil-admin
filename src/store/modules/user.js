import UserService from '@/services/user.service'

const userService = new UserService()

export const namespaced = true

export const state = {
  users: [],
  currentUser: {}
}

export const mutations = {
  SET_CURRENT_USER(state, currentUser) {
    state.currentUser = currentUser
  },

  SET_USERS(state, users){
    state.users = users
  },

  CREATE_USER(state, user) {
    state.users.push(user)
  }
}

export const actions = {
  fetchCurrentUser({ commit }) {
    const user = 'me'
    userService.fetchCurrentUser(user)
      .then(response => {
        commit('SET_CURRENT_USER', response.data.data)
      }) 
      .catch(error => {
        throw error
      })
  },

  fetchAllUsers({ commit }) {
    userService.fetch('')
      .then(response => {
        commit('SET_USERS', response.data.data)
      })
      .catch(error => {
        throw error
      })
  },

  createUser({ commit }, payload) {
    userService.create(payload)
      .then(response => {
        if(response.status === 201) {
          commit('CREATE_USER', response.data.data)
        }
      }).catch(error => {
        throw error;
      })
  }
}

export const getters = {
  allUsers: state => state.users,
  currentUser: state => state.currentUser
}
