import Vue from 'vue'
import './plugins/vuetify'
import store from './store/store'
import router from './router'
import App from './App.vue'
// import './custom.scss'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
