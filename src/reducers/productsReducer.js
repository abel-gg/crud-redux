import { ADD_PRODUCT, ADD_PRODUCT_EXIT, ADD_PRODUCT_ERROR } from '../types'

// Cada Reducer tiene su propio state
const initialState = {
  productos: [],
  error: null,
  loading: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
