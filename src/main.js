import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router.js'
import store from '@/store.js'
import axios from 'axios'
import { config } from '@/config.js'

Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.prototype.$http.defaults.baseUrl = config.backendBaseUrl

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
