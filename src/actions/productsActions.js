import { ADD_PRODUCT, ADD_PRODUCT_EXIT, ADD_PRODUCT_ERROR } from '../types'

export function createNewProductAction(product) {
  return () => {
    console.log(product)
  }
}
