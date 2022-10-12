import { GridService } from "../../services/GridService"
// import router from '../../router'

export default {
  namespaced: true,
  state: {
    entriesList: {
      loading: false,
      products: [],
      errorMessage: null,
      product: {},
      apiResponse: {}
    }
  },
  mutations: {
    GET_PRODUCTS_REQUEST (state) {
      state.entriesList.loading = true
    },
    GET_PRODUCTS_SUCCESS (state, payload) {
      state.entriesList.loading = false
      state.entriesList.products = payload.products
    },
    GET_PRODUCTS_FAILED (state, payload) {
      state.entriesList.loading = false
      state.entriesList.errorMessage = payload.error
    },
    CREATE_PRODUCTS_REQUEST (state) {
      state.entriesList.loading = true
    },
    CREATE_PRODUCTS_SUCCESS (state, payload) {
      state.entriesList.loading = false
      state.entriesList.apiResponse = payload.apiResponse
      // return router.push('/')
    },
    CREATE_PRODUCTS_FAILED (state, payload) {
      state.entriesList.loading = false
      state.entriesList.errorMessage = payload.error
      // return router.push('/entries/add')
    }
  },
  actions: {
    async getProducts ({commit}) {
     try {
      commit("GET_PRODUCTS_REQUEST")
      let response = await GridService.getAllProducts()
      console.log(response)
      commit("GET_PRODUCTS_SUCCESS", {products: response.data})
     } catch (error) {
      commit("GET_PRODUCTS_FAILED", {error: error})
     }
    },
    async addProduct ({commit, state}) {
      try {
        commit("CREATE_PRODUCTS_REQUEST")
        let response = await GridService.addProduct(state.entriesList.product)
        commit("CREATE_PRODUCTS_SUCCESS", {apiResponse: response.data})
      } catch (error) {
        commit("CREATE_PRODUCTS_FAILED", {error: error})
      }
    }
  }
}