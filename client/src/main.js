import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import StateAPIService from '@/services/stateService'

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.prototype.$stateService = StateAPIService

new Vue({
  render: h => h(App),
}).$mount('#app')
