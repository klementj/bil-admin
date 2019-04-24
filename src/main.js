import Vue from 'vue'
import store from './store/store'
import router from './router'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import './custom.scss'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
