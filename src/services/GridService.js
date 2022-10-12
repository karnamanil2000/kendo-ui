import axios from "axios"

export class GridService {
  static serverURL = 'http://localhost:3000'

  static getAllProducts() {
    let dataURL = `${this.serverURL}/gridData`
    return axios.get(dataURL)
  }

  static getProduct(productId) {
    let dataURL = `${this.serverURL}/gridData/${productId}`
    return axios.get(dataURL)
  }

  static addProduct(product) { //create product data
    let dataURL = `${this.serverURL}/gridData/`
    return axios.post(dataURL, product)
  }

  static updateProduct(product, productId) {
    let dataURL = `${this.serverURL}/gridData/${productId}`
    return axios.put(dataURL, product)
  }

  static deleteEntry(productId) {
    let dataURL = `${this.serverURL}/gridData/${productId}`
    return axios.delete(dataURL)
  }
}