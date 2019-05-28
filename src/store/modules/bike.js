import BikeService from '@/services/bike.service'

const bikeService = new BikeService()

export const namespaced = true

export const state = {
  bikes: []
}

export const mutations = {
  SET_BIKES(state, bikes){
    state.bikes = bikes
  },
  ADD_BIKE_TO_STORE(state, bike) {
    state.bikes.push(bike)
  }
}

export const actions = {
  fetchAllBikes({ commit }) {
    bikeService.fetch()
      .then(response => {
        commit('SET_BIKES', response.data.data)
      })
      .catch(error => {
        throw error
      })
  },

  addBike({ commit }, payload) {
    bikeService.create(payload)
      .then(response => {
        if(response.status === 201) {
          commit('ADD_BIKE_TO_STORE', response.data.data)
        }
      })
  }
}

export const getters = {
  allBikes: state => state.bikes
}