import BookingService from '@/services/booking.service'

const bookingService = new BookingService();

export const namespaced = true

export const state = {
  bookings: []
}

export const mutations = {
  SET_BIKES(state, bookings){
    state.bookings = bookings
  },
  ADD_BIKE_TO_STORE(state, booking) {
    state.bookings.push(booking)
  }
}

export const actions = {
  fetchAllBikes({ commit }) {
    bookingService.fetch()
      .then(response => {
        commit('SET_BOOKINGS', response.data.data)
      })
      .catch(error => {
        throw error
      })
  },

  addBike({ commit }, payload) {
    bookingService.create(payload)
      .then(response => {
        if(response.status === 201) {
          commit('ADD_BOOKING_TO_STORE', response.data.data)
        }
      })
  }
}

export const getters = {
  allBikes: state => state.bookings
}