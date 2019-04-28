import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from './modules/auth'
import * as user from './modules/user'
import * as bike from './modules/bike'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    user,
    bike
  }
})
