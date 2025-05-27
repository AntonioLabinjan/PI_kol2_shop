import { defineStore } from 'pinia'
import proizvodi from '../data/proizvodiData'

export const useShopStore = defineStore('shop', {
  state: () => ({
    products: [...proizvodi],
    cart: []
  }),
  actions: {
    addToCart(product) {
      this.cart.push(product)
    },
    removeFromCart(index) {
      this.cart.splice(index, 1)
    },
    addProduct(product) {
      this.products.push(product)
    },
    removeProduct(index) {
      this.products.splice(index, 1)
    }
  }
})
