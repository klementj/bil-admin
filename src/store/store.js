import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from './modules/auth'
import * as user from './modules/user'
import * as bike from './modules/bike'
import * as notification from './modules/notification'
import * as ui from './modules/ui'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    user,
    bike,
    notification,
    ui
  }
})
