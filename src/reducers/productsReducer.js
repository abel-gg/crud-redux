import { ADD_PRODUCT, ADD_PRODUCT_EXIT, ADD_PRODUCT_ERROR } from '../types'

// Cada Reducer tiene su propio state
const initialState = {
  products: [],
  error: null,
  loading: false,
}

export default function producstReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        loading: action.payload,
      }
    case ADD_PRODUCT_EXIT:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      }
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
