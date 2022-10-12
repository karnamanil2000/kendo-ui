import Vue from 'vue'
import Vuex from 'vuex'
import productsModule from './modules/products.module'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productsState: productsModule.state
  },
  getters: {
    getProductsState (state) {
      return state.productsState.entriesList
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
