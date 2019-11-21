import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Paralax from './paralax.js'

Vue.use(BootstrapVue)
Vue.use(Paralax)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

