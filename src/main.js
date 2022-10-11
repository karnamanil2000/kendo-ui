import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@progress/kendo-theme-default/dist/all.css'

import { GridComponent } from '@progress/kendo-vue-grid'


Vue.config.productionTip = false

Vue.component('GridComponent', GridComponent)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
